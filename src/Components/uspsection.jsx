import React from 'react';
import Slider from "react-slick";
import restart from '../assest/USP/restart.png';  // Import image for 'Lifetime Exchange & Buyback'
import certified from '../assest/USP/certificate.png';  // Import image for 'Certified Jewellery'
import returnImg from '../assest/USP/return.png';  // Import image for '7 Days Return'
import shipping from '../assest/USP/shipping.png';  // Import image for 'Free Shipping'
import savings from '../assest/USP/dollaricon.png';  // Import image for 'Up to 90% Savings on diamonds'

const UspSection = () => {
    const uspItems = [
        // { imgSrc: restart, text: 'Lifetime Exchange & Buyback' },    
        { imgSrc: certified, text: 'Certified Jewellery' },
        { imgSrc: returnImg, text: '7 Days Return' },
        { imgSrc: shipping, text: 'Free Shipping' },
        { imgSrc: savings, text: 'Up to 90% Savings on diamonds' },
    ];

    const settings = {
        dots: true,  // Show round shape dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Default to 2 items per row
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,  // Hide next and previous arrows
        responsive: [
            {
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false
                },
            },
            {
                breakpoint: 1200,  // For tablet (up to 768px), show 3 items per row
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,  // For tablet (up to 768px), show 3 items per row
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 375,  // For mobile (320px - 375px), show 2 items per row
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,  // For small mobile (up to 320px), show 1 item per row
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
        <div className="section-gap"></div>
            <div className="mx-auto max-w-[110rem]">
                <h3 className='text-[22px] lg:text-[32px] text-[#323232] font-[500] text-center mb-[20px] lg:mb-[40px] inter'>Our Promise</h3>

                {/* Slick Carousel for mobile and tablet screens */}
                <div className="block 2xl:hidden responsive-usp">
                    <Slider {...settings} className="">  {/* Added padding to create space inside the container */}
                        {uspItems.map((item, index) => (
                            <div
                                key={index}
                                className="uspbox flex flex-col items-center text-center p-4 bg-[#f9f9f9] rounded-lg w-[calc(100%-10px)]  h-100"  // Added margin and adjusted width
                            >
                                <img src={item.imgSrc} alt={item.text} className="w-auto h-auto mx-auto" />
                                <p className="mt-3 text-gray-700 font-semibold inter text-[12px]">{item.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>


                {/* For larger screens, show all boxes in a row */}
                <div className="hidden 2xl:grid grid-cols-1 gap-6 p-4 pb-0 md:grid-cols-4">
                    {uspItems.map((item, index) => (
                        <div
                            key={index}
                            className="uspbox flex flex-col items-center text-center p-4 bg-white rounded-lg w-[18rem] lg:w-[26rem]
                                   lg:flex lg:flex-col lg:items-center lg:text-center lg:p-4 lg:bg-[#F9F9F9] lg:rounded-[8px] lg:h-[217px] lg:justify-center"
                        >
                            <img src={item.imgSrc} alt={item.text} className="w-auto h-auto mx-auto" />
                            <p className="mt-4 text-gray-700 font-semibold text-[20px]  inter">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UspSection;
