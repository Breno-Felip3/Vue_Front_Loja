import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/pages/HomeView.vue'
import CategoriesView from '@/views/categories/CategoriesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categorias',
    name: 'categories',
    component: CategoriesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
