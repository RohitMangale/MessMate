import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import starIcon from "../assets/Star.png";
import { BASE_URL } from "../config";
import { useOrder } from "../contexts/OrderContext"; // Import the OrderContext

const FilterBox = () => {
  const [foodItems, setFoodItems] = useState([]); // State for menu items
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const { addToCart } = useOrder(); // Use the addToCart function from OrderContext

  // Fetch menu items from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${BASE_URL}/menus/`); // Replace with your API endpoint
        if (!response.ok) throw new Error("Failed to fetch menu");
        const data = await response.json();
        setFoodItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>Error: {error}</p>; // Show error message

  return (
    <div className="filter-box">
      {/* Filter buttons */}
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {["Breakfast", "Lunch", "Dinner", "Snack", "Sides", "Drinks"].map(
          (meal) => (
            <div
              key={meal}
              className="cursor-pointer flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background pl-4 pr-4"
            >
              <p className="text-blackText text-sm font-medium leading-normal">
                {meal}
              </p>
            </div>
          )
        )}
      </div>

      {/* Search bar */}
      <form className="px-3 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-colorText flex border-none bg-background items-center justify-center pl-4 rounded-l-xl border-r-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Search for a food or drink"
              className="form-input flex w-full min-w-0 flex-1 resize-none rounded-xl text-blackText focus:outline-none focus:ring-0 border-none bg-background h-full placeholder:text-colorText px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              type="text"
              name="search"
              onChange={(e) => console.log(e.target.value)} // Update this with your desired function to handle input
            />
          </div>
        </label>
      </form>

      {/* Food items mapped */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-4 scrollable-grid mt-5">
        {foodItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full flex items-end justify-end bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="flex items-center gap-[6px] rating text-center text-colorText font-bold border-background border-2 bg-background rounded-md p-2 m-[10px] w-max">
                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="" /> {item.rating}
                </span>
                <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                  (272)
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full text-colorText">
              <div>
                <p className="text-blackText text-base font-medium leading-normal">
                  {item.item_name}
                </p>
                <p className="text-sm font-normal leading-normal">
                  Ingredients: {item.ingredient_list}
                </p>
                <p className="text-black text-sm font-normal leading-normal">
                  {item.item_tag}
                </p>
              </div>
              <button
                onClick={() => addToCart(item)} // Add item to the cart when clicked
                className="text-center w-full text-reddish border border-reddish p-2 rounded-md mt-[10px] transition duration-300 ease-in-out hover:text-white hover:bg-reddish"
              >
                ${item.item_price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
