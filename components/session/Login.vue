<template>
  <v-content fill-height fluid app>
    <v-layout align-center justify-center fill-height>
      <register-form v-if="register" :register.sync="register" />
      <login-form v-else :register.sync="register" />
    </v-layout>
  </v-content>
</template>

<script>
import LoginForm from '~/components/session/form/LoginForm.vue'
import RegisterForm from '~/components/session/form/RegisterForm.vue'

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data: () => {
    return {
      register: false
    }
  }
}
</script>
