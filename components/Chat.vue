<template>
  <v-flex>
    <chat-tool-bar />
    <v-container fluid>
      <v-content fluid>
        <chat-message-list v-show="wchat" />
        <v-text-field label="Message" outline />
      </v-content>
    </v-container>
  </v-flex>
</template>

<script>
import ChatMessageList from '~/components/ChatMessageList.vue'
import ChatToolBar from '~/components/ChatToolBar.vue'
export default {
  components: {
    ChatMessageList,
    ChatToolBar
  },
  data: () => ({
    wchat: false
  }),
  mounted() {
    this.$bus.$on('selectedChat', () => { this.showChat() })
    this.$bus.$on('closeChat', () => { this.hideChat() })
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
