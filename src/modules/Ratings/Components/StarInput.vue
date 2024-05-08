<script>
import StarItem from "./StarItem.vue";

export default {
  name: "StarInput",
  components: { StarItem },
  data() {
    return {
      rating: 0,
      hoverRating: 0,
    };
  },
  computed: {
    stars() {
      const rating = this.hoverRating || this.rating;
      const fullStars = Math.floor(rating);
      const halfStars = rating % 1 >= 0.5 ? 1 : 0;
      const emptyStars = 5 - fullStars - halfStars;
      return [
        ...new Array(fullStars).fill('full'),
        ...new Array(halfStars).fill('half'),
        ...new Array(emptyStars).fill('empty'),
      ];
    },
  },
  methods: {
    setRating(rating) {
      this.rating = this.rating === rating ? 0 : rating;
    },
    setHoverRating(rating) {
      this.hoverRating = rating;
      console.log('Hover rating:', this.hoverRating);
    },
    resetHoverRating() {
      this.hoverRating = 0;
    },
  },
};
</script>

<template>
  <div class="flex" @mouseleave="resetHoverRating">
    <star-item class="scale-150 w-6 ml-5 cursor-pointer" v-for="(fill, index) in stars" :key="index" :fill="fill" @mouseover="setHoverRating(index + 1)" @click="setRating(index + 1)"/>
  </div>
</template>