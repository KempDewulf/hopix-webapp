<script>
export default {
  name: "Hero"
}
</script>

<template>
  <div class="flex flex-col items-center justify-between h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)]">
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mt-[15vh] mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-5xl font-extrabold text-hopix-gray text-center tracking-tight leading-none md:text-5xl lg:text-left xl:text-6xl dark:text-white">{{ $t('hero_greeting') }}</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 text-center lg:text-left lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ $t('hero_text') }}</p>
          <div class="w-full flex justify-center lg:justify-start">
            <router-link to="/register" class="px-5 py-3 mr-3 text-base font-medium text-center text-hopix-gray rounded-full bg-hopix-yellow dark:focus:ring-primary-900 hover:shadow-md">
              <p class="inline-block">{{ $t('CTA_button') }}</p>
              <svg class="inline-block mb-0.5 h-5 ml-2 -mr-1 fill-hopix-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </router-link>
            <router-link to="/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              {{ $t('CTA_button_alt') }}
            </router-link>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="../../../assets/images/beer.jpg" alt="mockup" class="rounded-md">
        </div>
      </div>
    </section>
    <div class="mb-28 md:mb-10">
      <h2 class="text-3xl md:text-5xl pb-5 font-primary font-bold text-hopix-gray">{{ $t('see_trending_beers') }}</h2>
      <svg class="mx-auto w-20 h-10 md:w-34 md:h-22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.44372 0.929382L17.0001 13.4584L29.5564 0.929382L33.4136 4.78656L17.0001 21.2001L0.586548 4.78656L4.44372 0.929382Z" fill="#FFBD4A"/>
      </svg>
    </div>
  </div>
</template>
