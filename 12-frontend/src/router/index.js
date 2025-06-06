import { createRouter, createWebHistory } from 'vue-router'
import FacturesView from '../views/FacturesView.vue'
import ClientsView from '../views/ClientsView.vue'

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
    {
      path: '/facture/create',
      name: 'createfacture',
      component: () => import('@/views/FactureCreateView.vue'),
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsView,
    },
    {
      path: '/client/:id',
      name: 'client',
      component: () => import('@/views/ClientEditView.vue'),
    },
    {
      path: '/client/create',
      name: 'createclient',
      component: () => import('@/views/ClientCreateView.vue'),
    },
  ],
})

export default router
