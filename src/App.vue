<script>
import HopixFooter from "@/modules/Core/Components/HopixFooter.vue";
import HopixNavbar from "@/modules/Core/Components/HopixNavbar.vue";

export default {
  components: {HopixNavbar, HopixFooter},
}
</script>

<template>
  <hopix-navbar/>
  <router-view class="min-h-screen relative"/>
  <hopix-footer/>
</template>