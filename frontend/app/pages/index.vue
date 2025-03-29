<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <div >
      <h1 class="font-bold text-2xl text-(--ui-primary)">
        ระบบส่งเสริมการขายร้านสปา & นวด
      </h1>
      <p class="text-center tracking-wide text-sm">
        Coming Soon... / เร็วๆ นี้...
      </p>
    </div>

    <div class="flex items-center gap-2">
      <UButton
        label="Nuxt 3"
        icon="ph:book-duotone"
        to="https://nuxt.com/docs/getting-started/installation"
        target="_blank"
      />
      <UButton
        label="Nuxt UI"
        icon="ph:book-duotone"
        to="https://ui.nuxt.com/getting-started/installation/nuxt"
        target="_blank"
      />
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "หน้าหลัก"
})
</script>
