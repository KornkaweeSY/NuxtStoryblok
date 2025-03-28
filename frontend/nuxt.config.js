  export default defineNuxtConfig({
    css: ['@/assets/css/roboto.css'],
    app: {
      useI18n: true,
    },
    modules: [
      [
        '@storyblok/nuxt',
        {
          accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
          componentsDir: "~/components",
          apiOptions: {
            region: 'eu',
          },
          // components: true
        },
      ],
      '@unocss/nuxt'
    ],
    components: [
      { path: '~/components/storyblok', 
        global: true, 
      }
    ],
    devServer: {
      https: {
        key: './localhost-key.pem',
        cert: './localhost.pem'
      }
    }
  })

