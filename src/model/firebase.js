import firebase from 'firebase'
import firebaseAuth from 'firebase-auth'

const provider = new firebase.auth.GoogleAuthProvider()


const options = {
  rootRef: "rootRef",
  secretKey: process.env.FIREBASE_SECRET_KEY,
  UID: 'uid',
  admin: true || false //true or false
}

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

const config = {
    apiKey: "AIzaSyA47tsECXDqyyyxndig39wyIZrCa4i-aT8",
    authDomain: "pwa-hackathon-db740.firebaseapp.com",
    databaseURL: "https://pwa-hackathon-db740.firebaseio.com",
    projectId: "pwa-hackathon-db740",
    storageBucket: "pwa-hackathon-db740.appspot.com",
    messagingSenderId: "481822090396"
};

firebase.initializeApp(config)

const database = firebase.database()

export default database
