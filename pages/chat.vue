<template>
  <v-app id="chats">
    <v-toolbar color="primary" card dark fixed app>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>{{ `chevron_${!drawer ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-side-title v-show="wchat">
        <v-avatar>
          <img :src="selected.avatar">
        </v-avatar>
      </v-toolbar-side-title>
      <v-toolbar-title v-show="wchat">
        {{ selected.name }}
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
    <v-content>
      <v-container v-show="wchat">
        <single-chat />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="drawer" absolute app>
      <v-toolbar card color="primary" dark>
        <v-toolbar-title>KWII</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item) in friends">
          <v-list-tile :key="item.name" avatar @click="selectFriend(item)">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ item.last_message }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import SingleChat from '~/components/SingleChat.vue'

export default {
  components: {
    SingleChat
  },
  data: () => ({
    wchat: false,
    drawer: null,
    selected: {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      name: 'Yarid Mujer',
      last_message: 'Arch >> Manjaro.',
      chatRoomId: 4
    },
    friends: [
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
    selectFriend(item) {
      this.selected = item
      this.$bus.$emit('changeChatroomID', item.chatRoomId)
      this.wchat = true
    },
    closeChat() {
      this.wchat = false
    }
  }
}
</script>
