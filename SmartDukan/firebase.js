// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCogtKUaNDGqC3ttLsQ_EaFWqstPIu9flA",
  authDomain: "smartdukan-abc9a.firebaseapp.com",
  projectId: "smartdukan-abc9a",
  storageBucket: "smartdukan-abc9a.firebasestorage.app",
  messagingSenderId: "778240478320",
  appId: "1:778240478320:web:0674f2cfff1a9aa16d78b5",
  measurementId: "G-SX3JY644BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);