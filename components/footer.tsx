import Link from "next/link"
import { MapPin, Mail, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-coral" />
              <span className="text-lg font-bold font-heading">PureRank Strategies</span>
            </div>
            <p className="text-white/80 mb-4">
              Helping Southern Utah businesses get found first through the Destination Growth System™.
            </p>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>St. George, Utah (Southern Utah)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@purerankstrategies.com" className="hover:text-white transition-colors">
                  info@purerankstrategies.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/why" className="hover:text-white transition-colors">
                  Why PureRank
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/audit" className="hover:text-white transition-colors">
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-heading">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-coral transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-coral transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p className="mb-2">© {new Date().getFullYear()} PureRank Strategies. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
