import Vue from 'vue'
import VueRouter from 'vue-router'

// import page components
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// use vue router plugins
Vue.use(VueRouter)

// set mapping of components and paths
const routes = [
    {
        path: '/',
        component: PhotoList
    },
    {
        path: '/login',
        component: Login
    }
]

// create vue router instance
const router = new VueRouter({
    routes
})

// export vue router instance
export default router
