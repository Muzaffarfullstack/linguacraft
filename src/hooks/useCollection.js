import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapshot) => {
        const dataFromFirebase = [];
        querySnapshot.forEach((doc) => {
          dataFromFirebase.push({ id: doc.id, ...doc.data() });
        });
        setData(dataFromFirebase);
      }
    );

    return () => unsubscribe();
  }, []);
  return { data };
};
