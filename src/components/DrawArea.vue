<template>
  <div class="container mx-auto py-4">
    <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
      <!-- Adım göstergesi -->
      <div class="flex justify-center items-center mb-4">
        <div
          v-for="(step, index) in steps"
          :key="step.id"
          class="flex items-center"
          @click="setStep(step.id)"
        >
          <div
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300',
              currentStep === step.id ? 'bg-blue-500 shadow-lg' : 'bg-gray-600'
            ]"
          >
            {{ index + 1 }}
          </div>
          <div v-if="index < steps.length - 1" class="w-16 h-1 bg-gray-600"></div>
        </div>
      </div>

      <!-- Çizim alanı veya resim yükleme alanı -->
      <div v-show="currentStep === 'drawing'" class="flex">
        <div v-if="mode === 'draw' || isEditing" class="flex-grow">
          <div class="flex space-x-2 mb-4">
            <button
              v-for="tool in ['brush', 'eraser', 'fill-drip', 'trash-alt', 'undo']"
              :key="tool"
              @click="handleToolClick(tool)"
              class="tool-button"
              :class="{
                active: currentTool === tool,
                'trash-button': tool === 'trash-alt'
              }"
              :title="getToolTitle(tool)"
            >
              <font-awesome-icon class="text-white text-xl" :icon="['fas', tool]" />
            </button>
            <button
              v-if="isEditing"
              @click="stopEditing"
              class="tool-button bg-green-500 hover:bg-green-600"
              title="Düzenlemeyi Tamamla"
            >
              <font-awesome-icon class="text-white text-xl" :icon="['fas', 'check']" />
            </button>
          </div>
          <canvas
            ref="canvas"
            width="800"
            height="600"
            @mousedown="startDrawing"
            @mousemove="draw"
            @mouseup="stopDrawing"
            @mouseleave="stopDrawing"
          ></canvas>
        </div>
        <div v-else-if="mode === 'upload'" class="flex-grow relative">
          <!-- Resim yükleme alanı -->
          <div
            class="flex flex-col items-center justify-center h-[600px] border-2 border-dashed border-white rounded-lg p-4"
            @dragover.prevent
            @drop.prevent="handleDrop"
          >
            <input
              type="file"
              @change="handleImageUpload"
              accept="image/*"
              class="hidden"
              ref="fileInput"
            />
            <button
              v-if="!uploadedImage"
              @click="$refs.fileInput.click()"
              class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
              Resim Yükle
            </button>
            <p v-if="!uploadedImage" class="text-white mb-4">veya buraya sürükleyip bırakın</p>
            <img
              v-if="uploadedImage"
              :src="uploadedImage"
              alt="Yüklenen Resim"
              class="max-w-full max-h-[550px] object-contain"
            />
          </div>
          <!-- Resim silme, düzenleme ve geri alma ikonları -->
          <div v-if="uploadedImage" class="absolute top-2 right-2 flex space-x-2">
            <button
              @click="startEditing"
              class="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              title="Resmi Düzenle"
            >
              <font-awesome-icon :icon="['fas', 'edit']" />
            </button>
            <button
              @click="deleteImage"
              class="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              title="Resmi Sil"
            >
              <font-awesome-icon :icon="['fas', 'trash-alt']" />
            </button>
          </div>
        </div>
        <div
          v-if="mode === 'draw' || isEditing"
          class="w-40 ml-4 flex flex-col justify-center items-center space-y-6"
        >
          <div class="flex flex-col items-center space-y-2">
            <span class="text-white">Size:</span>
            <input type="range" v-model="lineWidth" min="1" max="20" class="w-full" />
          </div>
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="color in defaultColors"
              :key="color"
              @click="setColor(color)"
              class="w-8 h-8 rounded-full"
              :style="{ backgroundColor: color }"
            ></button>
          </div>
          <input type="color" v-model="currentColor" class="w-8 h-8" />
          <button @click="downloadCanvas" class="download-button" title="Download">
            <font-awesome-icon class="text-white mr-2" :icon="['fas', 'download']" /> Download
          </button>
        </div>
      </div>

      <!-- Karakter oluşturma alanı -->
      <div v-show="currentStep === 'character'">
        <div class="mb-4">
          <label class="block text-white mb-2" for="prompt">Character Description:</label>
          <textarea
            id="prompt"
            v-model="characterPrompt"
            class="w-full p-2 rounded"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="style">Style:</label>
          <select id="style" v-model="characterStyle" class="w-full p-2 rounded">
            <option value="pixel">Pixel Art</option>
            <option value="cartoon">Cartoon</option>
            <option value="realistic">Realistic</option>
          </select>
        </div>
      </div>

      <!-- Önizleme alanı -->
      <div v-show="currentStep === 'preview'" class="text-white">
        <h2 class="text-xl font-bold mb-4">Önizleme</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border border-gray-600 p-4 rounded">
            <h3 class="text-lg font-semibold mb-2">Çizim</h3>
            <img :src="canvasImage || uploadedImage" alt="Çizim" class="w-full h-auto" />
          </div>
          <div class="border border-gray-600 p-4 rounded">
            <h3 class="text-lg font-semibold mb-2">Karakter Detayları</h3>
            <p><strong>Açıklama:</strong> {{ characterPrompt }}</p>
            <p><strong>Stil:</strong> {{ characterStyle }}</p>
          </div>
        </div>
      </div>

      <!-- Navigasyon okları -->
      <div class="flex justify-between mt-4">
        <button
          v-if="currentStep !== steps[0].id && !isEditing"
          @click="previousStep"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <div v-else></div>
        <button
          v-if="currentStep !== steps[steps.length - 1].id && !isEditing"
          @click="nextStep"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, nextTick } from 'vue'

