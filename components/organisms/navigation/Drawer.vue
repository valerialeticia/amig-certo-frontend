<template>
  <v-navigation-drawer
      v-model="drawer"
      light
      :mini-variant.sync="mini"
      clipped
      z-index="5"
      width="250"
      permanent
      app
    >
      <v-list
        v-for="(item, i) in $i18n.messages.pt.drawer.menuItems"
        :key="i"
        class="py-0">
        <v-divider v-if="item.divider" />
        <v-list-item
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider />
        <div class="d-flex justify-center">
          <v-list
            dense
            width="100%"
            class="pa-0">
            <v-list-item
                class="pa-0"
                @click.stop="mini = !mini">
                <v-list-item-action>
                <v-list-item-icon class="ml-4">
                    <v-icon>
                    {{
                        mini ? 'mdi-arrow-collapse-right' : 'mdi-keyboard-return'
                    }}
                    </v-icon>
                </v-list-item-icon>
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>
                    {{  $t('drawer.hideMenuButton') }}
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
    </template>
    </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      mini: false
    }
  },

  created() {
    this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? this.mini = true : null
  }
}
</script>
