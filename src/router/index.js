import { createRouter, createWebHashHistory } from 'vue-router'
// import Layout from '../views/dashboard'
import home from '../views/dashboard'
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    component: home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/user.vue'),
        meta: { title: '用户' }
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article/article.vue'),
        meta: { title: '文章' }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router
