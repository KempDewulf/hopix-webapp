<script>
import StarRating from "@/modules/Ratings/Components/StarRating.vue";

export default {
  name: "BeerReviewCard",
  components: {StarRating},
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-between h-52 w-80 md:w-96 p-3 bg-white border border-gray-200 rounded-lg shadow">
    <div class="flex justify-between">
      <h1 class="w-1/2 text-hopix-gray text-xl font-primary font-bold whitespace-nowrap overflow-x-hidden text-ellipsis">{{review.user.first_name}}</h1>
      <star-rating rating-link="" amount-of-ratings=0 :rating=review.rating hide-ratings></star-rating>
    </div>
    <div>
      <p class="line-clamp-4">{{review.review_text}}</p>
    </div>
    <div>
      <p class="text-hopix-light-gray">{{ review.created_at.slice(0,10) }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>