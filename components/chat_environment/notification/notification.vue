<template>
  <v-snackbar
    v-model="snackbar"
    multi-line
    right
  >
    {{ title }}
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      title: '',
      message: ''
    }
  },
  watch: {
    dialog(val) {
      if (!val) return
      setTimeout(() => (this.dialog = false), 4000)
    }
  },
  mounted() {
    this.$bus.$on('messageFb', (payload) => {
      this.snackbar = true
      this.title = payload.notification.title
      this.message = payload.notification.body
    })
  }
}
</script>
