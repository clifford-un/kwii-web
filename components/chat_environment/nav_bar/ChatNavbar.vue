<template>
  <v-navigation-drawer v-model="drawer" absolute app>
    <v-flex>
      <chat-nav-bar-tool-bar />
      <chat-room-list />
    </v-flex>
  </v-navigation-drawer>
</template>
<script>
import ChatNavBarToolBar from '~/components/chat_environment/nav_bar/ChatNavBarToolBar.vue'
import ChatRoomList from '~/components/chat_environment/chat_room/ChatRoomList.vue'

export default {
  components: {
    ChatNavBarToolBar,
    ChatRoomList
  },
  data: () => ({
    drawer: true
  }),
  mounted() {
    this.$bus.$on('userChatDrawerCall', (drawerState) => { this.drawer = drawerState })
  }
}
</script>
