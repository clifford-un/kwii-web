<template>
  <v-app id="chats">
    <chat />
    <user-chats />
  </v-app>
</template>

<script>
import Chat from '~/components/chat/Chat.vue'
import UserChats from '~/components/chat/user_bar/UserChats.vue'

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
