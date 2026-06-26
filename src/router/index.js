import { createRouter, createWebHistory } from 'vue-router'
// import MainLayout from '@/components/layout/MainLayout.vue'
import ClinicList from '@/pages/ClinicList.vue'
import ClinicDetails from '@/pages/ClinicDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ClinicList,
    },
    {
      path: '/details',
      component: ClinicDetails,
    },
  ],
})

export default router

// children: [
//   {
//     path: 'clinics',
//     component: ClinicList,
//   },
// ],
