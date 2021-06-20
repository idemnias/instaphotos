import * as firebase from 'firebase'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDmjkxoRikLFbSRxqA1U9TqvkoSvHtnbDU",
    authDomain: "instaphotos-e8780.firebaseapp.com",
    projectId: "instaphotos-e8780",
    storageBucket: "instaphotos-e8780.appspot.com",
    messagingSenderId: "865007722715",
    appId: "1:865007722715:web:8396c8d67ba1363c6e6cfe",
    measurementId: "G-430T92FRV5"
  };
  
  // Initialize Firebase
  firebase.default.initializeApp(firebaseConfig)

  export const auth = firebase.default.auth()
  export const db = firebase.default.firestore()
  export const storage = firebase.default.storage()


  
