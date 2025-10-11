// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWwhzDkGpEdoKI4fIqS9le32880XJbv-Y",
  authDomain: "online-doctor-app-f05e9.firebaseapp.com",
  projectId: "online-doctor-app-f05e9",
  storageBucket: "online-doctor-app-f05e9.firebasestorage.app",
  messagingSenderId: "261518985889",
  appId: "1:261518985889:web:ba8d49c6e691c317147ee0",
  measurementId: "G-9PTEK7QF2E"
};


const app = initializeApp(firebaseConfig);

// ✅ Initialize Analytics (optional)
const analytics = getAnalytics(app);

// ✅ Initialize Authentication
const auth = getAuth(app);

// ✅ Export what you need
export { auth, analytics };