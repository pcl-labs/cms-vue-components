<template>
  <div class="rounded-r-lg grid lg:grid-cols-3">
    <div
      class="relative border-x border-b lg:border-r-0 border-brand-gray-500 z-20"
    >
      <!-- Tab Buttons -->
      <button
        v-for="(item, idx) in tabs"
        :key="idx"
        @click="handleTabChange(idx)"
        class="w-full h-18 lg:h-24 flex items-center gap-2.5 border-l-3 hover:border-brand-green hover:bg-white border-t border-brand-gray-500 !border-t-brand-gray-500 px-5"
        :class="
          selectedTab === idx
            ? 'bg-white border-brand-green text-brand-green'
            : 'border-transparent border-r !border-r-brand-gray-500'
        "
      >
        <!-- <img :src="item.svg" alt="" /> -->
        <component :is="item.icon" class="w-5 h-5 lg:w-6 lg:h-6 shrink-0" />

        <span class="text-sm xl:text-base font-semibold leading-5">
          {{ item.btnTitle }}
        </span>
      </button>
    </div>

    <!-- Tab Contents -->
    <div
      class="lg:col-span-2 bg-white shadow-custom border-l-0 border border-brand-gray-300 lg:rounded-r-lg"
    >
      <div v-show="selectedTab === 0" class="flex justify-between p-10 pb-20">
        <div>
          <h3 class="text-lg font-semibold leading-5 mb-3">
            Add user content to your online store
          </h3>
          <p class="max-w-sm leading-5 mb-8">
            Share your brand story and build trust with customers. Re-post user
            content that builds your community and encourages purchases.
          </p>
          <button
            class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 rounded py-2.5 px-5"
          >
            Add posts
          </button>
        </div>

        <div class="hidden md:block">
          <HeartIcon />
        </div>
      </div>

      <div v-show="selectedTab === 1" class="flex justify-between p-10 pb-20">
        <div>
          <h3 class="text-lg font-semibold leading-5 mb-3">
            Add products to sell
          </h3>
          <p class="max-w-sm leading-5 mb-8">
            Sync your product list with your existing Shopify store or add
            products manually. When you add UGC content to your site, you can
            choose which products are displayed in that content.
          </p>
          <button
            class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 rounded py-2.5 px-5"
          >
            Add a product
          </button>
        </div>

        <div class="hidden lg:block">
          <TagIcon />
        </div>
      </div>

      <div v-show="selectedTab === 2" class="flex justify-between p-10 pb-20">
        <div>
          <h3 class="text-lg font-semibold leading-5 mb-3">
            Connect brand accounts
          </h3>
          <p class="max-w-sm leading-5 mb-8">
            Gain access to advanced analytics and performance reports by
            connecting your brand social accounts.
          </p>
          <button
            class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 rounded py-2.5 px-5"
          >
            Connect accounts
          </button>
        </div>

        <div class="hidden lg:block">
          <LinkIcon />
        </div>
      </div>

      <div v-show="selectedTab === 3" class="flex justify-between p-10 pb-20">
        <div>
          <h3 class="text-lg font-semibold leading-5 mb-3">
            Publish content directly from your phone
          </h3>
          <p class="max-w-sm leading-5 mb-8">
            Like a post? Share it via SMS, and queue that content to be
            published on your site.
          </p>
          <button
            class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 rounded py-2.5 px-5"
          >
            Get SMS publishing
          </button>
        </div>

        <div class="hidden lg:block">
          <ChattingIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeartIcon from "../Icons/HeartIcon.vue";
import TagIcon from "../Icons/TagIcon.vue";
import LinkIcon from "../Icons/LinkIcon.vue";
import ChattingIcon from "../Icons/ChattingIcon.vue";
import IconHomeSocial from "../Icons/IconHomeSocial.vue";
import IconHomeAdd from "../Icons/IconHomeAdd.vue";
import IconHomeConnect from "../Icons/IconHomeConnect.vue";
import IconHomeMessage from "../Icons/IconHomeMessage.vue";

const selectedTab = ref(0);

const handleTabChange = (selectedTabIndex) => {
  selectedTab.value = selectedTabIndex;
};
const tabs = [
  {
    btnTitle: "Add social ports",
    icon: IconHomeSocial,
  },
  {
    btnTitle: "Add products",
    icon: IconHomeAdd,
  },
  {
    btnTitle: "Connect social accounts",
    icon: IconHomeConnect,
  },
  {
    btnTitle: "Enable SMS Publishing",
    icon: IconHomeMessage,
  },
];
</script>
