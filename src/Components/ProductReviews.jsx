import React, { useState } from 'react';

// Sample data for reviews
const sampleReviews = [
    {
        id: 1,
        userName: "Natalie S.",
        isVerified: true,
        rating: 5,
        media: "https://via.placeholder.com/150",
        reviewText: "I have wanted an eternity band for so long. When I learned about lab grown diamonds I got super excited about the price and more ethical means of sourcing. I ADORE this ring!",
        productReviewed: "3 ctw Oval Lab Grown Diamond Eternity Band - 4.2mm",
        date: "05/17/24",
        reply: "Thank you for choosing our lab grown diamond eternity band, Natalie! We are delighted to hear that you adore it.",
        helpful: { yes: 0, no: 0 },
        companyname: "JewellsJewels"
    },
    {
        id: 2,
        userName: "Natalie S.",
        isVerified: true,
        rating: 5,
        media: "https://via.placeholder.com/150",
        reviewText: "I have wanted an eternity band for so long. When I learned about lab grown diamonds I got super excited about the price and more ethical means of sourcing. I ADORE this ring!",
        productReviewed: "3 ctw Oval Lab Grown Diamond Eternity Band - 4.2mm",
        date: "05/17/24",
        reply: "Thank you for choosing our lab grown diamond eternity band, Natalie! We are delighted to hear that you adore it.",
        helpful: { yes: 0, no: 0 },
        companyname: "JewellsJewels"
    },
    {
        id: 3,
        userName: "Natalie S.",
        isVerified: true,
        rating: 5,
        media: "https://via.placeholder.com/150",
        reviewText: "I have wanted an eternity band for so long. When I learned about lab grown diamonds I got super excited about the price and more ethical means of sourcing. I ADORE this ring!",
        productReviewed: "3 ctw Oval Lab Grown Diamond Eternity Band - 4.2mm",
        date: "05/17/24",
        reply: "Thank you for choosing our lab grown diamond eternity band, Natalie! We are delighted to hear that you adore it.",
        helpful: { yes: 0, no: 0 },
        companyname: "JewellsJewels"
    },
    {
        id: 4,
        userName: "Natalie S.",
        isVerified: true,
        rating: 5,
        media: "https://via.placeholder.com/150",
        reviewText: "I have wanted an eternity band for so long. When I learned about lab grown diamonds I got super excited about the price and more ethical means of sourcing. I ADORE this ring!",
        productReviewed: "3 ctw Oval Lab Grown Diamond Eternity Band - 4.2mm",
        date: "05/17/24",
        reply: "Thank you for choosing our lab grown diamond eternity band, Natalie! We are delighted to hear that you adore it.",
        helpful: { yes: 0, no: 0 },
        companyname: "JewellsJewels"
    },
    {
        id: 5,
        userName: "Natalie S.",
        isVerified: true,
        rating: 5,
        media: "https://via.placeholder.com/150",
        reviewText: "I have wanted an eternity band for so long. When I learned about lab grown diamonds I got super excited about the price and more ethical means of sourcing. I ADORE this ring!",
        productReviewed: "3 ctw Oval Lab Grown Diamond Eternity Band - 4.2mm",
        date: "05/17/24",
        reply: "Thank you for choosing our lab grown diamond eternity band, Natalie! We are delighted to hear that you adore it.",
        helpful: { yes: 0, no: 0 },
        companyname: "JewellsJewels"
    },
    {
        id: 6,
        userName: "Natalie S.",
        isVerified: true,
        rating: 5,
        media: "https://via.placeholder.com/150",
        reviewText: "I have wanted an eternity band for so long. When I learned about lab grown diamonds I got super excited about the price and more ethical means of sourcing. I ADORE this ring!",
        productReviewed: "3 ctw Oval Lab Grown Diamond Eternity Band - 4.2mm",
        date: "05/17/24",
        reply: "Thank you for choosing our lab grown diamond eternity band, Natalie! We are delighted to hear that you adore it.",
        helpful: { yes: 0, no: 0 },
        companyname: "JewellsJewels"
    },
    // Add more sample reviews for pagination testing
];

