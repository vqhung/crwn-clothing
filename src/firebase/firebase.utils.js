import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDHy0xaPoTotxHqjD6sMXLu3jxC5yLJUMs",
    authDomain: "crwn-db-72459.firebaseapp.com",
    databaseURL: "https://crwn-db-72459.firebaseio.com",
    projectId: "crwn-db-72459",
    storageBucket: "",
    messagingSenderId: "932692859065",
    appId: "1:932692859065:web:64e670b19d7e1e2f"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;