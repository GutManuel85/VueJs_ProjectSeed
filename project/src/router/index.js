import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BulmaTestView from '../views/BulmaTestView'
import StarterView from "../views/StarterView";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
      {
    path: '/starter',
    name: 'starter',
    component: StarterView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {
    path: '/bulmatest',
    name: 'bulmatest',
    component: BulmaTestView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
