
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_fjyr_abd1-Sa9aBFsMKk6E-a54W-qfs",
  authDomain: "virus-d442a.firebaseapp.com",
  projectId: "virus-d442a",
  storageBucket: "virus-d442a.appspot.com",
  messagingSenderId: "48862829300",
  appId: "1:48862829300:web:73fdf37df647471e99dca1",
  measurementId: "G-1Y0ERTQSBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };
