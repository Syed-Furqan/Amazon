// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD1O76S8A_FVEt4Q5eKrmaAlLvQyunTNVw",
    authDomain: "store-sfb.firebaseapp.com",
    projectId: "store-sfb",
    storageBucket: "store-sfb.appspot.com",
    messagingSenderId: "907506005605",
    appId: "1:907506005605:web:e7b18e46ac0bb778e4788c",
    measurementId: "G-F4XK3DWWML"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { auth, db };