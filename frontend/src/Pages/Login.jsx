import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext"; // Ensure this path matches your AuthContext file
import { BASE_URL } from "../config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setAuthToken,setRole } = useAuth(); // Using Auth Context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await axios.post(`${BASE_URL}/token/`, {
        username,
        password,
      });

      // Extract tokens from response
      const { access, refresh } = response.data;

      // Store tokens in localStorage
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      setAuthToken(access); // Update Auth Context with access token

      // Optionally, fetch user details using the access token
      const userIdResponse  = await axios.get(`${BASE_URL}/userid/`, {
        username,
        password,
        headers: { Authorization: `Bearer ${access}` },
      });

      // console.log(userIdResponse)

      const userId = userIdResponse.data.id; // Directly set the user ID
      localStorage.setItem("userId", String(userId)); // Store user ID in localStorage
      
      const userProfile  = await axios.get(`${BASE_URL}/userregistration/${userId}/`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      console.log(userProfile.data)
      localStorage.setItem("role", String(userProfile.data.role)); // Store user ID in localStorage
      setRole(userProfile.data.role); // Set user details in Auth Context
      navigate("/"); // Redirect after login
    } catch (err) {
      setError(err,"Invalid username or password.");
    }
  };

  return (
    <div className=" bg-white flex flex-col items-center justify-start p-6 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center gap-4 text-blackText m-6">
        <div className="size-8">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-blackText text-[32px] font-bold leading-tight tracking-[-0.015em]">
          MessMate
        </h2>
      </div>

      <div className="w-full bg-background rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Login to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button type="submit" className="btnColored w-full">
              Login
            </button>
            <p className="flex flex-row justify-center items-center gap-1 text-sm font-light text-gray-500 ">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:underline "
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
