import React from 'react';

const ExchangeAndBuyBack = () => {
  return (
    <div className="mx-auto max-w-[110rem] p-8">
      <h1 className="text-xl font-bold text-gray-800 mb-6">Exchange & Buy Back Policies</h1>
      <p className="text-gray-600">
        At JewellsJewels, we understand the importance of customer satisfaction. That’s why we offer a convenient exchange and buy-back policy on all eligible jewelry items. Our policy ensures that you can exchange or return the product within 30 days of purchase under the following conditions:
      </p>
      <ol className="list-disc list-inside mt-4 text-gray-600">
        <li className='mb-3 ps-3'>1. Buyback and exchange is not applicable on loose diamonds, baguettes, tapered diamonds.</li>
        <li className='mb-3 ps-3'>2. Buyback and exchange is not applicable on polkis, pearls and colored stones.</li>
        <li className='mb-3 ps-3'>3. Original Invoice and certificate must be produced for buyback/exchange.</li>
        <li className='mb-3 ps-3'>4. Loss of certificate will result in additional charges of Rs. 2,000 or Rs. 800 per carat – whichever is higher.</li>
        <li className='mb-3 ps-3'>5. Jewelbox products bought from any place other than Jewelbox stores or Jewelbox website will not be eligible for buyback/exchange.</li>
        <li className='mb-3 ps-3'>6. In case of any discount given during the original purchase on the metal/diamonds/stones/making charges value, an equivalent amount will be deducted from the current market price on the date of buyback/exchange and then buyback/exchange value will be calculated.</li>
        <li className='mb-3 ps-3'>7. The e-Points/rewards/benefits used while placing an order will be deducted from the buyback/exchange value.</li>
        <li className='mb-3 ps-3'>8. Buyback of products are applicable for products that were purchased at a value of up to Rs. 4,99,999/-.</li>
        <li className='mb-3 ps-3'>9. In case the product was earlier purchased through EMI system, then we will deduct an amount equivalent to non-paid EMI in addition to the above-mentioned deductions.</li>
      </ol>
      <p className="mt-4 text-gray-600">
        For more details or to initiate an exchange or buy-back, please contact our customer service team at [Your Email].
      </p>
    </div>
  );
};

export default ExchangeAndBuyBack;
