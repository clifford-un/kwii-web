<template>
  <v-flex xs4>
    <v-form>
      <v-text-field
        v-model="username"
        prepend-icon="person_pin"
        label="Username"
        required
        :rules="usernameRules"
        :loading="gettingAnswer"
      />
      <v-text-field
        v-model="password"
        prepend-icon="vpn_key"
        :append-icon="show ? 'visibility' : 'visibility_off'"
        :type="show ? 'text' : 'password'"
        name="password"
        label="Password"
        :rules="passwordRules"
        @click:append="show = !show"
        :loading="gettingAnswer"
      />
      <v-text-field
        v-model="email"
        prepend-icon="email"
        name="email"
        label="email"
        :rules="emailRules"
        :loading="gettingAnswer"
      />
      <v-text-field
        v-model="phone"
        prepend-icon="phone"
        label="phone"
        :rules="phoneRules"
        :loading="gettingAnswer"
      />
    </v-form>
    <v-fade-transition>
      <v-alert v-show="gotError" :value="true" type="error">
        It seems wrong for us :s
      </v-alert>
    </v-fade-transition>
    <v-layout row justify-space-between>
      <v-btn flat color="primary" @click="login">
        <v-icon>
          chevron_left
        </v-icon>
      </v-btn>
      <v-btn flat color="primary" @click="signup">
        <v-icon>
          person_add
        </v-icon>
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
import user from '~/plugins/graphql/requests/user.js'
export default {
  data: () => {
    return {
      username: '',
      password: '',
      email: '',
      phone: '',
      show: false,
      gettingAnswer: false,
      gotError: false,
      response: 'a',
      usernameRules: [
        v => !!v || 'We need your username to sign you up D:',
        v => /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(v) || 'Your username have weird symbols :c',
        v => (v && v.length <= 32) || 'Your username is too big for our databases :c',
        v => (v && v.length >= 4) || 'Your username is too short :c'
      ],
      passwordRules: [
        v => !!v || 'We need your password to sign you up D:',
        v => (v && v.length >= 8) || 'Your password is too short :c'
      ],
      emailRules: [
        v => !!v || 'We need your email to sign you up D:',
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Your e-mail must be valid :c'
      ],
      phoneRules: [
        v => !!v || 'We need your email to sign you up D:',
        v => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(v) || 'Your phone looks weird :c'
      ]
    }
  },
  methods: {
    login() {
      this.$bus.$emit('session:from:registerForm:login')
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
    async signup() {
      this.gettingAnswer = true
      const answer = await user.methods.createUser(this.username, this.password, this.email)
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
