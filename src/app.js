import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider, onAuthStateChanged, signOut, updateProfile, deleteUser, createUserWithEmailAndPassword } from "firebase/auth";
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyCm44Tmudy0QSLgxoyH-pPERnOS9-eXMOE",
    authDomain: "sda-test-aea15.firebaseapp.com",
    projectId: "sda-test-aea15",
    storageBucket: "sda-test-aea15.appspot.com",
    messagingSenderId: "1076330976527",
    appId: "1:1076330976527:web:7b73b2ec41bea9214e1a7a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const ui = new firebaseui.auth.AuthUI(auth);

const uiConfig = {
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "http://localhost:8080/"
}
ui.start('#firebaseui-auth-container', uiConfig);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(auth.currentUser);
    } else {
    }
});

// signOut(auth).then(() => {
//     console.log("Wylogowano!");
// });