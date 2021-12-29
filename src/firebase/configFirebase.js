// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSbYiG76iWaURL7DSYF-7DmjbQGrwWG6o",
  authDomain: "trainapp2022.firebaseapp.com",
  projectId: "trainapp2022",
  storageBucket: "trainapp2022.appspot.com",
  messagingSenderId: "974744480566",
  appId: "1:974744480566:web:7c71f0c0aa1b6a9d0ae197",
  measurementId: "G-6NTP8TWP40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

export default app;
