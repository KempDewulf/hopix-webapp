<script>
import BeerCards from "@/modules/BeerCards/Components/BeerCards.vue";
import { FwbPagination } from 'flowbite-vue'
import CustomPagination from "@/modules/Pagination/Components/CustomPagination.vue";

export default {
  name: "CatalogBeerCards",
  components: {CustomPagination, BeerCards,FwbPagination},
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {
    currentPage(newPage) {
      this.$emit('page-changed', newPage);
    },
  },
  props: {
    sort: String,
    beers: Array,
    linkData: Object,
  }
}
</script>

<template>
  <div class="w-full my-10">
    <beer-cards :beers="beers"/>
    <div v-if="beers.length >= 1" class="w-full pt-10">
      <custom-pagination :link-data="linkData" @page-changed="$emit('page-changed', $event)"/>
    </div>
  </div>
</template>
