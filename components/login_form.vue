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
            color="green"
            @click="submit"
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
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  data: () => {
    return {
      username: '',
      password: '',
      show: false
    }
  },
  methods: {
    submit() {
      this.username = ''
      this.password = ''
    },
    register() {
      this.show = !this.show
      this.$emit('update:register', true)
    }
  }
}
</script>
