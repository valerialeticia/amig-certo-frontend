<template>
  <div class="d-flex">
    <v-icon
      color="primary">
      mdi-account-circle
    </v-icon>
    <v-menu
      bottom
      close-on-click
      >
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            color="primary"
            v-bind="attrs"
            v-on="on">
            mdi-chevron-down
          </v-icon>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-icon class="mr-1">{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Sair',
          icon: 'mdi-arrow-left-bottom'
        }
      ]
    }
  }
}
</script>
