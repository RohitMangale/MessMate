import { Link } from "react-router-dom";
import starIcon from "../assets/Star.png";

const itemlist = [
  {
    id: "123456",
    quantity: 6,
    price: "11.99",
    name: "White Cheddar Mac & Cheese",
    img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
    tags: "Lunch, Dinner",
    rating: 4.5,
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Feta Cheese", "Olives"],
  },
  {
    id: "123455",
    quantity: 3,
    price: "8.99",
    name: "Lemon Garlic Broccoli",
    img: "https://cdn.usegalileo.ai/stability/934464b5-541f-4462-a71f-16d31f5ed574.png",
    tags: "Drink",
    rating: 4.0,
    ingredients: ["Coffee Beans", "Water"],
  },
];

const CheckOut = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-blackText tracking-light text-[32px] font-bold leading-tight">
                  Order Summary
                </p>
              </div>
            </div>

            {itemlist.map((item) => {
              return (
                <div key={item.id} className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 flex-[2_2_0px]">
                      <p className="text-blackText text-base font-bold leading-tight">
                        {item.name}
                      </p>

                      <p className="text-reddish text-sm font-bold leading-normal">
                        {item.quantity} * {item.price}
                      </p>
                      <p className="text-colorText text-sm font-normal leading-normal">
                        Ingredients: {item.ingredients.join(", ")}
                      </p>
                      <p className="text-blackText text-sm font-normal leading-normal">
                        {item.tags}
                      </p>

                      <div className="flex flex-row gap-5 justify-start items-center mt-5">
                        <div
                          className="iconSoft"
                          data-icon="Clock"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="delete-icon"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2"></path>
                            <rect
                              x="3"
                              y="6"
                              width="18"
                              height="16"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>

                        <p className="text-blackText text-lg font-bold leading-normal">
                          {item.quantity}
                        </p>

                        <div
                          className=" iconSoft"
                          data-icon="Clock"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="plus-icon"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full flex items-end justify-end bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    >
                      <div className="flex items-center gap-[6px] rating  text-center text-colorText font-bold border-background border-2  bg-background rounded-md p-2 m-[10px] w-max ">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> {item.rating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    (272)
                  </span>
              </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div
                className="text-blackText flex items-center justify-center rounded-lg bg-[#f5f0f0] shrink-0 size-12"
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
            </div> */}
            {/* <div className="flex flex-col gap-3 p-4">
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
            </div> */}
            <div className=" border-t-4 w-full border-blackText mt-5 rounded-md" >

            </div>


            {/* btns of cancel and checkout */}
            <div className="flex gap-4 flex-wrap px-4 py-3 justify-between items-center">
            <p className="text-blackText text-base font-bold leading-tight">
              Total: $71.94
            </p>
            <div className="flex w-max flex-row  gap-6" >
            <Link to='/' className="btnLight">
                <span className="truncate">Cancel Order</span>
              </Link>
              <Link to='/orders' className="btnColored">
                <span className="truncate">Check Out</span>
              </Link>
            </div>
              
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
