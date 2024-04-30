<script>
import CatalogHeader from "@/modules/BeerCatalog/Components/CatalogHeader.vue";
import CatalogSidebar from "@/modules/BeerCatalog/Components/CatalogSidebar.vue";
import CatalogBeerCards from "@/modules/BeerCatalog/Components/CatalogBeerCards.vue";

export default {
  name: "BeerCatalogView",
  components: {CatalogBeerCards, CatalogSidebar, CatalogHeader}
}
</script>

<template>
 <main class="min-h-screen flex flex-col md:flex-row">
   <catalog-sidebar/>
   <div class="w-full">
     <catalog-header/>
     <catalog-beer-cards/>
   </div>
 </main>
</template>
