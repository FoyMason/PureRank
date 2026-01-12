"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <MapPin className="h-5 w-5 text-coral flex-shrink-0" />
            <span className="text-lg font-bold font-heading text-gray-900 whitespace-nowrap">PureRank Strategies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              Services
            </Link>
            <Link
              href="/why"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              Industries
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              Testimonials
            </Link>
            <Link href="/audit">
              <Button className="bg-coral hover:bg-coral/90 text-white font-medium whitespace-nowrap text-sm">
                Book a Free Strategy Call
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation  /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 border-t">
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/why"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/testimonials"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link href="/audit">
              <Button className="w-full bg-coral hover:bg-coral/90 text-white font-medium">
                Book a Free Strategy Call
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
