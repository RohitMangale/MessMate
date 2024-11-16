import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className=" bg-white flex flex-col items-center justify-start p-6 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center gap-4 text-blackText m-6">
              <div className="size-8">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-blackText text-[32px] font-bold leading-tight tracking-[-0.015em]">MessMate</h2>
            </div>


            
        <div className="w-full bg-background rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorText focus:border-colorText block w-full p-2.5 "
                  placeholder="name@company.com"
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
                  required
                />
              </div>


              <button
                type="submit"
                className="btnColored w-full "
              >
                Login
              </button>
              <p className="flex flex-row justify-center items-center gap-1 text-sm font-light text-gray-500 ">
                Don&apos;t have an account?{" "}
                <Link to='/register'
                  href="#"
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
