import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import BeerCatalogView from "@/views/BeerCatalogView.vue";

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
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: PageNotFoundView
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0}
    },
})

export default router
