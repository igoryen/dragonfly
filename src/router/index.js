import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../components/welcome/welcome.vue')
    },
    {
        path: '/signup', 
        component: () => import('../components/auth/signup.vue')
    },
    { 
        path: '/signin', 
        component: () => import('../components/auth/signin.vue') 
    },
    { 
        path: '/dashboard', 
        component: () => import('../components/dashboard/dashboard.vue'),
        beforeEnter(to, from, next) {
            if(store.state.idToken){ // #10
                next() // #20
            }
            else {
                next('/signin') // # 50
            }
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
/**
 * #10. if the token exists and is valid
 * #20. then continue navigation
 * #50. then redirect to the sign-in page
 */