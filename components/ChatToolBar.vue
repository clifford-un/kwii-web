<template>
  <v-toolbar color="primary" card dark fixed app>
    <v-btn icon @click.stop="userChatDrawerCall()">
      <v-icon>{{ `chevron_${!drawer ? 'left' : 'right'}` }}</v-icon>
    </v-btn>
    <v-toolbar-side-title v-show="wchat">
      <v-avatar>
        <img :src="avatar">
      </v-avatar>
    </v-toolbar-side-title>
    <v-toolbar-title v-show="wchat">
      {{ name }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-show="wchat" icon>
      <v-icon @click="closeChat()">
        close
      </v-icon>
    </v-btn>
    <v-btn v-show="wchat" icon>
      <v-icon>
        search
      </v-icon>
    </v-btn>
    <v-btn v-show="wchat" icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    wchat: false,
    drawer: false,
    chatRoomId: 0,
    avatar: '',
    name: ''
  }),
  mounted() {
    this.$bus.$on('selectedChat', (chat) => { this.selectChat(chat) })
    this.$bus.$on('userChatDrawerCall', (drawerState) => { this.drawer = drawerState })
  },
  methods: {
    selectChat(chat) {
      this.wchat = true
      this.avatar = chat.avatar
      this.name = chat.name
    },
    closeChat() {
      this.wchat = false
      this.$bus.$emit('closeChat')
    },
    userChatDrawerCall() {
      this.$bus.$emit('userChatDrawerCall', !this.drawer)
    }
  }
}
</script>
