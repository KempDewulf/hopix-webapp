<script>
import {initFlowbite} from "flowbite";
import BreweryFilterService from "@/modules/Filters/Services/BreweryFilterService.js";
import AromaFilterService from "@/modules/Filters/Services/AromaFilterService.js";

export default {
  name: "CatalogSidebar",
  data() {
    return {
      BreweryService: new BreweryFilterService(),
      AromaService: new AromaFilterService(),
      breweries: [],
      aromas: []
    };
  },
  created() {
    this.fetchBreweries();
    this.fetchAromas()
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    async fetchBreweries() {
      const allBreweries = await this.BreweryService.all();
      console.log(allBreweries)
      this.breweries = allBreweries;
    },
    async fetchAromas() {
      const allAromas = await this.AromaService.all();
      console.log(allAromas)
      this.aromas = allAromas;
    },
  }
}
</script>

<template>
  <button data-drawer-target="filter-sidebar" data-drawer-toggle="filter-sidebar" aria-controls="filter-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
    <p class="pl-4 text-base">Filters</p>
  </button>
  <aside id="filter-sidebar" class="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:static md:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li class="pb-5">
          <h2 class="text-lg font-bold">Brewery</h2>
          <ul class="overflow-y-auto h-24 border-t-2 px-1">
            <li v-for="brewery in breweries">
              <input :id="brewery.id" type="checkbox" :value="brewery.name" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label :for="brewery.id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {{brewery.name}}</label>
            </li>
          </ul>
        </li>
        <li>
          <h2 class="text-lg font-bold">Aroma</h2>
          <ul class="overflow-y-auto h-24 border-t-2 px-1">
            <li v-for="aroma in aromas">
              <input :id="aroma.id" type="checkbox" :value="aroma.name" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label :for="aroma.id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {{aroma.name}}</label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>
