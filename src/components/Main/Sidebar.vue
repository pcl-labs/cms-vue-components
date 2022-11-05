<template>
  <div class="hidden lg:flex lg:w-60 xl:w-72 lg:flex-col lg:fixed lg:inset-y-0">
    <div class="h-19 shrink-0"></div>
    <div
      class="flex-grow flex flex-col border-r border-brand-gray-500 overflow-y-auto py-3"
    >
      <MenuLinks />>
    </div>
  </div>
</template>

<script setup>
import MenuLinks from "./MenuLinks.vue";
</script>
