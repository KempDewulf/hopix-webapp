<script>
import Hero from "@/modules/HeroPage/Components/Hero.vue";
import HeroTrendingBeers from "@/modules/HeroPage/Components/HeroTrendingBeers.vue";

export default {
  components: {HeroTrendingBeers, Hero}
}

</script>

<template>
  <main class="min-h-screen">
    <hero/>
    <hero-trending-beers/>
  </main>
</template>
