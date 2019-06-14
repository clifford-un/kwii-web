import { request } from 'graphql-request'

export default {
  data: () => {
    return {
      url: 'http://35.221.4.209/graphql'
    }
  },
  methods: {
    async request(query) {
      const ans = await request('http://35.221.4.209/graphql', query)
      return ans
    }
  }
}
