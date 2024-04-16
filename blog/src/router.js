import { createWebHistory, createRouter } from "vue-router";
import Detail from './components/DetailView.vue';
import Main from './components/MainView.vue';
import Author from './components/AuthorView.vue';
import Comment from './components/CommentView.vue';

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path : '/detail/:id',
    component : Detail,
    children : [
      { path : 'author', component : Author },
      { path : 'comment', component : Comment },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;