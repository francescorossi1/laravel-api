import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutPage from './components/pages/AboutPage';
import ContactsPage from './components/pages/ContactsPage';
import HomePage from './components/pages/HomePage';

Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home'},
        { path: '/about', component: AboutPage, name: 'about'},
        { path: '/contacts', component: ContactsPage, name: 'contacts'}
    ]
});

export default routes;