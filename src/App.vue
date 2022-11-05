<template>
  <AppProvider>
    <!-- Static sidebar for desktop -->
    <Sidebar />

    <div class="flex flex-col flex-1">
      <AppNav />
      <main class="lg:pl-60 xl:pl-72 flex-1">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
          <RouterView />
        </div>
      </main>
    </div>
  </AppProvider>
</template>

<script setup>
import AppNav from "@/components/Main/AppNav.vue";
import Sidebar from "@/components/Main/Sidebar.vue";
</script>
