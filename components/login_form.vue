<template>
  <v-container>
      <h2 v-if="!test">
      Incorrect id/password
      </h2>
    <v-form>
      <v-flex xs6 offset-xs3>
        <v-text-field
          v-model="username"
          v-validate="'required'"
          prepend-inner-icon="person_pin"
          :error-messages="errors.collect('username')"
          label="username"
          data-vv-name="username"
          required
          clearable
        />
        <v-text-field
          v-model="password"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          :type="show ? 'text' : 'password'"
          name="password"
          label="password"
          value=""
          @click:append="show = !show"
        />
        <center>
          <v-btn
            round
            large
            color="#009688"
            @click="submit"
            href="/chat"
          >
            sign In
          </v-btn>
          <v-btn
            round
            large
            color="orange"
            @click="register"
          >
            sign Up
          </v-btn>
        </center>
      </v-flex>
    </v-form>
  </v-container>
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
