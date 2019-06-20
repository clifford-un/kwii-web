<template>
  <v-app>
    <login />
    <login-navigation-drawer />
  </v-app>
</template>

<script>
import Login from '~/components/session/Login.vue'
import LoginNavigationDrawer from '~/components/session/LoginNavigationDrawer.vue'
export default {
  components: {
    Login,
    LoginNavigationDrawer
  }
}
</script>
