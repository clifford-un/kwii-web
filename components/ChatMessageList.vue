<template>
  <v-flex>
    <template>
      <template v-for="(message) in messages">
        <div :key="message" :class="[message.mine ? 'text-xs-left' : 'text-xs-right', errorClass]">
          <v-chip>{{ message.chat_text }}</v-chip>
        </div>
      </template>
    </template>
  </v-flex>
</template>
<script>
import { request } from 'graphql-request'
import { URL } from 'static/variables.js'
export default {
  data: () => ({
    chatRoomId: 2,
    messages: [
      {
        mine: true,
        chat_text: 'This is just a test.'
      },
      {
        mine: false,
        chat_text: 'But this really is.'
      }
    ]
  }),
  mounted() {
    this.$bus.$on('selectedChat', (chat) => {
      this.setChat(chat)
      this.getMessages()
    })
  },
  methods: {
    setChat(chat) {
      this.chatRoomId = chat.chatRoomId
    },
    async getMessages() {
      const query = `
      query {
        chatById(chat_room_id: "${this.chatRoomId}") {
          chat_text
          chat_user_origin
        }
      }`
      this.messages = []
      const messages = await request(URL, query)
      messages.chatById.forEach((element) => {
        const dummElement = {}
        dummElement.mine = element.chat_user_origin === 1
        dummElement.chat_text = element.chat_text
        this.messages.push(dummElement)
      })
    }
  }
}
</script>
