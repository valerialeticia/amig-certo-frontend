<template>
  <v-dialog
    v-model="active"
    max-width="568"
    max-height="624">
    <v-card class="mx-auto">
        <v-card-title class="text-subtitle-1 darkGrey--tex font-weight-bold pt-6">
          <v-row class="px-3">
            <v-spacer />
            <v-icon
              color="grey"
              @click="close">
              {{ $t('sucessModal.closeButton') }}
            </v-icon>
          </v-row>
        </v-card-title>
        <v-card-text class="px-5 mt-3 text--secondary subtitle-2 d-flex flex-column justify-center">
          <v-row>
            <v-col class="d-flex justify-center">
              <v-icon color="success" x-large>{{ $t('sucessModal.checkIcon') }}</v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h2 class="text-center">{{ message }}</h2>
            </v-col>
          </v-row>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
  },

  data() {
    return {
      active: false
    }
  },

  watch: {
    show: {
      handler(value) {
        this.active = value
      }
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>


<style lang="scss">
  .v-dialog {
    overflow-y: inherit !important;
  }
</style>
