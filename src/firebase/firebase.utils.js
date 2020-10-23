import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkSw4AZVORw86aPQ1HNoqKlQa_bIU2r84",
    authDomain: "magicbeans-ad0bb.firebaseapp.com",
    databaseURL: "https://magicbeans-ad0bb.firebaseio.com",
    projectId: "magicbeans-ad0bb",
    storageBucket: "magicbeans-ad0bb.appspot.com",
    messagingSenderId: "522825813208",
    appId: "1:522825813208:web:269294184b9b812f41dbad",
    measurementId: "G-76Q46GBV3Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
