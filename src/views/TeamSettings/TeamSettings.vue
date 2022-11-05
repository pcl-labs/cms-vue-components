<template>
  <div class="mb-6">
    <h1>Team Settings</h1>
  </div>

  <div class="space-y-6 divide-y divide-brand-gray-500">
    <div class="grid lg:grid-cols-5 gap-5">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Team Name</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            The team's name and owner information.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <div>
            <label for="team-owner" class="block mb-2.5"> Team Owner </label>
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
            <label for="title" class="block">Title</label>
            <input
              id="title"
              type="text"
              class="w-full sm:w-80 mt-1"
              placeholder="Title"
            />
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
    <!-- SMS Publishing -->
    <div class="grid lg:grid-cols-5 gap-5 pt-6">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>SMS Publishing</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Verify your phone number to publish content directly from your
            phone.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <div>
            <label for="phone" class="block">Phone number</label>
            <input
              id="phone"
              type="text"
              class="w-full sm:w-80 mt-1"
              placeholder="Phone number"
            />
          </div>
          <div>
            <h4>Scheduling</h4>
            <p class="mt-2">
              Your post queue can publish immediately upon recieving your text,
              or save them in drafts. The quicker you show your user generated
              content, the greater your response!
            </p>

            <div class="mt-4 space-y-2.5">
              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="immediately"
                  class="w-4 h-4 accent-brand-green p-1"
                />
                <label for="immediately">Publish immediately (suggested)</label>
              </div>
              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="7-days"
                  class="w-4 h-4 accent-brand-green p-1"
                />
                <label for="7-days">Automatically publish after 7 days</label>
              </div>
              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="store"
                  class="w-4 h-4 accent-brand-green p-1"
                />
                <label for="store">Store in drafts</label>
              </div>
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
    <!-- Add Team Member -->
    <div class="grid lg:grid-cols-5 gap-5 pt-6">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Add Team Member</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Add a new team member to your team, allowing them to collaborate
            with you.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <div>
            <label for="email" class="block">Email</label>
            <input
              id="email"
              type="text"
              class="w-full sm:w-80 mt-1"
              placeholder="Email"
            />
            <p class="text-xs text-brand-gray-900 mt-2">
              Please provide the email address of the person you would like to
              add to this team.
            </p>
          </div>
          <div>
            <h4>Role</h4>
            <div class="mt-4 space-y-2.5">
              <div class="flex items-start space-x-2">
                <input
                  type="radio"
                  name="role"
                  id="administrator"
                  class="w-4 h-4 accent-brand-green p-1 mt-1 peer"
                />
                <label for="administrator">
                  <span class="block font-medium">Administrator</span>
                  <span class="block text-brand-gray-900"
                    >Administrator users can perform any action.</span
                  >
                </label>
              </div>
              <div class="flex items-start space-x-2">
                <input
                  type="radio"
                  name="role"
                  id="editor"
                  class="w-4 h-4 accent-brand-green p-1 mt-1"
                />
                <label for="editor">
                  <span class="block font-medium">Editor</span>
                  <span class="block text-brand-gray-900"
                    >Editor users have the ability to read, create, and
                    update.</span
                  >
                </label>
              </div>
            </div>
          </div>
          <div class="text-right">
            <button
              class="bg-brand-green hover:bg-brand-green-hover text-white font-semibold text-body leading-5 rounded py-2.5 px-5"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Create API Token -->
    <div class="grid lg:grid-cols-5 gap-5 pt-6">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Create API Token</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            API tokens aloow third-party services to authentificate with our
            application on your behalf.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <div>
            <label for="name" class="block">Name</label>
            <input
              id="name"
              type="text"
              class="w-full sm:w-80 mt-1"
              placeholder="Name"
            />
          </div>

          <div class="space-y-2.5">
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="create"
                class="w-4 h-4 accent-brand-green p-1"
              />
              <label for="create">Create</label>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="read"
                class="w-4 h-4 accent-brand-green p-1"
              />
              <label for="read">Read</label>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="delete"
                class="w-4 h-4 accent-brand-green p-1"
              />
              <label for="delete">Delete</label>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="update"
                class="w-4 h-4 accent-brand-green p-1"
              />
              <label for="update">Update</label>
            </div>
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

    <!-- Delete Team -->
    <div class="grid lg:grid-cols-5 gap-5 pt-6">
      <div class="lg:col-span-2">
        <div class="max-w-xs">
          <h3>Delete Team</h3>
          <p class="text-body text-brand-gray-900 mt-1">
            Permanently delete this team.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <form
          class="w-full border border-brand-gray-300 rounded-lg bg-white shadow-custom space-y-6 p-5 xl:p-10"
        >
          <p class="max-w-lg">
            Once a team is deleted, all of its resources and data will be
            permanently deleted. Before deleting this team, please download any
            data or information regarding this team that you wish to retain.
          </p>

          <button
            class="bg-brand-red hover:bg-red-600 text-white font-semibold text-body leading-5 rounded py-2.5 px-5"
          >
            Delete Team
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
