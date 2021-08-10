import Vue from "vue";
import Router from 'vue-router';

import Login from './pages/Login/Login.vue';
import Home from './pages/Home/Home.vue';
import Admin from './pages/Admin/Admin.vue';
import Notices from './pages/Notices/Notices.vue';
import Notice from './pages/Notices/Notice.vue';
import Courses from './pages/Courses/Courses.vue';
import Course from './pages/Courses/Course.vue';

Vue.use(Router)

function guardMyRoute(to, from, next){
  localStorage.clear();
  next()
}

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: guardMyRoute
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: guardMyRoute
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      const currentUser = localStorage.getItem('token')
    
      if(currentUser){
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/notices',
    name: 'notices',
    component: Notices,
    beforeEnter: guardMyRoute
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses,
    beforeEnter: guardMyRoute
  },
  {
    path: '/course/:id',
    name: 'course',
    component: Course
  },
  {
    path: '/notice/:id',
    name: 'notice',
    component: Notice
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router;