// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

const router = createRouter({
  history: createWebHistory('#'),
  routes
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

export default router;