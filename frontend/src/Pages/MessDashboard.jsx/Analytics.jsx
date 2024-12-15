import { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { BASE_URL } from "../../config";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Analytics = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const daysToShow = 7; // Last 7 days for the chart

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/orders/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrderHistory(response.data); // Assuming the response contains an array of orders
      } catch (err) {
        console.error("Error fetching order history:", err);
        setError("Failed to fetch order history. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  // Helper function to filter orders for the last X days
  const filterOrdersForLastDays = (orders, days) => {
    const today = new Date();
    return orders.filter((order) => {
      const orderDate = new Date(order.created_at);
      const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // Start of today
      const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // End of today
      return (
        orderDate >= new Date(today - days * 24 * 60 * 60 * 1000) &&
        orderDate <= endOfDay
      );
    });
  };

  // Helper function to group orders by date (ISO format for consistency)
  const groupOrdersByDate = (orders) => {
    const grouped = {};

    orders.forEach((order) => {
      const date = new Date(order.created_at).toISOString().split("T")[0]; // ISO date format (YYYY-MM-DD)
      if (grouped[date]) {
        grouped[date] += 1;
      } else {
        grouped[date] = 1;
      }
    });

    return grouped;
  };

  // Filter orders for the last X days
  const filteredOrders = filterOrdersForLastDays(orderHistory, daysToShow);

  // Group the filtered orders and prepare the data for the graph
  const groupedOrders = groupOrdersByDate(filteredOrders);

  // Prepare data for the timeline chart
  const timelineData = {
    labels: Array.from({ length: daysToShow }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (daysToShow - 1 - i));
      return date.toISOString().split("T")[0]; // Generate dates for the last 7 days in ISO format
    }),
    datasets: [
      {
        label: "Orders Per Day",
        data: Array.from({ length: daysToShow }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (daysToShow - 1 - i));
          const dateString = date.toISOString().split("T")[0];
          return groupedOrders[dateString] || 0; // Use grouped orders or default to 0
        }),
        borderColor: "#f2231c",
        backgroundColor: "rgba(7, 136, 14, 0.2)",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  };

  // Prepare data for the price chart
  const priceData = {
    labels: filteredOrders.map((order) => {
      const date = new Date(order.created_at);
      return date.getTime() ? date.toLocaleDateString("en-US") : "Invalid Date";
    }),
    datasets: [
      {
        label: "Order Price ($)",
        data: filteredOrders.map((order) => {
          return parseFloat(order.total_price) || 0; // Ensure valid price
        }),
        backgroundColor: "#f2231c",
        borderRadius: 5,
      },
    ],
  };

  const timelineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Orders per Day (Last 7 Days)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const priceOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Order Prices Over Time (Last 7 Days)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative flex size-full max-w-[960px] min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col flex-1">
            {/* Graphs ------------------- */}
            <h3 className="text-blackText tracking-light text-[32px] font-bold leading-tight min-w-72">
              Order Analytics (Last 7 Days)
            </h3>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="flex flex-col flex-wrap gap-4 px-4 py-6">
                <div className="flex flex-1 flex-col gap-2 rounded-xl border border-[#e6e0db] p-6">
                  <p className="text-blackText text-base font-medium leading-normal">
                    Orders per Day
                  </p>
                  <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4"style={{ height: "400px", width: "800px" }}>
                    {/* Line Chart for Orders per Day */}
                    <Line data={timelineData} options={timelineOptions} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 rounded-xl border border-[#e6e0db] p-6">
                  <p className="text-blackText text-base font-medium leading-normal">
                    Order Prices Over Time
                  </p>
                  <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                    {/* Bar Chart for Order Prices */}
                    <Bar data={priceData} options={priceOptions} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
