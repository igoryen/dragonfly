import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import globalAxios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token
            state.userId = userData.userId
        },
        storeUser(state, user) {
            state.user = user
        },
        clearAutntData(state){
            state.idToken = null;
            state.userId = null;
        }
    },
    actions: {
        setLogoutTimer({commit}, expirationTime){
            const time = expirationTime * 1000;
            console.log('LogoutTimer is set to ' + (time / 60000) + ' minutes')
            setTimeout(() => {
                commit('clearAutntData')
                console.log('time out! auto-logged out')
            }, time)
        },
        signup({ commit, dispatch }, authData) {
            const action = "signUp";
            const apikey = "AIzaSyDrD9G2hq0yNq5lVB38IKCnfqHYU6jTIq4";
            const db = "/accounts:" + action + "?key=" + apikey;
            const obj = {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            };
            axios
                .post(db, obj)
                .then(res => {
                    console.log("signup: ", res),
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    }),
                    dispatch('storeUser', authData)
                    dispatch('setLogoutTimer', res.data.expiresIn)
                })
                .catch(error => console.log(error));
        },
        login({ commit, dispatch }, authData) {
            const action = "signInWithPassword";
            const apikey = "AIzaSyDrD9G2hq0yNq5lVB38IKCnfqHYU6jTIq4";
            const db = "/accounts:" + action + "?key=" + apikey;
            const obj = {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            };
            axios
                .post(db, obj)
                .then(res => {
                    console.log("login res: ", res),
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                    dispatch('setLogoutTimer', res.data.expiresIn)
                })
                .catch(error => console.log(error));
        },
        logout({commit}){
            commit('clearAutntData');
            router.replace('/signin');
            console.log('manually logged out and rerouted');
        },
        // eslint-disable-next-line
        storeUser({commit, state}, userData) {
            if( !state.idToken){
                return
            }
            globalAxios
                .post('/users.json' + '?auth=' + state.idToken, userData)
                .then(res => console.log('storeUser: ', res))
                .catch(error => console.log('storeUser error: ', error ))
        },
        fetchUser({commit, state}) {
            if( !state.idToken){
                return
            }
            globalAxios
                .get('/users.json' + '?auth=' + state.idToken)
                .then(res => {
                    console.log("fetchUser res: ", res);
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log("fetchUser users: ", users);
                    commit('storeUser', users[0])
                })
                .catch(error => console.log(error));
        }
    },
    getters:{
        user(state){
            return state.user
        },
        isAuthenticated(state){
            console.log("isAuthenticated: ", !!state.idToken)
            return state.idToken !== null // #10
        }
    }
})

/**
 * #10 - return 'true' if idToken is not empty
 */