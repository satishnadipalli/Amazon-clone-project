// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhLyFuPqL8RG_awl-aNIPNCeDV7O_nnCw",
  authDomain: "clone-project-151cd.firebaseapp.com",
  projectId: "clone-project-151cd",
  storageBucket: "clone-project-151cd.appspot.com",
  messagingSenderId: "1057330176046",
  appId: "1:1057330176046:web:3e0ba72f151a37c9fabfbf",
  measurementId: "G-3KC0EZJ15G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);