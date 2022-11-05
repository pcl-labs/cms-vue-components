<template>
  <div class="sticky top-0 flex-shrink-0 flex h-19 bg-white shadow z-50">
    <button
      type="button"
      class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green lg:hidden"
      @click="sidebarOpen = true"
    >
      <span class="sr-only">Open sidebar</span>
      <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
    </button>
    <div class="flex-1 px-5 flex items-center justify-between">
      <div>
        <Logo />
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <Menu as="div" class="ml-3 relative">
          <MenuButton type="button" class="inline-flex items-center gap-2">
            <span> Chris Luke</span>
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.76822 5.07814C4.36843 5.55789 3.63157 5.55789 3.23178 5.07813L0.366819 1.64018C-0.175953 0.988856 0.287204 0 1.13504 0H6.86496C7.7128 0 8.17595 0.988858 7.63318 1.64018L4.76822 5.07814Z"
                fill="#595B69"
              />
            </svg>
          </MenuButton>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 mt-3 w-60 rounded-lg shadow-lg pt-1 pb-7 bg-white ring-1 ring-brand-gray-300 focus:outline-none"
            >
              <div>
                <p class="text-xs text-brand-gray-700 px-8 pt-3 pb-2">
                  Manage Team
                </p>

                <MenuItem>
                  <a
                    href="/team-settings"
                    class="block px-8 py-1.5 lg:hover:bg-brand-gray-200"
                  >
                    Team Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/new-team"
                    class="block px-8 py-1.5 lg:hover:bg-brand-gray-200"
                  >
                    Create New Team
                  </a>
                </MenuItem>
              </div>
              <div>
                <p class="text-xs text-brand-gray-700 px-8 pt-3 pb-2">
                  Switch Teams
                </p>

                <MenuItem>
                  <button
                    type="button"
                    class="w-full inline-flex items-center gap-3 px-8 py-1.5 lg:hover:bg-brand-gray-200"
                  >
                    <svg
                      class="w-4 h-4 text-brand-green"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99961 14.4C11.5342 14.4 14.3996 11.5346 14.3996 8.00001C14.3996 4.46538 11.5342 1.60001 7.99961 1.60001C4.46499 1.60001 1.59961 4.46538 1.59961 8.00001C1.59961 11.5346 4.46499 14.4 7.99961 14.4ZM10.9653 6.96569C11.2777 6.65327 11.2777 6.14674 10.9653 5.83432C10.6529 5.5219 10.1463 5.5219 9.83393 5.83432L7.19961 8.46865L6.1653 7.43432C5.85287 7.1219 5.34635 7.1219 5.03392 7.43432C4.72151 7.74674 4.72151 8.25329 5.03392 8.56569L6.63392 10.1657C6.94635 10.4781 7.45287 10.4781 7.7653 10.1657L10.9653 6.96569Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span> koko </span>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="button"
                    class="w-full inline-flex items-center gap-3 px-8 py-1.5 lg:hover:bg-brand-gray-200"
                  >
                    <svg
                      class="w-4 h-4 text-brand-gray-500"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99961 14.4C11.5342 14.4 14.3996 11.5346 14.3996 8.00001C14.3996 4.46538 11.5342 1.60001 7.99961 1.60001C4.46499 1.60001 1.59961 4.46538 1.59961 8.00001C1.59961 11.5346 4.46499 14.4 7.99961 14.4ZM10.9653 6.96569C11.2777 6.65327 11.2777 6.14674 10.9653 5.83432C10.6529 5.5219 10.1463 5.5219 9.83393 5.83432L7.19961 8.46865L6.1653 7.43432C5.85287 7.1219 5.34635 7.1219 5.03392 7.43432C4.72151 7.74674 4.72151 8.25329 5.03392 8.56569L6.63392 10.1657C6.94635 10.4781 7.45287 10.4781 7.7653 10.1657L10.9653 6.96569Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span> koko </span>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="button"
                    class="w-full inline-flex items-center gap-3 px-8 py-1.5 lg:hover:bg-brand-gray-200"
                  >
                    <svg
                      class="w-4 h-4 text-brand-gray-500"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99961 14.4C11.5342 14.4 14.3996 11.5346 14.3996 8.00001C14.3996 4.46538 11.5342 1.60001 7.99961 1.60001C4.46499 1.60001 1.59961 4.46538 1.59961 8.00001C1.59961 11.5346 4.46499 14.4 7.99961 14.4ZM10.9653 6.96569C11.2777 6.65327 11.2777 6.14674 10.9653 5.83432C10.6529 5.5219 10.1463 5.5219 9.83393 5.83432L7.19961 8.46865L6.1653 7.43432C5.85287 7.1219 5.34635 7.1219 5.03392 7.43432C4.72151 7.74674 4.72151 8.25329 5.03392 8.56569L6.63392 10.1657C6.94635 10.4781 7.45287 10.4781 7.7653 10.1657L10.9653 6.96569Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span> koko </span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <div
          class="w-9 h-9 shrink-0 rounded-full overflow-hidden bg-brand-green pt-1 ml-3"
        >
          <UserIcon class="w-full h-full text-white" />
        </div>
      </div>
    </div>
  </div>

  <MobileNav v-model:sidebarOpen="sidebarOpen" />
</template>

<script setup>
import { ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { UserIcon } from "@heroicons/vue/20/solid";
import { Bars3BottomLeftIcon } from "@heroicons/vue/24/outline";
import Logo from "@/components/Icons/Logo.vue";
import MobileNav from "./MobileNav.vue";

const sidebarOpen = ref(false);
</script>
