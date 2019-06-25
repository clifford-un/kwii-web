<template>
  <v-app id="chat">
    <chat />
    <user-chats />
    <user-nav-bar />
  </v-app>
</template>

<script>
import Chat from '~/components/chat_environment/ChatEnvironment.vue'
import UserChats from '~/components/chat_environment/nav_bar/ChatNavbar.vue'
import UserNavBar from '~/components/chat_environment/nav_bar/UserNavBar.vue'

export default {
  components: {
    Chat,
    UserChats,
    UserNavBar
  },
  data: () => ({
    drawer: null
  }),
  mounted() {
    this.$bus.$on('userChatDrawerCall', (drawerState) => { this.drawer = !drawerState })
  }
}
</script>
