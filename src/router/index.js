import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import TestViewCopy from '@/views/TestViewCopy.vue'
import BasicView from '../views/BasicView.vue'
import MembershipView from '../views/MembershipView.vue'
import PropsView from '@/views/PropsView.vue'
import PropsView2 from '@/views/PropsView2.vue'
import PopupView from '../views/PopupView.vue'
import CalculatorView1 from '../views/CalculatorView1.vue'
import CalculatorView2 from '../views/CalculatorView2.vue'
import CalculatorView3 from '../views/CalculatorView3.vue'
import CalculatorView4 from '../views/CalculatorView4.vue'
import MixView from '../views/MixView.vue'
import UserView from '@/views/UserView.vue'
import MemberView from '@/views/MemberView.vue'

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
  },
  {
    path: '/popup',
    name: 'popup',
    component: PopupView
  },
  {
    path: '/calculator1',
    name: 'CalculatorView1',
    component: CalculatorView1
  },
  {
    path: '/calculator2',
    name: 'CalculatorView2',
    component: CalculatorView2
  },
  {
    path: '/calculator3',
    name: 'CalculatorView3',
    component: CalculatorView3
  },
  {
    path: '/calculator4',
    name: 'CalculatorView4',
    component: CalculatorView4
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: MixView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/member',
    name: 'member',
    component: MemberView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
