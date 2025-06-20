// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // 禁用 NuxtUI 的字体配置，抑制字体无法下载错误
  ui:{
    fonts: false
  },
  app:{
    head:{
      title:"α",
      titleTemplate:"%s | Méng"
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})