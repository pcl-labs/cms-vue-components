<template>
  <nav class="sidebar-nav flex-1 font-medium space-y-1 pb-4 pr-2">
    <div v-for="(link, idx) in navigation" :key="idx">
      <a
        v-if="link.home"
        :href="link.href"
        class="relative block before:hover:bg-brand-green overflow-hidden"
        :class="baseUrl === link.href && 'before:bg-brand-green'"
      >
        <span
          class="flex items-center lg:hover:bg-brand-green-dull hover:text-brand-green rounded ml-2.5 px-3 py-2.5"
          :class="
            baseUrl === link.href
              ? 'bg-brand-green-dull text-brand-green'
              : 'text-brand-black'
          "
        >
          <component
            :is="link.icon"
            class="mr-2 flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          />
          <span>
            {{ link.name }}
          </span>
        </span>
      </a>

      <!-- Children -->
      <a
        v-if="!link.home && !link.section"
        :href="link.href"
        class="relative block before:hover:bg-brand-green overflow-hidden"
        :class="baseUrl === link.href && 'before:bg-brand-green'"
      >
        <span
          class="flex items-center lg:hover:bg-brand-green-dull hover:text-brand-green rounded ml-2.5 px-3 py-2.5"
          :class="
            baseUrl === link.href
              ? 'bg-brand-green-dull text-brand-green'
              : 'text-brand-black'
          "
        >
          <component
            :is="link.icon"
            class="mr-2 flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          />
          <span>
            {{ link.name }}
          </span>
        </span>
      </a>
      <div v-if="link.children" class="space-y-px">
        <a
          v-for="item in link.children"
          :href="item.href"
          class="relative block before:hover:bg-brand-green overflow-hidden"
          :class="baseUrl === item.href && 'before:bg-brand-green'"
        >
          <span
            class="block lg:hover:bg-brand-green-dull hover:text-brand-green text-body rounded ml-2.5 pl-10 py-2"
            :class="
              baseUrl === item.href
                ? 'bg-brand-green-dull text-brand-green'
                : 'text-brand-black'
            "
          >
            {{ item.name }}
          </span>
        </a>
      </div>

      <!-- Section -->
      <p
        v-if="link.section"
        class="text-sm font-medium text-brand-gray-700 px-5 pt-3 pb-2"
        :class="baseUrl === link.href && 'before:bg-brand-green'"
      >
        {{ link.section }}
      </p>
      <div v-if="link.links">
        <a
          v-for="item in link.links"
          :href="item.href"
          class="relative block group before:hover:bg-brand-green overflow-hidden"
          :class="baseUrl === item.href && 'before:bg-brand-green'"
        >
          <span
            class="flex items-center lg:hover:bg-brand-green-dull hover:text-brand-green rounded ml-2.5 px-3 py-2.5"
            :class="
              baseUrl === item.href
                ? 'bg-brand-green-dull text-brand-green'
                : 'text-brand-black'
            "
          >
            <component :is="item.icon" class="mr-2 flex-shrink-0 h-5 w-5" />
            <span>
              {{ item.name }}
            </span>
          </span>
        </a>
      </div>
    </div>

    <!-- logout button -->
    <button
      type="button"
      class="w-full relative before:hover:bg-brand-green overflow-hidden"
    >
      <span
        class="flex items-center lg:hover:bg-brand-green-dull text-brand-black hover:text-brand-green rounded ml-2.5 px-3 py-2.5 group"
      >
        <IconLogout class="w-5 h-5 shrink-0 mr-2" />
        <span> Logout </span>
      </span>
    </button>
  </nav>
</template>

<script setup>
import {
  HomeIcon,
  HeartIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/vue/20/solid";

import IconProducts from "@/components/Icons/IconProducts.vue";
import IconPlusSqure from "@/components/Icons/IconPlusSqure.vue";
import IconLogout from "@/components/Icons/IconLogout.vue";

const baseUrl = window.location.pathname;
const isDropdownAcitve = baseUrl.split("/");

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    home: true,
  },
  {
    name: "Feed",
    href: "/feed",
    icon: HeartIcon,
    children: [
      {
        name: "Add a Post",
        href: "/feed/add-post",
      },
      {
        name: "Post Edit Page",
        href: "/feed/edit-post",
      },
    ],
  },
  {
    name: "Products",
    href: "/products",
    icon: IconProducts,
    children: [
      {
        name: "Add a Product",
        href: "/products/add-product",
      },
      {
        name: "Product Edit Page",
        href: "/products/edit-product",
      },
    ],
  },
  {
    section: "Manage team",
    links: [
      {
        name: "Team Settings",
        href: "/team-settings",
        icon: Cog6ToothIcon,
      },
      {
        name: "Create New Team",
        href: "/new-team",
        icon: IconPlusSqure,
      },
    ],
  },
  {
    section: "Manage account",
    links: [
      {
        name: "Profile",
        href: "/profile",
        icon: UserIcon,
      },
    ],
  },
];
</script>
