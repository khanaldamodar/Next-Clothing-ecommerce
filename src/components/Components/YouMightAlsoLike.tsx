import React from 'react'
import { motion } from "framer-motion"

const YouMightAlsoLike = ({relatedProducts}) => {
  return (
     <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8 text-center">You might also like</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative aspect-square bg-gray-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-[#1b4d2c] text-white text-xs font-medium px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill={star <= Math.floor(product.rating) ? "#FFD700" : "none"}
                        stroke="#FFD700"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-0.5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                  <div className="flex items-center">
                    <span className="text-[#1b4d2c] font-medium">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-gray-400 text-xs line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default YouMightAlsoLike