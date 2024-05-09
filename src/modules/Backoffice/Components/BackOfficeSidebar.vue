<script>
export default {
  name: "BackOfficeSidebar"
}
</script>

<template>
  <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 pb-5 py-4 overflow-y-auto bg-header">
      <h1 class="font-primary text-4xl font-bold text-hopix-yellow">
        Dashboard
      </h1>
      <div class="pt-10">
        <ul class="space-y-2 font-medium">
          <li>
            <a href="#" @click.prevent="$emit('switchView', 'beers')" class="flex items-center p-2 text-gray-900 rounded-lg">
              <svg class="w-5 h-5 text-gray-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
              </svg>
              <span class="ms-3 text-white">Beers</span>
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="$emit('switchView', 'breweries')" class="flex items-center p-2 text-gray-900 rounded-lg">
              <svg class="w-5 h-5 text-gray-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
              </svg>
              <span class="ms-3 text-white">Breweries</span>
            </a>
          </li>
        </ul>
        <div class="absolute bottom-0 left-0 mb-5 ml-5">
          <router-link to="/" class="flex items-center p-2 text-gray-900 rounded-lg">
            <svg class="flex-shrink-0 w-5 h-5 text-hopix-yellow transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap text-white">Exit dashboard</span>
          </router-link>
        </div>
      </div>

    </div>

  </aside>
</template>

<style scoped>

</style>