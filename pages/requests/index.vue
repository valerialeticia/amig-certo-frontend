<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <PageTitle
          icon="mdi-clipboard-multiple-outline"
          title="Pedidos"
          subtitle="Aqui está a lista de pedido solicitados." />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card v-for="(item, i) in requests" :key="i" class="mb-8 px-3">
          <v-row>
            <v-col
              cols="12"
              xl="2"
              lg="2"
              md="2"
              sm="12"
              xs="12"
              class="d-flex flex-column">
              <p class="font-weight-bold">
                {{ $t('requests.nameLabel') }}
              </p>
              <span>
                {{ item.name }}
              </span>
            </v-col>
            <v-col
              cols="12"
              xl="2"
              lg="2"
              md="2"
              sm="12"
              xs="12"
              class="d-flex flex-column">
              <p class="font-weight-bold">
                {{ $t('requests.reasonLabel') }}
              </p>
              <span>
                {{ item.reason }}
              </span>
            </v-col>
            <v-col
              cols="12"
              xl="2"
              lg="2"
              md="2"
              sm="12"
              xs="12"
              class="d-flex flex-column">
              <p class="font-weight-bold">
                {{ $t('requests.dateLabel') }}
              </p>
              <span>
                {{ item.date }}
              </span>
            </v-col>
            <v-col
              cols="12"
              xl="2"
              lg="2"
              md="2"
              sm="12"
              xs="12"
              class="d-flex flex-column">
              <p class="font-weight-bold">
                {{ $t('requests.timeLabel') }}
              </p>
              <span>
                {{ item.time }}
              </span>
            </v-col>
            <v-col
              cols="12"
              xl="2"
              lg="2"
              md="2"
              sm="12"
              xs="12"
              class="d-flex flex-column">
              <p class="font-weight-bold">
                {{ $t('requests.placeLabel') }}
              </p>
              <span>
                {{ item.place }}
              </span>
            </v-col>
            <v-col
              cols="12"
              xl="2"
              lg="2"
              md="2"
              sm="12"
              xs="12"
              class="d-flex flex-column">
              <p class="font-weight-bold">
                {{ $t('requests.activityLabel') }}
              </p>
              <span>
                {{ item.activity }}
              </span>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-end">
            <v-col
              cols="12"
              xl="2"
              lg="2"
              md="2"
              sm="12"
              xs="12">
              <v-btn
              color="primary"
              @click="accept(item, i)">
                {{ $t('requests.acceptButton') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '@/components/molecules/PageTitle.vue'
export default {
  layout: 'volunteer',

  components: {
    PageTitle
  },

  data() {
    return {
      requests: [
        {
          name: 'Lurdes',
          reason: 'Se sente sozinha',
          date: '10/12/2021',
          time: '3 horas',
          place: 'Shopping Rio Mar',
          activity: 'Ir ao cinema'
        },
        {
          name: 'Marcos',
          reason: 'Se sente sozinho',
          date: '11/12/2021',
          time: '5 horas',
          place: 'Shopping Rio Mar',
          activity: 'Ir ao cinema'
        }
      ]
    }
  },

  methods: {
    accept(item, index) {
      this.$toast.success('Pedido aceito com sucesso!')
      this.requests.splice(index, 1)
      this.$router.push({
        path: '/requests/accepted',
        query: item
      })
    }
  }
}
</script>
