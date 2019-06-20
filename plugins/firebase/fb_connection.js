import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: this.$env.FIREBASE_API_KEY,
    authDomain: this.$env.FIREBASE_AUTH_DOMAIN,
    databaseURL: this.$env.FIREBASE_DATABASE_URL,
    projectId: this.$env.FIREBASE_PROJECT_ID,
    storageBucket: this.$env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: this.$env.FIREBASE_MESSAGING_SENDER_ID
  }
  firebase.initializeApp(config)
}
const fireMess = firebase.messaging()
fireMess.usePublicVapidKey(this.$env.FIREBASE_VAPID_KEY)
export { fireMess }
