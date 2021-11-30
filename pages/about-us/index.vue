<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <PageTitle
          icon="mdi-help-circle"
          title="Sobre Nós"
          subtitle="Aqui você irá conhecer melhor sobre nosso projeto." />
      </v-col>
    </v-row>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
    >
      <v-tab
        v-for="item in $i18n.messages.pt.aboutUs.tabItems"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card
          flat
        >
          <h3 class="mt-2">{{$t('aboutUs.title')}}</h3>
          <p>{{$t('aboutUs.descripAboutUs')}}</p>
          <h3>{{$t('aboutUs.subtitle')}}</h3>
          <v-img width="600" class="my-3" :src="require('../../assets/images/02.svg')" />
          <p>{{$t('aboutUs.descripAmigoCerto')}}</p>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
          flat
        >
          <h3 class="mt-2">{{$t('aboutUs.volunteeringTitle')}}</h3>
          <v-img width="600" class="my-3" :src="require('../../assets/images/05.svg')" />
          <p>{{$t('aboutUs.firstTextVolunteering')}}</p>
          <p>{{$t('aboutUs.secondTextVolunteering')}}</p>
          <p>{{$t('aboutUs.thirdTextVolunteering')}}</p>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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
      tab: null
    }
  }
}
</script>
