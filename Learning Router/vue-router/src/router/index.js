import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';
import NotFound from '../views/NotFound.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component : About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props : true, 
  },

  // redirect 
  {
    path: '/all-jobs',
    redirect : '/jobs'
  },
  // catch all 404
  {
    path: '/:cactchAll(.*)',
    name: 'Not Found',
    component: NotFound
  }
]
// this just a array and nothing do here
// the most important start from here now 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // using history api of web
  routes
})

export default router
