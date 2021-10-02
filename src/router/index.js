import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Animes from '../views/Animes.vue'
import Games from '../views/Games.vue'
import Sobre from '../views/Animes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/animes',
    name: 'Animes',
    component: Animes
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
