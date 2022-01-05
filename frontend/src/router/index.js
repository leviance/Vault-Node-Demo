import { createRouter, createWebHistory } from 'vue-router';
import authRouter from './authRouter';

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			requireAuth: true
		},
		component: () => import('../views/Home.vue')
	},
	{
		path: '/auth',
		name: 'Auth',
		meta: {
			requireAuth: false
		},
		component: () => import('../views/Auth.vue')
	},
	{
		path: '/page-not-found',
		name: 'NotFoundPage',
		component: () => import('../views/NotFoundPage.vue')
	},
	{
		path: "/:catchAll(.*)",
		beforeEnter: (to, from, next) => {
			next("/page-not-found");
		},
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth === true) authRouter.goPathRequireAuth(to, from, next);
	if(to.meta.requireAuth === false) authRouter.goPathNotRequierAuth(to, from, next);
	if(to.meta.requireAuth === undefined) next();
})

export default router
