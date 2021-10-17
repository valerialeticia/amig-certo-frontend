<template>
  <v-app>
    <Header />

    <Drawer />


    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Drawer from '@/components/organisms/navigation/Drawer.vue'
import Header from '@/components/organisms/navigation/Header.vue'
export default {
  components: {
    Drawer,
    Header
  }
}
</script>
