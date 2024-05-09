<script>
import CustomPagination from "@/modules/Pagination/Components/CustomPagination.vue";
import {initFlowbite} from "flowbite";
import BackOfficeService from "@/modules/Backoffice/Services/BackOfficeService.js";

export default {
  name: "BackOfficeBeer",
  components: {CustomPagination},
  props: {
    beers: Array,
    breweries: Array,
    aromas: Array,
    linkData: Object,
    highestID: Number,
  },
  data() {
    return {
      newBeer: {
        id: null,
        name: '',
        style: '',
        abv: null,
        drinking_temp: null,
        ibu: null,
        description: '',
        brewery_id: null,
        aroma_ids: [],
        languages: [
          {
            language_id: 1,
            name: '',
            style: '',
            description: ''
          },
          {
            language_id: 2,
            name: '',
            style: '',
            description: ''
          }
        ]
      }
    }
  },
  computed: {
    beerName: {
      get() {
        return this.newBeer.languages[1].name;
      },
      set(value) {
        this.newBeer.name = value;
        this.newBeer.languages[1].name = value;
      }
    },
    beerStyle: {
      get() {
        return this.newBeer.languages[1].style;
      },
      set(value) {
        this.newBeer.style = value;
        this.newBeer.languages[1].style = value;
      }
    },
    beerDescription: {
      get() {
        return this.newBeer.languages[1].description;
      },
      set(value) {
        this.newBeer.description = value;
        this.newBeer.languages[1].description = value;
      }
    },
    isFormValid() {
      return this.newBeer.name !== '' &&
          this.newBeer.style !== '' &&
          this.newBeer.abv !== null &&
          this.newBeer.drinking_temp !== null &&
          this.newBeer.ibu !== null &&
          this.newBeer.description !== '' &&
          this.newBeer.brewery_id !== null &&
          this.newBeer.aroma_ids.length > 0 &&
          this.newBeer.languages.every(language => language.language_id !== null && language.name !== '' && language.style !== '' && language.description !== '');
    }
  },
  watch: {
    newBeer: {
      handler(newBeer) {
        this.beerName = newBeer.languages[1].name;
        this.beerStyle = newBeer.languages[1].style;
        this.beerDescription = newBeer.languages[1].description;
      },
      deep: true
    }
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    calculateRating(beer) {
      if (beer.amount_of_ratings === 0) {
        return 0;
      }
      return beer.sum_ratings / beer.amount_of_ratings;
    },
    async editBeer(beerId) {
      const response = await BackOfficeService.getBeerWithAllLanguages(beerId);
      this.newBeer = response.data;
    },
    deleteBeer(beerId) {
      this.$emit('delete-beer', beerId);
    },
    submitBeer() {
      this.$emit('submit-beer', this.newBeer);
      this.clearNewBeer();
    },
    clearNewBeer() {
      this.newBeer = {
        id: null,
        name: '',
        style: '',
        abv: null,
        drinking_temp: null,
        ibu: null,
        description: '',
        brewery_id: null,
        aroma_ids: [],
        languages: [
          {
            language_id: 1,
            name: '',
            style: '',
            description: ''
          },
          {
            language_id: 2,
            name: '',
            style: '',
            description: ''
          }
        ]
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full h-full items-center justify-between bg-gray-50">
    <div class="w-3/4 h-1/2 mt-10 relative overflow-x-auto shadow-md sm:rounded-lg mb-10 bg-white pt-5">
      <div class="w-full px-5">
        <form class="max-w-full mx-auto flex justify-between align-middle">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Picture</label>
            <input class="block file:!bg-hopix-yellow file:!text-hopix-text-gray w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="user_avatar_help" id="user_avatar" type="file">
          </div>
          <div>
            <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ABV (%):</label>
            <div class="relative flex items-center max-w-[8rem]">
              <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                </svg>
              </button>
              <input type="number" v-model="newBeer.abv" id="quantity-input" data-input-counter data-input-counter-min="0" data-input-counter-max="100" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-hopix-yellow focus:border-hopix-yellow block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="0" value="5" required />
              <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Temp (°C):</label>
            <div class="relative flex items-center max-w-[8rem]">
              <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input2" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                </svg>
              </button>
              <input type="number" v-model="newBeer.drinking_temp" id="quantity-input2" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-hopix-yellow focus:border-hopix-yellow block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="0" value="5" required />
              <button type="button" id="increment-button" data-input-counter-increment="quantity-input2" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IBU:</label>
            <div class="relative flex items-center max-w-[8rem]">
              <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input3" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                </svg>
              </button>
              <input type="number" v-model="newBeer.ibu" id="quantity-input3" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-hopix-yellow focus:border-hopix-yellow block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="0" value="5" required />
              <button type="button" id="increment-button" data-input-counter-increment="quantity-input3" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="h-fit">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" v-model="newBeer.brewery_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow">
              <option v-for="brewery in breweries" :value="brewery.id" :id="brewery.id">{{brewery.name}}</option>
            </select>
          </div>
          <div class="h-fit mt-7">
            <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" class="justify-between w-36 h-10 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-hopix-text-gray bg-hopix-yellow rounded-lg" type="button">
              Aromas
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div id="dropdownSearch" class="overflow-y-scroll h-36 z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
              <ul v-for="(aroma, index) in aromas" class=" px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input :id="'checkbox-item-' + index" type="checkbox" :value="aroma.id" v-model="newBeer.aroma_ids" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-hopix-yellow dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label :for="'checkbox-item-' + index" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{aroma.name}}</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </form>
        <form action="" class="flex w-full mt-10 pt-10 h-96">
          <div class="h-full flex w-full align-middle justify-evenly">
            <div class="">
              <h2 class="mb-2 font-primary font-bold">English:</h2>
              <div class="flex mb-5">
                <div class="mr-10">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input id="name" v-model="beerName" class="w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="Name" required>
                </div>
                <div>
                  <label for="style" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Style</label>
                  <input id="style" v-model="beerStyle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="Style" required>
                </div>
               </div>
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="description" v-model="beerDescription" class="resize-none overflow-y-scroll bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block h-32 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="Description" required></textarea>
            </div>
            <div class="">
              <h2 class="mb-2 font-primary font-bold">Dutch:</h2>
              <div class="flex mb-5">
                <div class="mr-10">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input id="name" v-model="newBeer.languages[0].name"  class="w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="Name" required>
                </div>
                <div>
                  <label for="style" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Style</label>
                  <input id="style" v-model="newBeer.languages[0].style" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="Style" required>
                </div>
              </div>
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="description" v-model="newBeer.languages[0].description" class="resize-none overflow-y-scroll bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block h-32 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="Description" required></textarea>
            </div>
          </div>
          <div class="w-1/4">
            <div>
              <p class="mb-3">Leave blank to add new item</p>
              <label for="id">ID:</label>
              <input id="id" type="number" v-model.number="newBeer.id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-hopix-yellow focus:border-hopix-yellow block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-hopix-yellow dark:focus:border-hopix-yellow" placeholder="" required>
            </div>
            <div class="mt-16">
              <button type="button" @click="submitBeer" :disabled="!isFormValid" class="w-44 h-12 bg-hopix-yellow font-primary font-bold text-hopix-text-gray rounded-lg text-lg px-5 py-2.5 me-2 mb-2">Submit</button>
            </div>
            <div class="mt-3">
              <button type="button" @click="clearNewBeer" class="w-44 h-12 bg-hopix-gray font-primary font-bold text-white rounded-lg text-lg px-5 py-2.5 me-2 mb-2">Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10 bg-white">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="sr-only">Beers</caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            id
          </th>
          <th scope="col" class="px-6 py-3 w-40">
            name
          </th>
          <th scope="col" class="px-6 py-3 w-36">
            style
          </th>
          <th scope="col" class="px-6 py-3">
            abv
          </th>
          <th scope="col" class="px-6 py-3">
            temp
          </th>
          <th scope="col" class="px-6 py-3">
            ibu
          </th>
          <th scope="col" class="px-6 py-3 w-56">
            description
          </th>
          <th scope="col" class="px-6 py-3">
            rating
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="beer in beers" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ beer.id }}
          </th>
          <td class="px-6 py-4 max-w-40 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {{ beer.name }}
          </td>
          <td class="px-6 py-4">
            {{ beer.style }}
          </td>
          <td class="px-6 py-4">
            {{ beer.abv }}
          </td>
          <td class="px-6 py-4">
            {{ beer.drinking_temp }}
          </td>
          <td class="px-6 py-4">
            {{ beer.ibu }}
          </td>
          <td class="px-6 py-4 max-w-56 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {{ beer.description }}
          </td>
          <td class="px-6 py-4">
            {{ calculateRating(beer) }}
          </td>
          <td class="px-6 py-4 text-right">
            <a href="#" @click.prevent="editBeer(beer.id)" class="font-medium text-blue-600 dark:text-hopix-yellow hover:underline">Edit</a>
          </td>
          <td class="px-6 py-4 text-right">
            <a href="#" @click.prevent="deleteBeer(beer.id)" class="font-medium text-red-600 dark:text-hopix-yellow hover:underline">Delete</a>
          </td>
        </tr>
        </tbody>
      </table>
      <div>
        <custom-pagination :link-data="linkData" :max-pages="10" @page-changed="$emit('page-changed', $event)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>