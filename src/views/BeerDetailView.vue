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
      brewery: null,
      reviews: [],
      aromas: []
    }
  },
  async created() {
    await this.fetchBeer();
    await this.fetchReviews();
    await this.fetchAromas();
    await this.fetchBrewery();
  },
  methods: {
    async fetchBeer() {
      const response = await BeerDetailService.fetchBeerByName(this.$route.params.name);
      this.beer = response.data;
    },
    async fetchReviews() {
      const response = await BeerDetailService.fetchReviewsByBeerId(this.beer.id);
      this.reviews = response.data;
    },
    async fetchAromas() {
      const response = await BeerDetailService.fetchAromasByBeerId(this.beer.id);
      this.aromas = response.data;
    },
    async fetchBrewery() {
      const response = await BeerDetailService.fetchBreweryByBeerId(this.beer.id);
      this.brewery = response.data;
    },
    async sendReview(review) {
      await BeerDetailService.sendReview(this.beer.id, review);
      await this.fetchReviews();
    }
  }
}

</script>

<template>
  <div v-if="beer && brewery">
    <beer-detail :beer="beer" :brewery="brewery" :aromas="aromas" @review-sent="sendReview"/>
    <beer-review-cards :reviews="reviews"/>
  </div>
</template>

<style scoped>

</style>