<template>
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
        ref="password"
        v-model="password"
        prepend-icon="vpn_key"
        append-icon="send"
        label="Password"
        type="password"
        :rules="passRules"
        @click:append="logIn"
        @keyup.native.enter="logIn"
        v-show="username"
      />
    </v-expand-transition>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      username: '',
      password: '',
      show: false,
      test: true,
      passRules: [
        value => !!value || 'We need your password to sign in D:'
      ]
    }
  },
  mounted() {
    this.$refs.username.focus()
  },
  methods: {
    logIn() {
      throw new TypeError('Not implemented yet!')
    }
  }
}
</script>
