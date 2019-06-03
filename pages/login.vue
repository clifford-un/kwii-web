<template>
  <v-container>
      <h2 v-if="!test">
      Incorrect id/password
      </h2>
      <form>
        <v-flex xs6 offset-xs3>
          <v-text-field
          v-model="username"
          v-validate="'required'"
          :error-messages="errors.collect('username')"
          label="username"
          data-vv-name="username"
          required
          clearable
          />
          <v-text-field
          :error-messages="errors.collect('password')"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          :type="show ? 'text' : 'password'"
          v-model="password"
          v-validate="'required'"
          name="password"
          label="password"
          value=""
          @click:append="show = !show"
          />
          <div>
            <v-btn
            round
            large
            color="green"
            @click="submit">
              login
          </v-btn>
          </div>
        </v-flex>
    </form>
  </v-container>
</template>

<script>
import { request } from 'graphql-request'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
export default {
  layout: 'landing',
  data: () => {
    return {
      username: '',
      password: '',
      show: false,
      test: true,
      jwt: ''
    }
  },
  methods: {
    async submit() {
      const query = `
      mutation {
      createToken(user: {
      userName: "this.username"
      password: "this.password"
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
    }
  }
}

</script>
