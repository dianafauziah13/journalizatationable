import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import story from '../views/story.vue'
import allStory from '../components/allStory.vue'
import about from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/story',
    name: 'story',
    component: story
  },
  {
    path: '/all-story',
    name: 'Allstory',
    component: allStory
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Registration.vue')
  },
  {
    path: '/login',
    name: 'signin',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
