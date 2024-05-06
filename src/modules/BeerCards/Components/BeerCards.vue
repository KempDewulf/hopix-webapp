<script>
import BeerCard from "@/modules/BeerCards/Components/BeerCard.vue";

export default {
  name: "BeerCards",
  components: {BeerCard},
  props: {
    beers: Array,
  },
  methods: {
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
    <div v-if="beers.length === 0" class="text-center py-20">
      <p class="text-gray-400 font-primary font-bold text-3xl">No beers found</p>
    </div>
  </div>
</template>
