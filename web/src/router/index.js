import Vue from 'vue'
import VueRouter from 'vue-router'
import Faq from '../views/Faq'
import FaqRegister from '../views/FaqRegister'
import Home from '../views/Home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: FaqRegister
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
