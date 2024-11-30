import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { role, authToken } = useAuth();

//   console.log("Allowed Roles:", allowedRoles);
//   console.log("Current Role:", role);

  // Redirect to login if no auth token
  if (!authToken) {
    return <Navigate to="/login" replace />;
  }

  // Check if the current role is allowed
  if (!allowedRoles?.includes(role)     ) {
    return <Navigate to="/" replace />;
  }

  // Render the children routes if everything is valid
  return <Outlet />;
};

export default ProtectedRoute;
