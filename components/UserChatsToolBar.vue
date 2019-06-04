<template>
  <v-toolbar card color="primary" dark>
    <v-toolbar-title>KWII</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-btn icon @click.stop="requestViewDrawerCall()">
      <v-icon>{{ `${!request ? 'sms' : 'group_add'}` }}</v-icon>
    </v-btn>
    <div v-if="request_num!=0 && request" id="requests">
      <h5 />3
    </div>
  </v-toolbar>
</template>
<script>
import { request } from 'graphql-request'
import { URL } from 'static/variables.js'
export default {
  data: () => ({
    drawer: false,
    request: true,
    request_num: 0
  }),
  async mounted() {
    this.$bus.$on('userChatDrawerCall', (drawerState) => { this.drawer = drawerState })
    const query = `
    query{
    userById(id: 1){
    user{
      request_number
    }
    }
    }`
    const response = await request(URL, query)
    this.request_num = response.userById.user.request_number
  },
  methods: {
    requestViewDrawerCall() {
      this.request = !this.request
      this.$bus.$emit('requestViewDrawerCall', !this.request)
    }
  }
}
</script>
<style>
div#requests{
  background: red;
  width: 15px;
  heigth: 15px;
  text-align: center;
}
</style>
