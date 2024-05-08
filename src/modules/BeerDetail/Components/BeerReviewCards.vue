<script>
import BeerReviewCard from "@/modules/BeerDetail/Components/BeerReviewCard.vue";

export default {
  name: "BeerReviewCards",
  components: {BeerReviewCard},
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="w-fit max-w-screen-xl mx-auto py-10">
      <div class="flex justify-around flex-wrap gap-5">
        <beer-review-card/>
        <beer-review-card/>
        <beer-review-card/>
        <beer-review-card/>
        <beer-review-card/>
        <beer-review-card/>
      </div>
  </div>
</template>

<style scoped>

</style>