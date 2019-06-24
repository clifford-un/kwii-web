import firebase from 'firebase/app'
import { setData } from 'nuxt-storage/local-storage'
import 'firebase/firebase-messaging'
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'ADD',
    authDomain: 'ADD',
    databaseURL: 'ADD',
    projectId: 'ADD',
    storageBucket: 'ADD',
    messagingSenderId: 'ADD',
    appId: 'ADD'
  }
  firebase.initializeApp(firebaseConfig)
}
const fireMess = firebase.messaging()
fireMess.usePublicVapidKey('ADD')
fireMess.onTokenRefresh((refreshedToken) => {
  setData('fb_token', refreshedToken)
  setData('fb_error', 'no error')
})
Notification.requestPermission().then()
fireMess.getToken().then((refreshedToken) => {
  setData('fb_token', refreshedToken)
  setData('fb_error', 'no error')
}).catch((err) => {
  setData('fb_token', 'no token')
  setData('fb_error', err)
})
export default { fireMess }
