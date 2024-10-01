<template>
  <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex justify-center mb-8">
      <div class="relative w-64 h-12 bg-gray-200 rounded-full">
        <button
          @click="selectGenerator('generator')"
          :class="buttonClass('generator')"
          class="absolute border-gray-200 top-0 left-0 w-1/2 h-full rounded-full z-10 transition-all duration-300"
        >
          Generator
        </button>
        <button
          @click="selectGenerator('deep-generator')"
          :class="buttonClass('deep-generator')"
          class="absolute border-gray-200 top-0 right-0 w-1/2 h-full rounded-full z-10 transition-all duration-300"
        >
          Deep Generator
        </button>
        <div
          class="absolute top-0 h-full w-1/2 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
          :style="{ left: selectedGenerator === 'generator' ? '0' : '50%' }"
        ></div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div
        v-if="selectedGenerator === 'generator'"
        key="generator"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="item in generatorItems"
          :key="item.name"
          class="p-6 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
          @click="navigateTo(item.route)"
        >
          <div class="flex items-center mb-4">
            <img :src="item.icon" :alt="`${item.name} Icon`" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">{{ item.title }}</h2>
          </div>
          <p class="flex-grow text-white">{{ item.description }}</p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = item.name"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === item.name"
              class="absolute top-0 right-0 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold text-white">{{ item.title }}</h3>
              <p class="text-white">{{ item.modalDescription }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        key="deep-generator"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="item in deepGeneratorItems"
          :key="item.name"
          class="p-8 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
          @click="navigateTo(item.route)"
        >
          <div class="flex items-center mb-4">
            <img :src="item.icon" :alt="`${item.name} Icon`" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">{{ item.title }}</h2>
          </div>
          <p class="flex-grow text-white">{{ item.description }}</p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = item.name"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === item.name"
              class="absolute top-0 right-0 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold text-white">{{ item.title }}</h3>
              <p class="text-white">{{ item.modalDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'GeneratePage',
  setup() {
    const router = useRouter()
    const selectedGenerator = ref('generator')
    const showModal = ref(null)

    const generatorItems = [
      {
        name: 'character',
        title: 'Character Generation',
        description:
          'Create custom 2D characters for your game using our AI-driven character generator.',
        icon: new URL('@/assets/icons/character.png', import.meta.url).href,
        route: '/character-generation',
        modalDescription: 'Detailed information about character generation.'
      },
      {
        name: 'item',
        title: 'Item Generator',
        description: 'Generate unique items for your game with ease.',
        icon: new URL('@/assets/icons/item.png', import.meta.url).href,
        route: '/item-generator',
        modalDescription: 'Detailed information about item generation.'
      },
      {
        name: 'background',
        title: 'Background Generator (Soon)',
        description: 'Coming soon: Create stunning backgrounds for your game.',
        icon: new URL('@/assets/icons/background.png', import.meta.url).href,
        route: '/background-generator',
        modalDescription: 'Detailed information about background generation.'
      },
      {
        name: 'icon',
        title: 'Icon and Symbol Generator (Soon)',
        description: 'Coming soon: Generate icons and symbols for your game.',
        icon: new URL('@/assets/icons/icon.png', import.meta.url).href,
        route: '/icon-generator',
        modalDescription: 'Detailed information about icon and symbol generation.'
      }
    ]

    const deepGeneratorItems = [
      {
        name: 'single-character',
        title: 'Single Character (Soon)',
        description: 'Coming soon: Create detailed single characters for your game.',
        icon: new URL('@/assets/icons/background.png', import.meta.url).href,
        route: '/single-character-generator',
        modalDescription: 'Detailed information about single character generation.'
      },
      {
        name: 'deep-icon',
        title: 'Icon and Symbol Generator (Soon)',
        description: 'Coming soon: Generate advanced icons and symbols for your game.',
        icon: new URL('@/assets/icons/icon.png', import.meta.url).href,
        route: '/deep-icon-generator',
        modalDescription: 'Detailed information about advanced icon and symbol generation.'
      }
    ]

    const selectGenerator = (generator) => {
      selectedGenerator.value = generator
    }

    const buttonClass = (generator) => {
      return selectedGenerator.value === generator ? 'text-white' : 'text-black'
    }

    const navigateTo = (route) => {
      router.push(route)
    }

    return {
      selectedGenerator,
      showModal,
      generatorItems,
      deepGeneratorItems,
      selectGenerator,
      buttonClass,
      navigateTo
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
button {
  position: relative;
  z-index: 10;
  transition: color 0.3s;
}
.hover\:bg-gray-700:hover {
  background-color: #242e3d;
}
</style>
