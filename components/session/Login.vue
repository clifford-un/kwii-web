<template>
  <v-app>
    <v-container>
      <v-content>
        <v-layout column>
          <registerForm v-if="register" :register.sync="register" />
          <loginForm v-else :register.sync="register" />
        </v-layout>
      </v-content>
    </v-container>
  </v-app>
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
