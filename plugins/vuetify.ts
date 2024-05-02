import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { aliases, fa } from 'vuetify/iconsets/fa';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
  });

  nuxt.vueApp.use(vuetify);
});
