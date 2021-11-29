import * as config from './config'

export default {
  ssr: false,
  head: config.head,
  css: [],
  plugins: config.plugins,
  components: true,
  buildModules: config.buildModules,
  modules: config.modules,
  vuetify: config.vuetify,
  build: {},
  i18n: config.i18n
}
