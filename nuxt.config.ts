// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@pinia/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  runtimeConfig: {
    // public: {
    //   Id: process.env.APP_ID,
    //   Secret: process.env.APP_SECRET,
    //   Partner: process.env.PARTNER,
    // },
  },
  css: ['vuetify/styles/main.sass', '@fortawesome/fontawesome-free/css/all.css', '/public/assets/css/styleguide.css'],
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      title: 'Centrum Sacra Familia',
    },
  },
  plugins: ['~/plugins/clients/firebase.ts'],
});
