import fb from '~/plugins/firebase/fb_connection'
import { get } from 'local-storage'
export default {
  methods: {
    getImageUri(path) {
      return fb.fireStorage.ref().child(path).getDownloadURL()
    },
    getChatRoomAvatar(chatRoomId) {
    },
    getUserAvatar() {
      return this.getImageUri(`users/${get('username')}/images/avatar.avt`)
    },
    getUserProfileAvatar(username) {
      return this.getImageUri(`users/${username}/images/avatar.avt`)
    },
    setUserAvatar(file) {
      const storageRef = fb.fireStorage.ref().child(`users/${get('username')}/images/avatar.avt`)
      return storageRef.put(file)
    }
  }
}
