import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListCardView.vue';

const routes = [
  {
    path: "/list",
    component: List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;