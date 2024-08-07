// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiW89NOBlP0-fWiGVoU99oJ5alUQOQWDI",
  authDomain: "new-project-516be.firebaseapp.com",
  projectId: "new-project-516be",
  storageBucket: "new-project-516be.appspot.com",
  messagingSenderId: "984611212142",
  appId: "1:984611212142:web:d495497997cc0c69b78f7f",
  measurementId: "G-P2SRZMVK1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
