<script>
import StarRating from "@/modules/Ratings/Components/StarRating.vue";

export default {
  name: "BeerReviewCard",
  components: {StarRating}
}
</script>

<template>
  <div class="flex flex-col justify-between h-52 w-96 p-3 bg-white border border-gray-200 rounded-lg shadow">
    <div class="flex justify-between">
      <h1 class="text-hopix-gray text-xl font-primary font-bold">John Doe</h1>
      <star-rating rating-link="" amount-of-ratings=0 rating=5 hide-ratings></star-rating>
    </div>
    <div>
      <p>Great beer, would recommend!</p>
    </div>
    <div>
      <p class="text-hopix-light-gray">2021-01-01</p>
    </div>
  </div>
</template>

<style scoped>

</style>