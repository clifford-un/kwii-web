<component @update_form="update_form" />
<template>
  <v-app>
    <registerForm
      v-if="register"
      :register.sync="register"
    />
    <loginForm
      v-else
      :register.sync="register"
    />
  </v-app>
</template>

<script>
import LoginForm from '~/components/login_form.vue'
import RegisterForm from '~/components/register_form.vue'

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
