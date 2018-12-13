import Vue from "vue";
import Obserable from './components/lib/obserable';
import Index from './components/index/index';
import Konggao from './components/konggao/index';
import Shensu from './components/shensu/index';
import FError from './components/ferror/index';
import VueRouter from 'vue-router'
import './components/css/index.css';
import './components/lib/touch.js'
import vueTap from 'vue-js-tap';
Vue.use(vueTap);

Vue.use(VueRouter)


var obserable = new Obserable();

Vue.obserable = obserable;
const router = new VueRouter({
  
  routes: [
    {path: '*', name: 'error', component: FError },
    { path: '/', name: 'Index', component: Index, props: true },
    { path: '/index', name: 'Index', component: Index, props: true },
    { path: '/konggao', name: 'Konggao', component: Konggao, props: true },
    { path: '/shensu', name: 'shensu', component: Shensu, props: true },
  ]
});

new Vue({
	router,
	data: {
		obserable,
		imgs,
		viewH: document.documentElement.clientHeight,
	},
	el: '#app',
	template: `<div id="app1">
       <router-view></router-view>
    </div>`,
	methods: {
	},
	components: {
	},
	mounted() {

		this.$router.obserable = obserable;


	}
}).$mount('#app1')