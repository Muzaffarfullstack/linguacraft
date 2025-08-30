import { Navigate } from "react-router-dom";
import { toast } from "sonner";

function ProtectedRoutes({ user, children }) {
  if (user) {
    return children;
  } else {
    toast.error("Please login to start language trip");
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;
