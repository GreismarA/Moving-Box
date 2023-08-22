// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5MUWGyKpv6vh2STSNsQVhxfd4b7mAhlY",
  authDomain: "moving-box-39de6.firebaseapp.com",
  projectId: "moving-box-39de6",
  storageBucket: "moving-box-39de6.appspot.com",
  messagingSenderId: "910344491041",
  appId: "1:910344491041:web:ab6a7f17f7fe0b948a1360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
