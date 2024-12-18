import acai_bowl from '../../assets/acai_bowl.png'
import avocado from '../../assets/avocado_toast.png'

const foodItems = [
  {
    img: avocado,
    name: "Avocado Toast",
    price: "$12.99",
    tags: "Breakfast, Vegan",
    rating: 3.9,
    quantity: 2,
    ingredients: ["Avocado", "Bread", "Olive Oil", "Salt"],
  },
  {
    img: acai_bowl,
    name: "Acai Bowl",
    price: "$9.99",
    tags: "Breakfast",
    rating: 4.5,
    quantity: 1,
    ingredients: ["Acai", "Banana", "Granola", "Honey"],
  },
  {
    img: "https://cdn.usegalileo.ai/sdxl10/b0457ffa-d652-4e91-83ac-4f1a77121a9c.png",
    name: "Egg and Cheese Biscuit",
    price: "$7.99",
    tags: "Breakfast",
    rating: 4.1,
    quantity: 1,
    ingredients: ["Egg", "Cheese", "Biscuit", "Butter"],
  },
  // {
  //   img: "https://cdn.usegalileo.ai/sdxl10/0ab7814c-86c4-4d9e-a6f3-1ab672998a06.png",
  //   name: "Green Smoothie",
  //   price: "$5.99",
  //   tags: "Drink",
  //   rating: 4.9,
  //   quantity: 3,
  //   ingredients: ["Spinach", "Banana", "Almond Milk", "Chia Seeds"],
  // },
  // {
  //   img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
  //   name: "Avocado Toast",
  //   price: "$12.99",
  //   tags: "Breakfast, Vegan",
  //   quantity: 4,
  //   rating: 3.9,
  //   ingredients: ["Avocado", "Bread", "Olive Oil", "Salt"],
  // },
];
// eslint-disable-next-line react/prop-types
const OrderCard = () => {
  return (
    <div className="flex flex-col gap-3 mt-5 max-w-80 ">
        <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 ">
          Order #32
        </h3>


      <div className="flex items-start justify-start gap-4 rounded-xl w-full flex-wrap  ">
        {/*
       <div className="flex flex-[2_2_0px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-colorText text-sm font-normal leading-normal">{orderNumber} • Pickup</p>
          <p className="text-blackText text-base font-bold leading-tight">{storeName}</p>
          <p className="text-colorText text-sm font-normal leading-normal">{item}</p>
        </div>
        </div>
        <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div> 
        */}

        {foodItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap  max-w-[150px] items-center justify-center gap-3 pb-3 w-full "
          >
            <div
              className="w-full flex items-end justify-end bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-w-[100px] max-w-[120px] max-h-[120px]"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="flex flex-col justify-between h-full text-colorText">
              <div>
                <p className="text-blackText text-base text-center font-medium leading-normal">
                  {item.quantity} * {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btnColored w-full">
          <span className="truncate">Mark as ready</span>
        </button>
    </div>
  );
};

export default OrderCard;
