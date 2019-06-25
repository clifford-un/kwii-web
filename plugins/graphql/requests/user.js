import gql from '~/plugins/graphql/gql.js'
import { get } from 'local-storage'
import session from '~/plugins/graphql/requests/session.js'

export default {
  methods: {
    async createUser(username, password, email) {
      const query = `
      mutation {
        createUser(user: {
          user_name: "${username}"
          password: "${password}"
          e_mail: "${email}"
          phone_number: 12345678
          last_connection: "${new Date().toString()}"
          temp: false
        }){
          user_name
        } 
      }`
      try {
        await gql.methods.request(query)
        const loginAns = await session.methods.getToken(username, password)
        if (loginAns === 'ok!') {
          return 'ok!'
        } else {
          return ':s'
        }
      } catch (err) {
        return ':s'
      }
    },
    async getUserInfo() {
      const query = `
      query{
        userById(
          id: ${get('userId')},
          token: "${get('jwt')}",
          username: "${get('username')}"
        ){
          user{
            user_name,
            e_mail,
            request_number
          }
        }
      }`
      try {
        const userAns = await gql.methods.request(query)
        return userAns.userById.user
      } catch (err) {
        return ':s'
      }
    }
  }
}
