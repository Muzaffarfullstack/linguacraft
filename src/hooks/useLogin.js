import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "sonner";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const login = (emailAddress, createdPassword) => {
    signInWithEmailAndPassword(auth, emailAddress, createdPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome back!");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { login };
};
