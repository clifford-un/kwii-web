import { setData } from 'nuxt-storage/local-storage'
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
        setData('jwt', jwt, 1, 'd')
        setData('userId', userId, 1, 'd')
        setData('username', username, 1, 'd')
        return 'ok!'
      } catch (err) {
        return ':s'
      }
    },
    deleteToken() {
      setData('jwt', undefined)
      setData('userId', undefined)
      setData('username', undefined)
    }
  }
}
