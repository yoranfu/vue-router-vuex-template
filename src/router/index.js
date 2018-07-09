import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/Home'
import ProductView from '../views/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductView,
    }
  ],
})
