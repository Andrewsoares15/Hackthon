import Vue from 'vue'
import VueRouter from 'vue-router'
import Animes from '../views/Animes.vue'
import Games from '../views/Games.vue'
import Sobre from '../views/Animes.vue'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
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
