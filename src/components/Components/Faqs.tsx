"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"

export default function Faqs() {
  const [openSection, setOpenSection] = useState("Unrivaled Variety")

  const toggleSection = (title: string) => {
    if (openSection === title) {
      setOpenSection("")
    } else {
      setOpenSection(title)
    }
  }

  const sections = [
    {
      title: "Unrivaled Quality",
      content:
        "Our products are crafted with premium materials and undergo rigorous quality checks to ensure they meet the highest standards in the industry.",
    },
    {
      title: "Sustains bullous",
      content:
        "We're committed to sustainable practices throughout our supply chain, from sourcing materials to packaging and shipping.",
    },
    {
      title: "Unrivaled Variety",
      content: "We believe in offering great value",
    },
    {
      title: "Legacy Of Excellence",
      content:
        "With over 20 years in the industry, our expertise and dedication to excellence have made us a trusted name among our customers.",
    },
  ]

  const features = [
    {
      title: "100% Authentic Product",
      description: 'Prominently display a clear "100% Authentic Guarantee" on your product',
      background: "bg-orange-50",
    },
    {
      title: "Free & Easy Return",
      description: "Provide customers with prepaid return labels to make the process hassle-free.",
      background: "bg-gray-50",
    },
    {
      title: "Safe Payments",
      description: "Use fraud detection tools to identify suspicious activity, such as unusual purchase",
      background: "bg-gray-50",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden bg-blue-200"
        >
          <Image
            src="/products/4.avif"
            alt="Fashion model with colorful outfit"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-3xl p-6 md:p-8"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 mb-6"
          >
            We pride ourselves on offering products that meet the highest standards of quality. Each item is carefully
            selected, tested, and crafted to ensure durability and customer satisfaction.
          </motion.p>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="border-t border-gray-200 pt-4"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="font-medium">{section.title}</span>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    {openSection === section.title ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openSection === section.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pt-2">{section.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            className={`${feature.background} rounded-3xl p-6 ${index === 3 ? "md:col-span-1" : ""}`}
          >
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{feature.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 rounded-full px-4 py-1 text-sm"
            >
              See More
            </motion.button>
          </motion.div>
        ))}

        {/* Summer Cloth Promo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="relative rounded-3xl overflow-hidden bg-blue-500"
        >
          <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white">
              Summer
              <br />
              Cloth
            </h3>
            <div className="absolute top-4 right-4">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 5 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
                className="bg-orange-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center transform rotate-12"
              >
                <span className="text-sm font-bold">30%</span>
                <span className="text-xs font-bold">OFF</span>
              </motion.div>
            </div>
          </div>
          <Image
            src="/products/7.jpg"
            alt="Summer Cloth Promotion"
            width={300}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

