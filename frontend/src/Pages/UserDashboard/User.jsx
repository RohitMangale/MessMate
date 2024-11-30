
import{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Orders from "../Orders";
// import { foodItems } from "../../assets/fooditems";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const foodItems = [
  {
    img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
    name: "Avocado Toast",
    price: "$12.99",
    tags: "Breakfast, Vegan",
    rating: 3.9,
    quantity: 5,
    ingredients: ["Avocado", "Bread", "Olive Oil", "Salt"],
  },
  {
    img: "https://cdn.usegalileo.ai/stability/934464b5-541f-4462-a71f-16d31f5ed574.png",
    name: "Acai Bowl",
    price: "$9.99",
    tags: "Breakfast",
    rating: 4.5,
    quantity: 9,
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
  {
    img: "https://cdn.usegalileo.ai/sdxl10/0ab7814c-86c4-4d9e-a6f3-1ab672998a06.png",
    name: "Green Smoothie",
    price: "$5.99",
    tags: "Drink",
    rating: 4.9,
    quantity: 3,
    ingredients: ["Spinach", "Banana", "Almond Milk", "Chia Seeds"],
  },
  {
    img: "https://cdn.usegalileo.ai/stability/b5ff7d3a-b8a5-4dd3-9809-85efaac70cdd.png",
    name: "Avocado Toast",
    price: "$12.99",
    tags: "Breakfast, Vegan",
    quantity: 4,
    rating: 3.9,
    ingredients: ["Avocado", "Bread", "Olive Oil", "Salt"],
  },
];

const User = () => {
  const [user, setUser] = useState([]);
  const userid = localStorage.getItem("userId");

  // Dummy data for analytics
  const orderCounts = [12, 15]; // Number of orders
  const spendingData = [1290, 3680]; // Spending amounts in dollars
  const labels = ["Day 1", "Day 2"]; // Labels for days

  const lineChartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of Orders",
        data: orderCounts,
        borderColor: "#ff7300",
        backgroundColor: "rgba(255, 115, 0, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: "Spending ($)",
        data: spendingData,
        backgroundColor: "rgba(82, 202, 157, 0.7)",
        borderColor: "#52ca9d",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/userregistration/${userid}/`);
        setUser(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchUser();
  }, [userid]);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-blackText tracking-light text-[32px] font-bold leading-tight">
                  Hi, {user.username}
                </p>
                <p className="text-[#897361] text-sm font-normal leading-normal">
                  Here&apos;s what&apos;s happening with your orders
                </p>
              </div>
              
            </div>
              {/*  The subsription component */}
        <div className="p-4">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#e6e0db] bg-white p-5 md:flex-row md:items-center">
            <p className="text-blackText text-base font-bold leading-tight">
              Get $3 off your first order
            </p>
            <button className="btnColored">
            <Link to='/' className="truncate">Order now</Link>
            </button>
          </div>
          </div>

            {/* Order Analytics */}
            <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Order Analytics
            </h3>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              {/* Line Chart for Order Counts */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#e6e0db] p-6">
                <p className="text-blackText text-base font-medium leading-normal">
                  Orders in the Last 2 Days
                </p>
                <div className="min-h-[200px]">
                  <Line data={lineChartData} options={{ responsive: true }} />
                </div>
              </div>

              {/* Bar Chart for Spending */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#e6e0db] p-6">
                <p className="text-blackText text-base font-medium leading-normal">
                  Spending in the Last 2 Days
                </p>
                <div className="min-h-[200px]">
                  <Bar data={barChartData} options={{ responsive: true }} />
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="w-full">
              <Orders />
            </div>

            {/* Recommended Items */}
            <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Recommended Items
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {foodItems.map((item, index) => (
                <div className="flex flex-col gap-3 pb-3" key={index}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div>
                    <p className="text-blackText text-base font-medium leading-normal">
                      {item.name}
                    </p>
                    <p className="text-[#897361] text-sm font-normal leading-normal">
                      {item.tags}
                    </p>
                    <p className="text-[#897361] text-sm font-normal leading-normal">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;