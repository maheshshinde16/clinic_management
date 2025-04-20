import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M19 9H8.5c-.83 0-1.5.67-1.5 1.5S7.67 12 8.5 12H12v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V12h4" />
                <path d="M18 5H9.5C8.67 5 8 5.67 8 6.5S8.67 8 9.5 8H12v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V8h3" />
                <path d="M19 13H8.5c-.83 0-1.5.67-1.5 1.5S7.67 16 8.5 16H12v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h4" />
                <path d="M12 22V6" />
                <path d="M20 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
              </svg>
              <span>MediPlus</span>
            </div>
            <p className="text-blue-100 mb-4">
              Providing quality healthcare services for over 15 years. Our mission is to deliver patient-centered care
              with compassion, excellence, and innovation.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-blue-100 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-blue-100 hover:text-white transition-colors">
                  Appointments
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Dermatology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  General Medicine
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-200 shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  123 Medical Center Drive
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-200 shrink-0" />
                <span className="text-blue-100">+880 1234 56789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-200 shrink-0" />
                <span className="text-blue-100">info@mediplus.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-500 mt-12 pt-6 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} MediPlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
