import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product/category',
    name: 'product_category',
    component: () =>
      import(
        /* webpackChunkName: "product" */ '../views/category/CategoryView.vue'
      )
  },
  {
    path: '/product/supplier',
    name: 'product_supplier',
    component: () =>
      import(
        /* webpackChunkName: "product" */ '../views/supplier/SupplierView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
