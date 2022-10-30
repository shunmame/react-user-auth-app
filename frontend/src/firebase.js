import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY?.trim(),
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN?.trim(),
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID?.trim(),
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET?.trim(),
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID?.trim(),
    appId: process.env.REACT_APP_FIREBASE_APP_ID?.trim(),
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID?.trim(),
});

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}