// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDESl_WeS9CLKS9zGPZo65nPYA6eMCrmYo",
  authDomain: "projeto-veterinaria-b09fd.firebaseapp.com",
  projectId: "projeto-veterinaria-b09fd",
  storageBucket: "projeto-veterinaria-b09fd.firebasestorage.app",
  messagingSenderId: "712401901301",
  appId: "1:712401901301:web:f29604a2529c6a43e457bc",
  measurementId: "G-70XLMC1FPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);