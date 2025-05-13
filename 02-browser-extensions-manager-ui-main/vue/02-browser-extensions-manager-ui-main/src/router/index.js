import { createRouter, createWebHistory } from 'vue-router';
import Cart from '@/components/Cart.vue'
import Content from '@/components/Content.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Content
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;