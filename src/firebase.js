// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJEar3zahv81jnSNIKoMRYDn8Yhwk-spc",
  authDomain: "gukaai.firebaseapp.com",
  projectId: "gukaai",
  storageBucket: "gukaai.firebasestorage.app",
  messagingSenderId: "1031751343495",
  appId: "1:1031751343495:web:034d5f9fedff959e118722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ ADD THIS LINE TO EXPORT THE AUTH OBJECT
export const auth = getAuth(app);