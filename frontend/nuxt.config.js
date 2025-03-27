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
        apiOptions: {
          region: 'eu',
        },
      },
    ],
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt'
  ],
  devServer: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem'
    }
  },
  build: {
    // การตั้งค่าเพิ่มเติมที่จำเป็น
  }
})

