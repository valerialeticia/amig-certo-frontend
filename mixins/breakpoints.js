export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    },

    isDesktop() {
      return !this.isMobile()
    }
  }
}
