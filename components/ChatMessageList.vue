<template>
  <v-flex>
    <template>
      <template v-for="(message) in messages">
        <div :key="message" :class="[message.mine ? 'text-xs-left' : 'text-xs-right', errorClass]">
          <v-chip>{{ message.text }}</v-chip>
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
        }
      ]
    }
  }
}
</script>
