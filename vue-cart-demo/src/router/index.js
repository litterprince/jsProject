import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', component: GoodsList },
    { path: '/cart',meta: { requireAuth: true}, component: Cart },
    { path: '/address',meta: { requireAuth: true}, component: Address },
    { path: '/orderConfirm',meta: { requireAuth: true}, component: OrderConfirm },
    { path: '/orderSuccess',meta: { requireAuth: true}, component: OrderSuccess }
  ]
});

export default router
