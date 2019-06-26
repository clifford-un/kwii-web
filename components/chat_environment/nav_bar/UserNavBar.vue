<template>
  <v-navigation-drawer v-model="drawer">
    <v-layout fill-height align-center>
      <v-card flat column width="100%">
        <v-flex>
          <User />
        </v-flex>
      </v-card>
    </v-layout>
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
