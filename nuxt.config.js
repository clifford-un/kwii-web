const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/eventBus',
    '@/plugins/firebase/fb_connection'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-env', {
      keys: [
        { key: 'FIREBASE_API_KEY', secret: true },
        { key: 'FIREBASE_AUTH_DOMAIN', secret: true },
        { key: 'FIREBASE_DATABASE_URL', secret: true },
        { key: 'FIREBASE_PROJECT_ID', secret: true },
        { key: 'FIREBASE_STORAGE_BUCKET', secret: true },
        { key: 'FIREBASE_MESSAGING_SENDER_ID', secret: true },
        { key: 'FIREBASE_APP_ID', secret: true },
        { key: 'FIREBASE_VAPID_KEY', secret: true}
      ]
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
