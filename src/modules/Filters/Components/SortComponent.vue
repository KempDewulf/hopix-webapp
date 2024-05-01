<script>
export default {
  name: "SortComponent",
  data() {
    return {
      sort: "rating"
    };
  },
  watch: {
    sort(newSortValue) {
      this.$emit('sort-changed', newSortValue);
    }
  }
}
</script>

<template>
  <div>
    <!-- Desktop version -->
    <div class="hidden md:block">
      <h2 class="text-lg font-primary font-bold text-hopix-gray">Sort by:</h2>
      <ul class="overflow-y-auto pt-2 h-16 w-3/4 border-t-2 px-1">
        <li>
          <div class="flex items-center">
            <input v-model="sort" id="b" type="radio" value="rating" name="b" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="b" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating</label>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <input v-model="sort" id="a" type="radio" value="name" name="a" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="a" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
          </div>
        </li>
      </ul>
    </div>

    <!-- Mobile version -->
    <div class="md:hidden">
      <button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio" class="w-16 p-2 my-2 mx-3 text-sm text-gray-500 rounded-lg bg-gray-200 text-center inline-flex items-center focus:outline-none focus:ring-2 focus:ring-gray-200" type="button">
        Sort
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="dropdownDefaultRadio" class="z-10 hidden w-24 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
          <li>
            <div class="flex items-center">
              <input v-model="sort" id="b" type="radio" value="rating" name="b" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
              <label for="b" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating</label>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <input v-model="sort" id="a" type="radio" value="name" name="a" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
              <label for="a" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
