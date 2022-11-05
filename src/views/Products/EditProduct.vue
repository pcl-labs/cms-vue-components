<template>
  <div class="mb-6">
    <h1>Product Edit Page</h1>
  </div>

  <div class="space-y-6">
    <div
      class="lg:flex items-start space-y-6 lg:space-y-0 lg:space-x-4 xl:space-x-8"
    >
      <!-- left -->
      <div class="w-full space-y-6">
        <!-- Product URL -->
        <div
          class="border border-brand-gray-500 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h3>Product URL</h3>
          <div class="w-full sm:w-80 mt-4">
            <input type="text" placeholder="https://tiktok.com/example" />
          </div>
        </div>

        <!-- Description -->
        <div
          class="border border-brand-gray-500 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <div>
            <label for="title" class="block">Title</label>
            <input
              id="title"
              type="text"
              class="w-full sm:w-80 mt-1"
              placeholder="Title"
            />
          </div>
        </div>

        <!-- Media -->
        <div
          class="border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <div>
            <h3>Media</h3>
          </div>

          <div
            class="border border-dashed border-brand-gray-300 rounded-lg hover:border-brand-gray-500 hover:bg-brand-gray-100 px-4 mt-5"
          >
            <label class="flex flex-col items-center cursor-pointer py-9">
              <span class="flex items-center space-x-2">
                <span
                  class="block text-xs text-brand-green bg-brand-green/10 rounded hover:bg-brand-green/20 transition py-1 px-1.5 mx-auto"
                >
                  Add files
                </span>
                <span class="font-medium text-brand-green">Add from URL</span>
              </span>
              <input type="file" class="hidden" />

              <p class="text-xs text-brand-gray-900 text-center pt-4">
                Accepts .gif, .jpg, and .png
              </p>
            </label>
          </div>
        </div>

        <button
          class="w-full md:w-auto bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 rounded py-2.5 px-7 mt-2 md:mt-0"
        >
          Save
        </button>
      </div>

      <!-- right -->
      <div class="lg:max-w-xs xl:max-w-[360px] w-full space-y-4">
        <!-- Source -->
        <div
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h3>Source</h3>

          <div class="space-y-2 mt-4">
            <div class="flex items-start space-x-2.5">
              <input
                class="w-4 h-4 accent-brand-green shrink-0"
                type="radio"
                name="source"
                id="custom"
              />
              <label for="custom" class="text-sm">Custom</label>
            </div>
            <div class="flex items-start space-x-2.5">
              <input
                class="w-4 h-4 accent-brand-green shrink-0"
                type="radio"
                name="source"
                id="shopify"
              />
              <label for="shopify" class="text-sm"> Shopify </label>
            </div>
          </div>
        </div>

        <!-- Posts -->
        <div
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <div>
            <h3>Posts</h3>
            <p class="mt-1">Tag UGC content to track Purchases</p>
          </div>
          <form class="mt-3.5">
            <div class="md:flex items-center md:space-x-2">
              <div class="relative flex-1">
                <input type="text" class="!pl-9" placeholder="Search posts" />

                <svg
                  class="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2.5 pointer-events-none"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 12C5.791 12 4 10.209 4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12ZM17.707 16.293L12.887 11.473C13.585 10.492 14 9.296 14 8C14 4.687 11.313 2 8 2C4.687 2 2 4.687 2 8C2 11.313 4.687 14 8 14C9.296 14 10.492 13.585 11.473 12.887L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
                    fill="#595B69"
                  />
                </svg>
              </div>
              <button
                class="w-full md:w-auto bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-body leading-5 rounded py-2.5 px-3 mt-2 md:mt-0"
              >
                Browse
              </button>
            </div>
          </form>

          <div class="divide-y divide-brand-gray-300 space-y-4 py-4">
            <div class="flex items-center justify-between first:pt-0 pt-4">
              <div class="flex items-center space-x-3.5">
                <div
                  class="w-14 h-14 shrink-0 rounded overflow-hidden relative"
                >
                  <img class="w-full h-full" src="/images/user.png" alt="" />
                </div>
                <div class="w-36 shrink-0">
                  <h4>Loved these sock...</h4>
                  <div
                    class="inline-flex items-center text-brand-green space-x-1.5"
                  >
                    <svg class="w-4 h-4">
                      <use
                        href="../../assets/icons/instagram.svg#instagram"
                      ></use>
                    </svg>
                    <p class="font-medium">MarisoPop</p>
                  </div>
                </div>
              </div>

              <button type="button" class="hover:bg-brand-gray-200 p-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L8.58579 10L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L10 11.4142L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L11.4142 10L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L10 8.58579L6.70711 5.29289Z"
                    fill="#595B69"
                  />
                </svg>
              </button>
            </div>
            <div class="flex items-center justify-between first:pt-0 pt-4">
              <div class="flex items-center space-x-3.5">
                <div
                  class="w-14 h-14 shrink-0 rounded overflow-hidden relative"
                >
                  <img class="w-full h-full" src="/images/user.png" alt="" />
                </div>
                <div class="w-36 shrink-0">
                  <h4>Loved these sock...</h4>
                  <div
                    class="inline-flex items-center text-brand-green space-x-1.5"
                  >
                    <svg class="w-4 h-4">
                      <use
                        href="../../assets/icons/instagram.svg#instagram"
                      ></use>
                    </svg>
                    <p class="font-medium">MarisoPop</p>
                  </div>
                </div>
              </div>

              <button type="button" class="hover:bg-brand-gray-200 p-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L8.58579 10L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L10 11.4142L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L11.4142 10L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L10 8.58579L6.70711 5.29289Z"
                    fill="#595B69"
                  />
                </svg>
              </button>
            </div>
            <div class="flex items-center justify-between first:pt-0 pt-4">
              <div class="flex items-center space-x-3.5">
                <div
                  class="w-14 h-14 shrink-0 rounded overflow-hidden relative"
                >
                  <img class="w-full h-full" src="/images/user.png" alt="" />
                </div>
                <div class="w-36 shrink-0">
                  <h4>Loved these sock...</h4>
                  <div
                    class="inline-flex items-center text-brand-green space-x-1.5"
                  >
                    <svg class="w-4 h-4">
                      <use
                        href="../../assets/icons/instagram.svg#instagram"
                      ></use>
                    </svg>
                    <p class="font-medium">MarisoPop</p>
                  </div>
                </div>
              </div>

              <button type="button" class="hover:bg-brand-gray-200 p-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L8.58579 10L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L10 11.4142L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L11.4142 10L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L10 8.58579L6.70711 5.29289Z"
                    fill="#595B69"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SelectTime from "@/components/Elements/SelectTime.vue";
</script>
