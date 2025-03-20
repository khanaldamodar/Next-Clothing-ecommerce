"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (index: number) => {
    if (favorites.includes(index)) {
      setFavorites(favorites.filter((i) => i !== index))
    } else {
      setFavorites([...favorites, index])
    }
  }

  const products = [
    {
      id: 1,
      image: "/products/4.avif",
      title: "Get up to 5% off discounts",
      background: "bg-yellow-300",
    },
    {
      id: 2,
      image: "/products/5.webp",
      title: "Soothing Cap connected comfort",
      background: "bg-orange-100",
    },
    {
      id: 3,
      image: "/products/3.jpg",
      title: "Wmx rubber zebra shoes",
      background: "bg-amber-300",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const heartVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.2, 1], transition: { duration: 0.3 } },
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16"
      >
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-light leading-tight tracking-tight">
              Access to high- <span className="font-normal">Quality,</span>
              <br />
              <span className="text-5xl font-bold">
                Eco
                <span className="inline-flex items-center justify-center">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="relative w-8 h-8 mx-1"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-green-500"></div>
                    <div className="absolute inset-[3px] rounded-full bg-green-500"></div>
                  </motion.div>
                </span>
                -Friendly
              </span>{" "}
              products
              <br />
              and services{" "}
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 10 }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="inline-block"
              >
                →
              </motion.span>
            </h1>
          </div>
          <div className="flex flex-col items-end">
            <div className="relative">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-400 border-2 border-white overflow-hidden">
                  <Image src="/peoples/pic.jpg" alt="Customer" width={40} height={40} />
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white overflow-hidden">
                  <Image src="/peoples/pfp.jpg" alt="Customer" width={40} height={40} />
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-300 border-2 border-white overflow-hidden">
                  <Image src="/peoples/pfp.jpg" alt="Customer" width={40} height={40} />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm font-medium">
                  +
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <div className="font-bold text-lg">500+</div>
              <div className="text-gray-500 text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            <Link href="/contact">Contact Us</Link>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`relative rounded-3xl overflow-hidden ${product.background} h-[280px]`}
          >
            <div className="absolute top-4 right-4 z-10">
              <motion.button
                onClick={() => toggleFavorite(index)}
                variants={heartVariants}
                animate={favorites.includes(index) ? "animate" : "initial"}
                className="bg-white p-2 rounded-full"
              >
                <Heart
                  className={`w-5 h-5 ${favorites.includes(index) ? "fill-red-500 text-red-500" : "text-gray-500"}`}
                />
              </motion.button>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white px-4 py-1 rounded-full text-sm font-medium"
              >
                Buy Now
              </motion.button>
            </div>
            <div className="absolute bottom-4 left-4 z-10 bg-white p-3 rounded-xl max-w-[180px]">
              <p className="font-medium text-sm">{product.title}</p>
            </div>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 border-t border-b py-4 flex justify-between items-center"
      >
        <div className="w-1/3 border-t border-gray-300"></div>
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-medium">Featured Work</span>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <span>⟳</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

