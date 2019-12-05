import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/example',
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('@/components/example-table.component.vue'),
  },
  {
    path: '/example2',
    name: 'example2',
    component: () => import('@/components/example-table.component.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
