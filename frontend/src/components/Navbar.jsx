import { Link } from "react-router-dom";
import logoutIcon from "../assets/logout.png";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { role, authToken,setAuthToken, setRole } = useAuth();
  const navigate = useNavigate();
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

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-background px-10 py-3">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-4 text-blackText">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-blackText text-lg font-bold leading-tight tracking-[-0.015em]">
            MessMate
          </h2>
        </Link>
        {/* <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-colorText flex border-none bg-[#f5f0f0] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-blackText focus:outline-0 focus:ring-0 border-none bg-[#f5f0f0] focus:border-none h-full placeholder:text-colorText px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label> */}
      </div>
      <div className="flex flex-1 justify-end gap-8">
        {/* <div className="flex items-center gap-9">
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Home
          </a>
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Search
          </a>
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Grocery
          </a>
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Deals
          </a>
        </div> */}
        {role && authToken ? (
          <div className="flex gap-2">
            {role === "user" && (
              <Link to="/checkout" className="iconSoft">
                <div
                  className="text-blackText"
                  data-icon="ShoppingCartSimple"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM231.65,74.35l-28.53,92.71A23.89,23.89,0,0,1,180.18,184H84.07A24.11,24.11,0,0,1,61,166.59L24.82,40H8A8,8,0,0,1,8,24H24.82A16.08,16.08,0,0,1,40.21,35.6L48.32,64H224a8,8,0,0,1,7.65,10.35ZM213.17,80H52.89l23.49,82.2a8,8,0,0,0,7.69,5.8h96.11a8,8,0,0,0,7.65-5.65Z"></path>
                  </svg>
                </div>
              </Link>
            )}

            <Link
              to={`${role === "user" ? "/userdashboard" : "/messdashboard"}`}
              className="iconSoft"
            >
              <div
                className="text-blackText"
                data-icon="User"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
              </div>
            </Link>

            <button onClick={handleLogout} >
            <div  className=" iconSoft ">


            <img src={logoutIcon} className=" w-[20px] h-[20px] " alt="" />
            </div>

            </button>
          </div>
        ) : (
          <Link to="/login" className="btnColored">
            <span className="truncate">Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