export default {
  name: 'DrawArea',
  props: {
    mode: {
      type: String,
      default: 'draw',
      validator: (value) => ['draw', 'upload'].includes(value)
    }
  },
  setup(props) {
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
      '#FFFFFF',
      '#000000'
    ]
    const steps = ref([
      { id: 'drawing', name: 'Drawing' },
      { id: 'character', name: 'Character Details' },
      { id: 'preview', name: 'Preview' }
    ])
    const currentStep = ref(steps.value[0].id)
    const characterPrompt = ref('')
    const characterStyle = ref('pixel')
    const canvasImage = ref('')
    const uploadedImage = ref(null)
    const isEditing = ref(false)
    const originalImage = ref(null)
    const history = ref([])
    const baseImage = ref(null)

    const cursorCanvas = document.createElement('canvas')
    const cursorCtx = cursorCanvas.getContext('2d')

    onMounted(() => {
      const savedImage = localStorage.getItem('savedDrawing')
      if (savedImage) {
        uploadedImage.value = savedImage
        originalImage.value = savedImage
      }

      if (props.mode === 'draw') {
        initializeCanvas()
      }
    })

    const initializeCanvas = () => {
      ctx.value = canvas.value.getContext('2d')
      ctx.value.lineCap = 'round'
      ctx.value.lineJoin = 'round'
      ctx.value.fillStyle = '#000000'
      ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
      baseImage.value = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height)
      saveToHistory()
    }

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

    const setStep = (stepId) => {
      currentStep.value = stepId
    }

    const nextStep = () => {
      const currentIndex = steps.value.findIndex((step) => step.id === currentStep.value)
      if (currentIndex < steps.value.length - 1) {
        currentStep.value = steps.value[currentIndex + 1].id
      }
    }

    const previousStep = () => {
      const currentIndex = steps.value.findIndex((step) => step.id === currentStep.value)
      if (currentIndex > 0) {
        currentStep.value = steps.value[currentIndex - 1].id
      }
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
      if (isDrawing.value) {
        isDrawing.value = false
        ctx.value.beginPath()
        saveToHistory()
      }
    }

    const saveToHistory = () => {
      const imageData = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height)
      history.value.push(imageData)
      if (history.value.length > 10) {
        history.value.shift()
      }
    }

    const undo = () => {
      if (history.value.length > 1) {
        history.value.pop()
        ctx.value.putImageData(history.value[history.value.length - 1], 0, 0)
      } else if (history.value.length === 1) {
        ctx.value.putImageData(baseImage.value, 0, 0)
      }
    }

    const clearCanvas = () => {
      ctx.value.putImageData(baseImage.value, 0, 0)
      history.value = [baseImage.value]
    }

    const setTool = (tool) => {
      currentTool.value = tool
    }

    const setColor = (color) => {
      currentColor.value = color
    }

    const downloadCanvas = () => {
      const link = document.createElement('a')
      link.download = 'cizim.png'
      link.href = canvas.value.toDataURL()
      link.click()
    }

    const fillArea = (event) => {
      const rect = canvas.value.getBoundingClientRect()
      const x = Math.floor(event.clientX - rect.left)
      const y = Math.floor(event.clientY - rect.top)

      const imageData = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height)
      const targetColor = getPixelColor(imageData, x, y)
      const fillColor = hexToRgb(currentColor.value)

      floodFill(imageData, x, y, targetColor, fillColor)
      ctx.value.putImageData(imageData, 0, 0)
    }

    const getPixelColor = (imageData, x, y) => {
      const index = (y * imageData.width + x) * 4
      return [
        imageData.data[index],
        imageData.data[index + 1],
        imageData.data[index + 2],
        imageData.data[index + 3]
      ]
    }

    const setPixelColor = (imageData, x, y, color) => {
      const index = (y * imageData.width + x) * 4
      imageData.data[index] = color[0]
      imageData.data[index + 1] = color[1]
      imageData.data[index + 2] = color[2]
      imageData.data[index + 3] = color[3]
    }

    const floodFill = (imageData, x, y, targetColor, fillColor) => {
      const stack = [[x, y]]
      const width = imageData.width
      const height = imageData.height

      while (stack.length > 0) {
        const [currX, currY] = stack.pop()
        if (currX < 0 || currX >= width || currY < 0 || currY >= height) continue

        const currentColor = getPixelColor(imageData, currX, currY)
        if (!colorsMatch(currentColor, targetColor) || colorsMatch(currentColor, fillColor))
          continue

        setPixelColor(imageData, currX, currY, fillColor)

        stack.push([currX + 1, currY])
        stack.push([currX - 1, currY])
        stack.push([currX, currY + 1])
        stack.push([currX, currY - 1])
      }
    }

    const colorsMatch = (color1, color2) => {
      return (
        color1[0] === color2[0] &&
        color1[1] === color2[1] &&
        color1[2] === color2[2] &&
        color1[3] === color2[3]
      )
    }

    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return [r, g, b, 255]
    }

    const generateCharacter = () => {
      console.log('Karakter oluşturuluyor:', {
        prompt: characterPrompt.value,
        style: characterStyle.value,
        image: canvas.value.toDataURL()
      })
      // Burada karakter oluşturma API'sini çağırabilirsiniz
    }

    const addStep = (stepId, stepName) => {
      steps.value.push({ id: stepId, name: stepName })
    }

    const getToolTitle = (tool) => {
      const titles = {
        brush: 'Brush',
        eraser: 'Eraser',
        'fill-drip': 'Fill',
        'trash-alt': 'Clear',
        undo: 'Undo'
      }
      return titles[tool] || tool
    }

    const updateCanvasImage = () => {
      if (canvas.value && (props.mode === 'draw' || isEditing.value)) {
        const updatedImage = canvas.value.toDataURL()
        canvasImage.value = updatedImage
        if (isEditing.value) {
          uploadedImage.value = updatedImage
          localStorage.setItem('savedDrawing', updatedImage)
        }
      } else if (uploadedImage.value) {
        canvasImage.value = uploadedImage.value
      }
    }

    const handleImageUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        loadImage(file)
      }
    }

    const handleDrop = (event) => {
      const file = event.dataTransfer.files[0]
      if (file && file.type.startsWith('image/')) {
        loadImage(file)
      }
    }

    const loadImage = (file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        uploadedImage.value = e.target.result
        originalImage.value = e.target.result
        localStorage.setItem('savedDrawing', uploadedImage.value)
      }
      reader.readAsDataURL(file)
    }

    const deleteImage = () => {
      uploadedImage.value = null
      originalImage.value = null
      isEditing.value = false
      localStorage.removeItem('savedDrawing')
    }

    const startEditing = () => {
      isEditing.value = true
      nextTick(() => {
        initializeCanvas()
        const img = new Image()
        img.onload = () => {
          ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
          ctx.value.drawImage(img, 0, 0, canvas.value.width, canvas.value.height)
          baseImage.value = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height)
          saveToHistory()
        }
        img.src = uploadedImage.value
      })
    }

    const stopEditing = () => {
      isEditing.value = false
      updateCanvasImage()
    }

    const resetToOriginal = () => {
      uploadedImage.value = originalImage.value
    }

    const handleToolClick = (tool) => {
      if (tool === 'undo') {
        undo()
      } else if (tool === 'trash-alt') {
        clearCanvas()
      } else {
        currentTool.value = tool
      }
    }

    const resetDrawing = () => {
      if (props.mode === 'upload') {
        uploadedImage.value = null
        canvasImage.value = ''
        localStorage.removeItem('savedDrawing')
      }
    }

    watch(
      () => isEditing.value,
      (newValue) => {
        if (newValue) {
          nextTick(() => {
            initializeCanvas()
          })
        }
      }
    )

    watch([currentColor, lineWidth, currentTool], () => {
      updateCursor({ clientX: 0, clientY: 0 })
    })

    watch(currentStep, (newStep) => {
      if (newStep === 'preview') {
        updateCanvasImage()
      }
    })

    watch(
      () => props.mode,
      (newMode) => {
        if (newMode === 'draw') {
          initializeCanvas()
        } else if (newMode === 'upload') {
          resetDrawing()
        }
      }
    )

    return {
      canvas,
      currentColor,
      lineWidth,
      currentTool,
      defaultColors,
      steps,
      currentStep,
      characterPrompt,
      characterStyle,
      isDrawing,
      setStep,
      nextStep,
      previousStep,
      startDrawing,
      draw,
      stopDrawing,
      setTool,
      setColor,
      clearCanvas,
      downloadCanvas,
      generateCharacter,
      addStep,
      getToolTitle,
      canvasImage,
      uploadedImage,
      handleImageUpload,
      handleDrop,
      deleteImage,
      isEditing,
      startEditing,
      stopEditing,
      resetToOriginal,
      initializeCanvas,
      undo,
      handleToolClick,
      updateCanvasImage,
      resetDrawing
    }
  }
}
</script>

<style scoped>
.tool-button {
  background-color: #4b5563; /* bg-gray-600 */
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.tool-button.active {
  background-color: #3b82f6; /* bg-blue-500 */
}

.tool-button.trash-button {
  background-color: #ef4444; /* bg-red-500 */
}

.tool-button.trash-button.active {
  background-color: #dc2626; /* bg-red-600 */
}

.download-button {
  background-color: #4b5563; /* bg-gray-600 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  transition: background-color 0.3s;
}

.download-button:hover {
  background-color: #374151; /* bg-gray-700 */
}

.tool-button::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s,
    visibility 0.3s;
}

.tool-button:hover::after {
  opacity: 1;
  visibility: visible;
}

.tool-button.bg-green-500 {
  background-color: #10b981;
}
.tool-button.bg-green-500:hover {
  background-color: #059669;
}
</style>
