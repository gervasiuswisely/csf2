import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyDCdkNoArtxUolzKtoWgFemVxZZ11aAX8A",
        projectId: "imavistatic",
        storageBucket: "imavistatic.appspot.com",
        appId: "1:859691038944:web:d37ba9bd6f30c41c5f7885",
      };

    const app = initializeApp(firebaseConfig)

   const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})