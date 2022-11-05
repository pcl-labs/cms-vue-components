<template>
  <div class="border-b border-brand-gray-500 mb-6 pb-6">
    <h1>Post Edit Page</h1>
    <p class="text-body mt-2">
      This is what is displayed after a post is added via url
    </p>
  </div>

  <div class="space-y-6">
    <div class="flex items-center space-x-3.5">
      <img
        class="w-[22px] h-[22px]"
        src="../../assets/icons/instagram.svg"
        alt=""
      />
      <span class="text-brand-green">•</span>
      <h3>@PaulChrisLuke</h3>
      <span class="text-brand-green">•</span>
      <span class="font-semibold text-2xl">👑</span>
    </div>

    <div
      class="lg:flex items-start space-y-6 lg:space-y-0 lg:space-x-4 xl:space-x-8"
    >
      <!-- left -->
      <div class="w-full space-y-6">
        <!-- source URL -->
        <div
          class="border border-brand-gray-500 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h3>Source URL</h3>
          <div class="w-full sm:w-80 mt-4">
            <input type="text" placeholder="https://tiktok.com/example" />
          </div>
        </div>

        <!-- Description -->
        <div
          class="border border-brand-gray-500 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h3>Description</h3>
          <div class="w-full sm:w-80 mt-4">
            <input
              type="text"
              placeholder="I just love these socks! Love love love!"
            />
          </div>
        </div>

        <!-- Product -->
        <div
          class="border border-brand-gray-500 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <div>
            <h3>Product</h3>
            <p class="text-body mt-1">Tag products to track purchases</p>
          </div>
          <form class="mt-5">
            <div class="md:flex items-center md:space-x-2">
              <div class="relative flex-1">
                <input type="text" class="!pl-9" />

                <svg
                  class="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none"
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
                class="w-full md:w-auto bg-brand-green hover:bg-brand-green-hover text-white font-semibold leading-5 rounded py-2.5 px-7 mt-2 md:mt-0"
              >
                Browse
              </button>
            </div>
          </form>

          <div class="divide-y divide-brand-gray-500 py-4 space-y-5">
            <div
              class="w-full flex items-center justify-between first:pt-0 pt-5"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-14 h-14 shrink-0 border border-brand-gray-500 rounded-md p-1.5"
                >
                  <img
                    class="w-full h-full object-contain"
                    src="/images/sock.png"
                    alt=""
                  />
                </div>
                <p class="text-sm">Product name</p>
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
            <div class="w-full flex items-center justify-between pt-5">
              <div class="flex items-center space-x-4">
                <div
                  class="w-14 h-14 shrink-0 border border-brand-gray-500 rounded-md p-1.5"
                >
                  <img
                    class="w-full h-full object-contain"
                    src="/images/sock.png"
                    alt=""
                  />
                </div>
                <p class="text-sm">Product name</p>
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

        <!-- Approval Record -->
        <div
          class="border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <div>
            <h3>Approval Record</h3>
            <p class="text-body mt-1">Add proof of consent to use</p>
          </div>

          <div
            class="border border-dashed border-brand-gray-300 rounded-lg hover:border-brand-gray-500 hover:bg-brand-gray-100 px-4 mt-5"
          >
            <label class="flex flex-col items-center cursor-pointer py-9">
              <span
                class="block text-xs text-brand-green bg-brand-green/10 rounded hover:bg-brand-green/20 transition ease-linear py-1 px-1.5 mx-auto"
                >Add files</span
              >
              <input type="file" class="hidden" />

              <p class="text-xs text-brand-gray-900 text-center pt-4">
                Accepts .gif, .jpg, and .png
              </p>
            </label>
          </div>
        </div>

        <!-- Notes -->
        <div
          class="border border-brand-gray-500 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <div>
            <h3>Notes</h3>
            <p class="text-body mt-1">(will not be shown to customers)</p>
          </div>

          <div class="mt-5 pb-5">
            <textarea
              id="notes"
              rows="5"
              class="block resize-none w-full h-full p-5"
            ></textarea>
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
        <!-- visibility -->
        <div
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h3>Visibility</h3>

          <div class="space-y-2 mt-4">
            <div class="flex items-start space-x-2.5">
              <input
                class="w-4 h-4 accent-brand-green shrink-0"
                type="radio"
                name="visibility"
                id="visible"
              />
              <label for="visible" class="text-sm">Visible</label>
            </div>
            <div class="flex items-start space-x-2.5">
              <input
                class="w-4 h-4 accent-brand-green shrink-0"
                type="radio"
                name="visibility"
                id="hide"
              />
              <label for="hide" class="text-sm">
                Hidden (will become visible on 9/10/2022, 12:30 PM EDT)
              </label>
            </div>
          </div>

          <div class="mt-5">
            <label class="block mb-1">Visibility date</label>
            <input
              class="w-full h-10 border rounded mb-2 focus:ring-1 focus:ring-brand-green"
              type="date"
              name=""
              id=""
            />
            <SelectTime />
          </div>

          <button
            class="text-15 text-brand-green hover:text-brand transition ease-linear mt-5"
          >
            Clear date
          </button>
        </div>

        <!-- Content displayed -->
        <div
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h3>Content displayed</h3>

          <div class="relative w-full h-[400px] rounded overflow-hidden mt-5">
            <div class="w-full h-full bg-gray-400">
              <button
                class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="60" height="60" rx="30" fill="white" />
                  <path d="M25 38V22L38 30L25 38Z" fill="#008060" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Tags -->
        <div
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <div class="flex items-center justify-between">
            <h3>Tags</h3>
            <button
              class="text-body text-brand-green hover:opacity-80 transition ease-linear"
            >
              Manage
            </button>
          </div>

          <div class="border-2 border-brand-green rounded-md p-0.5 my-5">
            <p class="text-sm border border-brand-gray-300 rounded py-2.5 px-3">
              socks
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-custom p-3">
            <div class="border-2 border-brand-green rounded-md p-0.5">
              <button
                class="w-full flex items-center bg-brand-green/10 space-x-2.5 py-2.5 px-3"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0ZM11.5 8.66663H8.66663V11.5C8.66663 11.868 8.36804 12.1666 8 12.1666C7.63196 12.1666 7.33337 11.868 7.33337 11.5V8.66663H4.5C4.13196 8.66663 3.83337 8.36804 3.83337 8C3.83337 7.63196 4.13196 7.33337 4.5 7.33337H7.33337V4.5C7.33337 4.13196 7.63196 3.83337 8 3.83337C8.36804 3.83337 8.66663 4.13196 8.66663 4.5V7.33337H11.5C11.868 7.33337 12.1666 7.63196 12.1666 8C12.1666 8.36804 11.868 8.66663 11.5 8.66663Z"
                    fill="#595B69"
                  />
                </svg>
                <p class="text-sm"><span class="font-bold">Add</span> socks</p>
              </button>
            </div>

            <div class="flex items-center space-x-2 pt-4 px-3">
              <input
                class="w-4 h-4 accent-brand-green"
                type="checkbox"
                name=""
                id=""
              />
              <p class="text-sm">socks</p>
            </div>
          </div>

          <div class="pt-6">
            <div
              class="inline-block bg-brand-gray-300 rounded space-x-2 py-1 px-2 mb-2 mr-2"
            >
              <p class="inline">fashion</p>
              <button>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                    fill="#595B69"
                  />
                </svg>
              </button>
            </div>

            <div
              class="inline-block bg-brand-gray-300 rounded space-x-1.5 py-1 px-2 mb-2 mr-2"
            >
              <p class="inline">2022</p>
              <button>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                    fill="#595B69"
                  />
                </svg>
              </button>
            </div>

            <div
              class="inline-block bg-brand-gray-300 rounded space-x-1.5 py-1 px-2 mb-2 mr-2"
            >
              <p class="inline">pride</p>
              <button>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                    fill="#595B69"
                  />
                </svg>
              </button>
            </div>

            <div
              class="inline-block bg-brand-gray-300 rounded space-x-1.5 py-1 px-2 mb-2 mr-2"
            >
              <p class="inline">style</p>
              <button>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                    fill="#595B69"
                  />
                </svg>
              </button>
            </div>

            <div
              class="inline-block bg-brand-gray-300 rounded space-x-1.5 py-1 px-2 mb-2 mr-2"
            >
              <p class="inline">discount20%</p>
              <button>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
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
