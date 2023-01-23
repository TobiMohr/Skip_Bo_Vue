const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  pwa: {
    name: "SkipBo",
    themeColor: "#efa032",
    mobileWebAppCapable: 'yes',
        mobileWebAppCache:'yes',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppCache: 'yes',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
          navigateFallback: '/index.html',
          skipWaiting: true,
          clientsClaim: true
        },
        manifestOptions: {
          name: "SkipBo",
          short_name: "SkipBo",
          start_url: '.',
          display: 'standalone',
          theme_color: '#efa032'
        }
  }
})
