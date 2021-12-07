<template>
  <v-container class="height">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
      <v-row>
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="12"
          xs="12">
          <v-text-field
            v-model="form.cpf"
            :rules="rules.required"
            label="CPF"
            required
          />
        </v-col>

        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="12"
          xs="12">
          <v-text-field
            v-model="form.date"
            :rules="rules.required"
            label="Data de Nascimento"
            required
          />
        </v-col>
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="12"
          xs="12">
          <v-text-field
            v-model="form.telephone"
            :rules="rules.required"
            label="Telefone"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="12"
          xs="12">
          <v-text-field
            v-model="form.address"
            :rules="rules.required"
            label="Endereço"
            required
          />
        </v-col>

        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="12"
          xs="12">
          <v-select
            v-model="form.services"
            :items="services"
            :rules="rules.required"
            label="Necessidades"
            required />
        </v-col>
      </v-row>

      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4 mt-4"
        @click="register">
        {{  $t('login.registrationButton') }}
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  layout: 'registration',
  data() {
    return {
      form: {
        cpf: '',
        date: '',
        telephone: '',
        address:  '',
        services: ''
      },
      valid: true,
      rules:{
        required: [value => !!value || 'Preencha o campo']
      },
      services: ['Jogar bingo', 'Ir ao shopping']
    }
  },

  methods: {
    async register() {
      const params = {
        ...this.$route.query,
        ...this.form
      }
      try {
        await this.$services.RegisterService.createUser(params)
        this.$router.push('/')
        this.$toast.success('Cadastro feito com sucesso!')
      } catch(error) {
        this.$toast.error('Não foi possível criar o usuário')
      }
    }
  }
}
</script>

<style lang="scss">
  .height {
    height: 100% !important;
  }
</style>
