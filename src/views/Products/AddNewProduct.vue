<template>
  <div class="mb-6">
    <h1>Add a Product</h1>
  </div>

  <div
    class="flex flex-col sm:flex-row md:items-center md:justify-between border border-brand-gray-300 rounded-xl bg-white shadow-custom px-6 py-10 md:px-10"
  >
    <div>
      <div class="mb-6">
        <h3>Add product</h3>
      </div>
      <form class="space-y-4 sm:w-80">
        <div>
          <label class="block text-sm mb-1" for="">Post URL</label>
          <div class="">
            <input
              class="h-10 text-sm truncate px-3"
              type="text"
              placeholder="https://www.youtube.com/watch?vdskfsjdghkgjfkjksd"
            />
          </div>
        </div>
        <button
          class="w-full bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 rounded py-2.5 px-5"
        >
          Add posts
        </button>
      </form>
    </div>

    <IconPlusCircle class="mx-auto mt-10 md:mr-0 md:mt-0" />
  </div>
</template>

<script setup>
import IconPlusCircle from "@/components/Icons/IconPlusCircle.vue";
</script>
