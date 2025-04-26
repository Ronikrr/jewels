import React, { useState } from "react";

const ItemDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="section-gap"></div>
      <div className="container mx-auto max-w-[110rem] px-4 grid lg:flex">
        {/* Right Side (Product Summary and Diamond Rate List) - 30% */}
        <div className="lg:w-[25%] pl-4 order-2 lg:order-1">
          <div className="bg-gray-100 p-14 rounded-md shadow-md mb-4">
            <h2 className="text-xl font-semibold text-center mb-4">Product Summary</h2>
            <div>
              <div className="flex justify-between flex-wrap  p-3">
                <p>Metal:</p>
                <p> <strong>$42.00</strong></p>
              </div>
              <div className="flex justify-between flex-wrap p-3">
                <p>Metal:</p>
                <p> <strong>$42.00</strong></p>
              </div>
              <div className="flex justify-between flex-wrap p-3">
                <p>Metal:</p>
                <p> <strong>$42.00</strong></p>
              </div>
              <div className="flex justify-between flex-wrap p-3">
                <p>Metal:</p>
                <p> <strong>$42.00</strong></p>
              </div>
              <div className="flex justify-between flex-wrap p-3">
                <p>Metal:</p>
                <p> <strong>$42.00</strong></p>
              </div>
              <div className="flex justify-between flex-wrap p-3">
                <p>Metal:</p>
                <p> <strong>$42.00</strong></p>
              </div>
              <div className="flex justify-between flex-wrap p-3">
                <p>Metal:</p>
                <p> <strong>$42.00</strong></p>
              </div>
              <p className="max-w-[380px] text-center mx-auto mt-5">This is approx costing, final value will be calculated and charged according to actual weight.</p>
              {/* <p>Style No: <strong>C009993</strong></p>
            <p>Detail: <strong>10 KT Yellow</strong></p>
            <p>Diamond Quality: <strong>VVS EF</strong></p>
            <p>Width: <strong>5 Mm</strong></p>
            <p>Metal Weight: <strong>6.60 G</strong></p>
            <p>Gross Weight: <strong>7.71 G</strong></p>
            <p>Diamond Weight: <strong>2.00 Ct</strong></p> */}
            </div>
          </div>

          {/* <div className="bg-gray-100 p-4 rounded-md shadow-md ">
          <h2 className="text-xl font-semibold mb-2 text-center">Diamond Rate List</h2>
          <div className="p-14 pt-5 pb-5">

            <div className="grid grid-cols-2 gap-4 justify-center mx-auto">
              <div>
                <label className="mb-2 block">Type</label>
                <select className="w-full p-2 border rounded">
                  <option>Natural</option>
                  <option>Lab Grown</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block">Shape</label>
                <select className="w-full p-2 border rounded">
                  <option>Round</option>
                  <option>Emerald</option>
                </select>
              </div>
            </div>
            <div className="max-w-[180px] mt-5 mx-auto">
              <label className="mb-2 block">Quality</label>
              <select className="w-full p-2 border rounded">
                <option>VVS EF</option>
                <option>VS GH</option>
              </select>
            </div>
            <button className="mx-auto flex mt-5 px-4 py-2 bg-[#16528f] text-white rounded">Download</button>
          </div>
        </div> */}
        </div>
        {/* Left Side (Accordion Section) - 70% */}
        <div className="lg:w-[70%] pr-4 order-1 lg:order-2">
          <div className="ms-3">

            {/* Accordion Item 1 */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full text-left p-4 font-semibold text-md bg-gray-200 rounded-md flex justify-between items-center"
              >
                Price Breakup
                {activeIndex === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              {activeIndex === 0 && (
                <div className="p-4 bg-white">
                  <div className="flex justify-between flex-wrap p-3">
                    <p>Metal:</p>
                    <p><strong>$42.00</strong></p>
                  </div>
                  {/* Add more items here */}
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full text-left p-4 font-semibold text-md bg-gray-200 rounded-md flex justify-between items-center"
              >
                Diamond Detail
                {activeIndex === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              {activeIndex === 1 && (
                <div className="p-4 bg-white">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between flex-wrap p-3">
                      <p>Metal:</p>
                      <p><strong>$42.00</strong></p>
                    </div>
                    <div className="flex justify-between flex-wrap p-3">
                      <p>Metal:</p>
                      <p><strong>$42.00</strong></p>
                    </div>
                    <div className="flex justify-between flex-wrap p-3">
                      <p>Metal:</p>
                      <p><strong>$42.00</strong></p>
                    </div>
                    <div className="flex justify-between flex-wrap p-3">
                      <p>Metal:</p>
                      <p><strong>$42.00</strong></p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full text-left p-4 font-semibold text-md bg-gray-200 rounded-md flex justify-between items-center"
              >
                Metal Details
                {activeIndex === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              {activeIndex === 2 && (
                <div className="p-4 bg-white">
                  <div className="flex justify-between flex-wrap p-3">
                    <p>Metal:</p>
                    <p><strong>$42.00</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 4 */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full text-left p-4 font-semibold text-md bg-gray-200 rounded-md flex justify-between items-center"
              >
                Making Charge
                {activeIndex === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              {activeIndex === 3 && (
                <div className="p-4 bg-white">
                  <div className="flex justify-between flex-wrap p-3">
                    <p>Metal:</p>
                    <p><strong>$42.00</strong></p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
