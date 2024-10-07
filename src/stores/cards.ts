import { defineStore } from 'pinia'

export const useGeneratorStore = defineStore('generator', {
  state: () => ({
    generatorItems: [
      {
        name: 'character',
        title: 'Character Generation',
        description:
          'Create custom 2D characters for your game using our AI-driven character generator.',
        icon: new URL('@/assets/icons/character.png', import.meta.url).href,
        route: 'generate/character-generation',
        modalDescription: 'Detailed information about character generation.',
        soon: false
      },
      {
        name: 'item',
        title: 'Item Generator',
        description: 'Generate unique items for your game with ease.',
        icon: new URL('@/assets/icons/item.png', import.meta.url).href,
        route: 'generate/item-generator',
        modalDescription: 'Detailed information about item generation.',
        soon: false
      },
      {
        name: 'background',
        title: 'Background Generator',
        description: 'Create stunning backgrounds for your game.',
        icon: new URL('@/assets/icons/background.png', import.meta.url).href,
        route: 'generate/background-generator',
        modalDescription: 'Detailed information about background generation.',
        soon: false
      },
      {
        name: 'icon',
        title: 'Icon and Symbol Generator',
        description: 'Generate icons and symbols for your game.',
        icon: new URL('@/assets/icons/icon.png', import.meta.url).href,
        route: 'generate/icon-generator',
        modalDescription: 'Detailed information about icon and symbol generation.',
        soon: true
      }
    ],
    deepGeneratorItems: [
      {
        name: 'single-character',
        title: 'Single Character',
        description: 'Create detailed single characters for your game.',
        icon: new URL('@/assets/icons/background.png', import.meta.url).href,
        route: 'generate/single-character-generator',
        modalDescription: 'Detailed information about single character generation.',
        soon: true
      },
      {
        name: 'deep-icon',
        title: 'Icon and Symbol Generator',
        description: 'Generate advanced icons and symbols for your game.',
        icon: new URL('@/assets/icons/icon.png', import.meta.url).href,
        route: 'generate/deep-icon-generator',
        modalDescription: 'Detailed information about advanced icon and symbol generation.',
        soon: true
      }
    ]
  }),
  getters: {
    getGeneratorItemByRoute: (state) => (route) => {
      return (
        state.generatorItems.find((item) => item.route === route) ||
        state.deepGeneratorItems.find((item) => item.route === route)
      )
    }
  }
})
