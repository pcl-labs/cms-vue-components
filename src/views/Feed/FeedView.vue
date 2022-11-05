<template>
  <div class="mb-6">
    <h1>Feed</h1>
  </div>

  <div
    class="flex flex-col items-center bg-white shadow-custom rounded-lg text-center border border-brand-gray-300 px-5 pt-10 pb-14 lg:pt-20 lg:pb-24"
  >
    <FeedsEmpty />
  </div>
</template>

<script setup>
import FeedsEmpty from "@/components/Sections/FeedsEmpty.vue";
</script>
