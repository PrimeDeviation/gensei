import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'  // Make sure you have this component

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // ... other routes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router