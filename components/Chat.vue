<template>
  <v-app>
    <v-content>
      <chat-tool-bar />
      <chat-message-list v-show="wchat" />
      <v-bottom-nav v-show="wchat" :active.sync="bottomNav" flat :value="true" absolute>
        <v-text-field v-model="message" outline clearable label="Message" type="text">
        </v-text-field>
        <v-btn>
          <v-icon @click="send()">
            send
          </v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-content>
  </v-app>
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
