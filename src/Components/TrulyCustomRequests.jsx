import React, { useState } from 'react';

const TrulyCustomRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, request: 'Custom Engagement Ring', status: 'Pending' },
  ]);

  const handleEdit = (id) => {
    // Handle edit functionality
  };

  const handleDelete = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  return (
    <div className=' mx-auto max-w-[110rem]'>
      <h2 className="text-2xl font-semibold mb-4">Truly Custom Requests</h2>
      {requests.map((request) => (
        <div key={request.id} className="mb-4 p-4 border border-gray-300 rounded-md">
          <p>Request: {request.request}</p>
          <p>Status: {request.status}</p>
          <button onClick={() => handleEdit(request.id)} className="text-blue-500">
            Edit
          </button>
          <button onClick={() => handleDelete(request.id)} className="text-red-500 ml-2">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TrulyCustomRequests;
