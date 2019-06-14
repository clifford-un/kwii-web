import gql from '~/plugins/graphql/gql.js'
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
    }
  }
}
