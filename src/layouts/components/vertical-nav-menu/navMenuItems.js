/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: null,
    name: 'Dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard',
    submenu: [
      {
        url: '/dashboard/analytics',
        name: 'Analytics',
        slug: 'dashboard-analytics',
        i18n: 'Home'
      }
    ]
  },
  {
    url: null,
    name: 'User',
    icon: 'UserIcon',
    i18n: 'Member',
    submenu: [
      {
        url: {name: 'employee'},
        name: 'Employee',
        slug: 'employee'
      }
    ]
  },
  {
    url: null,
    name: 'User',
    icon: 'PackageIcon',
    i18n: 'Knowledge',
    submenu: [
      {
        url: {name: 'course'},
        name: 'Course',
        slug: 'course'
      },
      {
        url: {name: 'leaderboard'},
        name: 'Leaderboard',
        slug: 'leaderboard'
      },
      {
        url: {name: 'event'},
        name: 'Event',
        slug: 'event'
      }
    ]
  }
]

