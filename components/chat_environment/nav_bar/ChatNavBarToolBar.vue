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
export default {
  data: () => ({
    drawer: false,
    request: true,
    request_num: 0
  }),
  mounted() {
    this.$bus.$on('userChatDrawerCall', (drawerState) => { this.drawer = drawerState })
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
