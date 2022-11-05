<template>
  <div
    class="flex flex-col items-center bg-white shadow-custom rounded-lg text-center border border-brand-gray-300 px-5 pt-10 pb-14 lg:pt-20 lg:pb-24"
  >
    <IconBrowser class="w-36 md:w-48 lg:w-auto mx-auto" />
    <h2 class="lg:mt-10">First up: what are you selling?</h2>
    <p class="max-w-lg leading-5 px-5 mt-4">
      Allow live purchases in content, sync your products.
    </p>

    <div class="md:flex gap-2 px-6 space-y-4 md:space-y-0 mt-8">
      <button
        class="w-full bg-white hover:bg-brand-gray-200 border border-brand-gray-500 font-semibold leading-5 whitespace-nowrap rounded py-2.5 px-5"
      >
        Add your products
      </button>
      <button
        class="w-full bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 whitespace-nowrap rounded py-2.5 px-5"
      >
        Sync products with Shopify
      </button>
    </div>
  </div>
</template>

<script setup>
import IconBrowser from "@/components/Icons/IconBrowser.vue";
</script>
