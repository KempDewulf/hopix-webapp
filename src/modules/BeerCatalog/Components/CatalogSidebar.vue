<script>
import {initFlowbite} from "flowbite";
import BreweryFilterService from "@/modules/Filters/Services/BreweryFilterService.js";
import AromaFilterService from "@/modules/Filters/Services/AromaFilterService.js";

export default {
  name: "CatalogSidebar",
  inheritAttrs: false,
  emits: ['sort-changed', 'selected-breweries-changed', 'selected-aromas-changed'],
  data() {
    return {
      BreweryService: new BreweryFilterService(),
      AromaService: new AromaFilterService(),
      breweries: [],
      aromas: [],
      selectedBreweries: [],
      selectedAromas: [],
      sort: "rating",
    };
  },
  watch: {
    sort(newSortValue) {
      this.$emit('sort-changed', newSortValue);
    },
    selectedBreweries(newSelectedBreweries) {
      this.$emit('selected-breweries-changed', newSelectedBreweries);
    },
    selectedAromas(newSelectedAromas) {
      this.$emit('selected-aromas-changed', newSelectedAromas);
    },

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
      this.breweries = await this.BreweryService.all();
    },
    async fetchAromas() {
      this.aromas = await this.AromaService.all();
    },
  }
}
</script>

<template>
  <div class="">
    <div class="flex justify-between border-b-2 border-b-gray-200 md:hidden">
      <button data-drawer-target="filter-sidebar" data-drawer-toggle="filter-sidebar" aria-controls="filter-sidebar" type="button" class="inline-flex items-center w-28 p-2 my-2 mx-3 text-sm text-gray-500 rounded-lg bg-gray-200 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        <p class="pl-4 text-base">Filters</p>
      </button>
      <button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio" class="md:hidden w-20 p-2 my-2 mx-3 text-sm text-gray-500 rounded-lg bg-gray-200 text-center inline-flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-gray-200" type="button">
        {{ $t('sort') }}
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="dropdownDefaultRadio" class="z-10 hidden w-24 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" >
        <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
          <li>
            <div class="flex items-center">
              <input v-model="sort" id="default-radio-1" type="radio" value="rating" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
              <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('rating_dropdown') }}</label>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <input v-model="sort" id="default-radio-2" type="radio" value="name" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
              <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('name') }}</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <aside id="filter-sidebar" class="fixed top-16 left-0 z-40 w-3/4 md:w-72 h-full transition-transform -translate-x-full md:static md:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 border-r-2">
        <ul class="space-y-2 font-medium pt-5">
          <li>
            <h2 class="text-lg font-primary font-bold text-hopix-gray">{{ $t('sort_by') }}:</h2>
            <ul class="overflow-y-auto pt-2 h-16 w-3/4 border-t-2 px-1">
              <li>
                <div class="flex items-center">
                  <input v-model="sort" id="b" type="radio" value="rating" name="b" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="b" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('rating_dropdown') }}</label>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <input v-model="sort" id="a" type="radio" value="name" name="a" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="a" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('name') }}</label>
                </div>
              </li>
            </ul>
          </li>
          <li class="pb-5">
            <h2 class="text-lg font-primary font-bold text-hopix-gray">{{ $t('brewery') }}</h2>
            <ul class="overflow-y-auto h-36 w-3/4 border-y-2 px-1 whitespace-nowrap overflow-x-hidden text-ellipsis">
              <li v-for="brewery in breweries" class="text-ellipsis overflow-hidden">
                <input :id="brewery.id" type="checkbox" :value="brewery.id" v-model="selectedBreweries" class="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label :for="brewery.id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{brewery.name}}</label>
              </li>
            </ul>
          </li>
          <li>
            <h2 class="text-lg font-primary font-bold text-hopix-gray">{{ $t('aroma') }}</h2>
            <ul class="overflow-y-auto h-36 w-3/4 border-y-2 px-1 whitespace-nowrap overflow-x-hidden text-ellipsis">
              <li v-for="aroma in aromas" class="text-ellipsis overflow-hidden">
                <input :id="aroma.id" type="checkbox" :value="aroma.id" v-model="selectedAromas" class="m-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label :for="aroma.id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {{aroma.name}}</label>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  </div>

</template>
