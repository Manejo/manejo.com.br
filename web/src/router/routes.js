import Vue from 'vue';
import Router from 'vue-router';

// Pages Components
import trilhas from '@/components/trilhas';
import home from '@/components/home';
import cadastrotrilha from '@/components/cadastrotrilha';
import visualizartrilha from '@/components/visualizartrilha';
import editartrilha from '@/components/editartrilha';

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
            path: '/trilhas/visualizartrilha',
            name: 'visualizartrilha',
            component: visualizartrilha
        },
        {
            path: '/trilhas/editartrilha',
            name: 'editartrilha',
            component: editartrilha
        },
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/cadastrotrilha',
            name: 'cadastrotrilha',
            component: cadastrotrilha
        }
    ]
});