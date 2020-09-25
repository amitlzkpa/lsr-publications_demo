import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import SeaDragonViewer from '@/components/SeaDragonViewer.vue';

import { authGuard } from "@/auth/authGuard";

Vue.use(VueRouter);


const routes =
[
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: route => "LSR Publications"
    }
  },
  {
    path: '/viewer',
    name: 'viewer',
    component: SeaDragonViewer,
    meta: {
      title: route => "View"
    },
    beforeEnter: authGuard
  }
];


const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes
});


router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title(to);
  }
  next();
});


export default router;