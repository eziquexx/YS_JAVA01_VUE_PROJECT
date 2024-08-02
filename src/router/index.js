import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import TestViewCopy from '@/views/TestViewCopy.vue'
import BasicView from '../views/BasicView.vue'
import MembershipView from '../views/MembershipView.vue'
import PropsView from '@/views/PropsView.vue'
import PropsView2 from '@/views/PropsView2.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/testcopy',
    name: 'testcopy',
    component: TestViewCopy
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/membership',
    name: 'membership',
    component: MembershipView
  },
  {
    path: '/props1',
    name: 'props1',
    component: PropsView
  },
  {
    path: '/props2',
    name: 'props2',
    component: PropsView2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
