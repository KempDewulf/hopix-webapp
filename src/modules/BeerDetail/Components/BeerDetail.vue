<script>
import StarRating from "@/modules/Ratings/Components/StarRating.vue";

export default {
  name: "BeerDetail",
  components: {StarRating}
}
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="my-5 ms-5 flex items-center justify-center w-fit p-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700">
      <- Back
    </div>
    <section class="pb-8 bg-white md:pb-16 dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="flex flex-col md:flex-row">
          <div class="shrink-0 max-w-md lg:w-full mx-auto ">
            <img class="w-full aspect-square object-contain" src="../../../assets/images/cornet-oaked.jpg" alt="" />
          </div>
          <div class="mt-6 md:mt-8 md:w-full whitespace-nowrap overflow-x-hidden text-ellipsis">
            <div class="flex items-center justify-between mb-2">
              <h1 class="text-2xl text-hopix-gray font-primary font-bold md:w-full md:text-4xl whitespace-nowrap overflow-hidden text-ellipsis dark:text-white">
                Cornet Oaked
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
                Brouwerij 123
              </h2>
              <div class="sm:items-center sm:gap-4 sm:flex">
                <div class="flex items-center gap-2 mt-2 sm:mt-0">
                  <star-rating :rating="5"  amount-of-ratings="50" rating-link=""/>
                </div>
              </div>
            </div>
            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p class="mb-6 text-gray-500 text-wrap dark:text-gray-400">
              Westvleteren 12 hardly needs an introduction. This flagship of the Saint Sixtus Abbey once received the label of 'Best Beer in the World.' Since then, it has arguably become the most coveted beer on our planet. This heavy Trappist beer is brewed on a limited scale.
            </p>
            <hr class="md:hidden my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>