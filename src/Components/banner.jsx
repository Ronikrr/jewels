// src/components/Banner.js
import React from 'react';
import banner from '../assest/banner/New-Arrivals-5.jpg'
// import bannerresponsive from '../assest/banner/New-ArrivalsBanner-responsive.jpg'
import bannerresponsive from '../assest/banner/New-ArrivalsBanner-5-responsive.jpg'
import bannerline from '../assest/banner/Line.png'

const Banner = () => {
  return (
    <>
      {/* <div className='mx-auto hidden lg:flex max-w-[110rem] mb-3'>

        <img src={bannerline} className='hidden md:block' alt="" srcset="" />
      </div> */}

      <div className="relative">
        {/* Optional content inside banner */}
        <div className=" ">
          <img src={banner} className='hidden md:block w-[100%]' alt="" srcset="" />
          <img src={bannerresponsive} className='block md:hidden' alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Banner;