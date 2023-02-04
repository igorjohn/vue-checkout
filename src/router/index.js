import { createRouter, createWebHistory } from 'vue-router';
import CheckoutView from '@/views/Checkout/Checkout.vue';
import CheckoutBuilderView from '@/views/CheckoutBuilder/Builder.vue';

const routes = [
  {
    path: '/:catchAll(.*)', redirect: 'checkout'
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  },
  {
    path: '/checkout-builder',
    name: 'CheckoutBuilder',
    component: CheckoutBuilderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router