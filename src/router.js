/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import master from './router_sections/master'
import axios from './axios'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        {
          path: '/',
          redirect: '/dashboard/analytics'
        },      
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/login/Login.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/error-500',
          name: 'page-error-500',
          component: () => import('@/views/pages/Error500.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/not-authorized',
          name: 'page-not-authorized',
          component: () => import('@/views/pages/NotAuthorized.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/maintenance',
          name: 'page-maintenance',
          component: () => import('@/views/pages/Maintenance.vue'),
          meta: {
            rule: 'editor'
          }
        }
      ]
    },
    {
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        {
          path: '/dashboard/analytics',
          name: 'dashboard-analytics',
          component: () => import('./views/DashboardAnalytics.vue'),
          meta: {
            rule: 'editor',
            auth: true
          }
        },
        {
          path: '/apps/user/user-history-course',
          name: 'app-user-history-course',
          component: () => import('@/views/apps/user/HistoryCourse.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Member' },
              { title: 'History Course', active: true }
            ],
            pageTitle: 'History Course',
            rule: 'editor'
          }
        },
        {
          path: '/apps/user/user-create-course',
          name: 'app-user-create-course',
          component: () => import('@/views/apps/user/CreateCourse.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Knowledge' },
              { title: 'Dept. Course' },
              { title: 'Create Course', active: true }
            ],
            pageTitle: 'Create Course',
            rule: 'editor'
          }
        },
        {
          path: '/apps/user/leaderboard-list',
          name: 'app-user-leaderboard-list',
          component: () => import('@/views/apps/user/leaderboard-list/LeaderboardList.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Knowledge' },
              { title: 'Dept. Course', active: true }
            ],
            pageTitle: 'Dept. Course',
            rule: 'editor'
          }
        },
        {
          path: '/apps/user/departement-list',
          name: 'app-user-departement-list',
          component: () => import('@/views/apps/user/departement-list/DepartmentList.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Knowledge' },
              { title: 'Dept. Course' },
              { title: 'Leaderboard', active: true }
            ],
            pageTitle: 'Leaderboard',
            rule: 'editor'
          }
        },
        {
          path: '/apps/user/user-create-event',
          name: 'app-user-create-event',
          component: () => import('@/views/apps/user/CreateEvent.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Event' },
              { title: 'Create Event', active: true }
            ],
            pageTitle: 'Create Event',
            rule: 'editor'
          }
        },
        ...master
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  let getStorage = localStorage.getItem('userInfo')
  getStorage = JSON.parse(getStorage) || {data:{}}
  if (to.meta.auth) {
    if (getStorage.data.accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${getStorage.data.accessToken}`
      return next()
    } else {
      return next({name: 'page-login'})
    }  
  } else {
    return next()
  }
})

// router.beforeEach((to, from, next) => {
//   firebase.auth().onAuthStateChanged(() => {

//     // get firebase current user
//     const firebaseCurrentUser = firebase.auth().currentUser

//     // if (
//     //     to.path === "/pages/login" ||
//     //     to.path === "/pages/forgot-password" ||
//     //     to.path === "/pages/error-404" ||
//     //     to.path === "/pages/error-500" ||
//     //     to.path === "/pages/register" ||
//     //     to.path === "/callback" ||
//     //     to.path === "/pages/comingsoon" ||
//     //     (auth.isAuthenticated() || firebaseCurrentUser)
//     // ) {
//     //     return next();
//     // }

//     // If auth required, check login. If login fails redirect to login page
//     if (to.meta.authRequired) {
//       if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
//         router.push({ path: '/pages/login', query: { to: to.path } })
//       }
//     }

//     return next()
//     // Specify the current path as the customState parameter, meaning it
//     // will be returned to the application after auth
//     // auth.login({ target: to.path });

//   })

// })

export default router
