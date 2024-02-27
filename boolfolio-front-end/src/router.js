import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{

    path: '/',
    name: 'Home',
    component: HomePage

},

{

    path: '/projects',
    name: 'projects',
    component: ProjectList

},


]


});

export {router};

