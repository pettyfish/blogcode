import Vue from 'vue';
import Router from 'vue-router';
import Mainpage from '@/components/Mainpage.vue';
import About from '@/view/About.vue';
import World from '@/view/World.vue';
import Consider from '@/view/Consider.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Mainpage',
			component: Mainpage
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/world',
			name: 'World',
			component: World
		},
		{
			path: '/consider',
			name: 'Consider',
			component: Consider
		}
	]
});
