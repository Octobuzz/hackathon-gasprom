import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Auth from '../views/Auth.vue';
import Create from "../views/CreateIdea.vue";
import Home from "../views/Home.vue";
// import NotFound from "../views/NotFound.vue";
import IdeaPage from "../views/IdeaPage.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Страница Идей',
		component: Home,
	},
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
	// {
	// 	path: '/*',
	// 	name: '404',
	// 	component: NotFound,
	// },
	{
		path: '/idea/:id',
		name: 'Добавить Идею',
		component: IdeaPage,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
