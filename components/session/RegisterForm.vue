<template>
  <v-container>
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
          v-validate="'required|min:8'"
          prepend-inner-icon="visibility"
          :error-messages="errors.collect('password')"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          :type="show ? 'text' : 'password'"
          name="password"
          label="password"
          value=""
          @click:append="show = !show"
        />
        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          prepend-inner-icon="email"
          :error-messages="errors.collect('email')"
          name="email"
          label="email"
          value=""
        />
        <v-text-field
          v-model="phone"
          v-validate="'required|numeric'"
          prepend-inner-icon="phone"
          :error-messages="errors.collect('phone')"
          name="phone"
          label="phone"
          value=""
        />
        <center>
          <v-btn
            round
            large
            color="red"
            @click="submit"
          >
            Submit
          </v-btn>
          <v-btn
            round
            large
            color="#51AA69"
            @click="register"
          >
            Back
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
      email: '',
      phone: '',
      show: false,
      response: 'a'
    }
  },
  methods: {
    async submit() {
      const query = `
      mutation {
      createUser(user: {
      user_name: "${this.username}"
      password: "${this.password}"
      temp: false
      phone_number: ${this.phone}
      e_mail: "${this.email}"
      last_connection:"today"
      }){
      user{
      user_name
      }
      }
      }`
      try {
        this.response = await request('http://192.168.99.113:5500/graphql', query)
      } catch (e) {
        this.test = false
      }
    },
    register() {
      this.$emit('update:register', false)
    }
  }
}
</script>
