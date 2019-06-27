<template>
  <v-layout align-center justify-start column fill-height>
    <v-flex>
      <v-avatar size="90" class="pr-10" @click="triggerUpload">
        <v-hover>
          <v-img slot-scope="{ hover }" :src="user.avatar">
            <v-expand-transition>
              <v-icon v-if="hover" size="80">
                cloud_upload
              </v-icon>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </v-avatar>
      <input v-show="false" ref="inputUpload" type="file" @change="setFileSave">
      <v-divider/>
      <h1 class="headline">
        {{ user.username }}
      </h1>
      <h1 class="body-2">
        {{ user.email }}
      </h1>
    </v-flex>
    <v-flex fill-height>
      <tweet-list v-if="tweets"/>
      <friend-list v-else/>
    </v-flex>
    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
      <v-btn color="accent" flat value="recent">
        <span>Tweets</span>
        <v-icon>chat_bubble</v-icon>
      </v-btn>
      <v-btn color="accent" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn color="accent" flat value="nearby">
        <span>Friends</span>
        <v-icon>people</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-layout>
</template>
<script>
import { get } from 'local-storage'
import FriendList from '~/components/user_environment/FriendList.vue'
import TweetList from '~/components/user_environment/TweetList.vue'
import user from '~/plugins/graphql/requests/user.js'
import avatars from '~/plugins/firebase/avatars.js'
export default {
  components: {
    FriendList,
    TweetList
  },
  data: () => ({
    user: {
      avatar: 'Test',
      username: 'Test',
      email: 'Test',
      phone: '',
      tweets: true,
      id: 0
    },
    file: ''
  }),
  mounted() {
    this.user.id = get('userId')
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const answer = await user.methods.getUserInfo()
      avatars.methods.getUserAvatar().then((url) => {
        this.user.avatar = url
      })
      this.user.username = answer.user_name
      this.user.email = answer.e_mail
      this.user.phone = answer.request_number
    },
    setFileSave(event) {
      this.file = event.target.files[0]
      avatars.methods.setUserAvatar(this.file).then(() => {
        this.getUserInfo()
      })
    },
    triggerUpload() {
      return this.$refs.inputUpload.click()
    }
  }
}
</script>
