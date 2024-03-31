import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBSytyR2dgNCuXL4JLvOBnI9XlRWCwC5aE",
  authDomain: "user-authentication-bc0f4.firebaseapp.com",
  projectId: "user-authentication-bc0f4",
  storageBucket: "user-authentication-bc0f4.appspot.com",
  messagingSenderId: "1012988308060",
  appId: "1:1012988308060:web:7e31acfffaaf7207e81499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
