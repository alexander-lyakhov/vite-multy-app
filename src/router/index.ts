import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@users/views/users.vue'),
    },
    {
      path: '/tm',
      name: 'tm',
      component: () => import('@tm/views/tm.vue'),
    },
  ],
})

export default router
