import React, { useState } from "react";
import {  NavLink, useParams } from "react-router-dom";

import img from "../../assest/product/r7125cry7_a1.webp";
import img2 from "../../assest/product/view/r7125cry7_a2 (1).webp";
import img3 from "../../assest/product/view/r7125cry7_a4.webp";
import img4 from "../../assest/product/r7125cry7_a5.webp";
import img5 from "../../assest/product/r7125cry7_a19.webp";
import img6 from "../../assest/product/view/r7125cry7_a20.webp";
import img7 from "../../assest/product/view/low_resolution.jpg";
import { MdStar } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaAngleDown, FaRegHeart } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import {product} from '../../data/product' 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const products = [
    {
        id: 1,
        src: [img, img2, img3, img4, img5, img6, img7],

        review: 20,
        title: "Cooling Effects Ring, Blue ",
        link: "Cooling-Effects-Ring-Blue",
        rs: "40",
    },
    {
        id: 2,
        src: [img, img2, img3, img4, img5, img6, img7],
        review: 20,
        title: "Cooling Effects Ring, Blue ",
        link: "Cooling-Effects-Ring-Blue",
        rs: "40",
    },
    {
        id: 3,
        src: [img, img2, img3, img4, img5, img6, img7],

        review: 20,
        title: "Cooling Effects Ring, Blue ",
        link: "Cooling-Effects-Ring-Blue",
        rs: "40",
    },
    {
        id: 4,
        src: [img, img2, img3, img4, img5, img6, img7],

        review: 20,
        title: "Cooling Effects Ring, Blue ",
        rs: "40",
    },
    {
        id: 5,
        src: [img, img2, img3, img4, img5, img6, img7],

        review: 20,
        title: "Cooling Effects Ring, Blue ",
        link: "Cooling-Effects-Ring-Blue",
        rs: "40",
    },
    {
        id: 6,
        src: [img, img2, img3, img4, img5, img6, img7],

        review: 20,
        title: "Cooling Effects Ring, Blue ",
        link: "Cooling-Effects-Ring-Blue",
        rs: "40",
    },
    {
        id: 7,
        src: [img, img2, img3, img4, img5, img6, img7],

        review: 20,
        title: "Cooling Effects Ring, Blue ",
        link: "Cooling-Effects-Ring-Blue",
        rs: "40",
    },
];
const Productview = () => {
    const { link } = useParams();
    const [size, setSize] = useState(10);
    const [quantity, setQuantity] = useState(1);
    const [Open, setOpen] = useState(false);

    const dropdown = () => {
        setOpen(!Open);
    };

    const sizes = [5, 6, 7, 8, 9, 10, 11];

    // Match product by title (case-insensitive)
    const selectedProduct = product.find(
        (p) =>
            p.link && p.link.toLowerCase() === decodeURIComponent(link).toLowerCase()
    );

    if (!selectedProduct) {
        return <div className="py-10 text-center">Product not found</div>;
    }

    return (
        <div className="view lato">
            <div className="py-[48px] p-0 lg:px-[20px] flex container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 p-[12px] h-[80vh] overflow-y-auto scrollbar-hide">
                        <div className="bg-[#f7f7f7]">
                            <div className="flex flex-col space-y-2">
                                {selectedProduct.src.map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`Product view ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 p-[12px] lg:ml-[8.33%] ">
                        <div className="lg:sticky lg:top-[48px]  ">
                            <h2 className="text-[24px] font-semibold">
                                {selectedProduct.title}
                            </h2>
                            <div className="flex gap-2 mb-[20px] items-center">
                                <div className="flex flex-row">
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                </div>
                                <p className="text-[11.08px] text-gray-600 mt-1">
                                    {selectedProduct.review} reviews
                                </p>
                            </div>
                            <p className="text-[19.08px] mt-2">$ {selectedProduct.rs} USD</p>
                            <p className="text-sm text-gray-600">
                                Starting at $22 every 2 weeks with{" "}
                                <span className="font-semibold">affirm</span>.{" "}
                                <NavLink to="" className="underline">
                                    Learn more
                                </NavLink>{" "}
                            </p>
                            <div className="mt-3 text-sm font-semibold text-blue-700">
                                <span className="border-r border-[#1e1e1e] pe-4">IN STOCK</span>{" "}
                                <NavLink to="#" className="ml-4 text-[#1e1e1e] underline">
                                    Size Chart
                                </NavLink>
                            </div>
                            <div className="pb-4 mt-4 border-b border-gray-100">
                                <p className="mb-1 text-sm text-gray-800">SIZE: {size}</p>
                                <div className="flex gap-4">
                                    {selectedProduct.size.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`w-7 h-7 border  ${size === s
                                                ? "border border-gray-900 text-[#1e1e1e]"
                                                : "hover:bg-gray-100"
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center justify-between w-20 px-3 py-1 rounded">
                                    <button
                                        className="text-[20px] hover:text-blue-600 "
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <IoIosRemoveCircleOutline />{" "}
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        className="text-[20px] hover:text-blue-600 "
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <IoIosAddCircleOutline />{" "}
                                    </button>
                                </div>

                                <NavLink to={`/contactus/${selectedProduct.link}`} state={{ size: size }} className="px-8 py-3 text-lg font-semibold text-center text-white capitalize bg-blue-900 rounded">
                                    inqury now
                                </NavLink>

                                <button className="text-xl text-blue-900">
                                    {" "}
                                    <IoMdHeartEmpty />{" "}
                                </button>
                            </div>

                            <div className="mt-6 text-sm ">
                                <AccordionSection
                                    title={"Description"}
                                    content={
                                        "This ring features a 12mm medium blue crystal that shines brilliantly on your finger. It creates an icy sparkle that adds a playful touch of elegance to any outfit. Pair it with the Cooling Effects Drop Earrings and Cooling Effects Pendant Necklace. The piece comes with a “.925” sterling silver stamp as a symbol of guaranteed product quality."
                                    }
                                />
                                <AccordionSection
                                    title={"Specifications"}
                                    content={
                                        <>
                                            <ul>

                                                <li className="text-[16px] before:content-['•'] before:text-[20px]   " ><strong className="ml-2"  >Style:</strong> #R7184CZ10</li>
                                                <li className="text-[16px] before:content-['•'] before:text-[20px]   " ><strong className="ml-2"  >Material:</strong> .925 Sterling silver</li>
                                                <li className="text-[16px] before:content-['•'] before:text-[20px]   " ><strong className="ml-2"  >Feature:</strong> 8mm cubic zirconia</li>
                                                <li className="text-[16px] before:content-['•'] before:text-[20px]   " ><strong className="ml-2"  >Ring Face Width:</strong> 9/16 inches</li>
                                                <li className="text-[16px] before:content-['•'] before:text-[20px]   " ><strong className="ml-2"  >Ring Shank Width:</strong> 3/16 inches</li>
                                                <li className="text-[16px] before:content-['•'] before:text-[20px]   " ><strong className="ml-2"  >Quality Stamp:</strong> .925 sterling silver</li>
                                            </ul>
                                        </>
                                    }
                                />
                                <AccordionSection
                                    title={" Shipping & Returns "}
                                    content={
                                        <>

                                            <h1 className="mb-2  text-[16px] text-[#000000de] " > <strong>Returnable Items</strong> </h1>

                                            <p className="mb-2" > We offer a 60-day satisfaction guaranteed return policy for all jewelry in its original condition with proof of purchase.</p>

                                            <h1 className="mb-2  text-[16px] text-[#000000de]" > <strong>Shipping</strong>  </h1>

                                            <p className="mb-2" > Free shipping is available for all orders $50+, with the option to upgrade to expedited shipping.</p>


                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-[90px] container mx-auto  ">
                <h1 className="text-center text-[26px] mb-5 " >Discover More Prettiness</h1>
                <div className="w-full lg:w-12/12 ">
                    <div className="flex flex-wrap w-full p-4 ">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={5}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                480: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                                1280: {
                                    slidesPerView: 5,
                                },
                            }}
                            navigation
                            // pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {product.map((item, index) => (
                                <SwiperSlide className="w-6/12 sm:w-4/12 relative py-[12px] px-[5px]" key={index} >
                                    <div className="w-full h-full ">
                                        <div className="relative z-10 ">
                                            <div className="bg-[#f7f7f7]">
                                                <NavLink to={`/product/${item.link}`} className=" bg-gray-400 text-[#1e1e1e]   " >
                                                    <div className="relative cursor-pointer group">
                                                        <img src={item.src[0]} className="object-cover w-full h-full transition-opacity duration-500 opacity-100 aspect-auto group-hover:opacity-0 " alt={item.title} />
                                                        <img src={item.src[4]} className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-500 opacity-0 aspect-square group-hover:opacity-100" alt={item.title} />
                                                        <div className="w-[50px] absolute opacity-0 group-hover:opacity-100 top-2 transition-opacity duration-500  right-2 h-[50px] bg-gray-50/50  text-blue-600 rounded-full flex justify-center items-center text-[25px]">
                                                            <FaRegHeart />
                                                        </div>
                                                        <div className="w-full absolute opacity-0 group-hover:opacity-100 bottom-1 transition-opacity duration-500   h-[50px] bg-gray-50/50  text-blue-600 border-1 border-transparent flex justify-center items-center text-[25px]">
                                                            <p>Quick view</p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="relative w-full pt-[10px] ">
                                                <div className="flex flex-row items-center gap-2">
                                                    <div className="flex flex-row">
                                                        <MdStar />
                                                        <MdStar />
                                                        <MdStar />
                                                        <MdStar />
                                                        <MdStar />
                                                    </div>
                                                    <div className="">
                                                        <p className="text-[11.08px]" >{item.review} review</p>
                                                    </div>
                                                </div>
                                                <p className="my-1"> {item.title} </p>
                                                <p className="my-1">  ${item.rs} USD  </p>

                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Productview;
const AccordionSection = ({ title, content }) => {
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);
    return (
        <div className="border-t border-black">
            <div
                className="flex items-center justify-between px-2 py-3 cursor-pointer"
                onClick={toggle}
                role="button"
                aria-expanded={isOpen}
            >
                <span className="text-[14px] font-bold">{title}</span>
                <span className="text-lg">
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </span>
            </div>
            {isOpen && (
                <div className="tracking-[0.16px] mb-5 px-2 transition-all duration-300 ease-in-out">
                    <p className="text-[14px] text-gray-700 leading-relaxed">{content}</p>
                </div>
            )}
        </div>
    );
};

