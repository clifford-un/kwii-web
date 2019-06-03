<template>
  <v-app>
    <login />
  </v-app>
</template>

<script>
import Login from '~/components/login.vue'

export default {
  layout: 'landing',
  components: {
    Login
  }
}
</script>
