import firebase from 'firebase/app'
import { set } from 'local-storage'
import 'firebase/firebase-messaging'
import 'firebase/firebase-storage'
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
const fireStorage = firebase.storage()
const fireMess = firebase.messaging()
fireMess.usePublicVapidKey('ADD')
fireMess.onTokenRefresh((refreshedToken) => {
  set('fb_token', refreshedToken)
  set('fb_error', 'no error')
})
Notification.requestPermission().then()
fireMess.getToken().then((refreshedToken) => {
  set('fb_token', refreshedToken)
  set('fb_error', 'no error')
}).catch((err) => {
  set('fb_token', 'no token')
  set('fb_error', err)
})
export default { fireMess, fireStorage }
