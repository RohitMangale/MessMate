

const sampleOrderHistory = [
  { id: '#1233', status: 'Completed', type: 'Delivery', time: 'June 29, 2023 12:30 PM', location: '1234 Elm St', total: '$12.50' },
  { id: '#1234', status: 'Pending', type: 'Pickup', time: 'July 02, 2023 9:00 AM', location: '5678 Maple Ave', total: '$8.75' },
  { id: '#1235', status: 'In Progress', type: 'Delivery', time: 'July 05, 2023 1:15 PM', location: '9101 Oak St', total: '$15.20' },
  { id: '#1236', status: 'Cancelled', type: 'Delivery', time: 'July 10, 2023 5:45 PM', location: '1122 Pine Rd', total: '$10.00' },
  { id: '#1237', status: 'Completed', type: 'Pickup', time: 'July 15, 2023 8:20 AM', location: '1213 Birch Ln', total: '$7.50' },
  { id: '#1238', status: 'Completed', type: 'Delivery', time: 'July 18, 2023 11:10 AM', location: '1415 Cedar St', total: '$18.30' },
  { id: '#1239', status: 'In Progress', type: 'Pickup', time: 'July 20, 2023 2:50 PM', location: '1617 Walnut St', total: '$9.25' },
  { id: '#1240', status: 'Pending', type: 'Delivery', time: 'July 22, 2023 6:30 PM', location: '1819 Chestnut St', total: '$14.75' },
  { id: '#1241', status: 'Completed', type: 'Delivery', time: 'July 25, 2023 7:00 PM', location: '2021 Ash St', total: '$20.00' },
  { id: '#1242', status: 'Cancelled', type: 'Pickup', time: 'July 28, 2023 3:45 PM', location: '2223 Spruce St', total: '$6.40' },

];


const OrderHistory = () => {
  return (
    <div className="flex overflow-hidden rounded-xl border border-colorText bg-white">
      <table className="flex-1">
        <thead>
          <tr className="bg-background">
            <th className="  px-4 py-3 text-left text-blackText w-[400px] text-sm font-medium leading-normal">
              Order
            </th>
            <th className=" text-center px-4 py-3  text-blackText w-60 text-sm font-medium leading-normal">
              Status
            </th>
            {/* <th className="px-4 py-3 text-center text-blackText w-[400px] text-sm font-medium leading-normal">
              Type
            </th> */}
            <th className="px-4 py-3 text-center text-blackText w-[400px] text-sm font-medium leading-normal">
              Time
            </th>
            <th className="px-4 py-3 text-center text-blackText w-[400px] text-sm font-medium leading-normal">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleOrderHistory.map((order) => (
            <tr key={order.id} className="border-t border-t-colorText">
              <td className="px-4 py-2 text-blackText text-sm font-normal w-[400px]">
                {order.id}
              </td>
              <td className="px-4 py-2 text-sm font-normal w-60">
                <button className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden btnLight w-full">
                  <span className="truncate">{order.status}</span>
                </button>
              </td>
              {/* <td className="text-center px-4 py-2 text-colorText text-sm font-normal w-[400px]">
                {order.type}
              </td> */}
              <td className=" text-center px-4 py-2 text-colorText text-sm font-normal w-[400px]">
                {order.time}
              </td>
              <td className=" text-center px-4 py-2 text-colorText text-sm font-normal w-[400px]">
                {order.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
