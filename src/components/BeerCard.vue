<script>
import StarRating from "@/components/StarRating.vue";

export default {
  name: "BeerCard",
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
  async created() {
    try {
      const { default: image } = await import(`@/assets/images/${this.slug}.jpg`);
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
    <a href="#">
      <img class="rounded-t-lg w-full aspect-square object-contain" :src="imagePath" :alt="slug" />
    </a>
    <div class="p-5 flex flex-col flex-grow">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{name}}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden line-clamp-3">{{ description }}</p>
      <div class="mt-auto flex" >
        <router-link :to="link" class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style="flex: 1">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </router-link>
        <div class="w-full pl-2" style="flex: 2">
          <StarRating class="w-full h-full inline-flex justify-center" :rating=rating :amount-of-ratings=amountOfRatings :rating-link="ratingLink"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  width: 100%;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 5; /* Limit to three lines */
}
</style>