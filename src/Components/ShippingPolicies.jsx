import React from 'react';

const ShippingPolicies = () => {
  return (
    <div className="mx-auto max-w-[110rem] p-8">
      <h1 className="text-xl font-bold text-gray-800 mb-6">Shipping Policies</h1>
      <p className="text-gray-600">
        We are committed to delivering your orders as quickly and safely as possible. Please review our shipping policies below:
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-600">
        <li>Orders are processed and shipped within 2-3 business days.</li>
        <li>We offer free shipping for all orders above [X amount] within [Country/Region].</li>
        <li>International shipping is available at a flat rate, and delivery time depends on the destination.</li>
        <li>You will receive a tracking number once your order is dispatched.</li>
        <li>Delivery times are estimates and may vary due to external factors such as customs delays or courier issues.</li>
      </ul>
      <p className="mt-4 text-gray-600">
        If your order arrives damaged or is delayed, please contact us immediately for assistance.
      </p>
    </div>
  );
};

export default ShippingPolicies;
