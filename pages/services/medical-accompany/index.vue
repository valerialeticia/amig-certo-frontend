<template>
  <v-container fluid class="mx-0">
    <BackButton  class="mb-3" />
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
        <PageTitle icon="mdi-forum" title="Acompanhamento médico" subtitle="lorem ipsum dolor" :page-subtitle="true" />
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import PageTitle from '@/components/molecules/PageTitle.vue'
import BackButton from '@/components/atoms/BackButton.vue'
export default {
  components: {
    PageTitle,
    BackButton
  }

}
</script>
