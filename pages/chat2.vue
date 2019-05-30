<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-layout row fill-height>
        <v-flex fill-height>
          <v-card fill-height>
            <v-toolbar color="primary" dark>
              <v-toolbar-title>KWII</v-toolbar-title>
              <v-spacer />
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header">
                  {{ item.header }}
                </v-subheader>
                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset" />
                <v-list-tile v-else :key="item.name" avatar>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ item.title }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      {{ item.subtitle }}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </v-container>
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
        title: 'Toñito Fortich',
        subtitle: '¿Cómo fueron visajes?'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'El otro tipo',
        subtitle: 'Fueron chéveres c:'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Yarid Mujer',
        subtitle: 'Arch >> Manjaro. '
      }
    ],
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
  })
}
</script>
