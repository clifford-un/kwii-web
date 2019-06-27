<template>
  <v-navigation-drawer v-model="drawer" absolute temporary app>
    <User />
  </v-navigation-drawer>
</template>
<script>
import User from '~/components/user_environment/User.vue'

export default {
  components: {
    User
  },
  data: () => ({
    drawer: false,
    mini: true,
    right: null
  }),
  mounted() {
    this.$bus.$on('requestViewUserDrawerCall', (drawerState) => { this.drawer = !this.drawer })
  }
}
</script>
