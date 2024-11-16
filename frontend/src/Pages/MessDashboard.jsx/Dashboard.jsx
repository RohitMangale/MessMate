import { IoFastFoodOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "./Menu";


const Dashboard = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
    <div className="flex flex-col flex-wrap justify-between gap-3 p-4">
      <p className="text-blackText tracking-light text-[32px] font-bold leading-tight min-w-72">
        Mess User Dashboard
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] h-[100px] gap-3 p-4">
      <Link to="/dashboard/addfooditem" className="flex flex-1 gap-3 rounded-lg border border-[#e6dbdb] bg-white p-4 flex-col cursor-pointer">
        <IoFastFoodOutline className="text-[24px]"/>


          <div className="flex flex-col gap-1 ">
            <h2 className="text-blackText text-base font-bold leading-tight">
              Add new food items
            </h2>
            <p className="text-colorText text-sm font-normal leading-normal">
              Expand your menu with additional items.
            </p>
          </div>
        </Link>

        <div className="flex flex-1 gap-3 rounded-lg border border-[#e6dbdb] bg-white p-4 flex-col cursor-pointer">
          <IoPersonAddOutline className="text-[24px] "/>
          <div className="flex flex-col gap-1  ">
            <h2 className="text-blackText text-base font-bold leading-tight">
              Check Staff Analytics
            </h2>
            <p className="text-colorText text-sm font-normal leading-normal">
              Monitor your staff&apos;s performance.
            </p>
          </div>
        </div>




      </div>
      <Menu/>
    </div>


    </div>
  )
}

export default Dashboard