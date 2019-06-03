<template>
  <v-app id="userChat" fluid>
    <user-chats-tool-bar />
    <user-chat-list fluid />
  </v-app>
</template>
<script>
import UserChatsToolBar from '~/components/UserChatsToolBar.vue'
import UserChatList from '~/components/UserChatList.vue'
export default {
  components: {
    UserChatList,
    UserChatsToolBar
  }
}
</script>
