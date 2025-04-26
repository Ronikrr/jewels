import React, { useState } from 'react';
// import ReactImageMagnify from 'react-image-magnify';
import image1 from '../assest/Productpage/1712524047-b460b28175e3938f934789029b239b992252d5d4f528d4a890bb549142a08354-d.jpg';
import image2 from '../assest/Productpage/BNGTXR01732-700GW4 - BNGTXR01497-700GW4 - BNGTXR01498-700GW4 - BNGTXR01499-700GW4 E.avif';
import image3 from '../assest/Productpage/LGTXR01732GW4-7.00 -1.avif';
import image4 from '../assest/Productpage/LGTXR01732GW4-7.00.avif';
import image5 from '../assest/Productpage/RIGTXR01732-WG-OV-WH-200-M0.avif';
import image6 from '../assest/Productpage/RIGTXR01732-WG-OV-WH-200-M1.avif';
import stone1 from '../assest/stoneType/oval.svg'
import stone2 from '../assest/stoneType/emerald.svg'
import stone3 from '../assest/stoneType/princess.svg'

const ProductSlider = () => {
    const images = [image1, image2, image3, image4, image5, image6];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Metal Selection
    const metals = [
        { name: '14K White Gold', color: 'bg-yellow-400' },
        { name: '18K Yellow Gold', color: 'bg-yellow-600' },
        { name: 'Rose Gold', color: 'bg-pink-400' },
        { name: 'Platinum', color: 'bg-gray-400' },
    ];
    const [selectedMetal, setSelectedMetal] = useState(metals[0]);

    // Diamond Shape
    const shapes = [
        { name: 'Oval', value: 'oval', image: stone1 },
        { name: 'Princess', value: 'princess', image: stone3 },
        { name: 'Round', value: 'round', image: stone2 }
    ];
    const [selectedShape, setSelectedShape] = useState(shapes[0]);

    // Carat Weight
    const caratWeights = [2, 3, 4, 5];
    const [selectedCarat, setSelectedCarat] = useState(2);

    // Diamond Quality
    const qualities = [
        { name: 'Best - G+' },
        { name: 'Good - VS+' }
    ];
    const [selectedQuality, setSelectedQuality] = useState(qualities[0]);

    // Size Selection (Example sizes, you can adjust)
    // const sizes = ['6', '6.5', '7', '7.5'];
    const sizes = ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'];
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const [isAdded, setIsAdded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleWishlistClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsAdded(!isAdded);
            setIsLoading(false);
        }, 500); // Add some delay for the loading animation
    };

    return (
        <div className="flex flex-col lg:flex-row w-full mx-auto max-w-[110rem] items-center">
            {/* Left Section: Product Slider */}
            <div className="lg:w-1/2 w-full p-4">
                <div className="relative flex w-full mt- flex-col-reverse lg:flex-row">
                    {/* Thumbnail Row for Mobile */}
                    <div className="lg:w-1/5 flex lg:flex-col flex-row items-center lg:relative mb-4 lg:mb-0">
                        <button className="hidden lg:absolute top-0 bg-gray-300 hover:bg-gray-400 p-2" onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}>
                            <svg className="svg svg-slick-left" width="24" height="24"><use href="#sv-left-arrow"></use></svg>
                        </button>

                        <div className="flex lg:flex-col flex-row justify-center overflow-x-auto lg:mt-10 lg:mb-10 gap-2">
                            {images.map((image, index) => (
                                <div key={index} className={`cursor-pointer border-2 mt-3 lg:mt-0 ${selectedImage === image ? 'border-black' : 'border-transparent'}`} onClick={() => { setSelectedImage(image); setCurrentIndex(index); }}>
                                    <img src={image} alt={`Thumbnail ${index}`} className="w-[30px] lg:w-[100px] h-[30px] lg:h-[100px]" />
                                </div>
                            ))}
                        </div>

                        <button className="hidden lg:absolute bottom-0 bg-gray-300 hover:bg-gray-400 p-2" onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}>
                            <svg className="svg svg-slick-right" width="24" height="24"><use href="#sv-right-arrow"></use></svg>
                        </button>
                    </div>

                    {/* Main Image */}
                    <div className="w-full lg:w-4/5 flex justify-center mt-0">
                        <img src={image1} alt="" />
                        {/* <ReactImageMagnify
                            smallImage={{ alt: 'Main Image', isFluidWidth: true, src: selectedImage }}
                            largeImage={{ src: selectedImage, width: 1200, height: 1800 }}
                            enlargedImageContainerStyle={{ zIndex: 9 }}
                        /> */}
                    </div>
                </div>
            </div>

            {/* Right Section: Product Info */}
            <div className="lg:w-1/2 w-full p-4">
                {/* rating */}
                <div className="review-details hidden md:flex items-center py-2">
                    <div className="rating" id="review-cnt">
                        <div className="yotpo-widget-instance" data-yotpo-product-id="BNGTXR01732-400GW4" data-yotpo-instance-id="675301">
                            <div
                                className="yotpo-reviews-star-ratings-widget flex justify-start flex-row mb-1"
                                style={{ marginBottom: "3px" }}
                            >
                                <div className="yotpo-widget-clear">
                                    <div className="yotpo-bottom-line-scroll-panel flex items-start flex-wrap">
                                        <div className="yotpo-sr-bottom-line-summary flex flex-row items-start">
                                            <div
                                                aria-label="4.8 out of 5 star rating"
                                                className="flex flex-row items-center"
                                                style={{ marginRight: "10px", marginLeft: "0px" }}
                                            >
                                                <span className="sr-only" id="BNGTXR01732-400GW4-ada-star-ratings-text">
                                                    4.8 out of 5 star rating
                                                </span>
                                                {/* Star SVGs */}
                                                {[...Array(5)].map((_, index) => (
                                                    <div
                                                        key={index}
                                                        aria-labelledby="BNGTXR01732-400GW4-ada-star-ratings-text"
                                                        className="star-container flex flex-row mr-1"
                                                    >
                                                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                                                            <defs>
                                                                <linearGradient aria-hidden="true" id={`yotpo_stars_gradient_${Math.random()}`}>
                                                                    <stop offset="100%" stopColor="rgba(158,55,30,1)" />
                                                                    <stop offset="100%" stopOpacity="1" stopColor="#FFFFFF" />
                                                                </linearGradient>
                                                            </defs>
                                                            <path
                                                                aria-hidden="true"
                                                                style={{ pointerEvents: "none" }}
                                                                d="M9 14.118L14.562 17.475L13.086 11.148L18 6.891L11.529 6.342L9 0.375L6.471 6.342L0 6.891L4.914 11.148L3.438 17.475L9 14.118Z"
                                                                stroke="rgba(158,55,30,1)"
                                                                fill={`url(#yotpo_stars_gradient_${Math.random()})`}
                                                            />
                                                        </svg>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* End of Star SVGs */}
                                        </div>

                                        <div className="yotpo-sr-bottom-line-right-panel flex underline">
                                            <div
                                                className="yotpo-sr-bottom-line-text text-start"
                                                style={{ whiteSpace: "nowrap", fontSize: "16px", lineHeight: "18px", fontFamily: "Figtree", fontWeight: "400", color: "rgb(44, 44, 44)" }}
                                            >
                                                62 Reviews
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rating end */}
                <div className='flex items-center'>
                    <h1 className="text-[16px] lg:text-[20px] font-bold mb-2">2 ctw Oval Lab Grown Diamond Eternity Band - 3.7mm Width</h1>


                    <div className={`wishlist-container ${isAdded ? 'done' : ''} lg:ms-7`} onClick={handleWishlistClick}>
                        {isLoading ? (
                            <svg className="loading-icon" height="15px" width="15px" viewBox="0 0 471.701 471.701">
                                <g className="loading">
                                    <path fill='white' d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479 c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933 c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207 c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4 C426.667,7.641,419.026,0,409.6,0z" />
                                </g>
                            </svg>
                        ) : isAdded ? (
                            <svg className="done-icon" height="15px" width="15px" viewBox="0 0 471.701 471.701">
                                <g className="check">
                                    <path fill='black' d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933 C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8 s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z" />
                                    <path fill='black' d="M370.046,141.534c-6.614-6.388-17.099-6.388-23.712,0v0L187.733,300.134l-56.201-56.201 c-6.548-6.78-17.353-6.967-24.132-0.419c-6.78,6.548-6.967,17.353-0.419,24.132c0.137,0.142,0.277,0.282,0.419,0.419 l68.267,68.267c6.664,6.663,17.468,6.663,24.132,0l170.667-170.667C377.014,158.886,376.826,148.082,370.046,141.534z" />
                                </g>
                            </svg>
                        ) : (
                            <svg className="heart-icon text-white" height="15px" width="15px" viewBox="0 0 471.701 471.701">
                                <path fill='white' d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z" />
                            </svg>
                        )}
                    </div>
                </div>
                <p className='text-[10px] lg:text-[14px] font-medium mb-4 figtree'>14K White Gold, FG, VS2+</p>
                <div className="price flex flex-wrap items-center">
                    <h6 className='text-[25px] Organum'>$1,725 </h6>
                    <p className='mb-2 lg:mb-0 text-[12px] inline-block ms-0 lg:ms-3 figtree'>Shop confidently knowing that our diamonds and jewelry are priced right year-round, without ever going on sale.</p>
                </div>
                <p className='mb-0 text-[12px] block ms-0 figtree'>Starting at $60/mo or 0% APR with Affirm. Prequalify now</p>
                <p className='mb-4 text-[12px] inline-block ms-0 figtree'>No credit? Shop now. Pay over time. <a href="" className='underline text-[#16528F]'>Estimate Payment</a> </p>
                {/* Metal Selection */}
                <div className="flex flex-wrap items-center mb-4 figtree  overflow-x-auto">
                    <p className=" lg:max-w-[200px] w-[100%] text-sm text-[#808381]">Metal:<span className="text-sm ml-2 text-[#2b2b2b]">{selectedMetal.name}</span></p>
                    <div className="flex space-x-2 mt-0 ms-0 lg:ms-3 text-sm pb-2 lg:pb-0">
                        {metals.map((metal, index) => (
                            <button key={index} className={`p-1 border rounded-full ${selectedMetal.name === metal.name ? 'border-black' : 'border-transparent'}`} onClick={() => setSelectedMetal(metal)}>
                                <span className={`block w-6 h-6 rounded-full ${metal.color}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Diamond Shape */}
                <div className="flex flex-wrap items-center mb-4 figtree  overflow-x-auto">
                    <p className=" lg:max-w-[200px] w-[100%] text-sm text-[#808381]">Diamond Shape:</p>
                    <div className="flex space-x-4 mt-0 ms-0 lg:ms-3 text-sm  pb-2 lg:pb-0">
                        {shapes.map((shape, index) => (
                            <button
                                key={index}
                                className={`p-2 border rounded w-[60px] lg:w-[90px] ${selectedShape.name === shape.name ? 'border-[#16528F]' : 'border-transparent'}`}
                                onClick={() => setSelectedShape(shape)}
                            >
                                <img src={shape.image} alt={shape.name} className="inline-block w-6 h-6 mr-0" />
                                {/* {shape.name} */}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carat Total Weight */}
                <div className="flex flex-wrap items-center mb-4 figtree overflow-x-auto">
                    <p className=" lg:max-w-[200px] w-[100%] text-sm text-[#808381]">Carat Total Weight:</p>
                    <div className="flex space-x-4 mt-0 ms-0 lg:ms-3 text-sm pb-2 lg:pb-0">
                        {caratWeights.map((weight, index) => (
                            <button key={index} className={` w-[60px] lg:w-[120px] h-[25px] lg:h-[30px] leading-5 border rounded ${selectedCarat === weight ? 'border-[#16528F] bg-[#16528F] text-[#fff]' : 'border-[#16528F]'}`} onClick={() => setSelectedCarat(weight)}>
                                {weight}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Diamond Quality */}
                <div className="flex flex-wrap items-center mb-4 figtree  overflow-x-auto">
                    <p className=" lg:max-w-[200px] w-[100%] text-sm text-[#808381]">Diamond Quality:</p>
                    <div className="flex space-x-4 mt-0 ms-0 lg:ms-3 text-sm  pb-2 lg:pb-0">
                        {qualities.map((quality, index) => (
                            <button key={index} className={`w-[130px] lg:w-[194px] h-[25px] lg:h-[30px] leading-5 border rounded ${selectedQuality.name === quality.name ? 'border-[#16528F] bg-[#16528F] text-[#fff]' : 'border-[#16528F]'}`} onClick={() => setSelectedQuality(quality)}>
                                {quality.name}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Size Selection */}
                <div className="mb-4 figtree">
                    <label htmlFor="size-select" className="block text-[14px] font-medium mb-2 figtree">Size:</label>
                    <select
                        id="size-select"
                        className="border rounded p-2 mt-0 italic text-[14px]"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                    >
                        <option value="">Select a size</option>
                        {sizes.map((size, index) => (
                            <option key={index} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-[#16528F] text-[#fff] font-semibold text-base py-3 px-6 rounded mt-4 w-[100%] lg:w-[90%]">ADD TO BAG</button>
                <p className='text-[10px] lg:text-[12px] font-medium mt-2 mb-1 figtree text-[#2b2b2b]'>Estimated Ship Date: Monday, October 7th</p>
                <p className='text-[10px] lg:text-[12px] font-medium figtree text-[#2b2b2b]'>Made-to-Order | Free Shipping | Free Returns</p>


                {/* information */}
                <li className='mt-2 lg:mt-5'>
                    <a href="javascript:void(0);" class="flex items-center" role="button" data-target="#drop-a-hint-popup" data-toggle="modal" tabindex="0">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={25}
                            height={25}
                            x={0}
                            y={0}
                            viewBox="0 0 480.1 480.1"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                            className=""
                        >
                            <g>
                                <path
                                    d="M240.135.05C144.085.036 57.277 57.289 19.472 145.586l-2.992.992 1.16 3.48c-49.776 122.766 9.393 262.639 132.159 312.415a239.87 239.87 0 0 0 90.265 17.577c132.548.02 240.016-107.416 240.036-239.964S372.684.069 240.135.05zm188.253 361.004-12.324-12.316V320.05a7.99 7.99 0 0 0-.8-3.576l-31.2-62.312V224.05a8 8 0 0 0-3.56-6.656l-24-16a8.002 8.002 0 0 0-6.4-1.104l-29.392 7.344-49.368-21.184-6.792-47.584 18.824-18.816h40.408l13.6 20.44a8 8 0 0 0 5.344 3.448l48 8a7.933 7.933 0 0 0 3.84-.304l44.208-14.736c37.079 71.155 33.113 156.736-10.388 224.156zM395.392 78.882l-13.008 8.672-36.264-7.256-23.528-7.832a7.856 7.856 0 0 0-4.464-.176l-29.744 7.432-13.04-4.344 9.664-19.328h27.056a7.997 7.997 0 0 0 3.576-.84l27.68-13.84a224.823 224.823 0 0 1 52.072 37.512zM152.44 33.914l19.2 12.8a7.99 7.99 0 0 0 3.128 1.232l38.768 6.464-3.784 11.32-20.2 6.744a8 8 0 0 0-4.328 3.464l-22.976 38.288-36.904 22.144-54.4 7.768a8 8 0 0 0-6.88 7.912v24a8 8 0 0 0 2.344 5.656l13.656 13.656v13.744l-33.28-22.192-12.072-36.216A225.289 225.289 0 0 1 152.44 33.914zM129.664 296.21l-36.16-7.24-13.44-26.808v-18.8l29.808-29.808 11.032 22.072a8.001 8.001 0 0 0 7.16 4.424h51.472l21.672 36.12a8 8 0 0 0 6.856 3.88h22.24l-5.6 28.056-30.288 30.288a8.003 8.003 0 0 0-2.352 5.656v20l-28.8 21.6a8.002 8.002 0 0 0-3.2 6.4v28.896l-9.952-3.296-14.048-35.136V304.05a8 8 0 0 0-6.4-7.84zm-24.048 122.981C30.187 362.602-1.712 264.826 25.832 174.642l6.648 19.936a7.995 7.995 0 0 0 3.144 4.128l39.88 26.584-9.096 9.104a8 8 0 0 0-2.344 5.656v24a7.997 7.997 0 0 0 .84 3.576l16 32a8.003 8.003 0 0 0 5.6 4.264l33.6 6.712v73.448a8.003 8.003 0 0 0 .568 2.968l16 40a8.001 8.001 0 0 0 4.904 4.616l24 8a7.86 7.86 0 0 0 2.488.416 8 8 0 0 0 8-8v-36l28.8-21.6a8.002 8.002 0 0 0 3.2-6.4v-20.688l29.656-29.656a8.006 8.006 0 0 0 2.184-4.088l8-40a8 8 0 0 0-7.84-9.568h-27.472l-21.672-36.12a8 8 0 0 0-6.856-3.88h-51.056l-13.744-27.576a7.999 7.999 0 0 0-5.88-4.32 7.84 7.84 0 0 0-6.936 2.24l-10.384 10.344V192.05a8 8 0 0 0-2.344-5.656l-13.656-13.656v-13.752l49.136-7.016a8.037 8.037 0 0 0 2.984-1.064l40-24a7.996 7.996 0 0 0 2.736-2.736l22.48-37.464 21.192-7.072a7.918 7.918 0 0 0 5.056-5.056l8-24a8 8 0 0 0-6.272-10.4l-46.304-7.72-8.136-5.424a223.384 223.384 0 0 1 153.856 5.72l-14.616 7.296h-30.112a8 8 0 0 0-7.2 4.424l-16 32a8 8 0 0 0 4.632 11.16l24 8c1.44.489 2.99.551 4.464.176l29.744-7.432 21.792 7.256c.312.112.633.198.96.256l40 8a7.943 7.943 0 0 0 6.008-1.184l18.208-12.144a225.69 225.69 0 0 1 24.064 32.152l-39.36 13.12-42.616-7.104-14.08-21.12a8 8 0 0 0-6.616-3.56h-48a8 8 0 0 0-5.656 2.344l-24 24a8 8 0 0 0-2.264 6.792l8 56a8 8 0 0 0 4.8 6.216l56 24a7.907 7.907 0 0 0 5.088.408l28.568-7.144 17.464 11.664v27.72a7.99 7.99 0 0 0 .8 3.576l31.2 62.312v30.112a8 8 0 0 0 2.344 5.656l16.736 16.744c-74.223 98.933-214.595 118.965-313.528 44.741z"
                                    fill="#16528F"
                                    opacity={1}
                                    data-original="#000000"
                                />
                            </g>
                        </svg>

                        <p className='ml-2 text-[10px] lg:text-[12px] font-semibold figtree text-[#2b2b2b]'>Brilliant Impact

                            <p className='block'>Choose a nonprofit when you add to cart, and 1% of your order will be donated at no extra cost to you.
                            </p>
                        </p>
                    </a>
                </li>

                <ul class="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center mt-3 lg:mt-6">
                    {/* <!-- Drop a hint --> */}
                    <li>
                        <a href="javascript:void(0);" class="flex items-center" role="button" data-target="#drop-a-hint-popup" data-toggle="modal" tabindex="0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={22}
                                height={22}
                                x={0}
                                y={0}
                                viewBox="0 0 64 64"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                                className=""
                            >
                                <g>
                                    <path
                                        d="m58.046 24.389-7.633-6.327v-5.106a2.018 2.018 0 0 0-2.02-2.01h-6.561l-7.245-6.013a4.053 4.053 0 0 0-5.174 0l-7.246 6.012h-6.565a2.012 2.012 0 0 0-2.01 2.01v5.1L5.956 24.39a4.038 4.038 0 0 0-1.466 3.119v28.441A4.056 4.056 0 0 0 8.539 60H55.46a4.056 4.056 0 0 0 4.051-4.05V27.507a4.04 4.04 0 0 0-1.465-3.12Zm-1.276 1.54c.127.154.387.243.102.344l-6.459 5.257V20.66Zm-43.177-5.274v10.88l-6.465-5.262c-.283-.1-.026-.19.103-.344ZM8.54 58a2.034 2.034 0 0 1-.336-.034l7.283-6.135a1 1 0 0 0-1.289-1.53l-7.57 6.376a2.03 2.03 0 0 1-.139-.728V28.331L21.27 40.362a1 1 0 0 0 1.262-1.55l-6.94-5.649.01-20.218h14.4a1 1 0 0 0 0-2H25.3l5.391-4.473a2.051 2.051 0 0 1 2.62 0l5.39 4.473h-4.697a1 1 0 0 0 0 2l14.41.01c-.002 3.69.002 16.297 0 20.203l-6.946 5.653a1 1 0 0 0 1.262 1.551L57.51 28.331v27.618a2.03 2.03 0 0 1-.139.725L34.61 37.514a4.032 4.032 0 0 0-5.221-.003l-12.13 10.22a1 1 0 0 0 1.289 1.53l12.13-10.22a2.038 2.038 0 0 1 2.641 0l22.482 18.925c-.361.123-46.883-.017-47.261.034Z"
                                        fill="#16528F"
                                        opacity={1}
                                        data-original="#000000"
                                    />
                                    <path
                                        d="M30.577 32.277a8.15 8.15 0 0 0 6.014-1.301 1 1 0 1 0-1.133-1.649 6.146 6.146 0 0 1-4.545.978c-7.675-1.597-6.033-12.763 1.764-12.108a6.13 6.13 0 0 1 5.396 5.33c.043.96.284 2.718-1.05 2.805a.975.975 0 0 1-.972-.973v-4.13a1 1 0 0 0-1.923-.381 4.05 4.05 0 1 0 .615 6.394 2.984 2.984 0 0 0 5.194-1.255 8.118 8.118 0 0 0-13.907-7.21c-4.335 4.528-1.703 12.533 4.547 13.5ZM32 26.33a2.05 2.05 0 0 1 0-4.101 2.05 2.05 0 0 1 0 4.101Z"
                                        fill="#16528F"
                                        opacity={1}
                                        data-original="#000000"
                                    />
                                </g>
                            </svg>

                            {/* <span class="ml-2"></span> */}
                            <p className='ml-2 text-[10px] lg:text-[12px] font-semibold figtree text-[#2b2b2b]'>Drop a hint</p>
                        </a>
                    </li>

                    {/* <!-- Call - Desktop --> */}
                    <li class="hidden lg:block">
                        <a href="tel:877-476-9627" class="flex items-center" role="button" tabindex="0" aria-label="call 877-476-9627">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={22}
                                height={22}
                                x={0}
                                y={0}
                                viewBox="0 0 482.6 482.6"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                                className=""
                            >
                                <g>
                                    <path
                                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                        fill="#16528F"
                                        opacity={1}
                                        data-original="#000000"
                                    />
                                </g>
                            </svg>

                            {/* <span class="ml-2"></span> */}
                            <p className='ml-2 text-[10px] lg:text-[12px] font-semibold figtree text-[#2b2b2b]'>877-476-9627</p>

                        </a>
                    </li>

                    {/* <!-- Call - Mobile --> */}
                    {/* <li class="block lg:hidden">
                        <a href="tel:+1-877-476-9627" class="flex items-center" role="button" tabindex="0" aria-label="call +1-877-476-9627">
                            <svg class="w-5 h-5" aria-hidden="true" role="img">
                                <use href="#sv-call" />
                            </svg>
                            <span class="ml-2">+1-877-476-9627</span>
                        </a>
                    </li> */}

                    {/* <!-- Live Chat --> */}
                    <li>
                        <a href="javascript:void(0);" class="flex items-center" role="button" onclick="Open_Livechat();" tabindex="0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={22}
                                height={22}
                                x={0}
                                y={0}
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        d="m508.372 306.237-35.325-41.213c25.207-28.438 38.936-63.125 38.936-99.022C511.983 72.997 421.751.007 315.99.007c-107.519 0-194.994 74.465-194.994 165.995 0 2.299.076 4.604.189 6.907C49.633 201.341 0 262.63 0 333.498c0 39.718 15.172 77.828 43.008 108.707l-39.297 44.91A14.999 14.999 0 0 0 15 511.992h210.993c1.669 0 6.926-.953 8-1.052 49.482-4.565 95.349-23.99 129.812-55.108 36.388-32.856 57.92-76.849 57.146-124.834h76.033c12.788 0 19.712-15.05 11.388-24.761zM228.993 481.263c-1.311.107-5.845.498-6.749.73H48.056l26.646-30.453c5.3-6.057 4.875-15.216-.963-20.756-28.206-26.77-43.74-61.32-43.74-97.286 0-81.312 81.185-147.495 180.994-147.495 99.249 0 179.994 66.166 179.994 147.495 0 76.038-70.836 140.317-161.994 147.765zM417.496 301c-18.099-83.448-104.651-144.996-206.503-144.996-20.822 0-40.943 2.563-59.956 7.312 1.744-73.753 75.065-133.308 164.953-133.308 91.53 0 165.994 61.007 165.994 135.995 0 32.076-14.049 63.189-39.56 87.608-5.754 5.507-6.2 14.55-1.017 20.597L464.371 301h-46.875z"
                                        fill="#16528F"
                                        opacity={1}
                                        data-original="#000000"
                                    />
                                    <path
                                        d="M120.996 300.999c-16.541 0-29.999 13.458-29.999 29.999s13.458 29.999 29.999 29.999 29.999-13.458 29.999-29.999-13.457-29.999-29.999-29.999zM210.993 300.999c-16.541 0-29.999 13.458-29.999 29.999s13.458 29.999 29.999 29.999 29.999-13.458 29.999-29.999-13.457-29.999-29.999-29.999zM300.99 300.999c-16.541 0-29.999 13.458-29.999 29.999s13.458 29.999 29.999 29.999 29.999-13.458 29.999-29.999-13.457-29.999-29.999-29.999z"
                                        fill="#16528F"
                                        opacity={1}
                                        data-original="#000000"
                                    />
                                </g>
                            </svg>

                            {/* <span class="ml-2"></span> */}
                            <p className='ml-2 text-[10px] lg:text-[12px] font-semibold figtree text-[#2b2b2b]'>Live Chat</p>

                        </a>
                    </li>

                    {/* <!-- Email Us --> */}
                    <li>
                        <a href="https://support.grownbrilliance.com/hc/en-us" class="flex items-center" role="link" tabindex="0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={22}
                                height={22}
                                x={0}
                                y={0}
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        d="M467 76H45C20.137 76 0 96.262 0 121v270c0 24.885 20.285 45 45 45h422c24.655 0 45-20.03 45-45V121c0-24.694-20.057-45-45-45zm-6.302 30L287.82 277.967c-8.5 8.5-19.8 13.18-31.82 13.18s-23.32-4.681-31.848-13.208L51.302 106h409.396zM30 384.894V127.125L159.638 256.08 30 384.894zM51.321 406l129.587-128.763 22.059 21.943c14.166 14.166 33 21.967 53.033 21.967s38.867-7.801 53.005-21.939l22.087-21.971L460.679 406H51.321zM482 384.894 352.362 256.08 482 127.125v257.769z"
                                        fill="#16528F"
                                        opacity={1}
                                        data-original="#000000"
                                    />
                                </g>
                            </svg>

                            {/* <span class="ml-2"></span> */}
                            <p className='ml-2 text-[10px] lg:text-[12px] font-semibold figtree text-[#2b2b2b]'>Email Us</p>

                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default ProductSlider;
