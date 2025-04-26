import React, { useEffect, useState } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your Google Places API key and Place ID
  const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';
  const PLACE_ID = 'YOUR_GOOGLE_PLACE_ID';

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        } else {
          setError('No reviews found');
        }
      } catch (err) {
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [API_KEY, PLACE_ID]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">{review.author_name}</h3>
            <p className="text-gray-600">{review.text}</p>
            <span className="text-yellow-500">{review.rating} ★</span>
            <p className="text-sm text-gray-400">{new Date(review.time * 1000).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
