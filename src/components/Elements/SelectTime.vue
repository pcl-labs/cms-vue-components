<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected" class="relative">
    <ListboxButton
      class="w-full h-10 flex items-center border border-brand-gray-500 rounded px-4"
    >
      <img src="../../assets/icons/clock.svg" alt="" />
      <span class="block truncate px-2">{{ selected.name }}</span>
      <span class="ml-auto text-brand-gray-700 uppercase">Edit</span>
    </ListboxButton>

    <transition
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ListboxOptions
        class="absolute left-1/2 -translate-x-1/2 z-10 mt-1 w-40 overflow-auto rounded-lg bg-white shadow-custom py-1"
      >
        <ListboxOption
          as="template"
          v-for="time in times"
          :key="time.id"
          :value="time"
          v-slot="{ selected }"
        >
          <li
            class="relative cursor-pointer hover:bg-brand-gray-100 px-6 py-2"
            :class="[
              selected ? 'font-semibold bg-brand-gray-100' : 'font-normal',
              'block truncate',
            ]"
          >
            <span>{{ time.name }}</span>
          </li>
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

const times = [
  { id: 1, name: "12:30 AM" },
  { id: 2, name: "1:00 AM" },
  { id: 3, name: "1:30 AM" },
  { id: 4, name: "2:00 AM" },
  { id: 5, name: "2:30 AM" },
  { id: 6, name: "3:00 AM" },
];

const selected = ref(times[3]);
</script>
