import { createMemoryHistory, createRouter } from 'vue-router'


import HomePage from '../pages/HomePage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})