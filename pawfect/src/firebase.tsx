// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBrpNn9iJaceDQFcl2_cUACD-q_-yQ8LCE",
  authDomain: "pawfect-auth-d5c32.firebaseapp.com",
  projectId: "pawfect-auth-d5c32",
  storageBucket: "pawfect-auth-d5c32.appspot.com",
  messagingSenderId: "1015353600176",
  appId: "1:1015353600176:web:3cf213adfa697e60073375",
  measurementId: "G-9K6PYYYLPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export default app;
