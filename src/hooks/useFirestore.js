import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useFirestore = () => {
  const addDocument = (data) => {
    addDoc(collection(db, "feedbacks"), data)
      .then(() => console.log("success"))
      .catch((error) => console.log(error.message));
  };
  const deleteDocument = () => {};

  return { addDocument, deleteDocument };
};
