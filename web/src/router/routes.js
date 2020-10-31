import Vue from 'vue';
import Router from 'vue-router';

// Pages Components
import trilhas from '@/components/trilhas';
import home from '@/components/home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/trilhas',
            name: 'trilhas',
            component: trilhas
        },
        {
            path: '/',
            name: 'home',
            component: home
        }
    ]
});