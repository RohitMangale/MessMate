import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import axios from "axios";

const ProfileCard = () => {
  const { setAuthToken, setRole } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const userid = localStorage.getItem("userId");
  // console.log(userid)

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    // Clear AuthContext
    setAuthToken(null);
    setRole(null);

    // Redirect to login page
    toast.success("Logged out successfully!");
    navigate("/login");
  };

    // Fetch menu items from API
    
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response  = await axios.get(`${BASE_URL}/userregistration/${userid}/`, {
            
          });
          // if (!response.ok) throw new Error("Failed to fetch user");
          const data = await response.data;
          setUser(data);
          // console.log(user) // Update state with fetched menu items
        } catch (err) {
          console.log(err.message);
        }
      };
  
      fetchUser();
    }, [userid]);

  return (
    <div className="w-full flex flex-col p-4 gap-3">
      <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Profile
      </h3>

      <div className="w-full"></div>
      <p className="text-blackText text-base font-medium leading-normal">
        <span className="font-bold">Name:</span> {user.username}
      </p>
      <p className="text-blackText text-base font-medium leading-normal">
        <span className="font-bold">Email:</span> {user.email}
      </p>
      <p className="text-blackText text-base font-medium leading-normal">
        <span className="font-bold">Role:</span> {user.role}
      </p>

      {/* Logout Button */}
      <button
        className="w-full btnColored mt-5"
        onClick={handleLogout}
      >
        Logout
      </button>

      {/* Delete Account Button */}
      <button className="w-full btnColored text-black bg-white border-black border-2 rounded-r-lg">
        Delete Account
      </button>
    </div>
  );
};

export default ProfileCard;
