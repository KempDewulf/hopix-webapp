<script>
import StarRating from "@/modules/Ratings/Components/StarRating.vue";
import StarInput from "@/modules/Ratings/Components/StarInput.vue";

export default {
  name: "BeerDetail",
  components: {StarInput, StarRating},
  props: {
    beer: {
      type: Object,
      required: true
    },
    brewery: {
      type: Object,
      required: true
    },
    aromas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      rating: 0,
      aromaList: [],
      imagePath: null,
    }
  },
  computed: {
    slug() {
      return this.beer.name.toLowerCase().replaceAll(' ', '-');
    },
  },
  async created() {
    this.rating = Math.round(this.beer.sum_ratings / this.beer.amount_of_ratings);
    this.aromaList = this.aromas.map(aroma => aroma.name);
    this.aromaList.push("sour")
    try {
      const {default: image} = await import(`../../../assets/images/${this.slug}.jpg`);
      this.imagePath = image;
    } catch (error) {
      console.error(`Failed to load image for ${this.slug}:`, error);
      this.imagePath = '';
    }
  }
}
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <div @click="$router.go(-1)" class="my-5 flex items-center justify-between w-fit p-2.5 text-hopix-gray font-primary font-bold focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700">
      <svg width="16" height="16" viewBox="0 0 65 65" fill="" xmlns="http://www.w3.org/2000/svg">
        <path class="fill-hopix-yellow" d="M64.3239 28.5H15.6439L38.0039 6.14L32.3239 0.5L0.323853 32.5L32.3239 64.5L37.9639 58.86L15.6439 36.5H64.3239V28.5Z" fill="black"/>
      </svg>
      <p class="ml-2">Back</p>
    </div>
    <section class="pb-8 bg-white md:pb-16 dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="flex flex-col md:flex-row">
          <div class="shrink-0 max-w-md lg:w-full mx-auto ">
            <img class="w-full aspect-square object-contain" :src="imagePath" :alt="slug" />
          </div>
          <div class="mt-6 md:mt-8 md:w-full whitespace-nowrap overflow-x-hidden text-ellipsis">
            <div class="flex items-center justify-between mb-2">
              <h1 class="text-2xl text-hopix-gray font-primary font-bold md:w-full md:text-4xl whitespace-nowrap overflow-x-hidden text-ellipsis dark:text-white">
                {{ beer.name }}
              </h1>
              <div class="sm:gap-4 sm:items-center sm:flex">
                <a href="#" title="" class="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 md:p-2.5 p-1.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700" role="button">
                  <svg class="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex md:items-center justify-between">
              <h2 class="text text-hopix-light-gray font-primary md:text-2xl dark:text-white">
                {{ brewery.name }}
              </h2>
              <div class="sm:items-center sm:gap-4 sm:flex">
                <div class="flex items-center gap-2 mt-2 sm:mt-0">
                  <star-rating :rating="this.rating"  :amount-of-ratings="this.beer.amount_of_ratings" rating-link=""/>
                </div>
              </div>
            </div>
            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p class="mb-6 text-gray-500 text-wrap dark:text-gray-400">
              {{beer.description}}
            </p>
            <hr class="md:hidden my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          </div>
        </div>
      </div>
    </section>
    <div class="flex flex-col gap-8 md:flex-row md:h-80">
      <div class="md:w-[26rem] lg:h-full p-3 bg-white border border-gray-200 rounded-lg shadow">
        <h2 class="text-hopix-gray text-xl font-primary font-bold pb-4 md:pb-10">
          Details:
        </h2>
        <div class="flex justify-between font-primary">
          <ul>
            <li class="pb-1.5">Brewery</li>
            <li class="pb-1.5">Beer style</li>
            <li class="pb-1.5">ABV</li>
            <li class="pb-1.5">Drinking temp</li>
            <li class="pb-1.5">Aromas</li>
            <li class="pb-1.5">IBU</li>
          </ul>
          <ul class="text-end text-hopix-text-gray">
            <li class="pb-1.5">{{ brewery.name }}</li>
            <li class="pb-1.5">{{ beer.style }}</li>
            <li class="pb-1.5">{{ beer.abv }}%</li>
            <li class="pb-1.5">{{ beer.drinking_temp }}°C</li>
            <li class="pb-1.5">{{ aromaList.join(', ') }}</li>
            <li class="pb-1.5">{{ beer.ibu }}</li>
          </ul>
        </div>
      </div>
      <div class="grow p-3 px-5 mb-10 lg:h-full bg-white border border-gray-200 rounded-lg shadow">
        <div class="md:flex align-middle">
          <div class="md:inline-flex flex-col md:w-1/2">
            <h2 class="text-hopix-gray text-xl font-primary font-bold pb-4">
              Leave a review:
            </h2>
            <div class="mb-6">
              <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review</label>
              <textarea id="message" rows="4" maxlength="259" class="md:w-full resize-none block p-2.5 w-full h-36 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-hopix-yellow focus:border-hopix-yellow" placeholder="Write your thoughts here..."></textarea>
            </div>
          </div>
          <div class="flex md:inline-block md:mt-20 align-middle md:mx-auto flex-col">
            <div class="">
              <h2>Rating:</h2>
              <div class="py-5 -ml-2.5">
                <star-input />
              </div>
            </div>
            <div class="flex items-center w-fit pl-2 mx-auto mt-5">
              <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-hopix-yellow bg-gray-100 border-gray-300 rounded focus:ring-hopix-yellow">
              <label for="checked-checkbox" class="ms-2 text-lg font-medium text-hopix-gray font-primary dark:text-gray-300">Show name</label>
            </div>
          </div>
        </div>
        <div>
          <button class="w-full py-2 mt-6 md:mt-2 text-lg font-medium text-hopix-text-gray bg-hopix-yellow rounded-lg hover:bg-hopix-yellow-dark focus:ring-4 focus:outline-none focus:ring-hopix-yellow-dark dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>