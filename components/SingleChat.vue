<template>
  <v-flex>
    <v-flex>
      <template>
        <template v-for="(message) in messages">
          <div :key="message" :class="[message.mine ? 'text-xs-left' : 'text-xs-right', errorClass]">
            <v-chip>{{ message.text }}</v-chip>
          </div>
        </template>
      </template>
    </v-flex>
    <v-flex>
      <v-flex>
        <v-text-field label="Message" outline @click="setId(2)" />
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    chatRoomId: 2,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    name: 'Yarid Mujer',
    last_message: 'Arch >> Manjaro.',
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
    this.$bus.$on('changeChatroomID', (chatRoomId) => { this.setId(chatRoomId) })
  },
  methods: {
    setId(chatRoomId) {
      this.chatRoomId = chatRoomId
      this.getMesseges()
    },
    getMesseges() {
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
