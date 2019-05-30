<template>
  <v-layout column justify-center align-center>
    <v-layout align-start justify-center row fill-height>
      <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
        <v-list>
          <v-list-tile>
            <v-toolbar :clipped-left="clipped" fixed app />
          </v-list-tile>
          <v-list-tile />
          <v-list-tile v-for="(item, i) in items" :key="i" :to="item" router exact>
            <img :src="item.photo" alt="">
            <p>
              {{ item.name }}
            </p>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <p>
        hola
      </p>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzmcXfpKcca8Y0zQLCpLVohzfk-7yf4pR4NcNEr750mkKiMZDoA',
          name: 'Toñito'
        },
        {
          photo: 'static/v.png',
          name: 'Angel'
        }
      ]
    }
  }
}
</script>
