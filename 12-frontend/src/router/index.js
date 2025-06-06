import { createRouter, createWebHistory } from 'vue-router'
import FacturesView from '../views/FacturesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'factures',
      component: FacturesView,
    },
    {
      path: '/facture/:id',
      name: 'facture',
      component: () => import('@/views/FactureEditView.vue'),
    },
    // {
    //   path: '/facture/create',
    //   name: 'createfacture',
    //   component: () => import('../views/FactureCreateView.vue'),
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ProfileView.vue'),
    // },
  ],
})

export default router
