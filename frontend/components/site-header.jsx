import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
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
        <nav className="hidden md:flex items-center space-x-6 ml-6">
          <Link href="/" className="rounded-full px-3 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 transition-all duration-200 hover:bg-blue-100 hover:-translate-y-0.5 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-900 dark:hover:bg-blue-900/50">
            Home
          </Link>
          <Link
            href="/doctors"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 transition-all duration-200 hover:bg-blue-100 hover:-translate-y-0.5 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-900 dark:hover:bg-blue-900/50"
          >
            Doctors
          </Link>
          <Link
            href="/appointments"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 transition-all duration-200 hover:bg-blue-100 hover:-translate-y-0.5 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-900 dark:hover:bg-blue-900/50"
          >
            Appointments
          </Link>
          <Link
            href="/booking"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 transition-all duration-200 hover:bg-blue-100 hover:-translate-y-0.5 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-900 dark:hover:bg-blue-900/50"
          >
            Book Appointment
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 transition-all duration-200 hover:bg-blue-100 hover:-translate-y-0.5 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-900 dark:hover:bg-blue-900/50"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 transition-all duration-200 hover:bg-blue-100 hover:-translate-y-0.5 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-900 dark:hover:bg-blue-900/50"
          >
            About Us
          </Link>
        </nav>
        <div className="flex items-center ml-auto">
          <ModeToggle />
          <Button asChild className="ml-4 hidden md:flex bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/booking">Book Appointment</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2 md:hidden border-blue-200">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400 mb-8">
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
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </Link>
                <Link
                  href="/doctors"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Doctors
                </Link>
                <Link
                  href="/appointments"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Appointments
                </Link>
                <Link
                  href="/booking"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About Us
                </Link>
                <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/booking">Book Appointment</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
