import React from 'react';
import image1 from '../assest/About/1.jpg'
import image2 from '../assest/About/2.jpg'
import image3 from '../assest/About/4.jpg'
import aboutbanner from '../assest/About/aboutbanner.jpg'

const AboutUs = () => {
    const sections = [
        {
            title: "Our Story",
            content:
                "Jewellsbegan with a passion for jewelry that is designed with the utmost care and creativity. We specialize in crafting unique pieces that reflect individual personalities and stories. From humble beginnings, Jewellshas grown into a trusted name, offering a wide range of beautiful and elegant jewelry for every occasion.",
            imgUrl: image1,
        },
        {
            title: "Why?",
            content:
                "At, we believe that jewelry is more than just an accessory—it’s an expression of who you are. Our collection is carefully curated to bring you the finest designs made with precision and high-quality materials. Whether you are looking for something classic or contemporary, we have the perfect piece to complement your style.",
            imgUrl: image2,
        },
        // {
        //     title: "Our Team",
        //     content:
        //         "Our team is comprised of skilled artisans, designers, and jewelry experts who are passionate about creating timeless and stunning jewelry pieces. Each member of our team brings unique expertise and a dedication to ensuring that every piece meets the highest standards of craftsmanship.",
        //     imgUrl: image3,
        // },
    ];
    return (
        <>
            <div>
                {/* Banner Section */}
                <section className="relative w-full h-[400px]">
                    <img
                        src={aboutbanner}
                        alt="About Banner"
                        className="w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-5xl font-bold Organum">About Us</h1>
                    </div>
                </section>
                <div className="section-gap"></div>
                {/* Below Banner Section */}
                <section className="">
                    <div className=" mx-auto max-w-[110rem] ">
                        {/* Dynamically Create Sections with map() */}
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image with Box Background */}
                                <div className="relative w-full lg:w-1/2 p-8">
                                    {/* <div className="absolute top-4 left-4 w-full h-full bg-[#16528f] transform -rotate-2 z-0"></div> */}
                                    <img
                                        src={section.imgUrl}
                                        alt={section.title}
                                        className="relative z-10 w-full h-full object-cover shadow-lg  border-r-8 border-b-8  border-[#16528f]"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-1/2 p-8">
                                    <h2 className="text-xl lg:text-4xl font-semibold text-gray-800 mb-3 lg:mb-6 figtre">{section.title}</h2>
                                    <p className="text-md font-light text-gray-600 inter">{section.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <div className="section-gap"></div>
            </div>
        </>
    );
};

export default AboutUs;
