<template>
  <div class="col-xl-3 col-sm-6 col-12 mt-2 mt-sm-3 mt-xl-0">
    <div class="cards p-3 bg-secondary"
         data-aos="fade-up"
         :data-aos-delay="index * 100">
      <div class="card-content">
        <h4 class="cards-title">{{ title }}</h4>
        <p class="cards-text">{{ description }}</p>
      </div>
      <div class="card-overlay" :style="{ backgroundImage: `url(${image})`}">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image?: string;
  link?: string;
  index: number;
}>();

</script>

<style scoped>
.cards{
  color: white;
  height: 100%;
  position: relative;
}

.card-overlay{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top:0;
  left:0;
  opacity: 0;
  transition: 1s all;
}

.card-overlay:hover{
  opacity: 1;
}
</style>

