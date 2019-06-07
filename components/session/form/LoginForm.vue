<template>
  <v-flex xs4>
    <v-form>
      <v-text-field ref="username" v-model="username" prepend-icon="face" label="Username" clearable />
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
          @click:append="login"
          @keyup.native.enter="login"
        />
      </v-expand-transition>
    </v-form>
    <v-layout column align-end>
      <v-btn flat color="primary" @click="register">
        New to KWII?
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  data: () => {
    return {
      username: '',
      password: '',
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
    login() {
      throw new TypeError('Not implemented yet!')
    }
  }
}
</script>
