// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUnZs2WVVdXdcmyYVyUDaxH5G1Sle86zU",
  authDomain: "netflix-yt-v2.firebaseapp.com",
  projectId: "netflix-yt-v2",
  storageBucket: "netflix-yt-v2.appspot.com",
  messagingSenderId: "297519150804",
  appId: "1:297519150804:web:63dda3dff9833cdc78ad41",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
