<script>
import BeerCards from "@/modules/BeerCards/Components/BeerCards.vue";

export default {
  name: "HeroTrendingBeers",
  components: {BeerCards}
}
</script>

<template>
  <BeerCards :per-page=6 />
</template>

<style scoped>

</style>