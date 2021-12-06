import Vue from 'vue'
import SnackMessage from '@/components/molecules/toast'

export default (context, inject) => {
  Vue.use(SnackMessage, {
    $vuetify: context.$vuetify
  })
}
