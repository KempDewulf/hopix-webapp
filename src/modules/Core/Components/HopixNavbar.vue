<script>
import { initFlowbite} from 'flowbite'
import TranslationService from "@/modules/Translations/Services/TranslationService.js";
import {computed} from "vue";
import {useStore} from "vuex";
import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService.js";

export default {
  name: "HopixNavbar",
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.state.isLoggedIn);
    return { isLoggedIn };
  },
  data() {
    return {
      isMenuOpen: false,
      selectedLanguage: null,
      search: ''
    };
  },
  watch: {
    selectedLanguage(newVal) {
      TranslationService.setCurrentLanguage(newVal);
      this.fetchDataInNewLanguage();
      this.$i18n.locale = newVal;
    },
  },
  mounted() {
    initFlowbite();
    this.selectedLanguage = this.$i18n.locale;
  },
  methods: {
    performSearch() {
      this.$router.push({ name: 'beerCatalog', query: { search: this.search } });
    },
    fetchDataInNewLanguage() {
      this.$emit('language-changed', this.selectedLanguage)
    },
    async logout() {
      try {
        const response = await AuthenticationService.logout();
        if (response.status === true) {
          this.$store.commit('SET_LOGIN_STATE', false);
          await this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <nav class="bg-header z-50 border-gray-200 sticky top-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:h-24 ">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/src/assets/images/logo.svg" class="h-8" alt="Hopix Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Hopix</span>
      </router-link>
      <div class="flex md:order-2">
        <div class="relative hidden md:block">
          <input v-model="search" type="text" id="search-navbar" class="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('search')">
          <div @click="performSearch" role="button" class="absolute inset-y-0 end-0 flex pe-5 items-center cursor-pointer">
            <svg  class="w-4 h-4  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
        </div>
        <button @click="isMenuOpen = !isMenuOpen" data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <input v-model="search"  type="text" id="search-navbar" class="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
          <div @click="performSearch" role="button" class="absolute inset-y-0 end-0 flex pe-5 items-center cursor-pointer">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
        </div>
        <ul class="flex flex-col  md:p-0 mt-4 font-medium rounded-lg bg-header md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-header dark:h md:dark:bg-header dark:border-gray-700">
          <li>
            <router-link to="/" class="block py-2 px-3 text-white rounded md:p-0" exact-active-class="!text-hopix-yellow font-bold">{{$t('home')}}</router-link>
          </li>
          <li>
            <router-link to="/beers" class="block py-2 px-3 text-white rounded md:p-0" exact-active-class="!text-hopix-yellow font-bold">{{$t('all_beers')}}</router-link>
          </li>
        </ul>
      </div>
      <div class="w-full flex items-center justify-between md:w-auto md:order-2">
        <div :class="{'hidden': !isMenuOpen}" class="md:flex items-center space-x-1 md:space-x-0 rtl:space-x-reverse">
          <form class="max-w-md mx-auto">
            <select id="countries" v-model="$i18n.locale" @change="this.selectedLanguage = $event.target.value" class="bg-header border-none focus:ring-0 text-white text-sm rounded-lg block w-fit">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" >{{ locale.toUpperCase() }}</option>
            </select>
          </form>
        </div>
        <div class="hidden md:flex mx-5">
          <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 md:me-0" type="button">
            <p class="text-white">{{ $t('account') }}</p>
            <svg class="ml-2 mt-1" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.888672 0.748108L6.722 6.58144L12.5553 0.748108" class="stroke-hopix-yellow" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div id="dropdownAvatarName" v-if="isLoggedIn" class="z-10 hidden border-[rgb(107, 114, 128)] border-[1px] bg-header divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
              <li>
                <router-link to="/profile" class="block px-4 py-2 text-white hover:text-hopix-yellow">{{ $t('profile') }}</router-link>
              </li>
              <li>
                <a href="#" @click.prevent="logout" class="block px-4 py-2 text-white hover:text-hopix-yellow">{{ $t('logout') }}</a>
              </li>
            </ul>
          </div>
          <div id="dropdownAvatarName" v-else class="z-10 hidden border-[rgb(107, 114, 128)] border-[1px] bg-header divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
              <li>
                <router-link to="/login" class="block px-3 py-2 text-white hover:text-hopix-yellow">{{ $t('login') }}</router-link>
              </li>
              <li>
                <router-link to="/register" class="block px-3 py-2 text-white hover:text-hopix-yellow">{{ $t('register') }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="isLoggedIn" :class="{'hidden': !isMenuOpen}" class="md:hidden">
          <router-link to="/login" class="mr-14 md:hidden inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-hopix-yellow focus:ring-4 focus:ring-gray-100">
            {{ $t('account') }}
          </router-link>
          <router-link to="/register" class="md:hidden inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-hopix-yellow focus:ring-4 focus:ring-gray-100">
            {{ $t('logout') }}
          </router-link>
        </div>
        <div v-else :class="{'hidden': !isMenuOpen}" class="md:hidden">
          <router-link to="/login" class="md:hidden inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-hopix-yellow focus:ring-4 focus:ring-gray-100">
            {{ $t('login') }}
          </router-link>
          <p class="inline-block text-white">of</p>
          <router-link to="/register" class="md:hidden inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-hopix-yellow focus:ring-4 focus:ring-gray-100">
            {{ $t('register') }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('../Icons/Vector.svg');
  background-repeat: no-repeat;
  background-position: right .75rem top 55%;
  background-size: 1em;
  padding-right: 2.5em;
  padding-left: 1rem;
  color: #fff;
}

</style>