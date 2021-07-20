import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const isLoginOrRegister = to.name === 'Login' || to.name === 'Register'
  if (isLogin || isLoginOrRegister) {
    next()
  } else {
    next({ name: 'Login' })
  }
  next()
})
export default router
