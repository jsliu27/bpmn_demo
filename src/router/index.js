import {
  createRouter,
  createWebHashHistory
} from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import("@/view/home.vue"),
    name: 'home'
  },
  {
    path: '/base',
    component: () => import("@/view/bpmn_base.vue"),
    name: 'bpmn_base'
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
