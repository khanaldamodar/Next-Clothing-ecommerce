import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShoppingBag, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="text-xl font-bold text-white">ShopEase</span>
            </Link>
            <p className="text-sm text-slate-300 max-w-xs">
              Your one-stop destination for all your shopping needs. Quality products, fast delivery, and excellent
              customer service.
            </p>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>123 Commerce St, Shopping City</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Phone className="h-4 w-4 text-slate-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Mail className="h-4 w-4 text-slate-400" />
              <span>contact@shopease.com</span>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/new-arrivals" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products/best-sellers" className="hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/products/deals" className="hover:text-white transition-colors">
                  Deals & Promotions
                </Link>
              </li>
              <li>
                <Link href="/products/clothing" className="hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products/electronics" className="hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm text-slate-300">
              Subscribe to our newsletter for the latest products, offers, and updates.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="https://facebook.com" className="hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://twitter.com" className="hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://instagram.com" className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://linkedin.com" className="hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
            <div className="flex items-center gap-4">
              Social Icons Hru yeta rakhne 
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

