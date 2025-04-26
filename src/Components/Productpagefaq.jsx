import React, { useState } from "react";

const ProductPageFAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
        <div className="section-gap"></div>
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Side: Information Section */}
            <div className="flex-1 bg-green-800 text-white flex items-center justify-center p-10">
                <div>
                    <h2 className="text-2xl font-semibold text-center mb-4">A Closer Look</h2>
                    <p className="text-center">
                        Immerse yourself in the depths of our product and discover the
                        meticulous craftsmanship that goes into every detail.
                    </p>
                </div>
            </div>

            {/* Right Side: FAQ Section */}
            <div className="flex-1 bg-neutral-100 p-10">

                {/* FAQ Item 2: Item Details */}
                <div>
                    <button
                        className="w-full flex justify-between items-center text-left font-semibold text-[20px] py-4 border-b border-red-600 text-red-600"
                        onClick={() => toggleFaq(2)}
                    >
                        ITEM DETAILS {openFaq === 2 ? "-" : "+"}
                    </button>
                    {openFaq === 2 && (
                        <div className="py-4 text-gray-700">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border-b border-red-600 py-2">Metal</div>
                                <div className="border-b border-red-600 py-2">Platinum</div>

                                <div className="border-b border-red-600 py-2">Finish</div>
                                <div className="border-b border-red-600 py-2">High Polish</div>

                                <div className="border-b border-red-600 py-2">Width</div>
                                <div className="border-b border-red-600 py-2">2.5mm</div>

                                <div className="border-b border-red-600 py-2">Weight</div>
                                <div className="border-b border-red-600 py-2">5.5g</div>

                                <div className="border-b border-red-600 py-2">Height</div>
                                <div className="border-b border-red-600 py-2">1.8mm</div>
                            </div>
                        </div>
                    )}
                </div>


                {/* FAQ Item 2: Diamond Details */}
                {/* FAQ Item 1: Diamond Details */}
                <div>
                    <button
                        className="w-full text-left font-semibold py-4 border-b text-[20px] border-red-600 text-red-600"
                        onClick={() => toggleFaq(1)}
                    >
                        DIAMOND DETAILS {openFaq === 1 ? "-" : "+"}
                    </button>
                    {openFaq === 1 && (
                        <div className="py-4 text-gray-700">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border-b border-red-600 py-2">Stone Type</div>
                                <div className="border-b border-red-600 py-2">Diamond</div>

                                <div className="border-b border-red-600 py-2">Creation Method</div>
                                <div className="border-b border-red-600 py-2">Lab Grown</div>

                                <div className="border-b border-red-600 py-2">Shape</div>
                                <div className="border-b border-red-600 py-2">Round</div>

                                <div className="border-b border-red-600 py-2">Diamond Color</div>
                                <div className="border-b border-red-600 py-2">Near-Colorless (FG)</div>

                                <div className="border-b border-red-600 py-2">Clarity</div>
                                <div className="border-b border-red-600 py-2">VS2+</div>

                                <div className="border-b border-red-600 py-2">Count</div>
                                <div className="border-b border-red-600 py-2">116</div>

                                <div className="border-b border-red-600 py-2">Total Carat Weight</div>
                                <div className="border-b border-red-600 py-2">0.79</div>

                                <div className="border-b border-red-600 py-2">Setting</div>
                                <div className="border-b border-red-600 py-2">Prong</div>
                            </div>
                        </div>
                    )}
                </div>


                {/* FAQ Item 3: Side Diamond Details */}
                {/* FAQ Item 3: Side Diamond Details */}
                {/* FAQ Item 3: Side Diamond Details */}
                <div>
                    <button
                        className="w-full text-left font-semibold py-4 border-b text-[20px] border-red-600 text-red-600"
                        onClick={() => toggleFaq(3)}
                    >
                        SIDE DIAMOND DETAILS {openFaq === 3 ? "-" : "+"}
                    </button>
                    {openFaq === 3 && (
                        <div className="py-4 text-gray-700">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border-b border-red-600 py-2">Stone Type</div>
                                <div className="border-b border-red-600 py-2">Diamond</div>

                                <div className="border-b border-red-600 py-2">Creation Method</div>
                                <div className="border-b border-red-600 py-2">Lab Grown</div>

                                <div className="border-b border-red-600 py-2">Shape</div>
                                <div className="border-b border-red-600 py-2">Round</div>

                                <div className="border-b border-red-600 py-2">Diamond Color</div>
                                <div className="border-b border-red-600 py-2">Near-Colorless (FG)</div>

                                <div className="border-b border-red-600 py-2">Clarity</div>
                                <div className="border-b border-red-600 py-2">VS2+</div>

                                <div className="border-b border-red-600 py-2">Count</div>
                                <div className="border-b border-red-600 py-2">116</div>

                                <div className="border-b border-red-600 py-2">Total Carat Weight</div>
                                <div className="border-b border-red-600 py-2">0.79</div>

                                <div className="border-b border-red-600 py-2">Setting</div>
                                <div className="border-b border-red-600 py-2">Prong</div>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
        <div className="section-gap"></div>
        </>
    );
};

export default ProductPageFAQ;
