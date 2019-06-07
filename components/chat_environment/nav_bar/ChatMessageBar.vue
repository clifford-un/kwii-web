<template>
  <v-text-field
    v-model="message"
    :append-icon="marker ? 'place' : 'cancel'"
    :append-outer-icon="message ? 'send' : 'mic'"
    :prepend-icon="icon"
    box
    clear-icon="close"
    clearable
    label="Message"
    type="text"
    @click:append="toggleMarker"
    @click:append-outer="sendMessage"
    @click:prepend="changeIcon"
    @click:clear="clearMessage"
    @keyup.native.enter="sendMessage"
  />
</template>
<script>
import { request } from 'graphql-request'
import { URL } from 'static/variables.js'
export default {
  data: () => ({
    userId: 1,
    chatroomId: 'mentiritas',
    password: 'Password',
    show: false,
    message: 'Hey!',
    marker: true,
    iconIndex: 0,
    icons: [
      'mood',
      'mood_bad',
      'sentiment_very_dissatisfied',
      'sentiment_dissatisfied',
      'sentiment_satisfied',
      'sentiment_very_satisfied'
    ]
  }),
  computed: {
    icon() {
      return this.icons[this.iconIndex]
    }
  },
  mounted() {
    this.$bus.$on('selectedChat', (chat) => { this.chatroomId = chat.chatRoomId })
  },
  methods: {
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {
      this.sendMessageGraph()
      this.messageSent()
      this.resetIcon()
      this.clearMessage()
    },
    messageSent() {
      this.$bus.$emit('messageSent')
    },
    async sendMessageGraph() {
      const mut = `
      mutation {
        createChat(chat: {
          chat_user_origin: ${this.userId}
          chat_room_id: "${this.chatroomId}"
          chat_text: "${this.message}"
        }) {
          chat_text
        }
      }`
      await request(URL, mut)
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1 ? this.iconIndex = 0 : this.iconIndex++
    }
  }
}
</script>
