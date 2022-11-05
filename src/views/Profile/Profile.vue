<template>
  <div class="mb-6">
    <h1>Profile</h1>
  </div>

  <div class="space-y-6 divide-y divide-brand-gray-500">
    <div class="grid lg:grid-cols-5 gap-5">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Profile Information</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Update your account's profile information and email address.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <div>
            <label for="phote" class="block mb-2.5">Photo </label>
            <div class="flex items-center space-x-2.5">
              <div class="w-14 h-14 rounded-full overflow-hidden">
                <img class="w-full h-full" src="/images/user.png" alt="" />
              </div>
              <div class="space-y-2">
                <label
                  for="select-phote"
                  class="block relative w-full bg-white hover:bg-brand-gray-200 border border-brand-gray-500 font-semibold leading-5 whitespace-nowrap rounded py-2.5 px-5 cursor-pointer"
                >
                  <span>Select a new photo</span>
                  <input type="file" id="select-phote" class="sr-only" />
                </label>
                <button
                  type="button"
                  class="bg-brand-gray-200 hover:bg-brand-gray-300 font-semibold rounded px-4 py-2"
                >
                  Remove photo
                </button>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <label for="name" class="block">Name</label>
              <input
                id="name"
                type="text"
                class="w-full sm:w-80 mt-1"
                placeholder="Name"
              />
            </div>
            <div>
              <label for="email" class="block">Email</label>
              <input
                id="email"
                type="email"
                class="w-full sm:w-80 mt-1"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="text-right">
            <button
              class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-body leading-5 rounded py-2.5 px-5"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Set Password -->
    <div class="grid lg:grid-cols-5 gap-5 pt-6">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Set Password</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Ensure your account is using a long, random password to stay secure.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <div class="space-y-4">
            <div>
              <label for="password" class="block">New Password</label>
              <input
                id="password"
                type="password"
                class="w-full sm:w-80 mt-1"
                placeholder="New Password"
              />
            </div>
            <div>
              <label for="password-2" class="block">Confirm Password</label>
              <input
                id="password-2"
                type="password"
                class="w-full sm:w-80 mt-1"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="text-right">
            <button
              class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-body leading-5 rounded py-2.5 px-5"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Two Factor Authentication -->
    <div class="grid lg:grid-cols-5 gap-5 pt-6">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Two Factor Authentication</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Add additional security to your account using two factor
            authentication.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <div
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h4>You have not enabled two factor authentication.</h4>
          <p class="max-w-lg mt-2">
            When two factor authentication is enabled, you will be prompted for
            a secure, random token during authentication. You may retrieve this
            token from your phone's Google Authenticator application.
          </p>
          <div class="mt-7">
            <button
              class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-body leading-5 rounded py-2.5 px-5"
            >
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Connected Accounts -->
    <div class="grid lg:grid-cols-5 gap-5 pt-6">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Connected Accounts</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Manage and remove your connected accounts.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <div
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom p-5 xl:p-10"
        >
          <h4>Your connected accounts.</h4>
          <p class="max-w-lg mt-2">
            You are free to connect any social accounts to your profile and may
            remove any connected accounts at any time. If you feel any of your
            connected accounts have been compromised, you should disconnect them
            immediately and change your password.
          </p>
          <div class="space-y-6 py-8">
            <div
              v-for="social in socialsConnect"
              class="flex items-center justify-between"
            >
              <div class="flex items-start space-x-2.5">
                <img
                  class="w-4 h-4 shrink-0 mt-1"
                  :src="'/images/social-icons/' + social.icon + '.svg'"
                  alt=""
                />
                <div>
                  <h4>{{ social.name }}</h4>
                  <p class="text-xs text-brand-gray-900">Not connected.</p>
                </div>
              </div>
              <button
                class="bg-white hover:bg-brand-gray-200 border border-brand-gray-500 font-semibold leading-5 whitespace-nowrap rounded py-2.5 px-4"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const socialsConnect = [
  {
    name: "Github",
    icon: "github",
    connected: false,
  },
  {
    name: "Google",
    icon: "google",
    connected: false,
  },
  {
    name: "Facebook",
    icon: "facebook",
    connected: false,
  },
  {
    name: "Twitter",
    icon: "twitter",
    connected: false,
  },
];

const handleConnect = (social) => {
  // functions go from here
};
</script>
