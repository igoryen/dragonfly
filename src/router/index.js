import Vue from 'vue'
import VueRouter from 'vue-router'

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
        component: () => import('../components/dashboard/dashboard.vue') 
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
