<script>
import BeerCard from "@/components/BeerCard.vue";

export default {
  name: "BeerCards",
  components: {BeerCard}
}
</script>

<template>
  <div class="w-3/4 mx-auto">
    <div class="flex flex-wrap justify-center gap-4">
      <BeerCard name="Tripel Karmeliet" :rating="4.5" :amount-of-ratings="153" description="Tripel Karmeliet is een wereldberoemde Tripel gebrouwen van gerst, tarwe en haver volgens een recept uit 1679. De goudgele bier heeft een enorme fluffy schuimkraag en zit vol verfijnde fruitige aroma's. Als bij de eerste slok weet je waarom deze Tripel zo hoog aangeschreven staat bij bierliefhebbers uit de hele wereld. "/>
      <BeerCard name="Westmalle Tripel" :rating="4.0" :amount-of-ratings="265" description="Westmalle Tripel is een van de bekendste Tripels ter wereld. Het bier is gebrouwen door de trappisten van de Abdij van Westmalle en heeft een fruitig aroma met een licht bittere afdronk."/>

    </div>
  </div>
</template>

<style scoped>

</style>