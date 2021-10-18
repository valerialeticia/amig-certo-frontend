<template>
  <div>
    <nuxt-link :to="link">
      <v-card
      max-width="344"
      outlined>
        <v-card-text>
          <v-row align="center">
            <v-col
              cols="12"
              class="d-flex justify-center">
              <v-icon size="54">{{ icon }}</v-icon>
            </v-col>
            <v-col
              cols="12"
              align-self="center">
              <h2 class="text-center">{{ title }}</h2>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </nuxt-link>

  </div>
</template>
<script>
export default {
  props: {
     icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
