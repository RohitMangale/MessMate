
import { useState } from "react";
import OrderDetailsM from "./OrderDetailsM";
import PastOrders from "./PastOrders";
import OrderCard from "./OrderCard";
import Analytics from "./Analytics";
import Dashboard from "./Dashboard";
import ProfileCard from "./ProfileCard";


const MessPage = () => {

    const [tab, setTab] = useState("orders");


  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5 gap-5 ">
          {/* left side */}
          <div className="layout-content-container flex flex-col w-80 h-max">
            <div className="flex h-max flex-col justify-between bg-white p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    
                  <button onClick={() => setTab('dashboard')} className= {` ${tab === 'dashboard' && 'bg-background rounded-xl'} cursor-pointer flex items-center gap-3 px-3 py-2`}>
                    <div className="text-blackText" aria-label="Dashboard Icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path>
                      </svg>
                    </div>
                    <p className="text-blackText text-sm font-medium leading-normal">
                      Dashboard
                    </p>
                  </button>

                  <button onClick={() => setTab('orders')} className= {` ${tab === 'orders' && 'bg-background rounded-xl'} cursor-pointer flex items-center gap-3 px-3 py-2`}>
                    <div className="text-blackText" aria-label="Orders Icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path>
                      </svg>
                    </div>
                    <p className="text-blackText text-sm font-medium leading-normal">
                      Orders
                    </p>
                  </button>

 

                  <button onClick={() => setTab('analytics')} className= {` ${tab === 'analytics' && 'bg-background rounded-xl'} cursor-pointer flex items-center gap-3 px-3 py-2`}>
                    <div className="text-blackText" aria-label="Customers Icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="10"
                          width="4"
                          height="11"
                          fill="#181111"
                        />
                        <rect
                          x="10"
                          y="6"
                          width="4"
                          height="15"
                          fill="#181111"
                        />
                        <rect
                          x="17"
                          y="3"
                          width="4"
                          height="18"
                          fill="#181111"
                        />
                      </svg>
                    </div>
                    <p className="text-blackText text-sm font-medium leading-normal">
                      Analytics
                    </p>
                  </button>

                  {/* <div className="flex items-center gap-3 px-3 py-2">
          <div className="text-blackText" aria-label="Reports Icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
            </svg>
          </div>
          <p className="text-blackText text-sm font-medium leading-normal">
            Reports
          </p>
        </div> */}
                </div>
              </div>
            </div>
            <div className="w-80">
            {tab === 'analytics' && <OrderDetailsM />}
            {tab === 'orders' && <OrderCard/>}
            {tab === 'dashboard' && <ProfileCard />}
            </div>
          </div>


          {/* Right Side */}
          
            {tab === 'orders' && <PastOrders />}
            {tab === 'analytics' && <Analytics />}
            {tab === 'dashboard' && <Dashboard />}
        </div>
      </div>
    </div>
  )
}

export default MessPage