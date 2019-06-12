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
          user_id
        }
      }`
      try {
        const answer = await gql.methods.request(query)
        const jwt = answer.createToken.jwt
        const userId = answer.createToken.user_id
        setData('jwt', jwt)
        setData('userId', userId)
        return 'ok!'
      } catch (err) {
        return ':s'
      }
    },
    deleteToken() {
      setData('jwt', undefined)
      setData('userId', undefined)
    }
  }
}
