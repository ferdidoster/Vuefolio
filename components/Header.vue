<template>
  <div id="header" class="container-fluid">
    <div class="row">
      <!-- Game Developer Section -->
      <div
          id="game-dev"
          class="left-col p-0"
          :class="{ 'last-hover': lastHovered === 'left', 'not-hovered': lastHovered === 'right' }"
          @mouseover="setHover('left')"
          @mouseleave="clearHover"
      >
        <div class="bg-color" :class="{ expanded: lastHovered === 'left' }">
          <div class="text-pos"><h3>Game Developer</h3></div>
          <div class="image-container">
            <img
                v-for="(image, index) in gameImages"
                :key="index"
                :src="image"
                alt="Game Collage"
                loading="lazy"
                class="fade-image"
                :class="{ active: index === currentGameImage }"
            />
          </div>
        </div>
      </div>

      <!-- Web Developer Section -->
      <div
          id="frontend-dev"
          class="right-col p-0"
          :class="{ 'last-hover': lastHovered === 'right', 'not-hovered': lastHovered === 'left' }"
          @mouseover="setHover('right')"
          @mouseleave="clearHover"
      >
        <div class="bg-color" :class="{ expanded: lastHovered === 'right' }">
          <div class="text-pos"><h3>Web Developer</h3></div>
          <div class="image-container">
            <img
                v-for="(image, index) in frontendImages"
                :key="index"
                :src="image"
                alt="Websites"
                loading="lazy"
                class="fade-image"
                :class="{ active: index === currentFrontendImage }"
            />
          </div>
        </div>
      </div>

      <!-- Profile Image -->
      <img class="me" loading="lazy" src="/optimized-images/me-nobg.webp" style="pointer-events: none" alt="Example Image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const lastHovered = ref<'left' | 'right' | null>(null);

function setHover(direction: 'left' | 'right'): void {
  lastHovered.value = direction;
}

function clearHover(): void {
  lastHovered.value = null;
}

const gameImages = ref([
  '/optimized-images/game_1.webp',
  '/optimized-images/game_2.webp',
  '/optimized-images/game_3.webp',
]);

const frontendImages = ref([
  '/optimized-images/website_1.webp',
  '/optimized-images/website_2.webp',
]);

const currentGameImage = ref(0);
const currentFrontendImage = ref(0);
let intervalId: number | null = null;

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentGameImage.value = (currentGameImage.value + 1) % gameImages.value.length;
    currentFrontendImage.value = (currentFrontendImage.value + 1) % frontendImages.value.length;
  }, 4000); // Change image every 4 seconds
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
/* Image Container */
.image-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.fade-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  pointer-events: none;
  z-index: 0;
}

.fade-image.active {
  opacity: 1;
  z-index: 1;
  pointer-events: auto;
}

</style>
