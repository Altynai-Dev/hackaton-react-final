// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1PHQqjom79wTrcySAaKdce9peHumK_dQ",
  authDomain: "react-netflix-clone-5d849.firebaseapp.com",
  projectId: "react-netflix-clone-5d849",
  storageBucket: "react-netflix-clone-5d849.appspot.com",
  messagingSenderId: "319054433553",
  appId: "1:319054433553:web:3c0818b1f6e0c1f96d90b0",
  measurementId: "G-CGDMP2BGMP"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);