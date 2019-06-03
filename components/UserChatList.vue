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
    chats: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Toñito Fortich',
        last_message: '¿Cómo fueron visajes?',
        chatRoomId: 1
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'El otro tipo',
        last_message: 'Fueron chéveres c:',
        chatRoomId: 2
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Yarid Mujer',
        last_message: 'Arch >> Manjaro. ',
        chatRoomId: 3
      }
    ]
  }),
  mounted() {
    this.getFriendList()
  },
  methods: {
    async getFriendList() {
      const query = `
      query{
        allUsers{
          user{
            user_name
            friends{
              id
              user_name
            }
          }
        }
      }`
      const user = await request(URL, query)
      this.friends = user.allUsers[0].user.friends
      this.chats = []
      this.friends.forEach((element) => {
        const dummElement = {}
        dummElement.name = element[0].user_name
        dummElement.last_message = 'Hola!'
        dummElement.avatar = `https://cdn.vuetifyjs.com/images/lists/${element[0].id}.jpg`
        dummElement.chatRoomId = 'mentiritas'
        this.chats.push(dummElement)
      })
    },
    selectFriend(chat) {
      this.$bus.$emit('selectedChat', chat)
    }
  }
}
</script>
