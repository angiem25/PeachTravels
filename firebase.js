// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_vo2A2tsQslgOrNGS86OsUVfY7Q2CvbU",
  authDomain: "peachtravels-5ff14.firebaseapp.com",
  projectId: "peachtravels-5ff14",
  storageBucket: "peachtravels-5ff14.firebasestorage.app",
  messagingSenderId: "659512646538",
  appId: "1:659512646538:web:7c590d437ba4e1c1680673",
  measurementId: "G-QWGZVKCGF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
