<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      defer: true,
      "data-cf-beacon": '{"token": "6612fe3c86f74daa90ae869bf1e807de"}'
    },
  ]
});
</script>