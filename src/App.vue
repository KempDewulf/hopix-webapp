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
  async created() {
    const data = await TranslationService.getTranslations();
    console.log(data);
    for (const language in data) {
      this.$i18n.setLocaleMessage(language, data[language]);
    }
    console.log(this.$i18n.messages);
  },
  methods: {
    rerenderView(newLanguage) {
      this.language = newLanguage;
    },
  },
}
</script>

<template>
  <hopix-navbar @language-changed="rerenderView"/>
    <router-view :key="language" class="min-h-screen relative"/>
  <hopix-footer/>
</template>

<style>

</style>