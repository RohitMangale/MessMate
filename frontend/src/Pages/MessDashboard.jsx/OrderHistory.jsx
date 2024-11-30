import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"; // Import React Select
import { BASE_URL } from "../../config";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const statusOptions = [
    { value: "placed", label: "Placed" },
    { value: "in progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ]; // Options for React Select

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/orders/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        // Sort orders by `created_at` in descending order
        const sortedOrders = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setOrderHistory(sortedOrders);
      } catch (err) {
        console.error("Error fetching order history:", err);
        setError("Failed to fetch order history. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  const handleStatusChange = async (orderId, user, newStatus, total_price) => {
    try {
      console.log(orderId, user, newStatus, total_price);
      const response = await axios.put(
        `${BASE_URL}/orders/${orderId}/`,
        {
          user: user, // Include userId in the payload
          status: newStatus,
          total_price: total_price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      console.log("Status updated successfully:", response.data);

      // Update local state to reflect the change
      setOrderHistory((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error("Error updating order status:", err);
      alert("Failed to update the status. Please try again.");
    }
  };

  return (
    <div className="flex overflow-hidden rounded-xl border border-colorText bg-white">
      {loading ? (
        <div className="p-4 text-center">Loading order history...</div>
      ) : error ? (
        <div className="p-4 text-center text-red-500">{error}</div>
      ) : (
        <table className="flex-1">
          <thead>
            <tr className="bg-background">
              <th className="px-4 py-3 text-left text-blackText w-[400px] text-sm font-medium leading-normal">
                Order
              </th>
              <th className="text-center px-4 py-3 text-blackText w-60 text-sm font-medium leading-normal">
                Status
              </th>
              <th className="px-4 py-3 text-center text-blackText w-[400px] text-sm font-medium leading-normal">
                Time
              </th>
              <th className="px-4 py-3 text-center text-blackText w-[400px] text-sm font-medium leading-normal">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => {
              // Get the index of the status option that matches order.status
              const defaultStatus = statusOptions.findIndex(
                (option) => option.value === order.status
              );
              console.log(defaultStatus,statusOptions,order.status);

              return (
                <tr key={order.id} className="border-t border-t-colorText">
                  <td className="px-4 py-2 text-blackText text-sm font-normal w-[400px]">
                    {order.id}
                  </td>
                  <td className="px-4 py-2 text-sm font-normal w-60">
                    <Select
                      defaultValue={statusOptions[defaultStatus]} // Set the default value to the matched status
                      options={statusOptions}
                      onChange={(selectedOption) =>
                        handleStatusChange(
                          order.id,
                          order.user,
                          selectedOption.value,
                          order.total_price
                        )
                      }

                    />
                  </td>
                  <td className="text-center px-4 py-2 text-colorText text-sm font-normal w-[400px]">
                    {new Date(order.created_at).toLocaleString()}
                  </td>
                  <td className="text-center px-4 py-2 text-colorText text-sm font-normal w-[400px]">
                    {order.total_price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
