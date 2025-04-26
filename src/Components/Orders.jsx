import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, date: '2024-01-10', status: 'Delivered', total: '$150' },
    { id: 2, date: '2024-02-15', status: 'Pending', total: '$200' },
    // Fetch your orders data from an API
  ];

  return (
    <div className=' mx-auto max-w-[110rem]'>
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className="mb-4 p-4 border border-gray-300 rounded-md">
          <p>Order ID: {order.id}</p>
          <p>Date: {order.date}</p>
          <p>Status: {order.status}</p>
          <p>Total: {order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
