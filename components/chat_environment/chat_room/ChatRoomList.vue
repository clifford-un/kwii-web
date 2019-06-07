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
export default {
  data: () => ({
    chats: []
  }),
  mounted() {
    this.getFriendList()
  },
  methods: {
    getFriendList() {
    },
    selectFriend(chat) {
      this.$bus.$emit('selectedChat', chat)
    }
  }
}
</script>
