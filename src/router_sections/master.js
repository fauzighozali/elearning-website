export default [
  {
    path: '/employee',
    component: { template: '<router-view/>' },
    children: [
      {
        path: '',
        name: 'employee',
        component: () => import('@/views/web_pages/employee/Index.vue'),
        meta: {
          auth: true,
          parent: 'employee'
        }
      },
      {
        path: 'create',
        name: 'employee-create',
        component: () => import('@/views/web_pages/employee/Create.vue'),
        meta: {
          auth: true,
          parent: 'employee'
        }
      },
      {
        path: ':id',
        name: 'employee-edit',
        component: () => import('@/views/web_pages/employee/Create.vue'),
        meta: {
          auth: true,
          parent: 'employee'
        }
      }
    ]
  },
  {
    path: '/course',
    component: {template: '<router-view/>'},
    children: [
      {
        path: '',
        name: 'course',
        component: () => import('@/views/web_pages/course/Index.vue'),
        meta: {
          auth: true,
          parent: 'course'
        }
      },
      {
        path: ':id',
        name: 'course-read',
        component: () => import('@/views/web_pages/course/Read.vue'),
        meta: {
          auth: true,
          parent: 'course'
        }
      },
      {
        path: 'course-detail/:id',
        name: 'course-detail',
        component: () => import('@/views/web_pages/course/Show.vue'),
        meta: {
          auth: true,
          parent: 'course'
        }
      },
      {
        path: 'create/:organizationId',
        name: 'course-create',
        component: () => import('@/views/web_pages/course/Create.vue'),
        meta: {
          auth: true,
          parent: 'course'
        }
      },
      {
        path: ':id',
        name: 'course-edit',
        component: () => import('@/views/web_pages/course/Create.vue'),
        meta: {
          auth: true,
          parent: 'course'
        }
      }
    ]
  },
  {
    path: '/leaderboard',
    component: {template: '<router-view/>'},
    children: [
      {
        path: '',
        name: 'leaderboard',
        component: () => import('@/views/web_pages/leaderboard/Index.vue'),
        meta: {
          auth: true,
          parent: 'leaderboard'
        }
      },
      {
        path: ':id',
        name: 'leaderboard-read',
        component: () => import('@/views/web_pages/leaderboard/Read.vue'),
        meta: {
          auth: true,
          parent: 'leaderboard'
        }
      }
    ]
  },
  {
    path: '/event',
    component: {template: '<router-view/>'},
    children: [
      {
        path: '',
        name: 'event',
        component: () => import('@/views/web_pages/event/Index.vue'),
        meta: {
          auth: true,
          parent: 'event'
        }
      },
      {
        path: 'create',
        name: 'event-create',
        component: () => import('@/views/web_pages/event/Create.vue'),
        meta: {
          auth: true,
          parent: 'event'
        }
      },
      {
        path: ':id',
        name: 'event-edit',
        component: () => import('@/views/web_pages/event/Create.vue'),
        meta: {
          auth: true,
          parent: 'event'
        }
      }
    ]
  }
]