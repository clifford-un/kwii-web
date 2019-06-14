<template>
  <v-flex xs4>
    <v-form>
      <v-text-field
        ref="username"
        v-model="username"
        prepend-icon="face"
        label="Username"
        clearable
      />
      <v-expand-transition>
        <v-text-field
          v-show="username"
          ref="password"
          v-model="password"
          prepend-icon="vpn_key"
          append-icon="send"
          label="Password"
          type="password"
          :rules="passRules"
          :loading="gettingAnswer"
          @click:append="login"
          @keyup.native.enter="login"
        />
      </v-expand-transition>
      <v-fade-transition>
        <v-alert v-show="gotError" :value="true" type="error">
          It seems wrong for us :s
        </v-alert>
      </v-fade-transition>
    </v-form>
    <v-layout column align-end>
      <v-btn flat color="primary" @click="register">
        New to KWII?
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
import session from '~/plugins/graphql/requests/session.js'
export default {
  data: () => {
    return {
      username: '',
      password: '',
      gettingAnswer: false,
      gotError: false,
      show: false,
      passRules: [
        value => !!value || 'We need your password to sign in D:'
      ]
    }
  },
  mounted() {
    this.$refs.username.focus()
  },
  methods: {
    register() {
      this.$bus.$emit('session:from:registerForm:register')
    },
    loadChatSession() {
      this.$router.push({
        path: '/chat'
      })
    },
    hideError() {
      setTimeout(() => { if (this.gotError) { this.gotError = false } }, 5000)
    },
    hideLoadingbar() {
      setTimeout(() => { if (this.gettingAnswer) { this.gettingAnswer = false } }, 1500)
    },
    async login() {
      this.gettingAnswer = true
      const answer = await session.methods.getToken(this.username, this.password)
      if (answer === ':s') {
        this.gotError = true
        this.hideError()
      } else {
        this.loadChatSession()
      }
      this.hideLoadingbar()
    }
  }
}
</script>
