import React from 'react';
import Slider from 'react-slick'; // Import the slider component from react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importing images
import roundshap from '../assest/shopimage/round.avif';
import oval from '../assest/shopimage/oval.avif';
import Cushion from '../assest/shopimage/cushion.avif';
import Pear from '../assest/shopimage/pear.avif';
import Emerald from '../assest/shopimage/emerald.avif';
import Radiant from '../assest/shopimage/radiant.avif';
import Princess from '../assest/shopimage/princess.avif';
import Marquise from '../assest/shopimage/marquise.avif';
import Asscher from '../assest/shopimage/asscher.avif';
import Heart from '../assest/shopimage/heart.avif';
import ElongatedCushion from '../assest/shopimage/elongated-cushion.avif';

const diamondShapes = [
    { name: 'Round', image: roundshap },
    { name: 'Oval', image: oval },
    { name: 'Cushion', image: Cushion },
    { name: 'Pear', image: Pear },
    { name: 'Emerald', image: Emerald },
    { name: 'Radiant', image: Radiant },
    { name: 'Princess', image: Princess },
    { name: 'Marquise', image: Marquise },
    { name: 'Asscher', image: Asscher },
    { name: 'Heart', image: Heart },
    { name: 'Elongated Cushion', image: ElongatedCushion },
];

// Slider settings
const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <button className="slick-arrow slick-next">Next</button>,
    prevArrow: <button className="slick-arrow slick-prev">Prev</button>,
    responsive: [
        {
            breakpoint: 768, // Mobile screens
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200, // Large screens
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1400, // Large screens
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        },
    ],
};

const ShopByShape = () => {
    return (
        <>
            {/* <div className="section-gap"></div> */}
            <div className="ShopbyShape bg-[#16528f] text-white py-10">
                <div className="mx-auto max-w-[110rem] px-4">
                    <h2 className="text-[22px] lg:text-[32px] text-[#ffffff] font-[500] text-center mb-[20px] lg:mb-[30px] inter">Shop by Shape</h2>

                    {/* Grid layout for screens larger than 1200px */}
                    <div className="hidden xl:grid xl:grid-cols-11 gap-6 lg:gap-8">
                        {diamondShapes.map((shape, index) => (
                            <div key={index} className="ShopbyShapebox flex flex-col items-center p-0">
                                <img
                                    src={shape.image}
                                    alt={shape.name}
                                    className="w-24 h-24 object-contain mb-2"
                                />
                                <p className="text-center figtree text-[15px]">{shape.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Slider for screens smaller than 1200px */}
                    <div className="xl:hidden">
                        <Slider {...sliderSettings}>
                            {diamondShapes.map((shape, index) => (
                                <div key={index} className="ShopbyShapebox flex flex-col items-center p-0">
                                    <img
                                        src={shape.image}
                                        alt={shape.name}
                                        className="w-24 h-24 object-contain mb-2"
                                    />
                                    <p className="text-center figtree text-[15px]">{shape.name}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopByShape;
