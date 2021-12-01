<template>
  <v-btn
    nuxt
    text
    v-bind="bindTo"
    class="text-none px-1"
    color="primary"
    @click="backRoute">
    <v-icon left>
      mdi-arrow-left
    </v-icon>
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  props: {
    backTo: {
      type: String,
      default: null
    },

    nestedRoute: {
      type: Boolean
    },

    secundary: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: 'Voltar'
    }
  },

  data() {
    return {
      parentRoute: null
    }
  },

  computed: {
    bindTo() {
      return this.backTo ? { to: this.backTo } : null
    }
  },

  mounted() {
    this.parentRoute = this.getFrom()
  },

  methods: {
    backRoute() {
      this.$router.back()

    },
    getFrom() {
      const { from } = this.$nuxt.context
      return from
    }
  }
}
</script>
