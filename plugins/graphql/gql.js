import { request } from 'graphql-request'

export default {
  data: () => {
    return {
      url: 'http://34.73.50.226/graphql'
    }
  },
  methods: {
    async request(query) {
      const ans = await request('http://34.73.50.226/graphql', query)
      return ans
    }
  }
}
