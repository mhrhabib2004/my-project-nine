// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpk3yjXJ1HeiqSdYADR-LeWAvIHtHz-0Y",
  authDomain: "assainment-nine-by-habib.firebaseapp.com",
  projectId: "assainment-nine-by-habib",
  storageBucket: "assainment-nine-by-habib.appspot.com",
  messagingSenderId: "653059806318",
  appId: "1:653059806318:web:ad0c73329bd854cf7c827f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
