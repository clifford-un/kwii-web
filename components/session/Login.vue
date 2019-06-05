<component @update_form="update_form" />
<template>
  <v-app>
    <v-container>
      <v-content>
        <registerForm v-if="register" :register.sync="register" />
        <loginForm v-else :register.sync="register" />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import LoginForm from '~/components/session/LoginForm.vue'
import RegisterForm from '~/components/session/RegisterForm.vue'

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
