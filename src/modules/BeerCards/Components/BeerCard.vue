<script>
import StarRating from "@/modules/Ratings/Components/StarRating.vue";

export default {
  name: "BeerCard",
  components: {StarRating},
  props: {
    name : {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
    },
    amountOfRatings: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      imagePath: null,
    };
  },
  computed: {
    slug() {
      return this.name.toLowerCase().replaceAll(' ', '-');
    },
    link() {
      return '/beers/' + this.slug;
    },
    ratingLink() {
      return this.link + '#ratings';
    }
  },
  async created() {
    try {
      const { default: image } = await import(`../../../assets/images/${this.slug}.jpg`);
      this.imagePath = image;
    } catch (error) {
      console.error(`Failed to load image for ${this.slug}:`, error);
      this.imagePath = '';
    }
  },
}
</script>

<template>
  <div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <router-link :to="link">
      <img class="rounded-t-lg w-full aspect-square object-contain" :src="imagePath" :alt="slug" />
    </router-link>
    <div class="p-5 flex flex-col flex-grow">
      <router-link :to="link">
        <h5 class="mb-2 text-2xl tracking-tight font-primary font-bold text-hopix-gray dark:text-white">{{name}}</h5>
      </router-link>
      <p class="mb-3 font-normal font-primary text-hopix-gray dark:text-gray-400 overflow-hidden line-clamp-3">{{ description }}</p>
      <div class="mt-auto flex" >
        <router-link :to="link" class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-hopix-gray bg-hopix-yellow rounded-lg hover:underline focus:ring-4 focus:outline-none focus:ring-hopix-yellow dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style="flex: 1">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </router-link>
        <div class="w-full pl-2" style="flex: 2">
          <star-rating class="w-full h-full inline-flex justify-center" :rating=rating :amount-of-ratings=amountOfRatings :rating-link="ratingLink"/>
        </div>
      </div>
    </div>
  </div>
</template>
