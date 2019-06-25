<template>
  <v-layout align-center justify-space-around column fill-height>
    <v-avatar size="90" @click="triggerUpload">
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
    <input v-show="false" ref="inputUpload" type="file" @change="setFileSave" >
    </input>
    <h1 class="headline">
      {{ user.username }}
    </h1>
    <h1 class="body-2">
      {{ user.email }}
    </h1>
    <h1 class="body-2">
      {{ user.phone }}
    </h1>
  </v-layout>
</template>
<script>
import user from '~/plugins/graphql/requests/user.js'
import avatars from '~/plugins/firebase/avatars.js'
export default {
  data: () => ({
    user: {
      avatar: 'Test',
      username: 'Test',
      email: 'Test',
      phone: ''
    },
    file: ''
  }),
  mounted() {
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
