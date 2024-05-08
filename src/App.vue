<script>
import HopixFooter from "@/modules/Core/Components/HopixFooter.vue";
import HopixNavbar from "@/modules/Core/Components/HopixNavbar.vue";
import TranslationService from "@/modules/Translations/Services/TranslationService.js";

export default {
  components: {HopixNavbar, HopixFooter},
  data() {
    return {
      language: this.$i18n.locale,
    };
  },
  computed: {
    isAdminRoute() {
      return this.$route.name === 'admin'; // replace 'admin' with the actual name of your admin route
    },
  },
  async created() {
    const data = await TranslationService.getTranslations();
    for (const language in data) {
      this.$i18n.setLocaleMessage(language, data[language]);
    }
  },
  methods: {
    rerenderView(newLanguage) {
      this.language = newLanguage;
    },
  },
}
</script>

<template>
  <hopix-navbar v-if="!isAdminRoute" @language-changed="rerenderView"/>
  <router-view :key="language" class="min-h-screen relative"/>
  <hopix-footer v-if="!isAdminRoute"/>
</template>

<style>

</style>