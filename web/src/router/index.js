import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home'),
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../pages/Faq'),
  },
  {
    path: '/login-adm',
    name: 'Login',
    component: () => import('../pages/Login'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard'),
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../pages/FaqRegister'),
  },
  {
    path: '/respostas',
    name: 'Answers',
    component: () => import('../pages/Answer'),
  },
  {
    path: '/submitanswer',
    name: 'createAnswer',
    component: () => import('../pages/CreateAnswer'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
