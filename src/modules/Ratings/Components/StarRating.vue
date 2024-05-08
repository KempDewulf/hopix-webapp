<script>
import Star from "@/modules/Ratings/Components/StarItem.vue";

export default {
  name: "StarRating",
  components: { Star },
  props: {
    rating: {
      type: Number,
      required: true,
    },
    amountOfRatings: {
      type: Number,
      required: true,
    },
    ratingLink: {
      type: String,
      required: true,
    },
    hideRatings: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    isValidRating() {
      return this.rating >= 0 && this.rating <= 5 && this.rating % 0.5 === 0;
    },
  },
  methods: {
    getStarType(starIndex) {
      const fullStars = Math.floor(this.rating);
      const isHalfStar = this.rating % 1 !== 0 && Math.ceil(this.rating) === starIndex;

      if (starIndex <= fullStars) {
        return 'full';
      } else if (isHalfStar) {
        return 'half';
      } else {
        return 'empty';
      }
    },
  },
};
</script>

<template>
  <div class="flex items-center flex-col md:flex-row" v-if="isValidRating">
    <div class="flex flex-row">
      <star v-for="starIndex in 5" :key="starIndex" :fill="getStarType(starIndex)" />
    </div>
    <router-link :to="ratingLink" v-if="!hideRatings" class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:underline hover:cursor-pointer">{{amountOfRatings}}
      {{ $t('ratings') }}</router-link>
  </div>
</template>
