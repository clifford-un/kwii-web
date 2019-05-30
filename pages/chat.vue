<template>
  <v-app id="chat">
    <v-toolbar color="primary" card dark fixed app>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>{{ `chevron_${!drawer ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-side-title>
        <v-avatar>
          <img :src="selected.avatar">
        </v-avatar>
      </v-toolbar-side-title>
      <v-toolbar-title> {{ selected.name }} </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>
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
        <template v-for="(item) in items">
          <v-list-tile :key="item.name" avatar>
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
    <p>
      hola
    </p>
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
    items: [
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
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
  })
}
</script>
