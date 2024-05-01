<script>
import Star from "@/modules/Ratings/Components/StarItem.vue";

export default {
  name: "StarRating",
  components: { Star },
  props: {
    rating: {
      type: Number,
      required: true,
      validator: function(value) {
        return value >= 0 && value <= 5 && value % 0.5 === 0;
      },
    },
    amountOfRatings: {
      type: Number,
      required: true,
    },
    ratingLink: {
      type: String,
      required: true,
    },
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
    <router-link :to="ratingLink" class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:underline hover:cursor-pointer">{{amountOfRatings}}
      {{ $t('ratings') }}</router-link>
  </div>
</template>
