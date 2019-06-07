<template>
  <v-navigation-drawer v-model="drawer" absolute app>
    <v-flex>
      <user-chats-tool-bar />
      <div v-if="drawer">
        <user-chat-list />
      </div>
      <div v-if="!drawer">
        <user-requests />
      </div>
    </v-flex>
  </v-navigation-drawer>
</template>
<script>
import UserChatList from '~/components/UserChatList.vue'
import UserChatsToolBar from '~/components/UserChatsToolBar.vue'
import UserRequests from '~/components/RequestList.vue'

export default {
  components: {
    UserChatList,
    UserChatsToolBar,
    UserRequests
  },
  data: () => ({
    drawer: true
  }),
  mounted() {
    this.$bus.$on('requestViewDrawerCall', (drawerState) => { this.drawer = !drawerState })
  }
}
</script>
