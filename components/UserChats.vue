<template>
  <v-flex>
    <user-chats-tool-bar />
    <user-chat-list />
  </v-flex>
</template>
<script>
import UserChatList from '~/components/UserChatList.vue'
import UserChatsToolBar from '~/components/UserChatsToolBar.vue'

export default {
  components: {
    UserChatList,
    UserChatsToolBar
  }
}
</script>
