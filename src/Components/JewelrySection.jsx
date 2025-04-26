// import React from 'react';
// import girl from '../assest/shopimage/girl.png';

// const JewelrySection = () => {
//     return (
//         <>
//             <div className="section-gap"></div>
//             <div className="bg-teal-800">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     {/* Text Section */}
//                     <div className="text-white py-12 px-6 md:px-20 lg:px-32">
//                         <h1 className="text-3xl lg:text-4xl font-bold mb-6">
//                             Jewels – India’s Finest Lab Grown Diamond Jewellery Brand
//                         </h1>
//                         <p className="mb-4">
//                             Jewellery has always been a beloved accessory for women since it highlights their elegance and defines their personal style. It has changed from an accessory to an expression of character and principles. It now represents one's beliefs in this transformational path, appealing to modern women's desires for responsibility and beauty.
//                         </p>
//                         <p className="mb-4">
//                             Jewellery has been woven into the fabric of societies for millennia, serving as a sign of customs, occasions, and treasured memories. It has changed smoothly, embracing innovation while clinging to its inherent value. According to the proverb, "Diamonds are a girl’s best friend," and diamond jewellery has, in fact, long been a prized possession of women.
//                         </p>
//                         <p className="mb-4">
//                             With the introduction of lab grown diamonds in India, the industry for diamond jewellery has undergone significant change. In Chennai, this transformation finds its epitome in Avira Diamonds, India’s Finest Lab Grown Diamond destination.
//                         </p>
//                     </div>
//                     {/* Image Section with More Vertical Blank Space */}
//                     <div className="flex  justify-center items-center py-0 lg:py-12 bg-[#fff] lg:bg-transparent h-full md:justify-center relative px-0 md:px-20 lg:px-32">
//                         <div className="p-2 z-10 bg-tale-800 lg:border border-[#fff]">
//                             <img
//                                 src={girl}
//                                 alt="Jewelry Model"
//                                 className="rounded-lg z-20"
//                             />
//                         </div>
//                         <div className='absolute bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] h-full w-[40%]'></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default JewelrySection;


import React from 'react';
import girl from '../assest/shopimage/girl.png';

const JewelrySection = () => {
    return (
        <>
            {/* <div className="section-gap"></div> */}
            <div className="bg-teal-800">
                {/* Update: Use md:grid-cols-1 for screens 768px to 968px */}
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 items-center">
                    {/* Text Section */}
                    <div className="text-white py-12 px-6 md:px-20 lg:px-32">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                           Jewells – India’s Finest Lab Grown Diamond Jewellery Brand
                        </h1>
                        <p className="mb-4">
                            Jewellery has always been a beloved accessory for women since it highlights their elegance and defines their personal style. It has changed from an accessory to an expression of character and principles. It now represents one's beliefs in this transformational path, appealing to modern women's desires for responsibility and beauty.
                        </p>
                        <p className="mb-4">
                            Jewellery has been woven into the fabric of societies for millennia, serving as a sign of customs, occasions, and treasured memories. It has changed smoothly, embracing innovation while clinging to its inherent value. According to the proverb, "Diamonds are a girl’s best friend," and diamond jewellery has, in fact, long been a prized possession of women.
                        </p>
                        <p className="mb-4">
                            With the introduction of lab grown diamonds in India, the industry for diamond jewellery has undergone significant change. In Chennai, this transformation finds its epitome in Avira Diamonds, India’s Finest Lab Grown Diamond destination.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center items-center py-0 lg:py-12 md:py-0 bg-[#fff] lg:bg-transparent h-full md:justify-center relative px-0 lg:px-32">
                        <div className="p-2 z-10 bg-tale-800 lg:border border-[#fff] md:w-full lg:w-auto">
                            <img
                                src={girl}
                                alt="Jewelry Model"
                                className="rounded-lg z-20 md:w-full"
                            />
                        </div>
                        <div className='absolute bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] h-full w-[40%]'></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JewelrySection;
