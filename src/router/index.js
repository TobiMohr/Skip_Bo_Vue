import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RulePage from '../components/RulePage.vue'
import GameBoard from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/RulePage',
        name: 'RulePage',
        component: RulePage
    },
    {
        path:'/GameBoard',
        name: 'GameBoard',
        component: GameBoard
    },
    {
        path: '/status',
        name: 'status',
        
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router