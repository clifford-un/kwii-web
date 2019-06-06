<template>
  <v-form>
    <h3 class="secundary--text">
      Username
    </h3>
    <v-text-field
      v-model="username"
      v-validate="'required'"
      prepend-inner-icon="face"
      :error-messages="errors.collect('username')"
      label="Hint username"
      data-vv-name="username"
      required
      clearable
      @click="show=true"
    />
    <v-slide-y-transition>
      <h3 v-show="show">
        Password
      </h3>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <v-text-field
        v-model="password"
        v-validate="'required'"
        prepend-inner-icon="vpn_key"
        :error-messages="errors.collect('password')"
        :append-icon="show ? 'visibility' : 'visibility_off'"
        :type="show ? 'text' : 'password'"
        name="password"
        label="Hint password"
        value=""
        v-show="show"
      />
    </v-slide-y-transition>
      <v-btn
        round
        large
        color="#51AA69"
        href="/chat"
        @click="submit"
      >
        sign In
      </v-btn>
      <v-btn
        round
        large
        color="red"
        @click="register"
      >
        sign Up
      </v-btn>
  </v-form>
</template>

<script>
import { request } from 'graphql-request'
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  data: () => {
    return {
      username: '',
      password: '',
      show: false,
      test: true
    }
  },
  methods: {
    async submit() {
      const query = `
      mutation {
      createToken(user: {
      userName: "${this.username}"
      password: "${this.password}"
      }) {
      jwt
      }
      }`
      try {
        this.test = true
        this.jwt = '' + await request('http://192.168.99.113:5500/graphql', query)
      } catch (e) {
        this.test = false
      }
    },
    register() {
      this.show = !this.show
      this.$emit('update:register', true)
    }
  }
}
</script>
