<template>
  <v-app-bar
      clipped-left
      app
    >
      <v-row>
        <v-col
          cols="6"
          xs="6"
          sm="6"
          md="6"
          lg="6">

        </v-col>
        <v-col
          cols="6"
          xs="6"
          sm="6"
          md="6"
          lg="6">
           <v-toolbar-title v-text="title" />
        </v-col>
      </v-row>



    </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'Amigo Certo'
    }
  }
}
</script>
