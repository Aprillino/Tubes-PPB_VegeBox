// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBlR-qm33Rptm9XF3MTma6bqHHUFwe4vY",
  authDomain: "tubes-vegebox.firebaseapp.com",
  projectId: "tubes-vegebox",
  storageBucket: "tubes-vegebox.appspot.com",
  messagingSenderId: "342482236476",
  appId: "1:342482236476:web:c4ca23b27dcfad2d23ff39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);