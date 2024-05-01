<script>
import BeerCard from "@/modules/BeerCards/Components/BeerCard.vue";
import BeerCardService from "@/modules/BeerCards/Services/BeerCardService.js";

export default {
  name: "BeerCards",
  components: {BeerCard},
  props: {
    perPage: {
      type: Number,
      default: 8
    },
    page: {
      type: Number,
      default: 1
    },
    sortBy: {
      type: String,
      default: "rating-htl"
    },
    search: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      beers: [],
    };
  },
  created() {
    this.fetchBeers();
  },
  methods: {
    async fetchBeers() {
      const allBeers = await BeerCardService.all(this.page, this.perPage, this.sortBy, this.search);
      this.beers = allBeers.data;
    },
    calculateRating(beer) {
      if (beer.amount_of_ratings === 0) {
        return 0;
      }
      return beer.sum_ratings / beer.amount_of_ratings;
    },
  }
}
</script>

<template>
  <div class="mx-auto px-3 2xl:max-w-[80rem]">
    <div class="flex flex-wrap justify-center gap-4">
      <beer-card  v-for="beer in beers" :key="beer.id" :name="beer.name" :rating="calculateRating(beer)" :amount-of-ratings="beer.amount_of_ratings" :description="beer.description"/>
    </div>
  </div>
</template>
