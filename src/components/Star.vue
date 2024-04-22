<script>
import IconStarFull from "@/components/icons/IconStarFull.vue";
import IconStarHalf from "@/components/icons/IconStarHalf.vue";
import IconStarEmpty from "@/components/icons/IconStarEmpty.vue";

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