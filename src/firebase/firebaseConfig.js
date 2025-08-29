import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY0_NYfJ9LuHkaadQCiB9Ut6RcYvlKlVA",
  authDomain: "linguacraft-adfd6.firebaseapp.com",
  projectId: "linguacraft-adfd6",
  storageBucket: "linguacraft-adfd6.firebasestorage.app",
  messagingSenderId: "97177170180",
  appId: "1:97177170180:web:6de12dec0fa41751fd6051",
  measurementId: "G-NQPD94MT2Z",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
