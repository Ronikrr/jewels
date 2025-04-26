import React from 'react';

const ReturnPolicies = () => {
  return (
    <div className="mx-auto max-w-[110rem] p-8">
      <h1 className="text-xl font-bold text-gray-800 mb-6">Return Policies</h1>
      <p className="text-gray-600">
        We strive for your complete satisfaction. If you are not happy with your purchase, you may return the item under the following conditions:
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-600">
        <li>Returns are accepted within 30 days from the date of delivery.</li>
        <li>The item must be in its original, unused condition with all packaging and documentation.</li>
        <li>Custom-made or engraved items are non-returnable unless faulty.</li>
        <li>Refunds will be processed once the returned item is inspected and approved by our quality team.</li>
        <li>Shipping costs for returns will be borne by the customer unless the item is faulty or damaged.</li>
      </ul>
      <p className="mt-4 text-gray-600">
        For initiating a return, please contact our support team at [Your Email] or call us at [Your Contact Number].
      </p>
    </div>
  );
};

export default ReturnPolicies;
