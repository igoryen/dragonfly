import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "../axios-auth";
export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null
    },
    mutations: {
    },
    actions: {
        // eslint-disable-next-line
        signup({ commit }, authData) {
            const action = "signUp";
            const apikey = "AIzaSyDrD9G2hq0yNq5lVB38IKCnfqHYU6jTIq4";
            const db = "/accounts:" + action + "?key=" + apikey;
            const obj = {
                email: authData.email,
                password: authData.password
            };
            axios
                .post(db, obj)
                .then(res => console.log(res))
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
                .then(res => console.log(res))
                .catch(error => console.log(error));
        }
    },
    modules: {
    }
})
