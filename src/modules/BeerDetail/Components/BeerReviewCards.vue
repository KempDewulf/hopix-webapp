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
  <div id="ratings" class="w-fit max-w-screen-xl mx-auto py-10 pl-4">
      <div class="flex justify-start flex-wrap gap-x-12 gap-y-5">
        <beer-review-card v-for="review in reviews" :key="review.id" :review="review"/>
      </div>
  </div>
</template>

<style scoped>

</style>