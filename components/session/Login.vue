<template>
  <v-content fill-height fluid app>
    <v-layout align-center justify-center fill-height>
      <register-form v-show="register" />
      <login-form v-show="!register" />
    </v-layout>
    <v-divider />
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
  },
  mounted() {
    this.$bus.$on('session:from:registerForm:login', () => { this.register = false })
    this.$bus.$on('session:from:registerForm:register', () => { this.register = true })
  }
}
</script>
