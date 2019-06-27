import firebase from 'firebase/app'
import { set } from 'local-storage'
import 'firebase/firebase-messaging'
import 'firebase/firebase-storage'
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAPKcSFDn77VL2pnODfSzPNEsuPnu2oAc8',
    authDomain: 'kiwi-platform-d72cb.firebaseapp.com',
    databaseURL: 'https://kiwi-platform-d72cb.firebaseio.com',
    projectId: 'kiwi-platform-d72cb',
    storageBucket: 'kiwi-platform-d72cb.appspot.com',
    messagingSenderId: '535402318882',
    appId: '1:535402318882:web:13f935c4d25dcd32'
  }
  firebase.initializeApp(firebaseConfig)
}
const fireStorage = firebase.storage()
const fireMess = firebase.messaging()
fireMess.usePublicVapidKey('BNJyF_lT-h0HbHFeLq9J_xYnDLbyAD9hFonuwcu5j5e8slDyLJp0B2YOgpb-9XQ3TSbTMsWnDDTO1jAPM6fTxh8')
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
