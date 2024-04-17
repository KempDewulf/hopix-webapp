<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>Hopix</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <p>Search</p>
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    display: flex;
    justify-content: start;
    align-items: flex-end;
    padding: 1rem;
  }
  header nav {
    display: flex;
    gap: 1rem;
  }
</style>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>
