<template>
  <v-app id="chat">
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
        <v-btn icon v-show="wchat">
          <v-icon @click="closeChat()">close</v-icon>
        </v-btn>
        <v-btn icon v-show="wchat">
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon v-show="wchat">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    <v-content>
      <v-container>
      <v-flex>
        <template v-show="wchat">
          <template v-for="(message) in selected.messages">
            <div :key="message" :class="[message.mine ? 'text-xs-left' : 'text-xs-right', errorClass]">
              <v-chip>{{ message.message }}</v-chip>
            </div>
          </template>
        </template>
      </v-flex>
      <v-flex >
        <v-flex>
          <v-text-field
            label="Message"
            outline
          />
        </v-flex>
      </v-flex>
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
          <v-list-tile @click="selectFriend(item)" :key="item.name" avatar>
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
export default {
  props: {
    source: {
      type: String,
      default: 'lol'
    }
  },
  data: () => ({
    friends: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Toñito Fortich',
        last_message: '¿Cómo fueron visajes?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'El otro tipo',
        last_message: 'Fueron chéveres c:'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Yarid Mujer',
        last_message: 'Arch >> Manjaro. '
      }
    ],
    selected: {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      name: 'Yarid Mujer',
      last_message: 'Arch >> Manjaro. '
    },
    wchat: false,
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    selectFriend(item) {
      this.selected = item
      this.getMessages(item)
      this.wchat = true
    },
    closeChat() {
      this.wchat = false
    },
    getMessages(item) {
      item.messages = [
        {
          mine: false,
          message: 'This is just a test.'
        },
        {
          mine: false,
          message: 'But this really is.'
        },
        {
          mine: false,
          message: "If you don't trust me, try this."
        },
        {
          mine: true,
          message: 'This is just a test.'
        }
      ]
    }
  })
}
</script>
