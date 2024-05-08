import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import BeerCatalogView from "@/views/BeerCatalogView.vue";
import BeerDetailView from "@/views/BeerDetailView.vue";
import LoginRegisterView from "@/views/LoginRegisterView.vue";
import ProfileView from "@/views/ProfileView.vue";
import AdminDashboardView from "@/views/BackOfficeView.vue";
import BackOfficeView from "@/views/BackOfficeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/beers',
            name: 'beerCatalog',
            component: BeerCatalogView
        },
        {
            path: '/beers/d',
            name: 'beerDetails',
            component: BeerDetailView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginRegisterView,
            props: {isLogin: true}
        },
        {
            path: '/register',
            name: 'register',
            component: LoginRegisterView,
            props: {isLogin: false}
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/admin',
            name: 'admin',
            component: BackOfficeView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: PageNotFoundView
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    },
})

export default router
