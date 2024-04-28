<script>
import BeerCard from "@/modules/BeerCards/Components/BeerCard.vue";
import BeerCardService from "@/modules/BeerCards/Services/BeerCardService.js";

export default {
  name: "BeerCards",
  data() {
    return {
      BeerService: new BeerCardService(),
      beers: [],
    };
  },
  props: {
    perPage: {
      type: Number,
      default: 8
    },
    page: {
      type: Number,
      default: 1
    },
    sortBy: {
      type: String,
      default: "rating-htl"
    },
    search: {
      type: String,
      default: null
    }
  },
  components: {BeerCard},
  created() {
    this.fetchBeers();
  },
  methods: {
    async fetchBeers() {
      const allBeers = await this.BeerService.all(this.page, this.perPage, this.sortBy, this.search);
      this.beers = allBeers.data;
    },
    calculateRating(beer) {
      if (beer.amount_of_ratings === 0) {
        return 0;
      }
      return beer.sum_ratings / beer.amount_of_ratings;
    },
  }
}
</script>

<template>
  <div class="w-3/4 mx-auto">
    <div class="flex flex-wrap justify-center gap-4">
      <beer-card  v-for="beer in beers" :key="beer.id" :name="beer.name" :rating="calculateRating(beer)" :amount-of-ratings="beer.amount_of_ratings" :description="beer.description"/>
      <!--
      <BeerCard name="Tripel Karmeliet" :rating="4.5" :amount-of-ratings="153" description="Tripel Karmeliet is een wereldberoemde Tripel gebrouwen van gerst, tarwe en haver volgens een recept uit 1679. De goudgele bier heeft een enorme fluffy schuimkraag en zit vol verfijnde fruitige aroma's. Als bij de eerste slok weet je waarom deze Tripel zo hoog aangeschreven staat bij bierliefhebbers uit de hele wereld. "/>
      <BeerCard name="Westmalle Tripel" :rating="4.0" :amount-of-ratings="265" description="Westmalle Tripel is een van de bekendste Tripels ter wereld. Het bier is gebrouwen door de trappisten van de Abdij van Westmalle en heeft een fruitig aroma met een licht bittere afdronk."/>
      -->
    </div>
  </div>
</template>

<style scoped>

</style>
