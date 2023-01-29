import { createRouter, createWebHistory } from 'vue-router';
import CheckoutView from '../views/Checkout/Checkout.vue';

const routes = [
  {
    path: '/:catchAll(.*)', redirect: '/checkout'
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router