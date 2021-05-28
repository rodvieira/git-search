import { createRouter, createWebHashHistory } from 'vue-router';
import Search from '../views/search/Search.vue';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/list',
    name: 'ListUsers',
    component: () => import('../views/list-users/ListUsers.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
