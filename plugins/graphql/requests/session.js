import { set } from 'local-storage'
import gql from '~/plugins/graphql/gql.js'

export default {
  methods: {
    async getToken(username, password) {
      const query = `
      mutation {
        createToken(
          user: {
            userName: "${username}"
            password: "${password}"
          }
        )
        {
          jwt,
          user_id,
          user_name
        }
      }`
      try {
        const answer = await gql.methods.request(query)
        const jwt = answer.createToken.jwt
        const userId = answer.createToken.user_id
        const username = answer.createToken.user_name
        set('jwt', jwt)
        set('userId', userId)
        set('username', username)
        return 'ok!'
      } catch (err) {
        return ':s'
      }
    },
    deleteToken() {
      set('jwt', undefined)
      set('userId', undefined)
      set('username', undefined)
    }
  }
}
