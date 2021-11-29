<template>
  <v-container fluid class="mx-0">
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <PageTitle
          icon="mdi-account-group"
          title="Serviços"
          subtitle="lorem ipsum dolor " />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="12"
        md="12"
        sm="12"
        xs="12">
        <PageTitle icon="mdi-forum" title="Uber Amigo Certo" subtitle="lorem ipsum dolor" :page-subtitle="true" />
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import PageTitle from '@/components/molecules/PageTitle.vue'
export default {
  components: {
    PageTitle
  }

}
</script>
