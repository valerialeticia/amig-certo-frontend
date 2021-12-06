<template>
  <v-row class="height my-0 py-0">
    <v-col
      cols="12"
      lg="6"
      md="6"
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
          v-model="email"
          :rules="rules.emailRules"
          label="E-mail"
          required
        />

        <v-text-field
          v-model="password"
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
          @click="login"
        >
          {{ $t('login.loginButon') }}
        </v-btn>

        <v-btn
          color="primary"
          outlined
          class="mr-4 mt-4"
          @click="register"
        >
          {{  $t('login.registrationButton') }}
        </v-btn>
      </v-form>

    </v-col>
    <v-col
      cols="12"
      lg="6"
      md="6"
      sm="12"
      xs="12"
      class="bg height d-flex justify-center align-center">
      <h2 class="white--text text-center">{{ $t('login.welcomeMessage') }}</h2>
    </v-col>
  </v-row>

</template>

<script>
export default {
  layout: 'login',
  data: () => ({
      valid: true,
      password: '',
      email: '',
      rules:{
        required: value => !!value || 'Preencha o campo',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        emailRules: [
        v => !!v || 'Preencha o campo e-mail',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido',
      ],
      },
      changeEye: false,
    }),

    methods: {
      login (logininfo) {
        this.$refs.form.validate()
        setTimeout(() => {
          this.$nuxt.$loading.start()
          this.$router.push('/')
          this.$toast.success('Login feito com sucesso!')
        }, 3000)
      },

      register() {
        this.$router.push('/register')
      }
    },
}
</script>

<style lang="scss" scoped>
  .height {
    height: 100vh;
  }
  .bg{
    background: url('../../assets/images/login-img-filtro.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>

