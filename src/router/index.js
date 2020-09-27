import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Gallery from '@/components/Gallery.vue';
import Project from '@/components/Project.vue';
import SheetView from '@/components/SheetView.vue';

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
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    meta: {
      title: route => "Gallery"
    }
  },
  {
    path: '/project',
    name: 'project',
    component: Project,
    meta: {
      title: route => "Project"
    },
    beforeEnter: authGuard
  },
  {
    path: '/viewer',
    name: 'viewer',
    component: SheetView,
    meta: {
      title: route => "View"
    },
    // beforeEnter: authGuard
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