<script>
import BeerDetail from "@/modules/BeerDetail/Components/BeerDetail.vue";
import BeerReviewCards from "@/modules/BeerDetail/Components/BeerReviewCards.vue";
import BeerDetailService from "@/modules/BeerDetail/Services/BeerDetailService.js";

export default {
  name: "BeerDetailView",
  components: {BeerReviewCards, BeerDetail},
  props: ["name"],
  data() {
    return {
      beer : null,
      reviews: [],
      aromas: []
    }
  },
  async created() {
    await this.fetchBeer();
    await this.fetchReviews();
    await this.fetchAromas();
  },
  methods: {
    async fetchBeer() {
      const response = await BeerDetailService.fetchBeerByName(this.$route.params.name);
      this.beer = response.data;
      console.log(this.beer);
    },
    async fetchReviews() {
      const response = await BeerDetailService.fetchReviewsByBeerId(this.beer.id);
      this.reviews = response.data;
      console.log(this.reviews);
    },
    async fetchAromas() {
      const response = await BeerDetailService.fetchAromasByBeerId(this.beer.id);
      this.aromas = response.data;
      console.log(this.aromas);
    }
  }
}

</script>

<template>
  <div>
    <beer-detail :beer="beer" :aromas="aromas"/>
    <beer-review-cards :reviews="reviews"/>
  </div>
</template>

<style scoped>

</style>