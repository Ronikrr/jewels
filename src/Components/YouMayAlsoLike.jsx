import React, { useState } from "react";
import Slider from "react-slick";
import product1 from '../assest/Products/foryou1.jpg';
import productHover1 from '../assest/Products/foryou1hover.jpg';
import product2 from '../assest/Products/foryou2.jpg';
import productHover2 from '../assest/Products/foryou2hover.jpg';
import product3 from '../assest/Products/foryou3.jpg';
import productHover3 from '../assest/Products/foryou3hover.jpg';
import product4 from '../assest/Products/foryou4.jpg';
import productHover4 from '../assest/Products/foryou4hover.jpg';

const products = [
    {
        id: 1,
        name: "Shared Prong Round Eternity",
        price: "$595",
        image: product1,
        hoverImage: productHover1,
        rating: 5,
    },
    {
        id: 2,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product2,
        hoverImage: productHover2,
        rating: 4,
    },
    {
        id: 3,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product3,
        hoverImage: productHover3,
        rating: 5,
    },
    {
        id: 4,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product4,
        hoverImage: productHover4,
        rating: 5,
    },
    {
        id: 5,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product1,
        hoverImage: productHover1,
        rating: 5,
    },
    {
        id: 6,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product4,
        hoverImage: productHover4,
        rating: 5,
    },

    // Add more products with image and hoverImage
];

const PrevArrow = ({ onClick }) => (
    <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8.5 1.78662L2 8.28662L8.5 14.7866" stroke="#292929" strokeWidth="2" strokeLinecap="round" />
        </svg>
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M1.5 1.78662L8 8.28662L1.5 14.7866" stroke="#292929" strokeWidth="2" strokeLinecap="round" />
        </svg>
    </div>
);

const YouMayAlsoLike = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="section-gap"></div>
            <div className="mx-auto max-w-[110rem] px-8">
                {/* Title Section */}
                <h2 className="youmayalsolikeheading text-[22px] lg:text-[32px] text-[#323232] font-semibold bg-white text-center mb-[20px] lg:mb-[40px] inter relative">You May Also Like</h2>
               

                {/* Product Slider */}
                <Slider {...settings} className="relative">
                    {products.map((product) => (
                        <div key={product.id} className="px-2">
                            <div className="relative p-4 bg-white border border-[#16528f61] cursor-pointer group hover:border-[#16528F]">
                                {/* Heart Icon */}
                                <div className="absolute top-2 right-2 z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#16528F]">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
                                        />
                                    </svg>
                                </div>

                                {/* Product Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-auto w-full object-cover mb-4 transition-opacity duration-300 lg:group-hover:opacity-0"
                                />
                                <img
                                    src={product.hoverImage}
                                    alt={product.name}
                                    className="h-auto w-full object-cover mb-4 absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100"
                                />

                                {/* Product Info */}
                                <h3 className="text-[12px] lg:text-sm font-semibold mb-2 inter">{product.name}</h3>
                                <p className="text-sm font-medium text-gray-500 inter">{product.price}</p>

                                {/* Rating */}
                                <div className="flex space-x-1 mt-1">
                                    {Array.from({ length: product.rating }, (_, index) => (
                                        <span key={index} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="section-gap"></div>

        </>
    );
};

export default YouMayAlsoLike;
