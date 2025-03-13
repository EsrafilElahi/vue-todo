import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


import HomePage from '../views/HomePage.vue';
import EditTodoPage from '../views/EditTodoPage.vue';
// import NotFoundPage from '../views/NotFoundPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/todos', name: 'todos', component: HomePage },
  { path: '/todos/edit/:todoId', name: 'todo.edit', component: EditTodoPage },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('../views/NotFoundPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
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
