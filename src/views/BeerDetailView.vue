<script>
import BeerDetail from "@/modules/BeerDetail/Components/BeerDetail.vue";
import BeerReviewCards from "@/modules/BeerDetail/Components/BeerReviewCards.vue";

export default {
  name: "BeerDetailView",
  components: {BeerReviewCards, BeerDetail}
}
</script>

<template>
  <div>
    <beer-detail/>
    <beer-review-cards/>
  </div>
</template>

<style scoped>

</style>