<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold text-center mb-8">Character Generation</h1>
    <TwoColumnBoxes
      :boxes="characterBoxes"
      :animated-box-image="animatedBoxImage"
      @boxClick="handleBoxClick"
      @subOptionClick="handleSubOptionClick"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TwoColumnBoxes from '@/components/TwoColumnBoxes.vue'
import swordsmanIcon from '@/assets/icons/santa.png'
import scribbleIcon from '@/assets/icons/scribble.png'
import swordsmanIcon2 from '@/assets/icons/swordsman2.png' // Bu resmi eklemeyi unutmayın

export default {
  name: 'CharacterGenerationView',
  components: {
    TwoColumnBoxes
  },
  setup() {
    const router = useRouter()

    const characterBoxes = ref([
      {
        name: 'basic',
        title: 'Create Character from Scratch',
        description: 'Create a character quickly and easily from scratch.',
        route: '/generate/character-generation/basic-character-generator',
        image: swordsmanIcon
      },
      {
        name: 'advanced',
        title: 'Create Character by Drawing',
        description: 'Create your character by drawing or uploading a file.',
        isAdvanced: true,
        image: scribbleIcon,
        hoverImage: swordsmanIcon2,
        subOptions: [
          {
            name: 'draw',
            title: 'Draw Your Own',
            description: 'You can draw your character here.',
            route: '/generate/character-generation/draw-character'
          },
          {
            name: 'upload',
            title: 'Upload File',
            description: 'Bring your character to life by uploading a ready-made drawing file.',
            route: '/generate/character-generation/upload-character'
          }
        ]
      }
    ])

    const handleBoxClick = (box) => {
      if (box.isAdvanced) {
        console.log('Advanced option clicked')
      } else {
        router.push(box.route)
      }
    }

    const handleSubOptionClick = (subOption) => {
      console.log('Sub option clicked:', subOption.name)
      router.push(subOption.route)
    }

    return {
      characterBoxes,
      handleBoxClick,
      handleSubOptionClick
    }
  }
}
</script>
