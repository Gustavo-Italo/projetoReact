// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD47N1528dzPjQZRk29cl0xFJuRAtUlMwA",
  authDomain: "projetodereact-2024.firebaseapp.com",
  projectId: "projetodereact-2024",
  storageBucket: "projetodereact-2024.appspot.com",
  messagingSenderId: "315097304850",
  appId: "1:315097304850:web:3b5886a7aadab90fc96dcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
