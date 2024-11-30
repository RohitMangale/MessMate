import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";

const OrderDetailsM = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/orders/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(response.data); // Assuming response.data is the array of orders
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Process orders to calculate status progress
  const getStatusProgress = () => {
    const totalOrders = orders.length;
    const statusCounts = orders.reduce(
      (acc, order) => {
        acc[order.status] = (acc[order.status] || 0) + 1;
        return acc;
      },
      { "In progress": 0, Ready: 0, Completed: 0 } // Default keys with 0 counts
    );

    const progress = Object.keys(statusCounts).map((status) => ({
      status,
      count: statusCounts[status],
      percentage: totalOrders > 0 ? Math.round((statusCounts[status] / totalOrders) * 100) : 0,
    }));

    return progress;
  };

  const statusProgress = getStatusProgress();

  return (
    <div>
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          <h3 className="text-reddish text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Order Status
          </h3>
          {statusProgress.map((progress) => (
            <div key={progress.status} className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-blackText text-base font-medium leading-normal">{progress.status}</p>
                <p className="text-blackText text-sm font-normal leading-normal">{progress.percentage}%</p>
              </div>
              <div className="rounded bg-background">
                <div
                  className="h-2 rounded bg-reddish"
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
              <p className="text-colorText text-sm font-normal leading-normal">
                {progress.count} of {orders.length} orders
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OrderDetailsM;
