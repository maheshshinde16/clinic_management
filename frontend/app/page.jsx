import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, Phone, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BookingForm from "@/components/booking-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container px-4 py-16 mx-auto md:py-24 lg:py-32 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              We Provide <span className="text-blue-600 dark:text-blue-400">Medical</span> Services <br />
              That You Can <span className="text-blue-600 dark:text-blue-400">Trust!</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Our clinic offers professional healthcare services with experienced doctors. Book your appointment today
              and experience quality care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/booking">Get Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250420-WA0003.jpg-D1KIdpqpBy0Rljt4sgqyatU9WsFSfh.jpeg"
              alt="Doctor"
              width={600}
              height={600}
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Medical Services</h2>
            <p className="text-muted-foreground">
              We provide a wide range of medical services to meet your healthcare needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="bg-blue-600 text-white hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">24/7 emergency services available for urgent medical needs.</p>
                <p className="font-bold">+880 1234 56789</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <CalendarDays className="h-5 w-5" />
                  Doctors Timetable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Check our doctors' availability and schedule your appointment.</p>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600" asChild>
                  <Link href="/doctors" className="flex items-center gap-1">
                    View Timetable <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Clock className="h-5 w-5" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 - 14:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/medical-team.jpg"
                alt="Medical Team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Choose MediPlus?</h2>
              <p className="text-muted-foreground">
                We are committed to providing the highest quality healthcare services with compassion and excellence.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Experienced Doctors</h3>
                    <p className="text-muted-foreground">
                      Our team consists of highly qualified medical professionals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Modern Equipment</h3>
                    <p className="text-muted-foreground">
                      We use the latest medical technology for accurate diagnosis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Patient-Centered Care</h3>
                    <p className="text-muted-foreground">Your health and comfort are our top priorities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Affordable Pricing</h3>
                    <p className="text-muted-foreground">Quality healthcare services at reasonable prices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Book Your Appointment</h2>
            <p className="text-muted-foreground">
              Schedule your visit with our specialists. Fill out the form below and we'll confirm your appointment.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-blue-200 dark:border-blue-900 shadow-lg">
              <CardContent className="p-6">
                <BookingForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground">Read testimonials from our satisfied patients</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                comment:
                  "The doctors at MediPlus are incredibly knowledgeable and caring. I always feel well taken care of during my visits.",
                rating: 5,
                image: "/patient-1.jpg",
              },
              {
                name: "Michael Brown",
                comment:
                  "I've been coming to MediPlus for years. The staff is friendly, appointments are easy to schedule, and the care is top-notch.",
                rating: 5,
                image: "/patient-2.jpg",
              },
              {
                name: "Emily Wilson",
                comment:
                  "The online booking system is so convenient! I was able to schedule my appointment quickly and received excellent care.",
                rating: 4,
                image: "/patient-3.jpg",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="hover:shadow-lg transition-all border-blue-200 dark:border-blue-900">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Appointments Preview */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Appointments</h2>
            <p className="text-muted-foreground">
              Here are some of our recently scheduled appointments. We're committed to providing timely care.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-all border-blue-200 dark:border-blue-900">
                <CardHeader className="bg-blue-50 dark:bg-blue-900 rounded-t-lg">
                  <CardTitle>Appointment #{i}</CardTitle>
                  <CardDescription>{new Date(Date.now() - i * 86400000).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Patient:</span>
                      <span>John Doe</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Doctor:</span>
                      <span>Dr. Sarah Smith</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Department:</span>
                      <span>Cardiology</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Status:</span>
                      <span className="text-green-600">Confirmed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/appointments" className="flex items-center gap-1">
                View All Appointments <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
