import * as config from './config'

export default {
  ssr: false,
  head: config.head,
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
  ],
  vuetify: config.vuetify,
  build: {
  }
}
