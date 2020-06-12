
import Router from 'vue-router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from '../components/sections/Form';
import Respuestas from '../components/sections/Respuestas';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Form},
    {path: '/form', component: Form},
    {path: '/respuestas', component: Respuestas},



];


const router = new Router({
    routes: routes
});

export default router;
