<script>
export default {
  name: "HopixFooter"
}
</script>

<template>
  <footer class="bottom-0 left-0 z-20 w-full bg-header border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <div class="mx-auto max-w-screen-xl w-full px-4 flex justify-between">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/src/assets/images/logo.svg" class="h-8" alt="Hopix Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Hopix</span>
      </router-link>
      <span class="text-[10px] md:text-sm text-gray-400 self-center sm:text-center">
        Copyright © 2024
        <router-link to="/" class="hover:underline">Hopix™</router-link>.
        All Rights Reserved.
      </span>
    </div>
  </footer>
</template>
