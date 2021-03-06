import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)

}

const routes = [
  {
    path: '/',
    name: 'GameCloset',
    component: loadPage('GameClosetPage'),
    beforeEnter: authGuard

  },
  {
    path: '/search',
    name: 'Search',
    component: loadPage('SearchPage'),
    beforeEnter: authGuard
  },
  {
    path: '/gameNight',
    name: 'GameNight',
    component: loadPage('GameNightPage'),
    beforeEnter: authGuard
  },

  {
    path: '/gameNight/:id',
    name: 'GameNightDetails',
    component: loadPage('ActiveGameNightPage'),
    beforeEnter: authGuard
  },

  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
