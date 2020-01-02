import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCUnkgd9_RCCsu3r2lYCxEZGs1DD09pPDc",
    authDomain: "royal-db-c97f5.firebaseapp.com",
    databaseURL: "https://royal-db-c97f5.firebaseio.com",
    projectId: "royal-db-c97f5",
    storageBucket: "royal-db-c97f5.appspot.com",
    messagingSenderId: "982942333821",
    appId: "1:982942333821:web:109739461f69078b70aa14",
    measurementId: "G-3NDERBMMTN"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase