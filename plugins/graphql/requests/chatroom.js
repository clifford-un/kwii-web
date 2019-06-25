import { get } from 'local-storage'
import gql from '~/plugins/graphql/gql.js'

export default {
  methods: {
    async getChatrooms() {
      const queryChatroom = `
      query {
        getChatroomsByUser(
          username: "${get('username')}",
          user_id: ${get('userId')},
          token: "${get('jwt')}"
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
        return get('username')
      }
    }
  }
}
