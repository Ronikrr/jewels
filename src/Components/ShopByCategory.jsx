import React from 'react';
import seller1 from '../assest/bestseller/home-sop-cat-1.jpg';
import seller2 from '../assest/bestseller/home-sop-cat-2.jpg';
import seller3 from '../assest/bestseller/home-sop-cat-3.jpg';
import seller4 from '../assest/bestseller/home-sop-cat-4.jpg';

const ShopByCategory = () => {
  return (
    <>
    <div className="section-gap"></div>
    {/* // container mx-auto px-4 py-8 */}
      <div className=" mx-auto max-w-[110rem]">
        <h2 className="text-[22px] lg:text-[32px] text-[#323232] font-[500] text-center mb-[20px] lg:mb-[40px] inter">Shop by Category</h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5 px-3">
          {/* Left Large Image */}
          <div className="md:col-span-2 shopfirstimage">
            {/* lg:aspect-[2/4] */}
            <div className="relative aspect-[0] lg:aspect-[0]">
              {/* Adjust the aspect ratio here */}
              <img
                src={seller1}
                alt="Rings"
                className="w-full h-100 md:h-[382px] lg:h-[463px] object-cover"
              />
              <span className="absolute top-4 right-4 text-white font-bold text-lg">
                Rings
              </span>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="md:col-span-1 flex flex-col gap-5">
            {/* Right Top Image */}
            <div className="relative aspect-[3/2]">
              {/* Adjust the aspect ratio here */}
              <img
                src={seller2}
                alt="Bracelets"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 text-white font-bold text-lg">
                Bracelets
              </span>
            </div>

            {/* Right Bottom Images */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[1/1]">
                {/* Adjust the aspect ratio here */}
                <img
                  src={seller3}
                  alt="Earrings"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  Earrings
                </span>
              </div>
              <div className="relative aspect-[1/1]">
                {/* Adjust the aspect ratio here */}
                <img
                  src={seller4}
                  alt="Pendants"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  Pendants
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* responsive */}
        <div className="responsiveshopby grid md:hidden grid-cols-1 md:grid-cols-3 gap-5">

          {/* Right Side Images */}
          <div className="md:col-span-1 flex flex-col gap-7 mx-[16px]">




            <div className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[1/1]">
                {/* Adjust the aspect ratio here */}
                <img
                  src={seller1}
                  alt="Earrings"
                  className="w-full h-full object-cover"
                />
                <span className="ringshopby  absolute bottom-[-26px] left-[55px] text-black font-semibold text-md">
                  Rings
                </span>
              </div>
              <div className="relative aspect-[1/1]">
                {/* Adjust the aspect ratio here */}
                <img
                  src={seller2}
                  alt="Pendants"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-[-26px] left-[45px] text-black font-semibold text-md">
                  Bracelets
                </span>
              </div>
            </div>
            {/* Right Bottom Images */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[1/1]">
                {/* Adjust the aspect ratio here */}
                <img
                  src={seller3}
                  alt="Earrings"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-[-26px] left-[45px] text-black font-semibold text-md">
                  Earrings
                </span>
              </div>
              <div className="relative aspect-[1/1]">
                {/* Adjust the aspect ratio here */}
                <img
                  src={seller4}
                  alt="Pendants"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-[-26px] left-[45px] text-black font-semibold text-md">
                  Pendants
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-gap"></div>
    </>

  );
};

export default ShopByCategory;
