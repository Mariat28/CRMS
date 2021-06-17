import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tickets.vue')
  },
  {
    path: '/addnewticket',
    name: 'AddNewTicket',
    // lazy loading
    component: () => import(/* webpackChunkName: "about" */ '../views/NewTicket.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
