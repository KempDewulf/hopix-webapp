<script>
export default {
  name: "ProfileView"
}
</script>

<template>
  <main class="flex justify-around w-full min-h-screen py-1">
    <div class="flex p-2 md:p-4">
      <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg flex-grow">
        <div class="grid max-w-2xl mx-auto mt-8">
          <div class="items-center mt-8 sm:mt-14 text-[#202142]">
            <div class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div class="w-full">
                <label for="first_name" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your first name</label>
                <input type="text" id="first_name" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="Your first name" value="Jane" required>
              </div>
              <div class="w-full">
                <label for="last_name" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your last name</label>
                <input type="text" id="last_name" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="Your last name" value="Ferguson" required>
              </div>
            </div>
            <div class="mb-2 sm:mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your email</label>
              <input type="email" id="email" class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="your.email@mail.com" required>
            </div>
            <div class="flex justify-end">
              <button type="submit" class="text-hopix-text-gray bg-hopix-yellow focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-max">
        <div class="w-80">
          <p>hello</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>