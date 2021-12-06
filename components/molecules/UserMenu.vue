<template>
  <div class="d-flex">
    <v-icon
      color="primary">
      {{ $t('userMenu.accountIcon')}}
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
            {{ $t('userMenu.arrowIcon')}}
          </v-icon>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in $i18n.messages.pt.userMenu.items"
            :key="index">
            <nuxt-link :to="item.to" class="d-flex">
              <v-icon class="mr-1">{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </nuxt-link>
          </v-list-item>
        </v-list>
    </v-menu>
  </div>
</template>
