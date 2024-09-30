// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6E1q0U50hOV-9Hlns_dG7d4tENx29YP4",
  authDomain: "mobile-auth-d712a.firebaseapp.com",
  projectId: "mobile-auth-d712a",
  storageBucket: "mobile-auth-d712a.appspot.com",
  messagingSenderId: "896567947797",
  appId: "1:896567947797:web:b877150ab5c7e988ef541c",
  measurementId: "G-0EVEDM2VXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)    

export { app, analytics, auth };
