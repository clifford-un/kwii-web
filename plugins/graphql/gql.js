import { request } from 'graphql-request'

export default {
  data: () => {
    return {
      url: 'http://35.245.9.199/graphql'
    }
  },
  methods: {
    request(query) {
      return request(this.url, query)
    }
  }
}
