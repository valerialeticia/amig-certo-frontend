<template>
  <v-app-bar
    clipped-left
    app
    >
      <LogoApp />

      <h2 class="mr-3">Cadastro</h2>
    </v-app-bar>
</template>

<script>
import LogoApp from '@/components/atoms/LogoApp.vue'
export default {
  components:  {
    LogoApp
  }
}
</script>

<style lang="scss">
  .v-toolbar__content, .v-toolbar__extension {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
</style>
