<template>
  <div class="mb-6">
    <h1>Create New Team</h1>
  </div>

  <div class="space-y-6 divide-y divide-brand-gray-500">
    <div class="grid lg:grid-cols-5 gap-5">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Brand Details</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Create a new brand to collaborate with others on projects.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <div>
            <label for="team-owner" class="block mb-2.5"> Brand Owner </label>
            <div class="flex items-center space-x-2.5">
              <div class="w-14 h-14 rounded-full overflow-hidden">
                <img class="w-full h-full" src="/images/user.png" alt="" />
              </div>
              <div>
                <p class="font-bold leading-5">koko</p>
                <p>design.mailboxx@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <label for="brand-name" class="block">Brand name</label>
            <input
              id="brand-name"
              type="text"
              class="w-full sm:w-80 mt-1"
              placeholder="Brand name"
            />
          </div>
          <div class="text-right">
            <button
              class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-body leading-5 rounded py-2.5 px-5"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
