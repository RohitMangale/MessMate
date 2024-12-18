import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../contexts/OrderContext"; // Importing the custom hook
import OrderDetails from "../components/OrderDetails";
import starIcon from "../assets/Star.png";
import axios from "axios";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

const orderlist = [
  {
    id: "123456",
    items: 6,
    status: "Completed",
    img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
  },
  {
    id: "123455",
    items: 3,
    status: "Completed",
    img: "https://cdn.usegalileo.ai/sdxl10/4a7e11be-2edb-4e1e-af3d-804d36d52137.png",
  },
  {
    id: "123454",
    items: 2,
    status: "Completed",
    img: "https://cdn.usegalileo.ai/sdxl10/c4bd0f99-7a24-474f-88f9-4ce3cbbc7bf5.png",
  },
  {
    id: "123453",
    items: 4,
    status: "Completed",
    img: "https://cdn.usegalileo.ai/sdxl10/4a7e11be-2edb-4e1e-af3d-804d36d52137.png",
  },
  {
    id: "123452",
    items: 1,
    status: "Completed",
    img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
  },
];

const Orders = () => {
  const { cart, clearCart } = useOrder(); // Access the cart from context
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentOrderExists = cart.length > 0;
  const currentOrderID = localStorage.getItem("currentOrderID");

  // const orderItems = localStorage.getItem("order");
  // console.log(orderItems);
  const pollingRef = useRef(null); // To persist interval ID
  const isPollingActive = useRef(true); // To track polling status

  useEffect(() => {
    const fetchCurrentOrderState = async () => {
      if (!isPollingActive.current) return; // Break if polling is inactive

      try {
        const response = await axios.get(`${BASE_URL}/orders/${currentOrderID}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        console.log("Order Status:", response.data.status);

        // If the order is completed, stop polling
        if (response.data.status === "completed") {
          console.log("Polling completed. Stopping polling...");
          toast.success("Order completed successfully!");
          localStorage.removeItem("order"); // Clear order from localStorage
          localStorage.removeItem("currentOrderID"); // Clear order from localStorage
          clearCart(); // Clear the cart
          clearInterval(pollingRef.current); // Stop polling
          isPollingActive.current = false; // Mark polling as inactive
        }
      } catch (error) {
        console.error("Error fetching the current order state:", error);
      }
    };

    if (currentOrderID) {
      // Start polling
      fetchCurrentOrderState(); // Initial fetch
      pollingRef.current = setInterval(fetchCurrentOrderState, 5000); // Poll every 5 seconds
    }

    // Cleanup on component unmount
    return () => {
      console.log("Cleaning up polling...");
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
    };
  }, [currentOrderID, clearCart]); // Dependencies



  
  
  

    

  return (
    <div
      className="relative w-full flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-blackText tracking-light text-[32px] font-bold leading-tight">
                  My Orders
                </p>
                <p className="text-colorText text-sm font-normal leading-normal">
                  You can track your orders here
                </p>
              </div>
            </div>

            {currentOrderExists ? (
              <div>
                <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                  Current Orders
                </h3>
                <div className="p-4 flex flex-col gap-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-stretch justify-between gap-4 rounded-xl"
                    >
                      <div className="flex flex-col gap-1 flex-[2_2_0px]">
                        <p className="text-colorText text-sm font-normal leading-normal">
                          Item #{item.id}
                        </p>
                        <p className="text-blackText text-base font-bold leading-tight">
                          {item.item_name}
                        </p>
                        <p className="text-colorText text-sm font-normal leading-normal">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-colorText text-sm font-normal leading-normal">
                          Ingredients: {item.ingredient_list}
                        </p>
                        <p className="text-black text-sm font-normal leading-normal">
                          {item.item_tag}
                        </p>

                      </div>
                      <div
                    className="w-full flex items-end justify-end bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="flex items-center gap-[6px] rating text-center text-colorText font-bold border-background border-2 bg-background rounded-md p-2 m-[10px] w-max">
                      <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                        <img src={starIcon} alt="Star Icon" /> {item.rating}
                      </span>
                      <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                        (272)
                      </span>
                    </div>
                  </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
                  <div
                    className="iconStyle"
                    data-icon="Clock"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-blackText text-base font-medium leading-normal line-clamp-1">
                      Estimated pickup time
                    </p>
                    <p className="text-colorText text-sm font-normal leading-normal line-clamp-2">
                      Pickup at 5:30 PM
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex gap-6 justify-between">
                    <p className="text-blackText text-base font-medium leading-normal">
                      Order in progress
                    </p>
                    <p className="text-blackText text-sm font-normal leading-normal">
                      50%
                    </p>
                  </div>
                  <div className="rounded bg-[#e6dbdb]">
                    <div
                      className="h-2 rounded bg-blackText"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <p className="text-colorText text-sm font-normal leading-normal">
                    Your order is being prepared
                  </p>
                </div>
                <div className="flex px-4 py-3 justify-end">
                  <button className="btnLight">
                    <span className="truncate">Cancel Order</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col p-4 mb-5">
                <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e6e0db] px-6 py-14">
                  <div className="flex max-w-[480px] flex-col items-center gap-2">
                    <p className="text-blackText text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                      No current orders
                    </p>
                    <p className="text-blackText text-sm font-normal leading-normal max-w-[480px] text-center">
                      You haven&apos;t placed any orders in the past 6 months.
                    </p>
                  </div>
                  <button className="btnColored">
                    <Link to="/" className="truncate">
                      Order now
                    </Link>
                  </button>
                </div>
              </div>
            )}

            <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Past Orders
            </h3>

            {orderlist.map((order) => {
              return (
                <div key={order.id} className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 flex-[2_2_0px]">
                      <p className="text-blackText text-base font-bold leading-tight">
                        Order #{order.id}
                      </p>
                      <p className="text-colorText text-sm font-normal leading-normal">
                        {order.items} - items {order.status}
                      </p>
                      <button onClick={openModal} className="btnLight mt-3">
                        <span className="truncate">Order Details</span>
                      </button>
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                      style={{
                        backgroundImage: `url(${order.img})`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <>
          <OrderDetails closeModal={closeModal} />
        </>
      )}
    </div>
  );
};

export default Orders;
