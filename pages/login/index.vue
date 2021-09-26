<template>
  <v-row class="d-flex container-form">
    <v-col>
      <v-img
        max-height="150"
        max-width="250"
        src="../../assets/images/login-img.jpg"
      />
    </v-col>
    <v-col class="container-form">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="container-form"
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
          ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          login
        </v-btn>
      </v-form>
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
      validate () {
        this.$refs.form.validate()
      },
    },
}
</script>

<style lang="scss" scoped>
  .container-form {
    height: 100% !important;
  }
</style>

