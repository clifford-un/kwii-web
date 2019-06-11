import { request } from 'graphql-request'
import { setData } from 'nuxt-storage/local-storage'

const graphqlURL = 'http://35.245.9.199/graphql'

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
        const answer = await request(graphqlURL, query)
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
