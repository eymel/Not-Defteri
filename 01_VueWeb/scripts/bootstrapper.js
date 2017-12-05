// Vue.js Imports:
import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

// Application Imports:
import Application from './application/Application.vue';
import AppRouting from './application/configuration/routing.config';

// Confuigure the router to use the routes specified in the routing configuration.
Vue.use(VueRouter);
export var router = new VueRouter({
    routes: AppRouting
});

// Enable form validation with VeeValidate:
Vue.use(VeeValidate);

// Bootstrap the application into the element of that name.
const app = new Vue({
    router: router,
    el: '#application',
    render: function(createElement) { return createElement(Application); }
});
