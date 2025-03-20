"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const products = [
    {
      id: 1,
      name: "Summer grilles dress",
      price: 150,
      rating: 5,
      reviews: 34,
      image: "/products/6.jpg",
      color: "bg-orange-50",
    },
    {
      id: 2,
      name: "Summer Cloth",
      price: 120,
      rating: 5,
      reviews: 32,
      image: "/products/7.jpg",
      color: "bg-blue-400",
    },
    {
      id: 3,
      name: "Water Bottle",
      price: 67,
      rating: 5,
      reviews: 42,
      image: "/products/8.jpg",
      color: "bg-blue-100",
    },
    {
      id: 4,
      name: "Cap",
      price: 67,
      rating: 5,
      reviews: 42,
      image: "/products/1.jpg",
      color: "bg-blue-700",
    },
    {
      id: 5,
      name: "Summer Hat",
      price: 45,
      rating: 4.5,
      reviews: 28,
      image: "/products/2.jpg",
      color: "bg-yellow-200",
    },
  ]

  const visibleProducts = isMobile ? 1 : 4
  const maxIndex = products.length - visibleProducts

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div className="mb-6 md:mb-0">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-4 px-4 py-2 rounded-full border border-gray-300 text-sm"
          >
            See More product
          </motion.button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold max-w-md"
          >
            Top-Selling Product
            <br />
            of the year Collection
          </motion.h1>
        </div>

        <div className="max-w-xs">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 mb-4"
          >
            We do not divide our collections to seasons we create new models every week, and we in a few items
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm"
          >
            Shop Now
          </motion.button>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-end mb-4">
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-1 rounded-full border border-gray-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-1 rounded-full border border-gray-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <div className="overflow-hidden" ref={sliderRef}>
          <motion.div
            className="flex"
            initial={false}
            animate={{
              x: `-${currentIndex * (100 / visibleProducts)}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`flex-shrink-0 w-full md:w-1/4 px-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative group">
                  <div className={`rounded-3xl overflow-hidden ${product.color} aspect-square relative`}>
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    {index === 3 && (
                      <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="absolute bottom-4 right-4">
                        <div className="relative w-12 h-12">
                          <div className="absolute inset-0 rounded-full border-2 border-orange-500"></div>
                          <div className="absolute inset-[3px] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-orange-500">
                              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium">{product.name}</h3>
                      <span className="text-sm font-bold">${product.price}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="flex mr-1">{renderStars(product.rating)}</div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

