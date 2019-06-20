<template>
  <v-flex>
    <chat-tool-bar />
    <v-container fluid>
      <v-content fluid>
        <chat-message-list v-show="wchat" />
        <chat-message-bar v-show="wchat" />
        <notification />
      </v-content>
    </v-container>
  </v-flex>
</template>

<script>
import ChatToolBar from '~/components/chat_environment/ChatToolBar.vue'
import ChatMessageList from '~/components/chat_environment/message_terminal/ChatMessageList.vue'
import ChatMessageBar from '~/components/chat_environment/message_terminal/ChatMessageBar.vue'
import Notification from '~/components/chat_environment/notification/notification.vue'
import fbMessaging from '~/plugins/firebase/fb_connection.js'

export default {
  components: {
    ChatMessageList,
    ChatToolBar,
    ChatMessageBar,
    Notification
  },
  data: () => ({
    wchat: false
  }),
  mounted() {
    this.$bus.$on('selectedChat', () => { this.showChat() })
    this.$bus.$on('closeChat', () => { this.hideChat() })
    fbMessaging.fireMess.onMessage((payload) => {
      this.$bus.$emit('messageFb', payload)
    })
  },
  methods: {
    showChat() {
      this.wchat = true
    },
    hideChat() {
      this.wchat = false
    }
  }
}
</script>
