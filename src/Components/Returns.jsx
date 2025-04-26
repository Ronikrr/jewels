import React from 'react';

const Returns = () => {
  const returns = [
    { id: 1, product: 'Ring', returnDate: '2024-01-20', status: 'Processed' },
    // Fetch your returns data from an API
  ];

  return (
    <div className=' mx-auto max-w-[110rem]'>
      <h2 className="text-2xl font-semibold mb-4">Returns</h2>
      {returns.map((ret) => (
        <div key={ret.id} className="mb-4 p-4 border border-gray-300 rounded-md">
          <p>Product: {ret.product}</p>
          <p>Return Date: {ret.returnDate}</p>
          <p>Status: {ret.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Returns;
