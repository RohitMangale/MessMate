import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../contexts/OrderContext"; // Ensure this path is correct
import starIcon from "../assets/Star.png";
import axios from "axios"; // Import axios for API calls
import { BASE_URL } from "../config";
// import { useAuth } from "../contexts/AuthContext";

const CheckOut = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotalPrice, clearCart } =
    useOrder();
  const navigate = useNavigate(); // Hook for navigation
  const userid = localStorage.getItem("userId");
  const token = localStorage.getItem("accessToken");

  const handleCheckout = async () => {
    try {
      // Prepare order payload
      const total_price = calculateTotalPrice();
      const order_status = "placed"; // Initial status for the order
      console.log(total_price);
      // Create the order
      const orderResponse = await axios.post(
        `${BASE_URL}/orders/`,
        {
          user: userid, // Use user ID from AuthContext
          status: order_status,
          total_price: total_price,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // Pass headers separately
        }
      );

      // const orderId = orderResponse.data.id; // Get the newly created order ID

      // // Create order items
      // const orderItems = cart.map((item) => ({
      //   order: orderId,
      //   menu: item.id,
      //   quantity: item.quantity,
      //   price: item.item_price,
      // }));

      // await Promise.all(
      //   orderItems.map((orderItem) =>
      //     axios.post("/orderitems/", {
      //       orderItem,
           
      //     }),
      //     {
      //       headers: { Authorization: `Bearer ${authToken}`},
      //     }
      //   )
      // );

      // Clear the cart after successful order creation
      clearCart();

      // Navigate to orders page
      navigate("/orders");
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
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

            {/* Render items in the cart */}
            {cart.map((item) => (
              <div key={item.id} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    {/* Food item details */}
                    <p className="text-blackText text-base font-bold leading-tight">
                      {item.item_name}
                    </p>
                    <p className="text-reddish text-sm font-bold leading-normal">
                      {item.quantity} × ${item.item_price}
                    </p>
                    <p className="text-colorText text-sm font-normal leading-normal">
                      Ingredients: {item.ingredient_list}
                    </p>
                    <p className="text-blackText text-sm font-normal leading-normal">
                      {item.item_tag}
                    </p>

                    {/* Quantity adjustment buttons */}
                    <div className="flex flex-row gap-5 justify-start items-center mt-5">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="iconSoft"
                        disabled={item.quantity <= 1}
                      >
                        {/* Decrease Quantity Icon */}
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
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>

                      <p className="text-blackText text-lg font-bold leading-normal">
                        {item.quantity}
                      </p>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="iconSoft"
                      >
                        {/* Increase Quantity Icon */}
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
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
                    {/* Remove item button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white btnColored text-sm font-bold leading-normal mt-3"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Item image and rating */}
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
              </div>
            ))}

            <div className="border-t-4 w-full border-blackText mt-5 rounded-md"></div>

            {/* Checkout buttons */}
            <div className="flex gap-4 flex-wrap px-4 py-3 justify-between items-center">
              <p className="text-blackText text-base font-bold leading-tight">
                Total: ${calculateTotalPrice().toFixed(2)}
              </p>
              <div className="flex w-max flex-row gap-6">
                <Link to="/" className="btnLight">
                  <span className="truncate">Cancel Order</span>
                </Link>
                <button onClick={handleCheckout} className="btnColored">
                  <span className="truncate">Check Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
