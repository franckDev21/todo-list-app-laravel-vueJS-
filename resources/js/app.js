require('./bootstrap');

// vue
import  Vue  from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// components
import Home from './components/Home.vue';
import Task from './components/Task';

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('add-task', require('./components/AddTask.vue').default);
Vue.component('edit-task', require('./components/EditTask.vue').default);

// routes
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/tasks', component: Task }
];

const router = new VueRouter({
    routes // short for `routes: routes`
})

// used vue
const app = new Vue({
    router
}).$mount('#app');
