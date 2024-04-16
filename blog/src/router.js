import { createWebHistory, createRouter } from "vue-router";
import Detail from './components/DetailView.vue';
import Main from './components/MainView.vue';

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;