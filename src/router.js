import Vue from 'vue'
import * as firebase from "firebase";
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Feed from './pages/Feed.vue'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: './login'
        },
        {
            path: '/',
            redirect: './login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/feed',
            name: 'Feed',
            component: Feed,
        },
    ]
})
router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if ( requiresAuth && !currentUser) next('loggin');
    else if (!requiresAuth && currentUser) next('home');
    else next()
})

export default router;