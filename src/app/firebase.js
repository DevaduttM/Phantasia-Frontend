// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGL15H9x5OhA0c2TQfiPfgWshY3JNja3s",
  authDomain: "phantasia-8b888.firebaseapp.com",
  projectId: "phantasia-8b888",
  storageBucket: "phantasia-8b888.firebasestorage.app",
  messagingSenderId: "368090016450",
  appId: "1:368090016450:web:0d9cb7ea4ec3b9669da95b",
  measurementId: "G-3M4JH94VHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);