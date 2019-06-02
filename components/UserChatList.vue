<template>
  <v-list two-line>
    <template v-for="(chat) in chats">
      <v-list-tile :key="chat.name" avatar @click="selectFriend(chat)">
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
  methods: {
    selectFriend(chat) {
      this.$bus.$emit('selectedChat', chat)
    }
  }
}
</script>
