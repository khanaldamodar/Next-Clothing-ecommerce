"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Heart, ShoppingBag, User, ChevronDown, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useMediaQuery } from "@/hooks/use-mobile"

// Types
type Product = {
  id: number
  name: string
  category: string
  subCategory: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  image: string
  inStock: boolean
  isBestSeller: boolean
  isNew: boolean
}

type FilterOption = {
  id: string
  label: string
}

type ActiveFilter = {
  type: string
  value: string
}

export default function BeautyShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([])
  const [priceRange, setPriceRange] = useState([10, 100])
  const [sortBy, setSortBy] = useState("Default Sorting")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Categories
  const categories: FilterOption[] = [
    { id: "skin-care", label: "Skin Care" },
    { id: "makeup", label: "Makeup" },
    { id: "hair-care", label: "Hair Care" },
    { id: "fragrances", label: "Fragrances" },
    { id: "nail-care", label: "Nail Care" },
    { id: "body-care", label: "Body Care" },
  ]

  // Skin Types
  const skinTypes: FilterOption[] = [
    { id: "normal", label: "Normal" },
    { id: "oily", label: "Oily" },
    { id: "dry", label: "Dry" },
    { id: "combination", label: "Combination" },
    { id: "sensitive", label: "Sensitive" },
  ]

  // Star Ratings
  const ratings: FilterOption[] = [
    { id: "5-star", label: "5 Star" },
    { id: "4-star", label: "4 Star" },
    { id: "3-star", label: "3 Star" },
    { id: "2-star", label: "2 Star" },
    { id: "1-star", label: "1 Star" },
  ]

  // Promotions
  const promotions: FilterOption[] = [
    { id: "new-arrivals", label: "New Arrivals" },
    { id: "best-sellers", label: "Best Sellers" },
    { id: "on-sale", label: "On Sale" },
  ]

  // Availability
  const availability: FilterOption[] = [
    { id: "in-stock", label: "In Stock" },
    { id: "out-of-stock", label: "Out of Stocks" },
  ]

  // Sample products data
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: 1,
        name: "SilkSculpt Serum",
        category: "Skin Care",
        subCategory: "",
        price: 35.0,
        originalPrice: 70.0,
        discount: 50,
        rating: 4.9,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: false,
      },
      {
        id: 2,
        name: "SilkSkin Serum",
        category: "Skin Care",
        subCategory: "",
        price: 48.0,
        originalPrice: 60.0,
        discount: 20,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: true,
        isNew: false,
      },
      {
        id: 3,
        name: "Argan Glow",
        category: "Hair Care",
        subCategory: "",
        price: 63.0,
        originalPrice: 90.0,
        discount: 30,
        rating: 5.0,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: false,
      },
      {
        id: 4,
        name: "Nephrolepis exaltata",
        category: "Body Care",
        subCategory: "",
        price: 45.0,
        originalPrice: 50.0,
        discount: 10,
        rating: 5.0,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: true,
      },
      {
        id: 5,
        name: "Smooth Foundation",
        category: "Makeup",
        subCategory: "",
        price: 20.0,
        originalPrice: 40.0,
        discount: 50,
        rating: 5.0,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: false,
      },
      {
        id: 6,
        name: "Smooth Body Cream",
        category: "Body Care",
        subCategory: "",
        price: 30.0,
        originalPrice: 60.0,
        discount: 50,
        rating: 5.0,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: false,
      },
      {
        id: 7,
        name: "AquaAura Wellness",
        category: "Body Care",
        subCategory: "",
        price: 30.0,
        originalPrice: 60.0,
        discount: 50,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: false,
      },
      {
        id: 8,
        name: "Velvet Rose",
        category: "Makeup",
        subCategory: "",
        price: 10.0,
        originalPrice: 20.0,
        discount: 50,
        rating: 4.9,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: false,
      },
      {
        id: 9,
        name: "Herbal Haven",
        category: "Body Care",
        subCategory: "",
        price: 10.0,
        originalPrice: 20.0,
        discount: 50,
        rating: 5.0,
        image: "/placeholder.svg?height=300&width=300",
        inStock: true,
        isBestSeller: false,
        isNew: false,
      },
    ]

    setProducts(sampleProducts)
    setFilteredProducts(sampleProducts)
  }, [])

  // Filter products based on active filters
  useEffect(() => {
    let result = [...products]

    activeFilters.forEach((filter) => {
      switch (filter.type) {
        case "category":
          result = result.filter((product) => product.category === filter.value)
          break
        case "price":
          result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
          break
        case "inStock":
          result = result.filter((product) => product.inStock)
          break
        case "bestSeller":
          result = result.filter((product) => product.isBestSeller)
          break
      }
    })

    setFilteredProducts(result)
  }, [activeFilters, products, priceRange])

  // Add or remove filter
  const toggleFilter = (type: string, value: string) => {
    const filterExists = activeFilters.some((filter) => filter.type === type && filter.value === value)

    if (filterExists) {
      setActiveFilters(activeFilters.filter((filter) => !(filter.type === type && filter.value === value)))
    } else {
      setActiveFilters([...activeFilters, { type, value }])
    }
  }

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters([])
    setPriceRange([10, 100])
  }

  // Remove specific filter
  const removeFilter = (filter: ActiveFilter) => {
    setActiveFilters(activeFilters.filter((f) => !(f.type === filter.type && f.value === filter.value)))
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filters
            </Button>
          </div>

          {/* Mobile Filters Drawer */}
          <AnimatePresence>
            {mobileFiltersOpen && (
              <motion.div
                className="fixed inset-0 z-50 bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button onClick={() => setMobileFiltersOpen(false)}>
                      <X size={20} />
                    </button>
                  </div>

                  {/* Filter content - same as desktop but in drawer */}
                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="font-medium mb-3">By Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center">
                            <Checkbox
                              id={`mobile-${category.id}`}
                              checked={activeFilters.some((f) => f.type === "category" && f.value === category.label)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  toggleFilter("category", category.label)
                                } else {
                                  toggleFilter("category", category.label)
                                }
                              }}
                            />
                            <Label htmlFor={`mobile-${category.id}`} className="ml-2 text-sm">
                              {category.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skin Type */}
                    <div>
                      <h3 className="font-medium mb-3">By Skin Type</h3>
                      <div className="space-y-2">
                        {skinTypes.map((type) => (
                          <div key={type.id} className="flex items-center">
                            <Checkbox
                              id={`mobile-${type.id}`}
                              checked={activeFilters.some((f) => f.type === "skinType" && f.value === type.label)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  toggleFilter("skinType", type.label)
                                } else {
                                  toggleFilter("skinType", type.label)
                                }
                              }}
                            />
                            <Label htmlFor={`mobile-${type.id}`} className="ml-2 text-sm">
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="font-medium mb-3">Price</h3>
                      <div className="px-1">
                        <Slider
                          value={priceRange}
                          min={0}
                          max={200}
                          step={1}
                          onValueChange={setPriceRange}
                          className="mb-4"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>${priceRange[0].toFixed(2)}</span>
                          <span>${priceRange[1].toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <Button
                      className="w-full bg-[#1b4d2c] hover:bg-[#143d22]"
                      onClick={() => {
                        toggleFilter("price", `$${priceRange[0]} - $${priceRange[1]}`)
                        setMobileFiltersOpen(false)
                      }}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Filter Options</h2>

              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">By Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox
                          id={category.id}
                          checked={activeFilters.some((f) => f.type === "category" && f.value === category.label)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              toggleFilter("category", category.label)
                            } else {
                              toggleFilter("category", category.label)
                            }
                          }}
                        />
                        <Label htmlFor={category.id} className="ml-2 text-sm">
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skin Type */}
                <div>
                  <h3 className="font-medium mb-3">By Skin Type</h3>
                  <div className="space-y-2">
                    {skinTypes.map((type) => (
                      <div key={type.id} className="flex items-center">
                        <Checkbox
                          id={type.id}
                          checked={activeFilters.some((f) => f.type === "skinType" && f.value === type.label)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              toggleFilter("skinType", type.label)
                            } else {
                              toggleFilter("skinType", type.label)
                            }
                          }}
                        />
                        <Label htmlFor={type.id} className="ml-2 text-sm">
                          {type.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price</h3>
                  <div className="px-1">
                    <Slider
                      value={priceRange}
                      min={0}
                      max={200}
                      step={1}
                      onValueChange={setPriceRange}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>${priceRange[0].toFixed(2)}</span>
                      <span>${priceRange[1].toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Reviews */}
                <div>
                  <h3 className="font-medium mb-3">Review</h3>
                  <div className="space-y-2">
                    {ratings.map((rating) => (
                      <div key={rating.id} className="flex items-center">
                        <Checkbox
                          id={rating.id}
                          checked={activeFilters.some((f) => f.type === "rating" && f.value === rating.label)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              toggleFilter("rating", rating.label)
                            } else {
                              toggleFilter("rating", rating.label)
                            }
                          }}
                        />
                        <Label htmlFor={rating.id} className="ml-2 flex items-center">
                          {Array.from({ length: Number.parseInt(rating.label.split(" ")[0]) }).map((_, i) => (
                            <Star key={i} size={14} fill="#FFD700" stroke="#FFD700" className="mr-0.5" />
                          ))}
                          {Array.from({ length: 5 - Number.parseInt(rating.label.split(" ")[0]) }).map((_, i) => (
                            <Star key={i} size={14} className="text-gray-300 mr-0.5" />
                          ))}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promotions */}
                <div>
                  <h3 className="font-medium mb-3">By Promotions</h3>
                  <div className="space-y-2">
                    {promotions.map((promo) => (
                      <div key={promo.id} className="flex items-center">
                        <Checkbox
                          id={promo.id}
                          checked={activeFilters.some((f) => f.type === "promotion" && f.value === promo.label)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              toggleFilter("promotion", promo.label)
                            } else {
                              toggleFilter("promotion", promo.label)
                            }
                          }}
                        />
                        <Label htmlFor={promo.id} className="ml-2 text-sm">
                          {promo.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="font-medium mb-3">Availability</h3>
                  <div className="space-y-2">
                    {availability.map((avail) => (
                      <div key={avail.id} className="flex items-center">
                        <Checkbox
                          id={avail.id}
                          checked={activeFilters.some((f) => f.type === "availability" && f.value === avail.label)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              toggleFilter("availability", avail.label)
                            } else {
                              toggleFilter("availability", avail.label)
                            }
                          }}
                        />
                        <Label htmlFor={avail.id} className="ml-2 text-sm">
                          {avail.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                Showing 1-{filteredProducts.length} of {products.length} results
              </div>

              <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
                <div className="flex items-center">
                  <span className="text-sm mr-2">Sort by :</span>
                  <div className="relative">
                    <select
                      className="appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option>Default Sorting</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Popularity</option>
                      <option>Rating</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium">Active Filter:</span>

                  {activeFilters.map((filter, index) => (
                    <motion.div
                      key={`${filter.type}-${filter.value}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                      <span className="mr-1">{filter.type === "price" ? filter.value : `${filter.value}`}</span>
                      <button onClick={() => removeFilter(filter)} className="text-gray-500 hover:text-gray-700">
                        <X size={14} />
                      </button>
                    </motion.div>
                  ))}

                  <button onClick={clearAllFilters} className="text-sm text-[#1b4d2c] hover:underline">
                    Clear All
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <div className="aspect-square bg-gray-100 relative overflow-hidden group">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Discount Badge */}
                        {product.discount > 0 && (
                          <div className="absolute top-4 left-4 bg-[#1b4d2c] text-white text-xs font-medium px-2 py-1 rounded">
                            {product.discount}% off
                          </div>
                        )}

                        {/* Quick Actions */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                          <div className="flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md"
                            >
                              <Heart size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md"
                            >
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
                              >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                              </svg>
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md"
                            >
                              <ShoppingBag size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center mb-1">
                        <span className="text-xs text-gray-500">{product.category}</span>
                        <div className="ml-auto flex items-center">
                          <Star size={12} fill="#FFD700" stroke="#FFD700" />
                          <span className="text-xs ml-1">{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-medium mb-2">{product.name}</h3>

                      <div className="flex items-center">
                        <span className="text-[#1b4d2c] font-medium">${product.price.toFixed(2)}</span>
                        {product.originalPrice > product.price && (
                          <span className="ml-2 text-gray-400 text-sm line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600">
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
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1b4d2c] text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600">
                  3
                </button>
                <span className="w-8 h-8 flex items-center justify-center text-gray-600">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600">
                  10
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600">
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
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-500">Free shipping for order above $50</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Flexible Payment</h3>
                <p className="text-sm text-gray-500">Multiple secure payment options</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">24x7 Support</h3>
                <p className="text-sm text-gray-500">We support online all days</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
