import { get } from 'local-storage'
import gql from '~/plugins/graphql/gql.js'

export default {
  methods: {
    async getUserById(id) {
      const user = `
      query{
        userById(
        username:"${get('username')}"
        token:"${get('jwt')}" 
        id:${id}){
        user{
          user_name
        }
      }
    }`
      try {
        const answer = await gql.methods.request(user)
        return answer.userById
      } catch (err) {
        return get('username')
      }
    },
    async getFriendsById(id) {
      const friends = `
      query{
        friendsById(id: ${id}){
          user{
            id
            user_name
            e_mail
          }
        }
      }`
      try {
        const answer = await gql.methods.request(friends)
        return answer.friendsById
      } catch (err) {
        return get('username')
      }
    }
  }
}
