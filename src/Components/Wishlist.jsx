import React, { useState } from 'react';
import image3 from '../assest/Productpage/LGTXR01732GW4-7.00 -1.avif';
import image4 from '../assest/Productpage/LGTXR01732GW4-7.00.avif';

const Wishlistpage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: image3,
      title: '2 ctw Oval Lab Grown Diamond Eternity Band - 3.7mm Width',
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      image: image4,
      title: '2 ctw Oval Lab Grown Diamond Eternity Band - 3.7mm Width',
      price: 200,
      quantity: 1,
    },
    // Add more items as needed
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <>
    <div className="p-4 mx-auto max-w-[110rem]">
      <h1 className="text-xl font-bold mb-4">My Wishlist</h1>

      {/* Header row */}
      <div className="hidden md:flex items-center justify-between p-4 bg-gray-100 font-bold border-b border-gray-300">
        <div className="w-16">Remove</div>
        <div className="w-20">Image</div>
        <div className="w-64">Title</div>
        <div className="w-20">Price</div>
        <div className="w-24">Quantity</div>
        <div className="w-32">View Product</div>
      </div>

      {/* Data rows */}
      <div className="space-y-4">
        {wishlistItems.map(item => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-300 space-y-4 md:space-y-0">
            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 w-16">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            <div className="w-full md:w-64 text-center md:text-left">
              <h2 className="text-lg">{item.title}</h2>
            </div>
            <div className="w-full md:w-20 text-center md:text-left">
              <p className="text-gray-500">₹{item.price}</p>
            </div>
            <div className="w-full md:w-24 text-center md:text-left">
              <span>Qty: {item.quantity}</span>
            </div>
            <div className="w-full md:w-32 text-center md:text-left">
              <a href={`/products/${item.id}`} className="text-blue-500 hover:underline">View Product</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="section-gap"></div>
    </>
  );
};

export default Wishlistpage;
