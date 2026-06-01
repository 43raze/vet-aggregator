import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      // children: [
      //   {
      //     path: '/',
      //     component: C,
      //   },
      // ],
    },
  ],
})

export default router
