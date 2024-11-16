import {Link } from "react-router-dom";

import starIcon from "../../assets/Star.png";



const foodItems = [
  {
    img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
    name: "Avocado Toast",
    price: "$12.99",
    tags: "Breakfast, Vegan",
    rating: 3.9,
    ingredients: ["Avocado", "Bread", "Olive Oil", "Salt"]
  },
  {
    img: "https://cdn.usegalileo.ai/stability/934464b5-541f-4462-a71f-16d31f5ed574.png",
    name: "Acai Bowl",
    price: "$9.99",
    tags: "Breakfast",
    rating: 4.5,
    ingredients: ["Acai", "Banana", "Granola", "Honey"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/b0457ffa-d652-4e91-83ac-4f1a77121a9c.png",
    name: "Egg and Cheese Biscuit",
    price: "$7.99",
    tags: "Breakfast",
    rating  : 4.1,
    ingredients: ["Egg", "Cheese", "Biscuit", "Butter"]
  },
  {
    img: "https://cdn.usegalileo.ai/stability/4a94fa4e-9a0a-4da2-84ef-4d792ab7ee79.png",
    name: "Chicken and Waffles",
    price: "$15.99",
    tags: "Lunch, Dinner",
    rating: 4.5,
    ingredients: ["Chicken", "Waffles", "Maple Syrup"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/4a7e11be-2edb-4e1e-af3d-804d36d52137.png",
    name: "Greek Salad",
    price: "$11.99",
    tags: "Lunch, Dinner",
    rating: 4.3,
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Feta Cheese", "Olives"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/c4bd0f99-7a24-474f-88f9-4ce3cbbc7bf5.png",
    name: "Vegan Burrito",
    price: "$13.99",
    tags: "Lunch, Dinner, Vegan",
    rating: 4.0,
    ingredients: ["Rice", "Beans", "Avocado", "Vegetables", "Tortilla"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/3b1b1405-a7fb-4ab8-9428-a18251952e8b.png",
    name: "Cold Brew Coffee",
    price: "$4.99",
    tags: "Drink",
    rating: 3.6,
    ingredients: ["Coffee Beans", "Water"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/0ab7814c-86c4-4d9e-a6f3-1ab672998a06.png",
    name: "Green Smoothie",
    price: "$5.99",
    tags: "Drink",
    rating: 4.9,
    ingredients: ["Spinach", "Banana", "Almond Milk", "Chia Seeds"]
  },
  {
    img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
    name: "Avocado Toast",
    price: "$12.99",
    tags: "Breakfast, Vegan",
    rating: 3.9,
    ingredients: ["Avocado", "Bread", "Olive Oil", "Salt"]
  },
  {
    img: "https://cdn.usegalileo.ai/stability/934464b5-541f-4462-a71f-16d31f5ed574.png",
    name: "Acai Bowl",
    price: "$9.99",
    tags: "Breakfast",
    ingredients: ["Acai", "Banana", "Granola", "Honey"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/b0457ffa-d652-4e91-83ac-4f1a77121a9c.png",
    name: "Egg and Cheese Biscuit",
    price: "$7.99",
    tags: "Breakfast",
    rating: 4.1,
    ingredients: ["Egg", "Cheese", "Biscuit", "Butter"]
  },
  {
    img: "https://cdn.usegalileo.ai/stability/4a94fa4e-9a0a-4da2-84ef-4d792ab7ee79.png",
    name: "Chicken and Waffles",
    price: "$15.99",
    rating: 4.5,
    tags: "Lunch, Dinner",
    ingredients: ["Chicken", "Waffles", "Maple Syrup"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/4a7e11be-2edb-4e1e-af3d-804d36d52137.png",
    name: "Greek Salad",
    price: "$11.99",
    rating: 4.3,
    tags: "Lunch, Dinner",
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Feta Cheese", "Olives"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/c4bd0f99-7a24-474f-88f9-4ce3cbbc7bf5.png",
    name: "Vegan Burrito",
    price: "$13.99",
    rating: 4.5,
    tags: "Lunch, Dinner, Vegan",
    ingredients: ["Rice", "Beans", "Avocado", "Vegetables", "Tortilla"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/3b1b1405-a7fb-4ab8-9428-a18251952e8b.png",
    name: "Cold Brew Coffee",
    price: "$4.99",
    tags: "Drink",
    rating: 4.5,
    ingredients: ["Coffee Beans", "Water"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/0ab7814c-86c4-4d9e-a6f3-1ab672998a06.png",
    name: "Green Smoothie",
    price: "$5.99",
    tags: "Drink",
    rating: 4.5,
    ingredients: ["Spinach", "Banana", "Almond Milk", "Chia Seeds"]
  },
  {
    img: "https://cdn.usegalileo.ai/stability/05fb12e6-9204-4192-8f4c-6da7dcf23fbc.png",
    name: "Grilled Chicken Breast",
    price: "$13.99",
    tags: "Main Course",
    rating: 4.7,
    ingredients: ["Chicken Breast", "Olive Oil", "Spices"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/268d0078-7b2f-4c71-8d69-1b298076cad4.png",
    name: "White Cheddar Mac & Cheese",
    price: "$11.99",
    tags: "Main Course",
    rating: 4.9,
    ingredients: ["Macaroni", "Cheddar Cheese", "Milk", "Butter"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/d28869d8-247f-40a3-86fa-7258114f6ce7.png",
    name: "Lemon Garlic Broccoli",
    price: "$8.99",
    tags: "Side Dish",
    rating: 4.5,
    ingredients: ["Broccoli", "Lemon", "Garlic", "Olive Oil"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/3b4cf562-9686-4ce4-9b11-0dd02faf1a02.png",
    name: "Grass-Fed Beef Burger",
    price: "$15.99",
    tags: "Main Course",
    rating: 4.8,
    ingredients: ["Grass-Fed Beef", "Lettuce", "Tomato", "Bun"]
  },
  {
    img: "https://cdn.usegalileo.ai/stability/7dd30360-56cf-458c-a86b-d1bb26a3a195.png",
    name: "Sweet Potato Fries",
    price: "$9.99",
    tags: "Side Dish",
    rating: 4.7,
    ingredients: ["Sweet Potatoes", "Olive Oil", "Salt"]
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/d96f8d95-31d5-479e-963f-0272ab57ad4c.png",
    name: "Greek Salad",
    price: "$12.99",
    tags: "Lunch, Dinner",
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Feta Cheese", "Olives"]
  },
];
const Menu = () => {
  return (
    <div className="menu py-10"> 


    {/* search bar */}
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


    {/* food items mapped */}

    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 p-4 scrollable-grid ">
      {foodItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-3 pb-3">
          <div
            className="w-full flex items-end justify-end bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: `url(${item.img})` }}
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
          <div className="flex flex-col justify-between h-full text-colorText" >
            <div>
            <p className="text-blackText text-base font-medium leading-normal">
              {item.name}
            </p>
            <p className="text-reddish text-sm font-bold leading-normal">
              {item.price}
            </p>
            <p className=" text-sm font-normal leading-normal">
            Ingredients: {item.ingredients.join(", ")}
            </p>
            <p className="text-black text-sm font-normal leading-normal">
              {item.tags}
            </p>

            </div>
            <Link   className="  text-center w-full text-reddish border border-reddish p-2 rounded-md mt-[10px] ">
                Modify
            </Link>


          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Menu