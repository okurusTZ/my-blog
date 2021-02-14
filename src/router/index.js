import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home')
const Article = () => import('../pages/Article')
const AboutMe = () => import('../pages/AboutMe')
const Login = () => import('../pages/Login')
const Message = () => import('../pages/Message')
const Project = () => import('../pages/Project')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      component: Home,
      meta: {
        auth: true
      }
    },
    {
      path: '/Article',
      component: Article,
      meta: {
        auth: true
      }
    },
    {
      path: '/AboutMe',
      component: AboutMe,
      meta: {
        auth: true
      }
    },
    {
      path: '/Login',
      component: Login,
      meta: {
        auth: true
      }
    },
    {
      path: '/Message',
      component: Message,
      meta: {
        auth: true
      }
    },
    {
      path: '/Project',
      component: Project,
      meta: {
        auth: true
      }
    }
  ]
})
