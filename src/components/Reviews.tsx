import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Send, ThumbsUp, Share2 } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
  scores?: string[];
  image?: string;
  likes?: number;
  shares?: number;
}

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedReviews, setLikedReviews] = useState<Set<number>>(new Set());
  const [sharedReviews, setSharedReviews] = useState<Set<number>>(new Set());

  const reviews: Review[] = [
    {
      id: 1,
      name: "Hariharan Radhakrishnan",
      comment: "Proper information about the colleges. Now I can speak a very fluent German. Thanks to my teacher Gowtham sir for giving me the clear and proper information about the German course",
      rating: 5,
      date: "a month ago",
      scores: ["A1 - 91%", "A2 - 88%", "B1 - 83%"],
      image: "https://lh3.googleusercontent.com/a/ACg8ocJHYxLqhxqEHj3kx9XY8S-0KhqXTgJXBJGJR_vhIA=w60-h60-p-rp-mo-br100",
      likes: 12,
      shares: 5
    },
    {
      id: 2,
      name: "Dhanush Balakrishnan",
      comment: "I am incredibly grateful for my teacher's excellent guidance throughout my German learning journey. Their teaching style made complex grammar concepts easy to understand. With their support, I achieved 86% on my Goethe certificate test! The lessons were engaging, and I always felt encouraged to practice speaking. Highly recommend to anyone looking to master German!",
      rating: 5,
      date: "a month ago",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWxPWlQmQkjvXGJ7JF5k-VCz7vzVB5bRoQDQKQpXQ=w60-h60-p-rp-mo-br100",
      likes: 15,
      shares: 8
    },
    {
      id: 3,
      name: "Dhanush R",
      comment: "Good teaching and perfect guidance for the pg program University of applied science frankfurt",
      rating: 5,
      date: "a month ago",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUBrmnqLTj9wHJgPd5n4tQZgYBM7bz8R3MMCYDxVw=w60-h60-p-rp-mo-br100",
      likes: 8,
      shares: 3
    },
    {
      id: 4,
      name: "Subarth .G",
      comment: "Good teaching and scored 98/100 in A1. Going to continue A2 and B1",
      rating: 5,
      date: "4 months ago",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVxEI_JGUWwUvnOPSM9qJyW8kR_nUHF_8Lo7vhK=w60-h60-p-rp-mo-br100",
      likes: 20,
      shares: 12
    },
    {
      id: 5,
      name: "BALAMURUGAN N",
      comment: "Thank you sir. Goethe prüfung A1. 91%",
      rating: 5,
      date: "a month ago",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXp9ZHPpQHWH_TJ7vEhVJTKBBYS_jEzQQ4-Kh0vxg=w60-h60-p-rp-mo-br100",
      likes: 10,
      shares: 4
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleLike = (reviewId: number) => {
    setLikedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const handleShare = async (review: Review) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Review from ' + review.name,
          text: review.comment,
          url: window.location.href,
        });
        setSharedReviews(prev => new Set(prev).add(review.id));
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      alert('Share functionality is not supported on this browser');
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Reviews</h2>
          <p className="text-lg text-gray-600">What our students say about their experience</p>
        </motion.div>

        <div className="relative h-[500px] mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    {reviews[currentIndex].image ? (
                      <img
                        src={reviews[currentIndex].image}
                        alt={reviews[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-indigo-600">
                          {reviews[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-semibold text-lg">{reviews[currentIndex].name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {reviews[currentIndex].date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  <Quote size={24} className="text-indigo-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-8 text-lg">{reviews[currentIndex].comment}</p>
                </div>

                {reviews[currentIndex].scores && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {reviews[currentIndex].scores.map((score, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {score}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between border-t pt-4">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(reviews[currentIndex].id)}
                      className={`flex items-center space-x-2 ${
                        likedReviews.has(reviews[currentIndex].id) ? 'text-indigo-600' : 'text-gray-500'
                      } hover:text-indigo-600 transition-colors`}
                    >
                      <ThumbsUp size={20} className={likedReviews.has(reviews[currentIndex].id) ? 'fill-current' : ''} />
                      <span>{(reviews[currentIndex].likes || 0) + (likedReviews.has(reviews[currentIndex].id) ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => handleShare(reviews[currentIndex])}
                      className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      <Share2 size={20} />
                      <span>{(reviews[currentIndex].shares || 0) + (sharedReviews.has(reviews[currentIndex].id) ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Reviews;