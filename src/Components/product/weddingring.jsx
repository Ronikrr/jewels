import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { product } from "../../data/product";
const filterOptions = {
    'Price Range': ['Under $100', '$100 - $500', '$500+'],
    'Type': ['Ring', 'Necklace', 'Bracelet'],
    'Style': ['Classic', 'Modern', 'Vintage'],
    'Metal': ['Gold', 'Silver', 'Platinum'],
    'Metal Color': ['Yellow', 'White', 'Rose'],
    'Metal Stamp': ['14K', '18K', '925'],
    'Stone': ['Diamond', 'Sapphire', 'Emerald'],
    'Stone Color': ['Clear', 'Blue', 'Green'],
    'Artisan': ['Handmade', 'Machine-made'],
    'Ring Size': ['6', '7', '8', '9']
};

const Weddingring = () => {
    const [Open, setOpen] = useState(false)
    const [selected, setSelected] = useState({});
    const toggle = (name) => {
        setOpen((prev) => ({ ...prev, [name]: !prev[name] }))
    }
    const toggleCheckbox = (filter, option) => {
        setSelected((prev) => {
            const current = prev[filter] || [];
            const updated = current.includes(option)
                ? current.filter(item => item !== option)
                : [...current, option];
            return { ...prev, [filter]: updated };
        });
    };
    return (
        <main className="flex">
            <div className="relative flex-1 max-w-full">
                <div className="container p-0 mx-auto">
                    <div className="flex flex-wrap ">
                        <h1 className="px-[40px] mt-[32px] text-[2rem] leading-[2.313rem] tracking-[0.51px] font-light text-center w-full">
                            Sterling Silver Rings
                        </h1>
                        <p className="px-5 mt-[8px] mb-[16px] md:mb-[32px] md:px-[40px] text-center text-[#1e1e1e] leading-[1.2] w-full ">
                            From .925 sterling silver stacking rings to silver statement
                            rings, find the perfect pieces.
                        </p>
                        <div className="py-[8px] overflow-hidden w-full px-[20px]">
                            <div className="flex flex-wrap m-[-12px]">
                                <div className="w-full mb-[16px] p-[12px] flex-shrink-0 bg-white ">
                                    <div className="flex flex-wrap items-center">
                                        <div className="w-6/12 lg:w-auto lg:max-w-full p-[12px]">
                                            <p className="text-[#1e1e1] text-[12px] mb-0 pr-[40px] ">
                                                1 Items
                                            </p>
                                        </div>
                                        <div className="ml-auto flex-0 p-[12px]">
                                            <select name="" className="px-4 py-2 border border-[#1c1c1c]" id="">
                                                <option value="Best seller">Best seller</option>
                                                <option value="Best seller">Best seller</option>
                                                <option value="Best seller">Best seller</option>
                                                <option value="Best seller">Best seller</option>
                                                <option value="Best seller">Best seller</option>
                                                <option value="Best seller">Best seller</option>
                                                <option value="Best seller">Best seller</option>
                                                <option value="Best seller">Best seller</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-[95%] mx-auto">
                            <div className="hidden w-3/12 lg:block">
                                <h1 className="text-[20px] capitalize font-normal text-start pb-[20px] " >filters</h1>
                                <div className="flex flex-col w-full">
                                    {Object.entries(filterOptions).map(([filter, options]) => (
                                        <div key={filter} className="py-2 border-t">
                                            <button
                                                onClick={() => toggle(filter)}
                                                className="flex items-center justify-between w-full px-2 text-[14px] text-[#000000de] py-2 font-medium text-left"
                                            >
                                                {filter.toUpperCase()}
                                                <span className="text-xs">&#9660;</span>
                                            </button>
                                            {Open[filter] && (
                                                <div className="mt-2 ml-2 space-y-1">
                                                    {options.map(option => (
                                                        <label key={option} className="flex items-center space-x-2 text-xs text-gray-600">
                                                            <input
                                                                type="checkbox"
                                                                className="text-[#1e1e1e]"
                                                                checked={(selected[filter] || []).includes(option)}
                                                                onChange={() => toggleCheckbox(filter, option)}
                                                            />
                                                            <span className="text-[16px]" >{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full lg:w-9/12 ">
                                <div className="flex flex-wrap w-full p-4 ">
                                    {product.map((item, index) => (
                                        <div className="w-6/12 sm:w-4/12 relative py-[12px] px-[5px]" key={index} >
                                            <div className="w-full h-full ">
                                                <div className="relative z-10 ">
                                                    <div className="bg-[#f7f7f7]">
                                                        <NavLink to={`/${item.category}/${item.link}`} className=" bg-gray-400 text-[#1e1e1e]   " >
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Weddingring;
