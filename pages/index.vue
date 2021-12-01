<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <h1 class="primary--text text-center">Olá, seja bem-vindo ao Amigo Certo!</h1>
      <p>O Amigo Certo é uma plataforma para voluntariado seja por companhia, acompanhamento ou axuilio para idosos.</p>
      <h3 class="mb-3">Venha nos conhecer!</h3>

      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data()  {
    return {
      items: [
          {
            src: require('../assets/images/auxiliareidoso.jpg'),
          },
          {
            src: require('../assets/images/acompanharidoso1.jpg'),
          },
          {
            src: require('../assets/images/cuidador_idosos_3.jpg'),
          },
          {
            src: require('../assets/images/Cuidado-idosos.jpg'),
          },
        ],
    }
  }
}
</script>
