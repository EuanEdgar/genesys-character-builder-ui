import Vue from 'vue'
import VueRouter from 'vue-router'
import Character from '@/views/Character.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/characters/:characterId',
    name: 'Character',
    component: Character,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
