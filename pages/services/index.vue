<template>
  <v-container fluid class="mx-0">
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <PageTitle icon="mdi-account-group" title="Serviços" subtitle="Escolha o serviço desejado." />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, i) in items" :key="i"
        cols="12"
        lg="6"
        md="6"
        sm="12"
        xs="12">
        <ServiceCard :icon="item.icon" :title="item.title" :link="item.link" />
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import PageTitle from '@/components/molecules/PageTitle.vue'
import ServiceCard from '@/components/organisms/cards/ServiceCard.vue'
export default {
  components: {
    PageTitle,
    ServiceCard
  },

  data() {
    return {
      items: [
        {
          title: 'Companhia',
          icon: 'mdi-forum',
          link: '/services/accompany'
        },
        {
          title: 'Acompanhamento Médico',
          icon: 'mdi-hospital-box'
        },
        {
          title: 'Uber Amigo Certo',
          icon: 'mdi-car-hatchback'
        },
        {
          title: 'Outros Serviços',
          icon: 'mdi-cogs'
        }
      ]
    }
  }
}
</script>
