// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZq_BvIRlP9r_Hqcu9gbMuNve2Qkcy4MY",
  authDomain: "the-news-dragon-client-869e6.firebaseapp.com",
  projectId: "the-news-dragon-client-869e6",
  storageBucket: "the-news-dragon-client-869e6.appspot.com",
  messagingSenderId: "238463674782",
  appId: "1:238463674782:web:a0a5528a34f9a85cf80e8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;