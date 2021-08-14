import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyBhvPhmFftOyr0MAQMwqJmFDYDtVa1obl0",
        authDomain: "giveaway-app-395e1.firebaseapp.com",
        projectId: "giveaway-app-395e1",
        storageBucket: "giveaway-app-395e1.appspot.com",
        messagingSenderId: "882471471437",
        appId: "1:882471471437:web:514afb3bd54deb00238f04"
    };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        export const db = firebase.firestore();
        export const auth = firebase.auth();