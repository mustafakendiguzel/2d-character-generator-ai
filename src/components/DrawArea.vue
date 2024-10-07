<template>
  <div class="container mx-auto py-4">
    <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <div class="flex space-x-2">
          <button
            @click="setTool('brush')"
            class="tool-button"
            :class="{ active: currentTool === 'brush' }"
          >
            <font-awesome-icon class="text-white" :icon="['fas', 'brush']" />
          </button>
          <button
            @click="setTool('eraser')"
            class="tool-button"
            :class="{ active: currentTool === 'eraser' }"
          >
            <font-awesome-icon class="text-white" :icon="['fas', 'eraser']" />
          </button>
        </div>
        <div class="flex space-x-2">
          <button
            v-for="color in defaultColors"
            :key="color"
            @click="setColor(color)"
            class="w-8 h-8 rounded-full"
            :style="{ backgroundColor: color }"
          ></button>
        </div>
        <div class="flex items-center space-x-2">
          <input type="color" v-model="currentColor" class="w-8 h-8" />
          <input type="range" v-model="lineWidth" min="1" max="20" class="w-32" />
        </div>
        <button @click="clearCanvas" class="bg-red-500 text-white px-4 py-2 rounded">
          Temizle
        </button>
      </div>
      <canvas
        ref="canvas"
        width="800"
        height="600"
        class="cursor-none"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
      ></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'DrawArea',
  setup() {
    const canvas = ref(null)
    const ctx = ref(null)
    const isDrawing = ref(false)
    const currentColor = ref('#FFFFFF')
    const lineWidth = ref(5)
    const currentTool = ref('brush')
    const defaultColors = [
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#FF00FF',
      '#00FFFF',
      '#FFFFFF'
    ]

    const cursorCanvas = document.createElement('canvas')
    const cursorCtx = cursorCanvas.getContext('2d')

    onMounted(() => {
      ctx.value = canvas.value.getContext('2d')
      ctx.value.lineCap = 'round'
      ctx.value.lineJoin = 'round'
      ctx.value.fillStyle = '#000000'
      ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)

      canvas.value.addEventListener('mousemove', updateCursor)
    })

    const updateCursor = (event) => {
      const rect = canvas.value.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      cursorCanvas.width = lineWidth.value * 2
      cursorCanvas.height = lineWidth.value * 2
      cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height)

      if (currentTool.value === 'eraser') {
        cursorCtx.strokeStyle = '#FFFFFF'
        cursorCtx.lineWidth = 2
        cursorCtx.beginPath()
        cursorCtx.arc(lineWidth.value, lineWidth.value, lineWidth.value - 1, 0, Math.PI * 2)
        cursorCtx.stroke()
      } else {
        cursorCtx.fillStyle = currentColor.value
        cursorCtx.beginPath()
        cursorCtx.arc(lineWidth.value, lineWidth.value, lineWidth.value / 2, 0, Math.PI * 2)
        cursorCtx.fill()
      }

      canvas.value.style.cursor = `url(${cursorCanvas.toDataURL()}) ${lineWidth.value} ${lineWidth.value}, auto`
    }

    const startDrawing = (event) => {
      isDrawing.value = true
      draw(event)
    }

    const draw = (event) => {
      if (!isDrawing.value) return

      const rect = canvas.value.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      ctx.value.strokeStyle = currentTool.value === 'eraser' ? '#000000' : currentColor.value
      ctx.value.lineWidth = lineWidth.value
      ctx.value.lineTo(x, y)
      ctx.value.stroke()
      ctx.value.beginPath()
      ctx.value.moveTo(x, y)
    }

    const stopDrawing = () => {
      isDrawing.value = false
      ctx.value.beginPath()
    }

    const setTool = (tool) => {
      currentTool.value = tool
    }

    const setColor = (color) => {
      currentColor.value = color
    }

    const clearCanvas = () => {
      ctx.value.fillStyle = '#000000'
      ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
    }

    watch([currentColor, lineWidth, currentTool], () => {
      updateCursor({ clientX: 0, clientY: 0 })
    })

    return {
      canvas,
      currentColor,
      lineWidth,
      currentTool,
      defaultColors,
      startDrawing,
      draw,
      stopDrawing,
      setTool,
      setColor,
      clearCanvas
    }
  }
}
</script>

<style scoped>
.tool-button {
  @apply bg-gray-600 text-white p-2 rounded;
}

.tool-button.active {
  @apply bg-blue-500;
}
</style>
