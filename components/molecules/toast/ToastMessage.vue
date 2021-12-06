<template>
  <v-snackbar
    v-model="active"
    :timeout="timeout"
    :multi-line="multiline"
    :color="color"
    :elevation="0"
    :height="40"
    top
    class="v-application"
    right>
    <v-icon
      dark
      left>
      {{ icon }}
    </v-icon>

    {{ message }}

    <template #action="{ attrs }">
      <v-btn
        icon
        v-bind="attrs"
        class="mr-1"
        @click="active = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'info'
    },

    icon: {
      type: String,
      default: 'mdi-info'
    },

    multiline: {
      type: Boolean,
      default: false
    },

    message: {
      type: String,
      default: ''
    },

    timeout: {
      type: Number,
      default: 4000
    }
  },

  data: () => ({
    active: false
  }),

  watch: {
    active(isActive, wasActive) {
      this.$emit('statusChange', isActive, wasActive)
    }
  },

  mounted() {
    this.$nextTick(() => this.show())
  },

  methods: {
    show() {
      this.active = true
    },

    close() {
      this.active = false
    }
  }
}
</script>
