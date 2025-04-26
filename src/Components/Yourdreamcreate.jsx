import React from "react";
import Yourdreamimg from '../assest/DesignYourOwnSection/home_banner_197_06182024123030.avif'

const Yourdreamcreate = () => {
    return (
        <>
            <div className="section-gap"></div>
            <div className="bg-[#fdf5e6]">

                <div className=" mx-auto max-w-[110rem]  flex flex-col md:flex-row justify-between items-center py-12 px-6 md:px-20">
                    {/* Right Part: Image */}
                    <div className="relative flex-1">
                        <img
                            src={Yourdreamimg}// Add the path to the image you uploaded
                            alt="Design Your Own Ring"
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    {/* Left Part: Content */}

                    <div className="flex justify-center items-center flex-wrap flex-1 mb-8 md:mb-0 lg:py-[25px] lg:px[50px] lg:h-[500px] lg:border border-[#16528F] border-s-0 mt-6 lg:mt-0"  style={{borderLeft:'0px'}}>
                        <div className="content-inner">

                            <p className="text-lg font-bold text-[#522600] mb-4">TRULY CUSTOM</p>
                            <h4 className="lg:text-[50px] lg:w-[20rem] inter text-[#16528F]">You dream. We create.</h4>
                            <p className=" text-[#522600] mb-6">
                                A design that’s truly you. Get your
                                dream jewelry in just 14 days.
                            </p>
                            {/* <button className="bg-[#16528F] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#bc5f2e] transition-all">
                                Start Designing
                            </button> */}
                            <div className="trulybutton lg:w-80 flex justify-between lg:mt-3">
                                <button className="bg-transparent text-[#16528F] font-semibold underline">
                                    Engagement Rings
                                </button>
                                <button className="bg-transparent text-[#16528F] font-semibold underline mr-[7px]">

                                    Earrings
                                </button>
                            </div>
                            <div className="trulybutton lg:w-80 flex justify-between lg:mt-3">
                                <button className="bg-transparent text-[#16528F] font-semibold underline">
                                    Necklaces
                                </button>
                                <button className="bg-transparent text-[#16528F] font-semibold underline">

                                    Bracelets
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Yourdreamcreate;
