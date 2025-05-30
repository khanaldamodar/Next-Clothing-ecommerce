"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"

export default function ClothingFilter() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const categories = [
    "Tops & T-Shirts",
    "Dresses",
    "Pants & Jeans",
    "Shorts",
    "Skirts",
    "Jackets & Coats",
    "Sweaters & Hoodies",
    "Activewear",
    "Swimwear",
    "Underwear & Sleepwear",
  ]

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]

  const colors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Gray", value: "#808080" },
    { name: "Navy", value: "#000080" },
    { name: "Brown", value: "#8B4513" },
    { name: "Beige", value: "#F5F5DC" },
    { name: "Red", value: "#FF0000" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Orange", value: "#FFA500" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Green", value: "#008000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Purple", value: "#800080" },
  ]

  const brands = [
    "Nike",
    "Adidas",
    "Zara",
    "H&M",
    "Uniqlo",
    "Gap",
    "Levi's",
    "Calvin Klein",
    "Tommy Hilfiger",
    "Ralph Lauren",
  ]

  const materials = [
    "Cotton",
    "Polyester",
    "Wool",
    "Silk",
    "Linen",
    "Denim",
    "Leather",
    "Cashmere",
    "Viscose",
    "Spandex",
  ]

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filterId])
    } else {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
    }
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 500])
  }

  const clearFilter = (filterId: string) => {
    setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          {selectedFilters.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          )}
        </div>

        {/* Active Filters */}
        {selectedFilters.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Active Filters</h3>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <div key={filter} className="flex items-center gap-1 bg-gray-100 text-sm px-2 py-1 rounded-md">
                  <span>{filter}</span>
                  <Button variant="ghost" size="sm" className="h-4 w-4 p-0" onClick={() => clearFilter(filter)}>
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
            <Separator className="mt-4" />
          </div>
        )}

        <Accordion type="multiple" defaultValue={["category", "price", "size"]} className="w-full">
          {/* Department */}
          <AccordionItem value="department">
            <AccordionTrigger className="text-sm font-medium">Department</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {["Women", "Men", "Kids", "Baby"].map((dept) => (
                  <div key={dept} className="flex items-center space-x-2">
                    <Checkbox
                      id={`dept-${dept}`}
                      checked={selectedFilters.includes(dept)}
                      onCheckedChange={(checked) => handleFilterChange(dept, checked as boolean)}
                    />
                    <Label htmlFor={`dept-${dept}`} className="text-sm font-normal">
                      {dept}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Category */}
          <AccordionItem value="category">
            <AccordionTrigger className="text-sm font-medium">Category</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`cat-${category}`}
                      checked={selectedFilters.includes(category)}
                      onCheckedChange={(checked) => handleFilterChange(category, checked as boolean)}
                    />
                    <Label htmlFor={`cat-${category}`} className="text-sm font-normal">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Price Range */}
          <AccordionItem value="price">
            <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Size */}
          <AccordionItem value="size">
            <AccordionTrigger className="text-sm font-medium">Size</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={`size-${size}`}
                      checked={selectedFilters.includes(size)}
                      onCheckedChange={(checked) => handleFilterChange(size, checked as boolean)}
                    />
                    <Label htmlFor={`size-${size}`} className="text-sm font-normal">
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Color */}
          <AccordionItem value="color">
            <AccordionTrigger className="text-sm font-medium">Color</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center space-y-1">
                    <div
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                        selectedFilters.includes(color.name) ? "border-black" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => handleFilterChange(color.name, !selectedFilters.includes(color.name))}
                    />
                    <span className="text-xs text-center">{color.name}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Brand */}
          <AccordionItem value="brand">
            <AccordionTrigger className="text-sm font-medium">Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedFilters.includes(brand)}
                      onCheckedChange={(checked) => handleFilterChange(brand, checked as boolean)}
                    />
                    <Label htmlFor={`brand-${brand}`} className="text-sm font-normal">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Material */}
          <AccordionItem value="material">
            <AccordionTrigger className="text-sm font-medium">Material</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {materials.map((material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox
                      id={`material-${material}`}
                      checked={selectedFilters.includes(material)}
                      onCheckedChange={(checked) => handleFilterChange(material, checked as boolean)}
                    />
                    <Label htmlFor={`material-${material}`} className="text-sm font-normal">
                      {material}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Availability */}
          <AccordionItem value="availability">
            <AccordionTrigger className="text-sm font-medium">Availability</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {["In Stock", "On Sale", "New Arrivals", "Limited Edition"].map((availability) => (
                  <div key={availability} className="flex items-center space-x-2">
                    <Checkbox
                      id={`avail-${availability}`}
                      checked={selectedFilters.includes(availability)}
                      onCheckedChange={(checked) => handleFilterChange(availability, checked as boolean)}
                    />
                    <Label htmlFor={`avail-${availability}`} className="text-sm font-normal">
                      {availability}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Apply Filters Button */}
        <div className="mt-6 pt-6 border-t">
          <Button className="w-full">Apply Filters ({selectedFilters.length})</Button>
        </div>
      </div>
    </div>
  )
}
