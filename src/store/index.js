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
                    })
                    //---------------------------------
                    const today = new Date()
                    const timeMark = today.getTime()
                    const stay = res.data.expiresIn * 1000
                    const expirationDate = new Date(timeMark + stay);
                    localStorage.setItem('token', res.data.idToken)
                    localStorage.setItem('userId', res.data.localId)
                    localStorage.setItem('expirationDate', expirationDate)
                    //---------------------------------
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
                    console.log("login res: ", res)
                    //---------------------------------
                    const today = new Date()
                    const timeMark = today.getTime()
                    const stay = res.data.expiresIn * 1000
                    const expirationDate = new Date(timeMark + stay);
                    localStorage.setItem('token', res.data.idToken)
                    localStorage.setItem('userId', res.data.localId)
                    localStorage.setItem('expirationDate', expirationDate)
                    //---------------------------------
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                    dispatch('setLogoutTimer', res.data.expiresIn)
                })
                .catch(error => console.log(error));
        },
        tryAutoLogin({commit}){
            const loctoken = localStorage.getItem('token')
            if(!loctoken ){
                return
            }
            const expirationDate = localStorage.getItem('expirationDate')
            const now = new Date()
            if (now >= expirationDate) { // #20
                return
            }
            const userId = localStorage.getItem('userId')
            commit('authUser', {
                token: loctoken,
                userId: userId
            })
        },
        logout({commit}){
            commit('clearAutntData');
            //--------------------
            localStorage.removeItem('expirationDate')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            //--------------------
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
 * #20 - if the expiration date is in the future
 */