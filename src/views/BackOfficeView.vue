<script>


import BackOfficeSidebar from "@/modules/Backoffice/Components/BackOfficeSidebar.vue";
import BackOfficeBeer from "@/modules/Backoffice/Components/BackOfficeBeer.vue";
import BackOfficeBrewery from "@/modules/Backoffice/Components/BackOfficeBrewery.vue";
import BackOfficeService from "@/modules/Backoffice/Services/BackOfficeService.js";

export default {
  name: "BackOfficeView",
  components: {BackOfficeBrewery, BackOfficeBeer, BackOfficeSidebar},
  data() {
    return {
      currentView: 'beers',
      currentPage: 1,
      perPage: 10,
      beers: [],
      breweries: [],
      aromas: [],
      linkData: {},
      url: null,
      isSuccessful: Boolean,
    };
  },
  created() {
    localStorage.setItem('language', 'en')
    this.fetchBeers();
    this.fetchBreweries();
    this.fetchAromas();
  },
  methods: {
    switchView(view) {
      this.currentView = view;
    },
    async fetchBeers(url) {
      const response = url ? await BackOfficeService.fetchPage(url) : await BackOfficeService.allBeers(this.currentPage, this.perPage);
      this.beers = response.data;
      this.linkData = response;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    async fetchBreweries() {
      this.breweries = await BackOfficeService.allBreweries();
    },
    async fetchAromas() {
      this.aromas = await BackOfficeService.allAromas();
    },
    handlePageChanged(url) {
      this.fetchBeers(url);
    },
    async handleNewBeer(newBeer) {
      if (newBeer.id) {
        await BackOfficeService.updateBeer(newBeer);
      } else {
        await BackOfficeService.addBeer(newBeer);
      }
      await this.fetchBeers();
    },
    async handleDeleteBeer(beerId) {
      await BackOfficeService.deleteBeer(beerId);
      await this.fetchBeers();
    },
  },
}
</script>

<template>
  <div class="flex">
    <back-office-sidebar @switchView="switchView"/>
    <div class="pl-64 w-full">
      <back-office-beer v-if="currentView === 'beers'" :beers="beers" :breweries="breweries" :aromas="aromas" :link-data="linkData" @delete-beer="handleDeleteBeer" @submit-beer="handleNewBeer" @page-changed="handlePageChanged"/>
      <back-office-brewery v-if="currentView === 'breweries'" :breweries="breweries"/>
    </div>
  </div>
</template>

<style scoped>

</style>