<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return title ? `${title} - สปา & นวด` : 'สปา & นวด'
  },
})
</script>