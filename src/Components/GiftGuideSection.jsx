import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gift1 from '../assest/Gift/home_banner_170_05022024093952.avif';
import gift2 from '../assest/Gift/home_banner_172_05022024095112.avif';
import gift3 from '../assest/Gift/home_banner_173_05022024095325 (1).avif';
import gift4 from '../assest/Gift/home_banner_173_05022024095325.avif';
import gift5 from '../assest/Gift/home_banner_7_11012023124718.avif';

// Custom Previous Arrow component using SVG
const PrevArrow = ({ className, onClick, currentSlide }) => (
    <div
        className={`${className} absolute right-[60px] top-[20px] cursor-pointer z-10 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "" // Disable when at the first slide
        }`}
        onClick={currentSlide === 0 ? null : onClick} // Disable click if at the first slide
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
            />
        </svg>
    </div>
);

// Custom Next Arrow component using SVG
const NextArrow = ({ className, onClick, currentSlide, slideCount }) => (
    <div
        className={`${className} absolute right-[30px] top-[20px] cursor-pointer z-10 ${
            currentSlide === slideCount - 1 ? "opacity-50 cursor-not-allowed" : "" // Disable when at the last slide
        }`}
        onClick={currentSlide === slideCount - 1 ? null : onClick} // Disable click if at the last slide
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    </div>
);

const GiftGuideSlider = () => {
    // Image and text data
    const jewelryItems = [
        {
            image: gift1,
            title: "Elegant Necklace",
            description: "Shine with this elegant necklace, perfect for any occasion."
        },
        {
            image: gift2,
            title: "Stylish Bracelet",
            description: "A stylish bracelet that adds sophistication to your outfit."
        },
        {
            image: gift3,
            title: "Luxury Ring",
            description: "Feel royal with our luxurious ring collection."
        },
        {
            image: gift4,
            title: "Charming Earrings",
            description: "These earrings are a must-have for a classic look."
        },
        {
            image: gift5,
            title: "Modern Pendant",
            description: "A modern pendant that captures timeless beauty."
        },
    ];

    // State to track the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slick carousel settings
    const settings = {
        dots: false,           // No dots below the slider
        infinite: true,        // Enable infinite scroll
        speed: 1000,           // Increase speed to 1000ms for smoother sliding
        easing: "ease-in-out", // Smooth easing function for transitions
        autoplay: true,        // Enable auto sliding
        autoplaySpeed: 3000,   // Slide every 3 seconds for smoother experience
        slidesToShow: 4,       // Show 4 images in desktop
        slidesToScroll: 1,     // Scroll 1 image at a time
        nextArrow: <NextArrow currentSlide={currentSlide} slideCount={jewelryItems.length} />,  // Custom next arrow
        prevArrow: <PrevArrow currentSlide={currentSlide} />,  // Custom prev arrow
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Track the current slide
        responsive: [
            {
                breakpoint: 1024,  // Tablet and mobile views
                settings: {
                    slidesToShow: 3,            // Show 1 image in mobile view
                    slidesToScroll: 1,          // Scroll 1 image
                    centerMode: true,           // Center the current image
                    centerPadding: "20px",      // Padding to show parts of previous/next images
                    arrows: false,              // No arrows on mobile
                },
                breakpoint: 576,  // Tablet and mobile views
                settings: {
                    slidesToShow: 1,            // Show 1 image in mobile view
                    slidesToScroll: 1,          // Scroll 1 image
                    centerMode: true,           // Center the current image
                    centerPadding: "20px",      // Padding to show parts of previous/next images
                    arrows: false,              // No arrows on mobile
                },
            },
        ],
    };

    return (
        <>
            <div className="section-gap"></div>
            <div className="gift relative w-full mx-auto">
                {/* Title and Arrows */}
                <div className="relative mb-[40px] text-center flex justify-center items-center">
                    <h3 className="xt-[22px] lg:text-[32px] text-[#323232] font-[500] inter">
                        Gift Guide
                    </h3>
                    {/* Arrows will be aligned with the title */}
                    <PrevArrow currentSlide={currentSlide} />
                    <NextArrow currentSlide={currentSlide} slideCount={jewelryItems.length} />
                </div>

                {/* Slider */}
                <Slider {...settings}>
                    {jewelryItems.map((item, index) => (
                        <div key={index} className="px-0">
                            <div className="bg-transparent border border-[#16528F] overflow-hidden">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto mb-4"
                                />
                                {/* Text (title + description) */}
                                <h3 className="text-lg font-semibold text-gray-800 text-center  mb-4">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* View More Button */}
                <div className="flex justify-center mt-8 lg:mt-16">
                    <button className="bg-[#16528F] text-white py-2 px-12 hover:bg-gray-700 transition-colors">
                        SHOP GIFT GUIDE
                    </button>
                </div>
            </div>
        </>
    );
};

export default GiftGuideSlider;
