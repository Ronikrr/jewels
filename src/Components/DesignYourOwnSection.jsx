import React from "react";
import DesignYourOwn from '../assest/DesignYourOwnSection/home_banner_196_07232024011052.avif'

const DesignYourOwnSection = () => {
    return (
        <>
        <div className="section-gap"></div>
            <div className="bg-[#fdf5e6]">

                <div className=" mx-auto max-w-[110rem]  flex flex-col md:flex-row justify-between items-center py-12 px-6 md:px-20">
                    {/* Left Part: Content */}

                    <div className="flex justify-center items-center flex-wrap flex-1 mb-8 md:mb-0 lg:py-[25px] lg:px[50px] lg:h-[500px] lg:border  border-[#16528F]" style={{borderRight:'0px'}}>
                        <div className="content-inner">

                            <h2 className="text-4xl font-bold text-[#16528F] mb-4">Free Matching Band</h2>
                            <p className="text-lg text-[#522600] mb-6">
                                Design your engagement ring. Get the matching wedding band for free.
                            </p>
                            <button className="bg-[#16528F] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#bc5f2e] transition-all">
                                Start Designing
                            </button>
                            <p className="text-sm text-[#522600] mt-2 underline">View Terms</p>
                        </div>
                    </div>

                    {/* Right Part: Image */}
                    <div className="relative flex-1">
                        <img
                            src={DesignYourOwn}// Add the path to the image you uploaded
                            alt="Design Your Own Ring"
                            className="object-contain w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DesignYourOwnSection;
