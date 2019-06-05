<template>
  <v-navigation-drawer v-model="drawer" width="500%" absolutes app>
    <v-layout fill-height align-center primary>
      <v-card flat column width="100%" color="primary">
        <v-window class="mb-5" v-model="onboarding" fluid>
          <v-window-item v-for="(image,i) in images" :key="i">
            <v-layout align-center column fill-height fluid>
              <v-icon color="secundary" size="1000%">
                {{ image.icon }}
              </v-icon>
              <h1 class="display-3 white--text"> {{ image.appTitle }} </h1>
              <h3 class="headline white--text"> {{ image.text }} </h3>
            </v-layout>
          </v-window-item>
        </v-window>
        <v-card-actions class="justify-space-between mt-5">
          <v-btn flat @click="prev">
            <v-icon color="white">chevron_left</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-xs-center" mandatory>
            <v-item v-for="(image,i) in images" :key="i">
              <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
                <v-icon large color="white">radio_button_unchecked</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn flat @click="next">
            <v-icon color="white">chevron_right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => {
    return {
      onboarding: 0,
      images: [
        {
          appTitle: 'KWII',
          image_path: 'https://image.flaticon.com/icons/svg/1078/1078011.svg',
          text: 'Be a Kwiier, Join Us to Kwii Platform',
          icon: 'message'
        },
        {
          appTitle: 'KWII',
          image_path: 'https://image.flaticon.com/icons/svg/263/263069.svg',
          text: 'Your messages were never more secure',
          icon: 'security'
        },
        {
          appTitle: 'KWII',
          image_path: 'https://image.flaticon.com/icons/svg/1122/1122581.svg',
          text: 'Chat Everywhere, Anywhere',
          icon: 'cloud'
        }
      ]
    }
  },
  methods: {
    next() {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    }
  }
}
</script>
