<template>
  <v-container fluid class="mx-0">
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <PageTitle
          icon="mdi-account-group"
          title="Serviços"
          subtitle="Uma das ações foram escolhidas, agora é só preencher o formulário." />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="12"
        md="12"
        sm="12"
        xs="12">
        <PageTitle icon="mdi-forum" title="Comapnhia" subtitle="Neste serviço o voluntário irá fazer companhia ao idoso seja lá onde ele estiver. Podendo apenas conversar,
          jogar algum jogo, ir ao cinema ou qualquer atividade em que o idoso desejar." :page-subtitle="true" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col
              cols="12"
              lg="3"
              md="3"
              sm="12"
              xs="12">
              <v-text-field
                v-model="reason"
                :rules="rules.reason"
                label="Motivo"
                outlined
                required />
            </v-col>
            <v-col
              cols="12"
              lg="3"
              md="3"
              sm="12"
              xs="12">
              <v-text-field
                v-model="date"
                :rules="rules.date"
                label="Data"
                outlined
                required />
            </v-col>
            <v-col
              cols="12"
              lg="3"
              md="3"
              sm="12"
              xs="12">
              <v-text-field
                v-model="pereod"
                :rules="rules.pereod"
                label="Período"
                outlined
                required />
            </v-col>
            <v-col
              cols="12"
              lg="3"
              md="3"
              sm="12"
              xs="12">
              <v-text-field
                v-model="place"
                :rules="rules.place"
                label="Local"
                outlined
                required />
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              lg="3"
              md="3"
              sm="12"
              xs="12">
              <v-select
                v-model="activities"
                :items="items"
                :rules="rules.activities"
                label="Atividades"
                outlined
                required />
            </v-col>
            <v-col
              cols="12"
              lg="3"
              md="3"
              sm="12"
              xs="12"
              class="d-flex align-center mb-4">
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="validate">
                Enviar
              </v-btn>
              <v-btn
                color="primary"
                outlined
                class="mr-4"
                @click="reset">
                Limpar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
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
      valid: true,
      reason: '',
      date: '',
      pereod: '',
      place: '',
      activities: '',
      rules: {
        reason: [
          v => !!v || 'Preencha o campo Motivo'
        ],
        date: [
          v => !!v || 'Preencha o campo Data'
        ],
        pereod: [
          v => !!v || 'Preencha o campo Período'
        ],
        place: [
          v => !!v || 'Preencha o campo Local'
        ],
        activities: [
          v => !!v || 'Preencha o campo Atividades'
        ]
      },
      items: ['Ir ao cinema', 'Jogar Bingo', 'Ir ao shopping']
    }
  },

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
  }
}
</script>
