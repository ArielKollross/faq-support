import Vue from 'vue'
import VueRouter from 'vue-router'
import Faq from '../views/Faq'
import FaqRegister from '../views/FaqRegister'
import Home from '../views/Home'
import Answers from  '../views/Answer'
import CreateAnswer from '../views/CreateAnswer';

import authRoutes from '../modules/auth/router';

Vue.use(VueRouter)

const routes = [
  ...authRoutes,
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
  {
    path: '/respostas',
    name: 'Answers',
    component: Answers,
    children: [
      {
        path: ':/id',
        name: 'AnswersId',
        component: Answers
      }
    ]
  },
  {
    path: '/submitanswer',
    name: 'createAnswer',
    component: CreateAnswer,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
