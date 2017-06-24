import firebase from 'firebase'

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
