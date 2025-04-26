"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    MapPinIcon,
    PhoneIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    ShoppingCartIcon,
    UserIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { Link, NavLink } from "react-router-dom";
import { product } from "../data/product";

const filtercatagoury = [...new Set(product.map((item) => item.category))]

const navigation = [
    { name: "Rings", href: "rings", },
    { name: "Jewelry", href: "jewelry" },
    { name: "Diamonds", href: "diamonds" },
    { name: "Truly Custom", href: "custom" },
    { name: "Collections", href: "collection" },
    { name: "Gemstones Jewelry", href: "#" },
    { name: "Education", href: "#" },
];


const countryList = [
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
    { code: "jp", name: "Japan" },
    // Add more countries as needed
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("us");
    // State for both dropdowns
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenuser, setDropdownOpenuser] = useState(false);

    // Toggle function for the first dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle the current dropdown
        setDropdownOpenuser(false); // Close the other dropdown
    };

    // Toggle function for the user dropdown
    const toggleDropdownuser = () => {
        setDropdownOpenuser(!dropdownOpenuser); // Toggle the current dropdown
        setDropdownOpen(false); // Close the other dropdown
    };

    const selectCountry = (code) => {
        setSelectedCountry(code);
        setDropdownOpen(false); // Close dropdown after selection
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    // Sticky header state
    const [isSticky, setIsSticky] = useState(false);

    // Scroll event listener to toggle sticky class
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleWishlistClick = () => {
        // Redirect to the wishlist page
        window.location.href = "/wishlist"; // Change this to your actual wishlist page route
    };

    const handleAddtocartClick = () => {
        // Redirect to the wishlist page
        window.location.href = "/addtocart"; // Change this to your actual wishlist page route
    };

    const handleCreateAccountClick = () => {
        // Redirect to the wishlist page
        window.location.href = "/create-account"; // Change this to your actual wishlist page route
    };
   

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const openSearch = () => {
        setIsSearchOpen(true);
    };

    const closeSearch = () => {
        setIsSearchOpen(false);
    };

    return (
        <header
            className={`bg-[#fdf5e6] border-b figtree ${isSticky ? "sticky top-0 z-50 shadow-lg" : "relative"}`}
        >
            <nav
                aria-label="Global"
                className="mx-auto hidden lg:flex w-full  items-center justify-between p-3 lg:px-7 xl:px-7 border-b border-[#16528F]"
            >
                {/* Left Side - Location and Contact */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <MapPinIcon className="w-5 h-5 mr-1 text-gray-700" />
                        <span className="text-gray-700 text-[14px] xl:text-[16px] uppercase ms-2 font-[500] figtree">
                            Location
                        </span>
                    </div>
                    <Link to="/contactus" className="flex items-center">
                        <PhoneIcon className="w-5 h-5 mr-1 text-gray-700 ms-4" />
                        <span className="text-gray-700 text-[14px] xl:text-[16px] uppercase ms-2 font-[500] figtree">
                            Contact Us
                        </span>
                    </Link>
                </div>

                {/* Center - Logo */}
                <Link
                    to="#"
                    className="-m-1.5 p-1.5 relative left-[10px] xl:left-[80px] mainlogo"
                >
                    <h1 className="uppercase text-[20px] md:text-[20px] xl:text-[35px] font-bold tracking-[7px] text-[#16528F] Organum">
                        Jewels
                    </h1>
                    {/* <img alt="" src={logo} className="w-auto h-40" /> */}
                </Link>

                {/* Right Side - Search, Icons */}
                <div className="flex items-center space-x-6">
                    {/* Search Bar */}
                    <div className="relative border-b border-gray-400 w-[150px] xl:w-[230px]">
                        <input
                            type="text"
                            className="border-none py-1 pl-0 pr-0 text-sm focus:outline-none w-[150px] xl:w-[230px] bg-transparent"
                            placeholder="Search..."
                        />
                        {/* <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-500 top-1 left-2" /> */}
                    </div>

                    {/* <MagnifyingGlassIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" /> */}
                    <div>
                        {/* Search Icon */}
                        <MagnifyingGlassIcon
                            className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black"
                            onClick={openSearch}
                        />

                        {/* Off-Canvas Search */}
                        {isSearchOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80">
                                <div className="relative w-full max-w-lg p-6 mx-4 bg-white rounded-lg shadow-lg">
                                    {/* Close Button */}
                                    <button
                                        className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
                                        onClick={closeSearch}
                                    >
                                        ✕
                                    </button>

                                    {/* Search Input */}
                                    <div className="flex flex-col items-center">
                                        <h2 className="mb-4 text-lg font-semibold text-gray-700">
                                            Search
                                        </h2>
                                        <input
                                            type="text"
                                            placeholder="Type to search..."
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Icons - Heart, Cart, User */}
                    <div className="relative ml-3" style={{ marginLeft: "15px" }}>
                        <HeartIcon
                            className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black"
                            onClick={handleWishlistClick}
                        />
                        <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-1 -right-2">
                            0
                        </span>
                    </div>
                    <ShoppingCartIcon
                        className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black"
                        onClick={handleAddtocartClick}
                    />

                    {/* <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" /> */}
                    <UserIcon
                        onClick={toggleDropdownuser}
                        className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black"
                    />

                    {/* Dropdown content */}
                    <div
                        className={`absolute right-[20px] top-[60px] mt-2 w-72 bg-white border border-gray-300 shadow-lg rounded-md p-6 z-10 transition-all duration-300 ease-in-out overflow-hidden ${dropdownOpenuser ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <p className="text-sm text-gray-600">Don t have an account?</p>

                        <button
                            className="w-full bg-[#16528f] text-white rounded-md py-2 mt-2 hover:bg-blue-700"
                            onClick={handleCreateAccountClick}
                        >
                            Create Account
                        </button>

                        <h2 className="mt-2 text-sm font-semibold">
                            Sign In to Your Account
                        </h2>

                        {/* Email Input */}
                        <label className="block mt-4 text-sm font-medium text-gray-700">
                            Email *
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />

                        {/* Password Input */}
                        <label className="block mt-4 text-sm font-medium text-gray-700">
                            Password *
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />

                        <div className="flex justify-between mt-2 underline">
                            <NavLink to="#" className="text-sm text-blue-600 hover:underline">
                                Forgot Your Password?
                            </NavLink>
                        </div>

                        {/* Sign In Button */}
                        <button className="w-full bg-[#16528f] text-white rounded-md py-2 mt-4 hover:bg-blue-700">
                            Sign In
                        </button>

                        <div className="flex items-center justify-center mt-4">
                            <span className="text-sm text-gray-500">or sign in with</span>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex justify-center mt-4">
                            <button className="py-2 me-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={30}
                                    height={30}
                                    x={0}
                                    y={0}
                                    viewBox="0 0 512 512"
                                    style={{ enableBackground: "new 0 0 512 512" }}
                                    xmlSpace="preserve"
                                    className=""
                                >
                                    <g>
                                        <path
                                            d="M448 0H64C28.704 0 0 28.704 0 64v384c0 35.296 28.704 64 64 64h384c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z"
                                            style={{}}
                                            fill="#1976d2"
                                            data-original="#1976d2"
                                            className=""
                                        />
                                        <path
                                            d="M432 256h-80v-64c0-17.664 14.336-16 32-16h32V96h-64c-53.024 0-96 42.976-96 96v64h-64v80h64v176h96V336h48l32-80z"
                                            style={{}}
                                            fill="#fafafa"
                                            data-original="#fafafa"
                                        />
                                    </g>
                                </svg>
                            </button>
                            <button className="py-2 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={30}
                                    height={30}
                                    x={0}
                                    y={0}
                                    viewBox="0 0 512 512"
                                    style={{ enableBackground: "new 0 0 512 512" }}
                                    xmlSpace="preserve"
                                    className=""
                                >
                                    <g>
                                        <path
                                            d="m492.668 211.489-208.84-.01c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z"
                                            style={{}}
                                            fill="#167ee6"
                                            data-original="#167ee6"
                                        />
                                        <path
                                            d="M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z"
                                            style={{}}
                                            fill="#12b347"
                                            data-original="#12b347"
                                        />
                                        <path
                                            d="M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z"
                                            style={{}}
                                            fill="#0f993e"
                                            data-original="#0f993e"
                                        />
                                        <path
                                            d="M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z"
                                            style={{}}
                                            fill="#ffd500"
                                            data-original="#ffd500"
                                        />
                                        <path
                                            d="M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z"
                                            style={{}}
                                            fill="#ff4b26"
                                            data-original="#ff4b26"
                                        />
                                        <path
                                            d="M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z"
                                            style={{}}
                                            fill="#d93f21"
                                            data-original="#d93f21"
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Country Flag Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center space-x-2"
                        >
                            <img
                                src={`https://flagcdn.com/w20/${selectedCountry}.png`}
                                alt="Country Flag"
                                className="object-cover w-5 h-4"
                            />
                            <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-[30px] right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-40 z-10">
                                {countryList.map((country) => (
                                    <button
                                        key={country.code}
                                        onClick={() => selectCountry(country.code)}
                                        className="flex items-center w-full px-2 py-1 hover:bg-gray-100"
                                    >
                                        <img
                                            src={`https://flagcdn.com/w20/${country.code}.png`}
                                            alt={country.name}
                                            className="object-cover w-6 h-4"
                                        />
                                        <span className="ml-2 text-sm">{country.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Bottom Menu for Desktop */}
            {/* <div className="mx-auto hidden lg:flex  figtree  justify-between space-x-6 bg-[#fdf5e6] py-5 max-w-[110rem] lg:px-2">
                {navigation.map((item) => (
                    <NavLink key={item.name} href={item.href} className="figtree font-[500] uppercase leading-6 text-[14px] xl:text-[16px] text-gray-900 hover:text-gray-700">
                        {item.name}
                    </NavLink>
                ))}
            </div> */}
            <div className="mx-auto w-full  hidden lg:flex justify-between space-x-6 bg-[#fdf5e6] py-5  lg:px-7">
                {filtercatagoury.map((item) => (
                    <div key={item.name} className="relative">
                        {item ? (
                            <div>
                                <NavLink
                                    // onClick={handleDropdownToggle}
                                    to={`/${item}`}
                                    className="font-[500] uppercase leading-6 text-[14px] xl:text-[16px] text-gray-900 hover:text-gray-700"
                                >
                                    {item}
                                </NavLink>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute left-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                                        onMouseLeave={closeDropdown}
                                    >
                                        {item.dropdown.map((dropdownItem) => (
                                            <NavLink
                                                key={dropdownItem.name}
                                                to={dropdownItem.href}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                                            >
                                                {dropdownItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                                <NavLink
                                    to={`/${item.href}`}
                                className="font-[500] uppercase leading-6 text-[14px] xl:text-[16px] text-gray-900 hover:text-gray-700"
                            >
                                {item.name}
                                </NavLink>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
                <div className="flex items-center justify-between p-4 border-t border-gray-200">
                    <NavLink to="#" className="-m-1.5 p-1.5">
                        <h1 className="uppercase text-[16px] lg:text-[35px] font-bold text-[#16528F] Organum">
                            JewellsJewels
                        </h1>
                    </NavLink>
                    <div className="flex items-center space-x-4">
                        <HeartIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
                        <ShoppingCartIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
                        {/* <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" /> */}
                        <UserIcon
                            onClick={toggleDropdownuser}
                            className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black"
                        />

                        {/* Dropdown content */}
                        <div
                            className={`absolute right-[15px] top-[80px] mt-2 w-72 bg-white border border-gray-300 shadow-lg rounded-md p-6 z-10 transition-all duration-300 ease-in-out overflow-hidden ${dropdownOpenuser ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <p className="text-sm text-gray-600">Dont have an account?</p>

                            <button
                                className="w-full bg-[#16528f] text-white rounded-md py-2 mt-2 hover:bg-blue-700"
                                onClick={handleCreateAccountClick}
                            >
                                Create Account
                            </button>

                            <h2 className="mt-2 text-sm font-semibold">
                                Sign In to Your Account
                            </h2>

                            {/* Email Input */}
                            <label className="block mt-4 text-sm font-medium text-gray-700">
                                Email *
                            </label>
                            <input
                                type="email"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />

                            {/* Password Input */}
                            <label className="block mt-4 text-sm font-medium text-gray-700">
                                Password *
                            </label>
                            <input
                                type="password"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />

                            <div className="flex justify-between mt-2 underline">
                                <NavLink
                                    to="#"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Forgot Your Password?
                                </NavLink>
                            </div>

                            {/* Sign In Button */}
                            <button className="w-full bg-[#16528f] text-white rounded-md py-2 mt-4 hover:bg-blue-700">
                                Sign In
                            </button>

                            <div className="flex items-center justify-center mt-4">
                                <span className="text-sm text-gray-500">or sign in with</span>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="flex justify-center mt-4">
                                <button className="py-2 me-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={30}
                                        height={30}
                                        x={0}
                                        y={0}
                                        viewBox="0 0 512 512"
                                        style={{ enableBackground: "new 0 0 512 512" }}
                                        xmlSpace="preserve"
                                        className=""
                                    >
                                        <g>
                                            <path
                                                d="M448 0H64C28.704 0 0 28.704 0 64v384c0 35.296 28.704 64 64 64h384c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z"
                                                style={{}}
                                                fill="#1976d2"
                                                data-original="#1976d2"
                                                className=""
                                            />
                                            <path
                                                d="M432 256h-80v-64c0-17.664 14.336-16 32-16h32V96h-64c-53.024 0-96 42.976-96 96v64h-64v80h64v176h96V336h48l32-80z"
                                                style={{}}
                                                fill="#fafafa"
                                                data-original="#fafafa"
                                            />
                                        </g>
                                    </svg>
                                </button>
                                <button className="py-2 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={30}
                                        height={30}
                                        x={0}
                                        y={0}
                                        viewBox="0 0 512 512"
                                        style={{ enableBackground: "new 0 0 512 512" }}
                                        xmlSpace="preserve"
                                        className=""
                                    >
                                        <g>
                                            <path
                                                d="m492.668 211.489-208.84-.01c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z"
                                                style={{}}
                                                fill="#167ee6"
                                                data-original="#167ee6"
                                            />
                                            <path
                                                d="M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z"
                                                style={{}}
                                                fill="#12b347"
                                                data-original="#12b347"
                                            />
                                            <path
                                                d="M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z"
                                                style={{}}
                                                fill="#0f993e"
                                                data-original="#0f993e"
                                            />
                                            <path
                                                d="M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z"
                                                style={{}}
                                                fill="#ffd500"
                                                data-original="#ffd500"
                                            />
                                            <path
                                                d="M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z"
                                                style={{}}
                                                fill="#ff4b26"
                                                data-original="#ff4b26"
                                            />
                                            <path
                                                d="M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z"
                                                style={{}}
                                                fill="#d93f21"
                                                data-original="#d93f21"
                                            />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <button onClick={() => setMobileMenuOpen(true)}>
                            <Bars3Icon className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 py-2 border-t border-gray-200">
                    <div className="relative bg-white border border-gray-200 rounded-md">
                        <input
                            type="text"
                            className="mobile-search border-none py-1 pl-2 pr-0 text-sm focus:outline-none bg-white w-[220px] sm:w-[285px]"
                            placeholder="Search..."
                        />
                        <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-500 top-1 right-2" />
                    </div>
                    <div className="relative z-20">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center space-x-2"
                        >
                            <img
                                src={`https://flagcdn.com/w20/${selectedCountry}.png`}
                                alt="Country Flag"
                                className="object-cover w-5 h-4"
                            />
                            <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 z-10 w-40 mt-2 bg-white border border-gray-300 rounded-md shadow-lg top-full">
                                {countryList.map((country) => (
                                    <button
                                        key={country.code}
                                        onClick={() => selectCountry(country.code)}
                                        className="flex items-center w-full px-2 py-1 hover:bg-gray-100"
                                    >
                                        <img
                                            src={`https://flagcdn.com/w20/${country.code}.png`}
                                            alt={country.name}
                                            className="object-cover w-6 h-4"
                                        />
                                        <span className="ml-2 text-sm">{country.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Toggle Menu */}
                    <Dialog
                        Dialog
                        open={mobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                    >
                        <div className="fixed inset-0 z-10 bg-black bg-opacity-30" />
                        <DialogPanel className="fixed inset-y-0 left-0 z-20 w-full p-6 overflow-y-auto bg-white">
                            <div className="flex items-center justify-between">
                                <h1 className="uppercase text-[20px] lg:text-[35px] font-bold tracking-[4px] text-[#16528F] Organum">
                                    JewellsJewels
                                </h1>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-700"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="mt-6 space-y-4">
                                {navigation.map((item, index) => (
                                    <div key={item.name}>
                                        <NavLink
                                            to={item.href}
                                            className="block p-2 text-base font-semibold leading-7 text-gray-900 rounded-lg figtree hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </NavLink>
                                        {index < navigation.length - 1 && (
                                            <hr className="border-gray-300" />
                                        )}
                                        {/* {index === 1 && (
                                        <div className="relative">
                                            <button
                                                onClick={toggleDropdown}
                                                className="flex items-center w-full p-2 space-x-2 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                            >
                                                <img
                                                    src={`https://flagcdn.com/w20/${selectedCountry}.png`}
                                                    alt="Country Flag"
                                                    className="object-cover w-8 h-6"
                                                />
                                                <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                                            </button>
                                            {dropdownOpen && (
                                                <div className="absolute right-0 z-10 w-40 mt-2 bg-white border border-gray-300 rounded-md shadow-lg top-full">
                                                    {countryList.map((country) => (
                                                        <button
                                                            key={country.code}
                                                            onClick={() => selectCountry(country.code)}
                                                            className="flex items-center w-full px-2 py-1 hover:bg-gray-100"
                                                        >
                                                            <img
                                                                src={`https://flagcdn.com/w20/${country.code}.png`}
                                                                alt={country.name}
                                                                className="object-cover w-6 h-4"
                                                            />
                                                            <span className="ml-2 text-sm">{country.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )} */}
                                    </div>
                                ))}
                            </div>
                        </DialogPanel>
                    </Dialog>
                </div>
            </div>
        </header>
    );
}

// dropdown
// 'use client';

// import { useState } from 'react';
// import {
//   Dialog, DialogPanel
// } from '@headlessui/react';
// import {
//   Bars3Icon, XMarkIcon, MapPinIcon, PhoneIcon,
//   MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon,
//   UserIcon, ChevronDownIcon
// } from '@heroicons/react/24/outline';
// import logo from '../assest/logo/navLogo.png';

// const navigation = [
//   { name: 'Engagement', href: '#', megaMenu: true,
//     items: [
//       { name: 'Rings', href: '#' },
//       { name: 'Solitaire', href: '#' },
//       { name: 'Halo', href: '#' }
//     ]
//   },
//   { name: 'Wedding', href: '#', megaMenu: true,
//     items: [
//       { name: 'Wedding Rings', href: '#' },
//       { name: 'Wedding Bands', href: '#' }
//     ]
//   },
//   { name: 'Jewelry', href: '#', megaMenu: true,
//     items: [
//       { name: 'Earrings', href: '#' },
//       { name: 'Necklaces', href: '#' },
//       { name: 'Bracelets', href: '#' }
//     ]
//   },
//   { name: 'Diamonds', href: '#' },
//   { name: 'Truly Custom', href: '#' },
//   { name: 'Collections', href: '#' },
//   { name: 'Gemstones Jewelry', href: '#' },
//   { name: 'Education', href: '#' }
// ];

// const countryList = [
//   { code: 'us', name: 'United States' },
//   { code: 'gb', name: 'United Kingdom' },
//   { code: 'fr', name: 'France' },
//   { code: 'de', name: 'Germany' },
//   { code: 'jp', name: 'Japan' }
//   // Add more countries as needed
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState('us');
//   const [activeMenu, setActiveMenu] = useState(null);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const selectCountry = (code) => {
//     setSelectedCountry(code);
//     setDropdownOpen(false);
//   };

//   const handleMouseEnter = (name) => {
//     setActiveMenu(name);
//   };

//   const handleMouseLeave = () => {
//     setActiveMenu(null);
//   };

//   return (
//     <header className="bg-[#FCF9F0] figtree">
//       {/* Top Nav */}
//       <nav aria-label="Global" className="mx-auto hidden lg:flex max-w-[110rem] items-center justify-between p-3 lg:px-3 xl:px-2 border-b border-[#16528F]">
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center">
//             <MapPinIcon className="w-5 h-5 mr-1 text-gray-700" />
//             <span className="text-gray-700 text-[14px] xl:text-[16px] uppercase ms-2 font-[500] figtree">Location</span>
//           </div>
//           <div className="flex items-center">
//             <PhoneIcon className="w-5 h-5 mr-1 text-gray-700 ms-4" />
//             <span className="text-gray-700 text-[14px] xl:text-[16px] uppercase ms-2 font-[500] figtree">Contact Us</span>
//           </div>
//         </div>

//         {/* Center Logo */}
//         <NavLink to="#" className="-m-1.5 p-1.5 relative left-[10px] xl:left-[80px] mainlogo">
//           <h1 className='uppercase text-[20px] md:text-[20px] xl:text-[35px] font-bold tracking-[7px] text-[#16528F] Organum'>JewellsJewels</h1>
//         </NavLink>

//         {/* Right Side */}
//         <div className="flex items-center space-x-6">
//           <div className="relative border-b border-gray-400 w-[150px] xl:w-[230px]">
//             <input
//               type="text"
//               className="border-none py-1 pl-0 pr-0 text-sm focus:outline-none w-[150px] xl:w-[230px] bg-transparent"
//               placeholder="Search..."
//             />
//           </div>
//           <MagnifyingGlassIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
//           <div className="relative ml-3" style={{ marginLeft: '15px' }}>
//             <HeartIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
//             <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-1 -right-2">0</span>
//           </div>
//           <ShoppingCartIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
//           <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
//           <div className="relative">
//             <button onClick={toggleDropdown} className="flex items-center space-x-2">
//               <img
//                 src={`https://flagcdn.com/w20/${selectedCountry}.png`}
//                 alt="Country Flag"
//                 className="object-cover w-5 h-4"
//               />
//               <ChevronDownIcon className="w-5 h-5 text-gray-700" />
//             </button>
//             {dropdownOpen && (
//               <div className="absolute right-0 z-10 w-40 mt-2 bg-white border border-gray-300 rounded-md shadow-lg top-full">
//                 {countryList.map((country) => (
//                   <button key={country.code} onClick={() => selectCountry(country.code)} className="flex items-center w-full px-2 py-1 hover:bg-gray-100">
//                     <img src={`https://flagcdn.com/w20/${country.code}.png`} alt={country.name} className="object-cover w-6 h-4" />
//                     <span className="ml-2 text-sm">{country.name}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Bottom Menu with Mega Menu */}
//       <div className="mx-auto hidden lg:flex justify-between space-x-6 bg-[#FCF9F0] py-5 max-w-[110rem] lg:px-2 relative">
//         {navigation.map((item) => (
//           <div
//             key={item.name}
//             className="relative"
//             onMouseEnter={() => handleMouseEnter(item.name)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <NavLink to={item.href} className="figtree font-[500] uppercase leading-6 text-[14px] xl:text-[16px] text-gray-900 hover:text-gray-700">
//               {item.name}
//             </NavLink>

//             {/* Mega Menu */}
//             {item.megaMenu && activeMenu === item.name && (
//               <div className="absolute left-0 top-full mt-2 w-[300px] p-6 bg-white shadow-lg rounded-lg z-20 grid grid-cols-2 gap-4">
//                 {item.items.map((subItem) => (
//                   <NavLink key={subItem.name} href={subItem.href} className="text-sm text-gray-900 hover:text-gray-700">
//                     {subItem.name}
//                   </NavLink>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </header>
//   );
// }
