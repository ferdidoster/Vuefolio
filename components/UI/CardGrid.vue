<template>
  <div class="row">
    <Card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';

defineProps<{
  cards: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
}>();
</script>
