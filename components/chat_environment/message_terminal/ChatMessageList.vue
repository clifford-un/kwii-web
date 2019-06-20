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
    this.$bus.$on('messageSent', (chat) => {
      this.getMessages()
    })
  },
  methods: {
    setChat(chat) {
      this.chatRoomId = chat.chatRoomId
    },
    getMessages() {
    }
  }
}
</script>
