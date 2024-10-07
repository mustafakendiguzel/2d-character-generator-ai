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
      <div :key="selectedGenerator" class="mt-8 mb-8 bg-gray-800 p-6 rounded-lg">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
            <h3 class="text-xl font-bold text-white mb-4">{{ selectedGeneratorInfo.title }}</h3>
            <p class="text-white mb-4 max-w-prose">
              {{ selectedGeneratorInfo.description }}
            </p>
            <ul class="text-white list-disc list-inside mb-4">
              <li v-for="tip in selectedGeneratorInfo.tips" :key="tip" class="max-w-prose">
                {{ tip }}
              </li>
            </ul>
          </div>
          <div class="w-full md:w-2/3 flex items-center justify-center">
            <dotlottie-vue
              src="https://lottie.host/62ec1613-0070-4e4f-b85a-4697dc4a442e/dn3S8eibeE.lottie"
              autoplay
              loop
              class="w-full h-auto"
            ></dotlottie-vue>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div v-if="selectedGenerator === 'generator'" key="generator">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="item in generatorItems"
            :key="item.name"
            :class="[
              'p-6 rounded-lg bg-gray-800 flex flex-col h-full relative',
              item.soon ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700 cursor-pointer'
            ]"
            @click="navigateTo(item.route, item.soon)"
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
            <div
              v-if="item.soon"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
            >
              <span class="text-white font-bold text-xl bg-red-500 px-3 py-1 rounded">Soon</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else key="deep-generator">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="item in deepGeneratorItems"
            :key="item.name"
            :class="[
              'p-8 rounded-lg bg-gray-800 flex flex-col h-full relative',
              item.soon ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700 cursor-pointer'
            ]"
            @click="navigateTo(item.route, item.soon)"
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
            <div
              v-if="item.soon"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
            >
              <span class="text-white font-bold text-xl bg-red-500 px-3 py-1 rounded">Soon</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { useGeneratorStore } from '@/stores/cards'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'GeneratePage',
  setup() {
    const router = useRouter()
    const selectedGenerator = ref('generator')
    const showModal = ref(null)
    const generatorStore = useGeneratorStore()
    const generatorItems = computed(() => generatorStore.generatorItems)
    const deepGeneratorItems = computed(() => generatorStore.deepGeneratorItems)

    // const generatorItems = [
    //   {
    //     name: 'character',
    //     title: 'Character Generation',
    //     description:
    //       'Create custom 2D characters for your game using our AI-driven character generator.',
    //     icon: new URL('@/assets/icons/character.png', import.meta.url).href,
    //     route: 'generate/character-generation',
    //     modalDescription: 'Detailed information about character generation.',
    //     soon: false
    //   },
    //   {
    //     name: 'item',
    //     title: 'Item Generator',
    //     description: 'Generate unique items for your game with ease.',
    //     icon: new URL('@/assets/icons/item.png', import.meta.url).href,
    //     route: 'generate/item-generator',
    //     modalDescription: 'Detailed information about item generation.',
    //     soon: false
    //   },
    //   {
    //     name: 'background',
    //     title: 'Background Generator',
    //     description: 'Create stunning backgrounds for your game.',
    //     icon: new URL('@/assets/icons/background.png', import.meta.url).href,
    //     route: 'generate/background-generator',
    //     modalDescription: 'Detailed information about background generation.',
    //     soon: true
    //   },
    //   {
    //     name: 'icon',
    //     title: 'Icon and Symbol Generator',
    //     description: 'Generate icons and symbols for your game.',
    //     icon: new URL('@/assets/icons/icon.png', import.meta.url).href,
    //     route: 'generate/icon-generator',
    //     modalDescription: 'Detailed information about icon and symbol generation.',
    //     soon: true
    //   }
    // ]

    // const deepGeneratorItems = [
    //   {
    //     name: 'single-character',
    //     title: 'Single Character',
    //     description: 'Create detailed single characters for your game.',
    //     icon: new URL('@/assets/icons/background.png', import.meta.url).href,
    //     route: 'generate/single-character-generator',
    //     modalDescription: 'Detailed information about single character generation.',
    //     soon: true
    //   },
    //   {
    //     name: 'deep-icon',
    //     title: 'Icon and Symbol Generator',
    //     description: 'Generate advanced icons and symbols for your game.',
    //     icon: new URL('@/assets/icons/icon.png', import.meta.url).href,
    //     route: 'generate/deep-icon-generator',
    //     modalDescription: 'Detailed information about advanced icon and symbol generation.',
    //     soon: true
    //   }
    // ]

    const generatorInfo = {
      generator: {
        title: "Let's create your game assets",
        description:
          'Our Generator tools offer a quick and easy way to create various game assets. Perfect for rapid prototyping or generating initial ideas, these tools use AI to produce characters, items, backgrounds, and icons based on your descriptions.',
        tips: [
          'Use simple and clear descriptions for best results',
          'Experiment with different styles and themes',
          "Try adding descriptive words like 'fantasy', 'sci-fi', or 'cartoon'",
          'Use variations when you find a starting point you like'
        ]
      },
      'deep-generator': {
        title: 'Elevate your game with Deep Generators',
        description:
          'Our Deep Generator tools provide advanced capabilities for creating more detailed and consistent game assets. These tools can learn from multiple examples to generate assets that match a specific style or expand on existing designs.',
        tips: [
          'Provide multiple examples of the style you want to achieve',
          'Use existing character poses to generate new variations',
          'Create consistent item sets by training on related designs',
          'Experiment with style transfer to reimagine existing assets'
        ]
      }
    }

    const selectedGeneratorInfo = computed(() => generatorInfo[selectedGenerator.value])

    const selectGenerator = (generator) => {
      selectedGenerator.value = generator
    }

    const buttonClass = (generator) => {
      return selectedGenerator.value === generator ? 'text-white' : 'text-black'
    }

    const navigateTo = (route, soon) => {
      if (!soon) {
        router.push(route)
      }
    }

    return {
      selectedGenerator,
      showModal,
      generatorItems,
      deepGeneratorItems,
      selectGenerator,
      buttonClass,
      navigateTo,
      selectedGeneratorInfo
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
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .max-w-prose {
    max-width: 100%;
  }
}
</style>
