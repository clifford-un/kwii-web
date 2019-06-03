<template>
  <v-container>
    <v-flex v-for="(message) in messages" :key="message.id">
      <div :key="message" :class="[message.mine ? 'text-xs-left' : 'text-xs-right', errorClass]">
        <v-chip>{{ message.text }}</v-chip>
      </div>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    chatRoomId: 2,
    messages: [
      {
        mine: true,
        text: 'This is just a test.'
      },
      {
        mine: false,
        text: 'But this really is.'
      }
    ]
  }),
  mounted() {
    this.$bus.$on('selectedChat', (chat) => { this.setChat(chat) })
  },
  methods: {
    setChat(chat) {
      this.chatRoomId = chat.chatRoomId
      this.getMesseges(chat.chatRoomId)
    },
    getMesseges(chatRoomId) {
      this.messages = [
        {
          mine: true,
          text: 'This was just a test.'
        },
        {
          mine: false,
          text: 'But this really was.'
        },
        {
          mine: false,
          text: 'But this really was.'
        },
        {
          mine: false,
          text: 'But this really was.'
        }
      ]
    }
  }
}
</script>
