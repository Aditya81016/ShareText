// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7w2dos36yQ1R0x-R0i7eK-cxNGblP1XM",
  authDomain: "sharetext-df1f0.firebaseapp.com",
  projectId: "sharetext-df1f0",
  storageBucket: "sharetext-df1f0.appspot.com",
  messagingSenderId: "14856912752",
  appId: "1:14856912752:web:287321b4001809fc20d9b5",
  measurementId: "G-FR551E0KPB",
  databaseURL: "https://sharetext-df1f0-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {app, db as database}