// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "suhand-realestate.firebaseapp.com",
  projectId: "suhand-realestate",
  storageBucket: "suhand-realestate.appspot.com",
  messagingSenderId: "719783349669",
  appId: "1:719783349669:web:21995a2e5dbde617382c4c",
  measurementId: "G-N7KK4WGFV2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);