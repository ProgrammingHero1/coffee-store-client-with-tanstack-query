// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpgyknqtGO3Mo8zLEF6b-xGtu1GwRxygY",
  authDomain: "coffee-store-84f8c.firebaseapp.com",
  projectId: "coffee-store-84f8c",
  storageBucket: "coffee-store-84f8c.appspot.com",
  messagingSenderId: "733086012190",
  appId: "1:733086012190:web:6510ae8880d37b58162f0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;