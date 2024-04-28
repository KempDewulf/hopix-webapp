<script>
import IconStarFull from "@/modules/Ratings/Icons/IconStarFull.vue";
import IconStarHalf from "@/modules/Ratings/Icons/IconStarHalf.vue";
import IconStarEmpty from "@/modules/Ratings/Icons/IconStarEmpty.vue";

export default {
  name: "Star",
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
};
</script>
<template>
  <div style="position: relative;">
    <IconStarFull v-if="fill === 'full'"/>
    <IconStarHalf v-else-if="fill === 'half'"/>
    <IconStarEmpty v-else-if="fill === 'empty'"/>
  </div>
</template>

<style scoped>

</style>