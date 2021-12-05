<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <PageTitle
          icon="mdi-phone"
          title="Atendimento"
          subtitle="Tem alguma dúvida? Fale conosco." />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3>{{ $t('attendance.channelsTitle') }}</h3>
        <v-img width="400" :src="require('../../assets/images/05.svg')" class="mb-3" />
        <v-card class="mt-4">
          <v-card-text>
            <v-icon>{{ $t('attendance.phoneIcon') }}</v-icon>
            {{ $t('attendance.phoneText') }}
          </v-card-text>
          <v-card-text>
            <v-icon>{{ $t('attendance.whatsappIcon') }}</v-icon>
            {{ $t('attendance.whatsappText') }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3>{{ $t('attendance.questionsTitle') }}</h3>
        <v-card>
          <v-expansion-panels class="mt-3">
            <v-expansion-panel
              v-for="(item,i) in questions"
              :key="i"
            >
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.description  }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '@/components/molecules/PageTitle.vue'
export default {
  components: {
    PageTitle
  },

  data() {
    return {
      questions: [
        {
          title: 'Como solicito serviço?',
          description: 'Para solicitar é necessário ir na seção de "Seriços" no navigation na esquerda e em seguida clicar nele.'
        },
        {
          title: 'Quais os serviços disponíveis?',
          description: 'Existem três serviços, sendo eles: Companhia, Acompanhamento Médico e Uber Amigo Certo mas infelizmente apenas o Acompanhmento está funcionando.'
        },
        {
          title: 'Até quanto tempo dura?',
          description: 'Irá  depender da disponibilidade do voluntário.'
        }
      ]
    }
  }
}
</script>
