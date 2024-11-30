import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const GuestRoutes = ({ children }) => {
  const { authToken } = useAuth();

  if (authToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuestRoutes;
