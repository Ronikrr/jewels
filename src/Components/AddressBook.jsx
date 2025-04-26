import React, { useState } from 'react';

const AddressBook = () => {
  const [address, setAddress] = useState('');

  const handleAddAddress = () => {
    // Handle add address functionality (API call)
  };

  return (
    <div className=' mx-auto max-w-[110rem]'>
      <h2 className="text-2xl font-semibold mb-4">Address Book</h2>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Enter your address"
      />
      <button
        onClick={handleAddAddress}
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Add Address
      </button>
    </div>
  );
};

export default AddressBook;
