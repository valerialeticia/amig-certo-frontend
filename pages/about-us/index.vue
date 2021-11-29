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

    <v-row>
      <v-col>
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tortor pellentesque, rhoncus mi in,
          pharetra purus. Nunc at leo eu arcu tempus pellentesque a sit amet leo. Vestibulum augue tellus, volutpat et
          enim sit amet, auctor molestie odio. Integer quis mi ac nisl finibus venenatis. Ut ligula lacus, blandit sit
          amet rhoncus a, cursus at felis. Suspendisse nibh erat, fermentum vel erat vitae, placerat luctus mauris.
          Pellentesque a porttitor diam. Nulla nec venenatis urna. Nullam dolor tortor, placerat quis lectus eu, mattis
          finibus lorem. Aenean vel urna eu quam mollis pellentesque in at eros. Aliquam sed imperdiet mi. Etiam non risus
          ligula. Quisque ac ante quis nisl consectetur dignissim nec vel elit. Morbi sit amet ex iaculis, dapibus nunc et,
          eleifend mi. Duis eget ultricies leo.</p>
          <v-img width="400" :src="require('../../assets/images/acompanhamento.jpg')" />
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
}
</script>
