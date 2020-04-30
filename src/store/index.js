import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "../axios-auth";
import globalAxios from 'axios';

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token,
            state.userId = userData.userId
        },
        storeUser(state, user) {
            state.user = user
        }
    },
    actions: {
        // eslint-disable-next-line
        signup({ commit, dispatch }, authData) {
            const action = "signUp";
            const apikey = "AIzaSyDrD9G2hq0yNq5lVB38IKCnfqHYU6jTIq4";
            const db = "/accounts:" + action + "?key=" + apikey;
            const obj = {
                email: authData.email,
                password: authData.password
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
                })
                .catch(error => console.log(error));
        },
        // eslint-disable-next-line
        login({ commit }, authData) {
            const action = "signInWithPassword";
            const apikey = "AIzaSyDrD9G2hq0yNq5lVB38IKCnfqHYU6jTIq4";
            const db = "/accounts:" + action + "?key=" + apikey;
            const obj = {
                email: authData.email,
                password: authData.password
            };
            axios
                .post(db, obj)
                .then(res => {
                    console.log(res),
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                })
                .catch(error => console.log(error));
        },
        // eslint-disable-next-line
        storeUser({commit, state}, userData) {
            if( !state.idToken){
                return
            }
            const db = "/users.json";
            globalAxios
                .post(db + '?auth=' + state.idToken, userData)
                .then(res => console.log('storeUser: ', res))
                .catch(error => console.log('storeUser error: ', error ))
        },
        // eslint-disable-next-line
        fetchUser({commit, state}) {
            if( !state.idToken){
                return
            }
            const db = "/users.json";
            globalAxios
                .get(db + '?auth=' + state.idToken)
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log(users);
                    this.commit('storeUser', users[0])
                })
                .catch(error => console.log(error));
        }
    },
    getters:{
        user(state){
            return state.user
        }
    },
    modules: {
    }
})
