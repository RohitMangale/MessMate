import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("accessToken"));
  const [role, setRole] = useState(localStorage.getItem("userRole")); // Fetch role from localStorage

  // Keep localStorage in sync when authToken or role changes
  useEffect(() => {
    if (authToken) {
      localStorage.setItem("accessToken", authToken);
    } else {
      localStorage.removeItem("accessToken");
    }

    if (role) {
      localStorage.setItem("userRole", role);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [authToken, role]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
