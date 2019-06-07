<template>
  <v-app id="chats">
    <chat />
    <user-chats />
  </v-app>
</template>

<script>
import Chat from '~/components/chat_environment/ChatEnvironment.vue'
import UserChats from '~/components/chat_environment/nav_bar/ChatNavbar.vue'

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
