<script setup>
import {RouterView} from 'vue-router'
import Navbar from "@/modules/Core/Components/Navbar.vue";
import Footer from "@/modules/Core/Components/Footer.vue";
</script>

<template>
  <Navbar/>
  <RouterView class="min-h-screen relative"/>
  <Footer/>
</template>

<style scoped>

</style>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>
