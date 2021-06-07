import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Temp from '../views/Temp.vue'

const acceptedIds = 'welcome|about|skills|portfolio'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/temp',
		name: 'Temp',
		component: Temp,
	},
	{
		path: `/:id(${acceptedIds})`,
		name: 'Home',
		component: Home,
		props: true,
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/welcome',
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
