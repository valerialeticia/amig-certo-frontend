<template>
  <v-row class="height my-0 py-0">
    <v-col
      cols="12"
      lg="12"
      md="12"
      sm="12"
      xs="12"
      class="height d-flex flex-column align-center justify-center">
      <div>
        <v-img width="230" :src="require('../../assets/images/logo-azul.png')" />
      </div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="form.username"
          label="Username"
          required
        />

        <v-text-field
          v-model="form.email"
          :rules="[rules.required, rules.emailRules]"
          label="E-mail"
          required
        />

        <v-text-field
          v-model="form.password"
          :append-icon="changeEye ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="changeEye ? 'text' : 'password'"
          name="input-10-1"
          label="Senha"
          hint="Mínimo 8 caracteres"
          counter
          @click:append="changeEye = !changeEye"
        />

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4 mt-4"
          @click="register"
        >
          {{  $t('login.registerButton') }}
        </v-btn>
      </v-form>

    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        username: ''
      },
      valid: true,
      rules:{
        required: value => !!value || 'Preencha o campo',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        emailRules: [
        v => !!v || 'Preencha o campo e-mail',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido',
        ],
      },
      changeEye: false
    }
  },

  methods: {
    register() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .height {
    height: 100% !important;
  }
</style>
