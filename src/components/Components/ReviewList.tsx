import React from 'react'

const ReviewList = ({reviews,ratingDistribution, averageRating, totalReviews}) => {
  return (
      <div className="container mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-xl font-medium mb-8">Rating & Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overall Rating */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold mb-1">{averageRating}</div>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={star <= Math.floor(averageRating) ? "#FFD700" : "none"}
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div className="text-sm text-gray-500">({totalReviews} Reviews)</div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center">
                <div className="flex items-center w-12">
                  <span className="text-sm mr-1">{item.stars}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                  <div className="h-2 bg-[#1b4d2c] rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
                <div className="w-8 text-xs text-gray-500">{item.percentage}%</div>
              </div>
            ))}
          </div>

          {/* Empty space for layout balance */}
          <div></div>
        </div>

        {/* Reviews List */}
        <div className="mt-12 space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-8">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill={star <= review.rating ? "#FFD700" : "none"}
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-0.5"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
          
      </div>
  )
}

export default ReviewList