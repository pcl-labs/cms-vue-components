<template>
  <IconFeed class="w-36 md:w-48 lg:w-auto mx-auto" />
  <h2 class="lg:mt-10">Add a social post</h2>
  <p class="max-w-lg leading-5 text-center mt-4">
    Featuring customer content is a great way to build a community around your
    products and your brand.
    <a href="#" class="text-brand-green">Learn more</a>
  </p>

  <div class="md:flex gap-2 px-6 space-y-4 md:space-y-0 mt-8">
    <button
      class="w-full bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 whitespace-nowrap rounded py-2.5 px-5"
    >
      Connect social accounts
    </button>
    <button
      class="w-full bg-white hover:bg-brand-gray-200 border border-brand-gray-500 font-semibold leading-5 whitespace-nowrap rounded py-2.5 px-5"
    >
      Add manually
    </button>
  </div>
</template>

<script setup>
import ProductsEmpty from "@/components/Sections/ProductsEmpty.vue";
</script>
