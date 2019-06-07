<template>
  <v-list two-line>
    <template v-for="(chat) in chats">
      <v-list-tile :key="chat.chatRoomId" avatar @click="selectFriend(chat)">
        <v-list-tile-avatar>
          <img :src="chat.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ chat.name }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ chat.last_message }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
import { request } from 'graphql-request'
import { URL } from 'static/variables.js'
export default {
  data: () => ({
    chats: []
  }),
  mounted() {
    this.getFriendList()
  },
  methods: {
    async getFriendList() {
      const query = `
      query{
        getChatroomsByUser(user_id: 1){
          id
          name
          users
        }
      }`
      const chatsRequest = await request(URL, query)
      this.chats = []
      this.chatsSub = []
      this.chatsSub = chatsRequest.getChatroomsByUser
      this.chatsSub.forEach((element) => {
        const dummElement = {}
        dummElement.name = element.name
        dummElement.last_message = 'Hola!'
        dummElement.avatar = `https://image.flaticon.com/icons/svg/254/254017.svg`
        dummElement.chatRoomId = element.id
        this.chats.push(dummElement)
      })
    },
    selectFriend(chat) {
      this.$bus.$emit('selectedChat', chat)
    }
  }
}
</script>
