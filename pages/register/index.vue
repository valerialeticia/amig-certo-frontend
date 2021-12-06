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
          v-model="form.name"
          label="Nome"
          required
        />

        <v-text-field
          v-model="form.username"
          label="Username"
          required
        />

        <v-text-field
          v-model="form.email"
          :rules="[...rules.required, ...rules.emailRules]"
          label="E-mail"
          required
        />

          <v-select
          v-model="form.profile"
          :items="items"
          :rules="rules.required"
          label="Perfil"
          required />

        <v-text-field
          v-model="form.password"
          :append-icon="changeEyePassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[...rules.required, ...rules.min]"
          :type="changeEyePassword ? 'text' : 'password'"
          name="input-10-1"
          label="Senha"
          hint="Mínimo 8 caracteres"
          counter
          @click:append="changeEyePassword = !changeEyePassword"
        />

        <v-text-field
          v-model="form.confirmPassword"
          :append-icon="changeEeyeConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[...rules.required, ...rules.min, ...handlePasswordFields]"
          :type="changeEeyeConfirmPassword ? 'text' : 'password'"
          name="input-10-1"
          label="Confirmar senha"
          hint="Mínimo 8 caracteres"
          counter
          @click:append="changeEeyeConfirmPassword = !changeEeyeConfirmPassword"
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
  layout: 'registration',
  data() {
    return {
      form: {
        email: '',
        password: '',
        username: '',
        name:  '',
        profile: '',
        confirmPassword: ''
      },
      valid: true,
      rules:{
        required: [value => !!value || 'Preencha o campo'],
        min: [v => v.length >= 8 || 'Mínimo 8 caracteres'],
        emailRules: [
        v => !!v || 'Preencha o campo e-mail',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido',
        ]
      },
      changeEyePassword: false,
      changeEeyeConfirmPassword: false,
      items: ['Cliente', 'Voluntário']
    }
  },

  computed: {
    handlePasswordFields() {
      return [v => v  == this.form.password || 'Senhas não iguais']
    }
  },

  methods: {
    register() {
      if(this.form.profile.toLowerCase() == 'voluntário') {
        this.$router.push('/register/volunteer')
      } else {
        this.$router.push('/register/client')
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
