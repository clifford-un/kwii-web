<template>
  <v-list two-line>
    <v-subheader>Requests from</v-subheader>
    <template v-for="(chat) in chats">
      <v-list-tile :key="chat.id" avatar>
        <v-list-tile-avatar>
          <img :src="chat.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ chat.name }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            Wants to be your friend!
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon>
            <v-icon>check</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>close</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
// import { request } from 'graphql-request'
// import { URL } from 'static/variables.js'
export default {
  data: () => ({
    to: [],
    from: [],
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
  })
}
</script>
