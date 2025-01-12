<template>
  <div id="header" class="container-fluid">
    <div class="row">
      <div class="left-col p-0" :class="{ 'last-hover': lastHovered === 'left' }" @mouseover="lastHovered = 'left'" >
        <div class="rectangle"></div>
        <div class="bg-color">
          <div class="text-pos">Game Developer</div>
          <div class="image-container"></div>
        </div>
      </div>
      <div class="right-col p-0" :class="{ 'last-hover': lastHovered === 'right' }" @mouseover="lastHovered = 'right'" >
        <div class="bg-color">
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
</script>
