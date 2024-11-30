import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { role } = useAuth();

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleBasedRoute;
