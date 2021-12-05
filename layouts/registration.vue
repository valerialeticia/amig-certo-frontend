<template>
  <v-app>
    <RegistrationHeader />

    <v-main>
      <v-container class="mx-0">
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import RegistrationHeader from '@/components/organisms/navigation/RegistrationHeader.vue'
export default {
  components: {
    RegistrationHeader
  }
}
</script>
