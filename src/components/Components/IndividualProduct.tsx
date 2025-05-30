"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronLeft, ChevronRight, Heart, Search, ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import YouMightAlsoLike from "./YouMightAlsoLike"
import ReviewList from "./ReviewList"

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const productImages = [
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
    "/placeholder.svg?height=600&width=500",
  ]

  const sizes = ["S", "M", "L", "XL", "XXL"]

  const relatedProducts = [
    {
      id: 1,
      name: "Eco-Friendly Cardigan",
      price: 32.0,
      originalPrice: 45.0,
      discount: 30,
      rating: 4.0,
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 2,
      name: "Organic Cotton T-shirt",
      price: 14.5,
      originalPrice: null,
      discount: 0,
      rating: 3.5,
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 3,
      name: "Sustainable Polo Shirt",
      price: 18.0,
      originalPrice: 24.0,
      discount: 25,
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 4,
      name: "Recycled Fabric Jacket",
      price: 32.0,
      originalPrice: 40.0,
      discount: 20,
      rating: 5.0,
      image: "/placeholder.svg?height=300&width=250",
    },
  ]

  const reviews = [
    {
      id: 1,
      name: "Alex Mathis",
      date: "13 Oct 2024",
      rating: 5,
      comment:
        "GreenStyle's dedication to sustainability and ethical practices resonates strongly with today's consumers, positioning the brand as a responsible choice in the fashion industry.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      date: "10 Oct 2024",
      rating: 4,
      comment:
        "The hoodie is super comfortable and I love the eco-friendly materials. Fits perfectly and the color is exactly as shown in the pictures.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  // Calculate average rating
  const averageRating = 4.5
  const totalReviews = 50

  // Rating distribution
  const ratingDistribution = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-[#1b4d2c]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Product details</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10 opacity-80 hover:opacity-100"
              >
                <ChevronLeft size={18} />
              </button>
              <motion.img
                key={currentImage}
                src={productImages[currentImage]}
                alt="Product image"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10 opacity-80 hover:opacity-100"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`w-24 h-24 rounded-md overflow-hidden border-2 ${
                    currentImage === index ? "border-[#1b4d2c]" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-[#1b4d2c] mb-1">Eco Fashion</div>
            <h1 className="text-2xl font-medium mb-2">Organic Cotton Hoodie</h1>
            <div className="text-xl font-medium mb-4">$24.99</div>

            <div className="flex items-center mb-6 text-sm">
              <div className="flex items-center bg-[#e8f5e9] text-[#1b4d2c] px-2 py-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Order by 02:30:25 to get next day delivery
              </div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-medium mb-2">Select Size</div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                      selectedSize === size
                        ? "bg-[#1b4d2c] text-white border-[#1b4d2c]"
                        : "bg-white text-gray-800 border-gray-300 hover:border-[#1b4d2c]"
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-2 mb-8">
              <Button className="flex-1 bg-[#1b4d2c] hover:bg-[#143d22] text-white">Add to Cart</Button>
              <Button
                variant="outline"
                className={`w-12 h-12 p-0 flex items-center justify-center ${
                  isWishlisted ? "text-red-500 border-red-500" : "text-gray-500 border-gray-300"
                }`}
                onClick={toggleWishlist}
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description" className="border-t border-b">
                <AccordionTrigger className="text-base font-medium py-4">Description & Fit</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Organic cotton hoodie in medium weight cotton-blend fabric, with a slightly oversized silhouette,
                    drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and
                    hem. Soft, brushed inside. Made with sustainable materials and eco-friendly production methods.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="border-b">
                <AccordionTrigger className="text-base font-medium py-4">Shipping</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#e8f5e9] flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#1b4d2c]"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <div className="text-sm font-medium">Standard</div>
                      </div>
                      <div className="text-xs text-gray-500 ml-8">Free 3-5 Working Days</div>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#e8f5e9] flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#1b4d2c]"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          </svg>
                        </div>
                        <div className="text-sm font-medium">Express</div>
                      </div>
                      <div className="text-xs text-gray-500 ml-8">$9.99 - Next Day Delivery</div>
                    </div>

                    <div className="col-span-2 mt-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-[#e8f5e9] flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#1b4d2c]"
                          >
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M21 8H8" />
                            <path d="M21 12H8" />
                            <path d="M21 16H8" />
                            <path d="M4 8h.01" />
                            <path d="M4 12h.01" />
                            <path d="M4 16h.01" />
                          </svg>
                        </div>
                        <div className="text-sm font-medium">Delivery Window</div>
                      </div>
                      <div className="text-xs text-gray-500 ml-8">10 - 12 October 2024</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Ratings & Reviews */}
      <ReviewList
        averageRating={averageRating}
        totalReviews={totalReviews}
        ratingDistribution={ratingDistribution}
        reviews={reviews}
        />

      {/* You Might Also Like */}
      <YouMightAlsoLike relatedProducts={relatedProducts} />

    
    </div>
  )
}
