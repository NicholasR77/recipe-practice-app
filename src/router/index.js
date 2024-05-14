import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreateRecipe from '../views/CreateRecipe.vue';
import ViewRecipes from '../views/ViewRecipes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'CreateRecipe',
    component: CreateRecipe,
  },
  {
    path: '/view',
    name: 'ViewRecipes',
    component: ViewRecipes,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;