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
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/Tickets.vue')
  },
  {
    path: '/addnewticket',
    name: 'AddNewTicket',
    // lazy loading
    component: () => import(/* webpackChunkName: "NewTicket" */ '../views/NewTicket.vue')
  },
  {
    path: '/addnewcontact',
    name: 'AddNewContact',
    // lazy loading
    component: () => import(/* webpackChunkName: "NewContact" */ '../views/NewContact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
