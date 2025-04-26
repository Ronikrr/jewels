import React, { useState } from "react";
import Slider from "react-slick";
import Select from 'react-select';
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
    {
        id: 7,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product4,
        hoverImage: productHover4,
        rating: 5,
    },
    {
        id: 8,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product1,
        hoverImage: productHover1,
        rating: 5,
    },
    {
        id: 9,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product4,
        hoverImage: productHover4,
        rating: 5,
    },
    {
        id: 10,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product4,
        hoverImage: productHover4,
        rating: 5,
    },
    {
        id: 11,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product1,
        hoverImage: productHover1,
        rating: 5,
    },
    {
        id: 12,
        name: "Graduated Round Side Stone",
        price: "$1,695",
        image: product4,
        hoverImage: productHover4,
        rating: 5,
    },

    // Add more products with image and hoverImage
];

// Sample options for the filters
const metalOptions = [
    { value: 'platinum', label: 'Platinum' },
    { value: 'gold', label: 'Gold' },
    { value: 'white-gold', label: 'White Gold' },
];

const styleOptions = [
    { value: 'solitaire', label: 'Solitaire' },
    { value: 'vintage', label: 'Vintage' },
    { value: 'halo', label: 'Halo' },
];

const caratOptions = [
    { value: '0.5', label: '0.5 Carat' },
    { value: '1.0', label: '1.0 Carat' },
    { value: '2.0', label: '2.0 Carat' },
];

const priceOptions = [
    { value: 'under-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1000' },
    { value: '1000-2000', label: '$1000 - $2000' },
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

const ProductCard = () => {
    const [selectedMetal, setSelectedMetal] = useState(null);
    const [selectedStyle, setSelectedStyle] = useState(null);
    const [selectedCarat, setSelectedCarat] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handleFilterChange = (setFilter) => (selectedOption) => {
        setFilter(selectedOption);
    };

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
            {/* <div className="section-gap"></div> */}
            <div className="mx-auto max-w-[110rem] px-10 py-8">
                <h2 className="text-xl font-semibold mb-6">Filter by</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Metal Filter */}
                    <div>
                        <label className="block text-gray-700 mb-2">Metal</label>
                        <Select
                            value={selectedMetal}
                            onChange={handleFilterChange(setSelectedMetal)}
                            options={metalOptions}
                            placeholder="Select Metal"
                            className="text-black z-20"
                        />
                    </div>

                    {/* Style Filter */}
                    <div>
                        <label className="block text-gray-700 mb-2">Style</label>
                        <Select
                            value={selectedStyle}
                            onChange={handleFilterChange(setSelectedStyle)}
                            options={styleOptions}
                            placeholder="Select Style"
                            className="text-black z-20"
                        />
                    </div>

                    {/* Carat Filter */}
                    <div>
                        <label className="block text-gray-700 mb-2">Carat</label>
                        <Select
                            value={selectedCarat}
                            onChange={handleFilterChange(setSelectedCarat)}
                            options={caratOptions}
                            placeholder="Select Carat"
                            className="text-black z-20 "
                        />
                    </div>

                    {/* Price Filter */}
                    <div>
                        <label className="block text-gray-700 mb-2">Price</label>
                        <Select
                            value={selectedPrice}
                            onChange={handleFilterChange(setSelectedPrice)}
                            options={priceOptions}
                            placeholder="Select Price"
                            className="text-black z-20"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-[110rem] px-8">
                {/* Product Slider */}
                <div className="grid grid-cols-5 gap-4 justify-center mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="px-2">
                            <div className="relative p-4 bg-white border border-[#16528f61] cursor-pointer group hover:border-[#16528F]">
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

                                <h3 className="text-[12px] lg:text-sm font-semibold mb-2 inter">{product.name}</h3>
                                <p className="text-sm font-medium text-gray-500 inter">{product.price}</p>

                                <div className="flex space-x-1 mt-1">
                                    {Array.from({ length: product.rating }, (_, index) => (
                                        <span key={index} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-gap"></div>

        </>
    );
};

export default ProductCard;
