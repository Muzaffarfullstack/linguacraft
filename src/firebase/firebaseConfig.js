import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth/web-extension";
import { setLogLevel } from "firebase/firestore";
setLogLevel("error"); // yoki "silent"

const firebaseConfig = {
  apiKey: "AIzaSyAAtzzIWv257UVDgn0FyykNWXGklUW-k7Y",
  authDomain: "linguacraft-f231a.firebaseapp.com",
  projectId: "linguacraft-f231a",
  storageBucket: "linguacraft-f231a.firebasestorage.app",
  messagingSenderId: "740245082649",
  appId: "1:740245082649:web:3f381998bb9557e1261088",
  measurementId: "G-4Y65HJ92JJ",
};
// console.log(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
