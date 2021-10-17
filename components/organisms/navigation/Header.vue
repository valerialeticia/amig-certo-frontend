<template>
  <v-app-bar
    clipped-left
    app
    >
      <LogoApp />

      <UserMenu />
    </v-app-bar>
</template>

<script>
import UserMenu from '@/components/molecules/UserMenu.vue'
import LogoApp from '@/components/atoms/LogoApp.vue'
export default {
  components:  {
    UserMenu,
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
