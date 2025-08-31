import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return { logout };
};
