import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Auth from '../views/Auth.vue';
import Create from "../views/CreateIdea.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Страница Идей',
    component: Dashboard,
  },
  {
    path: '/auth',
    name: 'Авторизация',
    component: Auth,
  },
  {
    path: '/create-idea',
    name: 'Добавить Идею',
    component: Create,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
