<script>
import IconStarFull from "@/modules/Ratings/Icons/IconStarFull.vue";
import IconStarHalf from "@/modules/Ratings/Icons/IconStarHalf.vue";
import IconStarEmpty from "@/modules/Ratings/Icons/IconStarEmpty.vue";

export default {
  name: "StarItem",
  components: {IconStarEmpty, IconStarHalf, IconStarFull},
  props: {
    fill: {
      type: String,
      required: true,
      validator: function (value) {
        return ['full', 'half', 'empty'].includes(value);
      },
    },
  },
}
</script>

<template>
  <div style="position: relative;">
    <icon-star-full v-if="fill === 'full'"/>
    <icon-star-half v-else-if="fill === 'half'"/>
    <icon-star-empty v-else-if="fill === 'empty'"/>
  </div>
</template>
