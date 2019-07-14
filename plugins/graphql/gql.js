import { request } from 'graphql-request'

export default {
  data: () => {
    return {
      url: 'https://kwiiun.com/kwii_api/graphql'
    }
  },
  methods: {
    async request(query) {
      const ans = await request('https://kwiiun.com/kwii_api/graphql', query)
      return ans
    }
  }
}
