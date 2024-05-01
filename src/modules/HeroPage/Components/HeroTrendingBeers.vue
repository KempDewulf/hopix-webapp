<script>
import BeerCards from "@/modules/BeerCards/Components/BeerCards.vue";

export default {
  name: "HeroTrendingBeers",
  components: {BeerCards}
}
</script>

<template >
  <beer-cards :per-page=6 />
  <div class="w-full inline-flex items-center justify-center">
    <router-link to="/beers" class="group text-4xl px-auto my-10">
      <p class="inline-block pr-3 font-primary font-bold text-hopix-gray ">{{ $t('see_all_beers') }}</p>
      <svg class="inline-block w-8 h-8 mb-1 fill-hopix-gray group-hover:fill-hopix-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </router-link>
  </div>
</template>
