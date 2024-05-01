<script>
import CatalogHeader from "@/modules/BeerCatalog/Components/CatalogHeader.vue";
import CatalogSidebar from "@/modules/BeerCatalog/Components/CatalogSidebar.vue";
import CatalogBeerCards from "@/modules/BeerCatalog/Components/CatalogBeerCards.vue";

export default {
  name: "BeerCatalogView",
  components: {CatalogBeerCards, CatalogSidebar, CatalogHeader},
  data() {
    return {
      sort: "rating",
      selectedBreweries: [],
      selectedAromas: [],
    };
  },
  methods: {
    handleSortChanged(newSortValue) {
      this.sort = newSortValue;
      console.log(this.sort)
    },
    handleSelectedBreweriesChanged(newSelectedBreweries) {
      this.selectedBreweries = newSelectedBreweries;
    },
    handleSelectedAromasChanged(newSelectedAromas) {
      this.selectedAromas = newSelectedAromas;
    },
  },
}
</script>

<template>
  <main class="min-h-screen flex flex-col md:flex-row">
    <catalog-sidebar class="md:order-1" @sort-changed="handleSortChanged" @selected-breweries-changed="handleSelectedBreweriesChanged" @selected-aromas-changed="handleSelectedAromasChanged"/>
    <catalog-beer-cards class="md:order-2" :sort="sort" :selectedBreweries="selectedBreweries" :selectedAromas="selectedAromas"/>
  </main>
</template>