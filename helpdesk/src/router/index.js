import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/Home.vue')
  },
  {
    path: '/AllTickets',
    name: 'All Tickets',
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/Tickets.vue')
  },
  {
    path: '/NewTickets',
    name: 'New Tickets',
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/NewTickets.vue')
  },
  {
    path: '/OpenTickets',
    name: 'Open Tickets',
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/OpenTickets.vue')
  },
  {
    path: '/PendingTickets',
    name: 'Pending Tickets',
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/PendingTickets.vue')
  },
  {
    path: '/Ticketsassingedtome',
    name: 'Tickets assinged to me',
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/MyAssignedTickets.vue')
  },
  {
    path: '/ClosedTickets',
    name: 'Closed Tickets',
    component: () => import(/* webpackChunkName: "Tickets" */ '../views/ClosedTickets.vue')
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
