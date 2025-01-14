<template>
  <div id="header" class="container-fluid">
    <div class="row">
      <div
          id="game-dev"
          class="left-col p-0"
          :class="{ 'last-hover': lastHovered === 'left', 'not-hovered': lastHovered === 'right' }"
          @mouseover="setHover('left')"
          @mouseleave="clearHover"
      >
        <div class="bg-color" :class="{ expanded: lastHovered === 'left' }">
          <div class="text-pos">Game Developer</div>
          <div class="image-container"></div>
        </div>
      </div>

      <div
          id="frontend-dev"
          class="right-col p-0"
          :class="{ 'last-hover': lastHovered === 'right', 'not-hovered': lastHovered === 'left' }"
          @mouseover="setHover('right')"
          @mouseleave="clearHover"
      >
        <div class="bg-color" :class="{ expanded: lastHovered === 'right' }">
          <div class="text-pos">Web Developer</div>
          <div class="image-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const lastHovered = ref(null);

function setHover(direction) {
  lastHovered.value = direction;
}

function clearHover() {
  lastHovered.value = null;
}
</script>