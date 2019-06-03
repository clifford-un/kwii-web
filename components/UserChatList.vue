<template>
  <v-list two-line>
    <template v-for="(friend) in friends">
      <v-list-tile :key="friend.id" avatar @click="selectFriend(chat)">
        <v-list-tile-avatar>
          <img src="https://justice.org.au/wp-content/uploads/2017/08/avatar-icon.png">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ friend[0].user_name }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            test
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
import { request } from 'graphql-request'
export default {
  data: () => ({
    friends: [],
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
  async mounted() {
    const query = `
    query{
      allUsers{
        user{
          user_name
          friends{
            user_name
          }
        }
      }
    }`
    const user = await request('http://192.168.99.113:5500/graphql', query)
    this.friends = user.allUsers[0].user.friends
  },
  methods: {
    selectFriend(chat) {
      this.$bus.$emit('selectedChat', chat)
    }
  }
}
</script>
