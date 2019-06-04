<template>
  <v-app id="chats">
    <chat />
    <v-navigation-drawer v-model="drawer" absolute app>
      <user-chats/>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Chat from '~/components/Chat.vue'
import UserChats from '~/components/UserChats.vue'

export default {
  components: {
    Chat,
    UserChats
  },
  data: () => ({
    drawer: null
  }),
  mounted() {
    this.$bus.$on('userChatDrawerCall', (drawerState) => { this.drawer = !drawerState })
  }
}
</script>
