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
            color="orange"
            @click="submit"
          >
            Submit
          </v-btn>
          <v-btn
            round
            large
            color="red"
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
      show: false
    }
  },
  methods: {
    submit() {
      this.username = ''
      this.password = ''
    },
    register() {
      this.$emit('update:register', false)
    }
  }
}
</script>
