export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  typescript: {
    typeCheck: true
  },
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui'],
  quasar: {
    plugins: [
      'Notify',
      'Dialog',
      'Loading'
    ],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons']
    },
    config: {
      brand: {
        primary: '#1976d2',
        secondary: '#26A69A',
        accent: '#9C27B0'
      }
    },
    components: {
      defaults: {
        QBtn: {
          color: 'primary'
        }
      }
    },
    quietSassWarnings: true
  },
  css: [
    '~/assets/css/instant.css'
  ]
})