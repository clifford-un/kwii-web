import { request } from 'graphql-request'

async function submit(username, password) {
  const query = `
  mutation {
  createToken(user: {
  userName: "${username}"
  password: "${password}"
  }) {
  jwt
  }
  }`
  try {
    this.jwt = '' + await request('http://192.168.99.113:5500/graphql', query)
  } catch (e) {
    this.test = false
  }
}
