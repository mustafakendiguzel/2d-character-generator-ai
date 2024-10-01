import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import GeneratePage from '@/components/GeneratePage.vue'

// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/generate',
      name: 'generate',
      component: GeneratePage
    },
    {
      path: '/buy-credits',
      name: 'buy-credits',
      component: () => import('../views/BuyCreditView.vue')
    },
    // Yeni eklenen rotalar
    {
      path: '/generate/character-generation',
      name: 'character-generation',
      component: () => import('@/views/CharacterGenerationView.vue')
    },
    {
      path: '/generate/item-generator',
      name: 'item-generator',
      component: () => import('@/views/ItemGeneratorView.vue')
    },
    {
      path: '/generate/background-generator',
      name: 'background-generator',
      component: () => import('@/views/BackgroundGeneratorView.vue')
    },
    {
      path: '/generate/icon-generator',
      name: 'icon-generator',
      component: () => import('@/views/IconGeneratorView.vue')
    },
    {
      path: '/generate/single-character-generator',
      name: 'single-character-generator',
      component: () => import('@/views/SingleCharacterGeneratorView.vue')
    },
    {
      path: '/generate/deep-icon-generator',
      name: 'deep-icon-generator',
      component: () => import('@/views/DeepIconGeneratorView.vue')
    }
  ]
})

export default router