const Reviews = () => {
    const [reviews, setReviews] = useState(sampleReviews);
    const [searchText, setSearchText] = useState("");
    const [ratingFilter, setRatingFilter] = useState("");
    const [mediaFilter, setMediaFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Page state
    const reviewsPerPage = 5; // Max reviews per page

    // Helper function to filter reviews based on search text, rating, and media
    const filteredReviews = reviews.filter((review) => {
        const matchesSearch = review.reviewText.toLowerCase().includes(searchText.toLowerCase());
        const matchesRating = ratingFilter ? review.rating === parseInt(ratingFilter) : true;
        const matchesMedia = mediaFilter ? !!review.media : true;
        return matchesSearch && matchesRating && matchesMedia;
    });

    // Calculate the current reviews based on pagination
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

    // Handling like/dislike click events
    const handleHelpfulClick = (reviewId, type) => {
        const updatedReviews = reviews.map((review) => {
            if (review.id === reviewId) {
                return {
                    ...review,
                    helpful: {
                        ...review.helpful,
                        [type]: review.helpful[type] + 1,
                    },
                };
            }
            return review;
        });
        setReviews(updatedReviews);
    };

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-6 mx-auto max-w-[110rem]">

            {/* Customer Reviews Title */}
            <div className="review-title">
                <h3 className='text-[20px] lg:text-[26px] text-[#323232] font-semibold bg-white text-center mb-[20px] lg:mb-[50px] figtree]'>Customer Reviews</h3>
            </div>

            {/* Review Summary */}
            <div className="review-summary mb-4 flex items-center justify-center space-x-4">
                <div className="text-center">
                    <h3 className="text-[25px] lg:text-[48px] font-semibold text-[#16528F]">4.8</h3>
                </div>
                <div>
                    <div className="flex justify-center text-[25px]">
                        {Array(5).fill(0).map((_, index) => (
                            <span key={index} className="text-[#16528F]">★</span>
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm">62 reviews</p>
                </div>
            </div>

            <button className="bg-[#16528F] text-white items-center py-2 px-4 rounded-3xl mx-auto flex flex-wrap hover:bg-[#7b3128] transition">
                <svg
                    data-v-ac74125e=""
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="yotpo-button-icon me-2"
                >
                    <path
                        d="M10.3896 0L11.2118 1.5415L12.7532 2.36364L11.2118 3.18578L10.3896 4.72727L9.56748 3.18578L8.02599 2.36364L9.56748 1.5415L10.3896 0ZM4.77922 1.94805L6.44155 5.06494L9.55844 6.72729L6.44155 8.38959L4.77922 11.5065L3.11688 8.38959L0 6.72729L3.11688 5.06494L4.77922 1.94805ZM12.0519 9.42857L11.013 7.48052L9.97404 9.42857L8.02599 10.4676L9.97404 11.5065L11.013 13.4545L12.0519 11.5065L14 10.4676L12.0519 9.42857Z"
                        fill="#FFFFFF"
                    />
                </svg>
                <p className='text-[12px]'>See reviews summary</p> 
            </button>

            {/* Filters */}
            <div className="flex flex-wrap items-center my-6">
                <input
                    type="text"
                    placeholder="Search reviews"
                    className="border p-2 rounded-3xl w-[100%] lg:w-[200px] mb-3 lg:mb-0"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <div className="flex items-center space-x-4 lg:ms-3">
                    <select
                        className="border p-2 rounded-3xl"
                        value={ratingFilter}
                        onChange={(e) => setRatingFilter(e.target.value)}
                    >
                        <option value="">Rating</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>

                    <label className="flex items-center space-x-2 border p-2 rounded-3xl">
                        <input
                            type="checkbox"
                            checked={mediaFilter}
                            onChange={(e) => setMediaFilter(e.target.checked)}
                        />
                        <span>With media</span>
                    </label>
                </div>
            </div>

            {/* Reviews List */}
            {currentReviews.length > 0 ? (
                currentReviews.map((review) => (
                    <div key={review.id} className="border-b py-6">
                        <div className="flex flex-wrap items-start md:space-x-4">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                            </div>
                            <div className='ms-2 lg:ms-0'>
                                <p className="text-sm font-semibold">{review.userName}</p>
                                {review.isVerified && (
                                    <p className="text-xs text-[#16528F]">Verified Buyer</p>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center my-2 mt-0">
                                    {Array(review.rating)
                                        .fill(0)
                                        .map((_, index) => (
                                            <span key={index} className="text-[#16528F]">★</span>
                                        ))}
                                    {Array(5 - review.rating)
                                        .fill(0)
                                        .map((_, index) => (
                                            <span key={index} className="text-gray-300">★</span>
                                        ))}
                                    <span className="ml-2 text-sm text-gray-700">Buy it!</span>
                                </div>

                                {review.media && (
                                    <img
                                        src={review.media}
                                        alt="Review media"
                                        className="w-24 h-24 my-2"
                                    />
                                )}
                                <p className="text-sm text-gray-700">{review.reviewText}</p>
                                <p className="text-xs text-gray-500">
                                    Product Reviewed: {review.productReviewed}
                                </p>

                                {review.reply && (
                                    <p className="mt-2 text-xs text-gray-600 italic border-t pt-2 ps-3">
                                        <p className="mb-2 text-sm text-[#16528F] italic">
                                            {review.companyname}
                                        </p>
                                        {review.reply}
                                    </p>
                                )}
                            </div>
                            <div className="text-sm text-gray-500 ms-auto reiewdate">{review.date}</div>
                        </div>

                        <div className="flex items-center lg:justify-end mt-2 space-x-4 text-sm text-gray-600">
                            <p>Was this review helpful?</p>
                            <button
                                className="flex items-center space-x-1"
                                onClick={() => handleHelpfulClick(review.id, "yes")}
                            >
                                <span>👍</span>
                                <span>{review.helpful.yes}</span>
                            </button>
                            <button
                                className="flex items-center space-x-1"
                                onClick={() => handleHelpfulClick(review.id, "no")}
                            >
                                <span>👎</span>
                                <span>{review.helpful.no}</span>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No reviews found.</p>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`px-2 py-1 text-[12px] rounded-md ${currentPage === index + 1 ? 'bg-[#16528F] text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Reviews;
