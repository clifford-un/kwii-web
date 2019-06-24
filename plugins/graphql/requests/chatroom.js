import { getData } from 'nuxt-storage/local-storage'
import gql from '~/plugins/graphql/gql.js'

export default {
  methods: {
    async getChatrooms() {
      const queryChatroom = `
      query {
        getChatroomsByUser(
          username: "${getData('username')}",
          user_id: ${getData('userId')},
          token: "${getData('jwt')}"
        )
        {
          id,
          name,
          users
        }
      }`
      try {
        const answer = await gql.methods.request(queryChatroom)
        return answer.getChatroomsByUser
      } catch (err) {
        return getData('username')
      }
    }
  }
}
