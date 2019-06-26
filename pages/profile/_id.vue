<template>
  <div>
    <div class="text-xs-center mt-3" style="font-family: 'Roboto', sans-serif; margin: 10px">
      <h2>
        {{ user_name }}
      </h2>
      <v-avatar size="90">
        <v-img :src="info.avatar" />
      </v-avatar>
    </div>
    <v-tabs
      v-model="active"
      color="#628474"
      dark
      slider-color="yellow"
    >
      <v-tab>
        Info
      </v-tab>
      <v-tab-item
        :key="info"
      >
        <v-card flat>
          <div style="font-family: 'Roboto', sans-serif; margin: 10px">
            <h2>
              Correo electrónico
            </h2>
            <h3>
              {{ info.email }}
            </h3>
          </div>
        </v-card>
      </v-tab-item>
      <v-tab>
        Tweets
      </v-tab>
      <v-tab-item
        :key="tweets"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab>
        Friends
      </v-tab>
      <v-tab-item
        :key="friends"
      >
        <v-card flat>
          <template v-for="(friend) in friends">
            <v-list-tile :key="friend.user.id" :to="{name: 'profile-id', params: { id: friend.user.id } }">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ friend.user.user_name }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ friend.user.e_mail }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import profile from '~/plugins/graphql/requests/profile.js'
import user from '~/plugins/graphql/requests/user.js'
import avatars from '~/plugins/firebase/avatars.js'
export default {
  data: () => ({
    ret: '',
    friends: [],
    user_name: '',
    info: {
      username: '',
      email: '',
      avatar: '',
      phone: ''
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  mounted() {
    this.getProfile()
    this.getUserInfo()
    this.getUserFriends()
  },
  methods: {
    async getProfile() {
      const response = await profile.methods.getUserById(this.$route.params.id)
      this.user_name = response.user.user_name
    },
    async getUserInfo() {
      const answer = await user.methods.getUserProfileInfo(this.$route.params.id)
      avatars.methods.getUserProfileAvatar(answer.user_name).then((url) => {
        this.info.avatar = url
      })
      this.info.username = answer.user_name
      this.info.email = answer.e_mail
      this.info.phone = answer.request_number
    },
    async getUserFriends() {
      const answer = await profile.methods.getFriendsById(this.$route.params.id)
      this.friends = answer
    }
  }
}
</script>
