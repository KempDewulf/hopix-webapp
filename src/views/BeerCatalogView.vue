<script>
import CatalogSidebar from "@/modules/BeerCatalog/Components/CatalogSidebar.vue";
import CatalogBeerCards from "@/modules/BeerCatalog/Components/CatalogBeerCards.vue";
import BeerCardService from "@/modules/BeerCards/Services/BeerCardService.js";

export default {
  name: "BeerCatalogView",
  components: {CatalogBeerCards, CatalogSidebar},
  data() {
    return {
      sort: "rating",
      filters: {
        breweries: [],
        aromas: []
      },
      beers: [],
      linkData: {},
      perPage: 3,
      currentPage: 1,
      totalPages: 1,
      search: null,
    };
  },
  created() {
    this.fetchBeers();
  },
  methods: {
    handleSortChanged(newSortValue) {
      this.sort = newSortValue;
      this.fetchBeers();
    },
    handleSelectedBreweriesChanged(newSelectedBreweries) {
      this.filters.breweries = newSelectedBreweries;
    },
    handleSelectedAromasChanged(newSelectedAromas) {
      this.filters.aromas = newSelectedAromas;
    },
    async fetchBeers(url) {
      const response = url ? await BeerCardService.fetchPage(url) : await BeerCardService.all(this.currentPage, this.perPage, this.sort, this.filters, this.search);
      this.beers = response.data;

      this.linkData = response;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handlePageChanged(url) {
      this.fetchBeers(url);
    },
  },
}
</script>

<template>
  <main class="min-h-screen flex flex-col md:flex-row">
    <catalog-sidebar class="md:order-1 h-full" @sort-changed="handleSortChanged" @selected-breweries-changed="handleSelectedBreweriesChanged" @selected-aromas-changed="handleSelectedAromasChanged"/>
    <catalog-beer-cards class="md:order-2" :beers="beers" :link-data="linkData" @page-changed="handlePageChanged"/>
  </main>
</template>

#const response = await BeerCardService.all(this.currentPage, this.perPage, this.sort, this.search);