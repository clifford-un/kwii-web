<template>
  <v-container>
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
        <div>
          <v-btn
            round
            large
            color="green"
            @click="submit"
          >
            login
          </v-btn>
        </div>
      </v-flex>
    </form>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
export default {
  layout: 'landing',
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
    }
  }
}
</script>
