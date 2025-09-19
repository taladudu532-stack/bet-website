// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASQomgcUm0LNNM8ABYxq-vqz7BYpO-eg4",
  authDomain: "talabet-89fce.firebaseapp.com",
  projectId: "talabet-89fce",
  storageBucket: "talabet-89fce.firebasestorage.app",
  messagingSenderId: "767205554053",
  appId: "1:767205554053:web:32cc62707e62aca28b76ec",
  measurementId: "G-FKLT279RDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
