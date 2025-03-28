import {
    defaultResolvers,
    plugin,
  } from "@marvr/storyblok-rich-text-vue-renderer";
  
  // const Rating = defineAsyncComponent(() => import('@/storyblok/UI/Rating.vue'))
  
  export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(
      plugin({
        resolvers: {
          ...defaultResolvers,
          components: {},
        },
      }),
    );
  });