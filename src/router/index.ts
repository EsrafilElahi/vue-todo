import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage.vue';
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/todos', name: 'todos', component: HomePage },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router


// router.beforeEach((to, from, next) => {
//   console.log({ to, from, next });
//   if (to.path === '/') {
//     next({ name: 'todos' })
//   }
//   next();
// });