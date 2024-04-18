<script setup>
import {RouterView} from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar/>
  <RouterView/>
  <RouterView/>
  <RouterView/>
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
