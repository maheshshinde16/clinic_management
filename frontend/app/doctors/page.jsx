import Image from "next/image"
import Link from "next/link"
import { Star, Calendar, Phone, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DoctorsPage() {
  // Dummy doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialty: "Cardiology",
      image: "/doctor-1.jpg",
      rating: 4.9,
      patients: 1200,
      education: "Harvard Medical School",
      experience: "15+ years",
      availability: ["Mon, Wed, Fri: 9:00 AM - 5:00 PM", "Tue, Thu: 10:00 AM - 6:00 PM"],
      about:
        "Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions. He specializes in interventional cardiology and preventive care.",
      contact: {
        email: "dr.smith@mediplus.com",
        phone: "+880 1234 56789",
      },
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      specialty: "Neurology",
      image: "/doctor-2.jpg",
      rating: 4.8,
      patients: 950,
      education: "Johns Hopkins University",
      experience: "12+ years",
      availability: ["Mon, Wed: 8:00 AM - 4:00 PM", "Tue, Thu, Fri: 9:00 AM - 5:00 PM"],
      about:
        "Dr. Johnson is a neurologist specializing in the diagnosis and treatment of disorders of the nervous system. She has particular expertise in headache disorders and multiple sclerosis.",
      contact: {
        email: "dr.johnson@mediplus.com",
        phone: "+880 1234 56790",
      },
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      specialty: "Pediatrics",
      image: "/doctor-3.jpg",
      rating: 4.7,
      patients: 1050,
      education: "Stanford University",
      experience: "10+ years",
      availability: ["Mon-Fri: 9:00 AM - 5:00 PM"],
      about:
        "Dr. Brown is a compassionate pediatrician dedicated to providing comprehensive care for children from birth through adolescence. He has a special interest in childhood development and preventive care.",
      contact: {
        email: "dr.brown@mediplus.com",
        phone: "+880 1234 56791",
      },
    },
    {
      id: 4,
      name: "Dr. Emily Wilson",
      specialty: "Dermatology",
      image: "/doctor-1.jpg",
      rating: 4.9,
      patients: 980,
      education: "Yale School of Medicine",
      experience: "8+ years",
      availability: ["Mon, Wed, Fri: 10:00 AM - 6:00 PM", "Tue, Thu: 9:00 AM - 5:00 PM"],
      about:
        "Dr. Wilson is a dermatologist specializing in medical and cosmetic dermatology. She treats a wide range of skin conditions and is known for her expertise in acne treatment and skin cancer prevention.",
      contact: {
        email: "dr.wilson@mediplus.com",
        phone: "+880 1234 56792",
      },
    },
    {
      id: 5,
      name: "Dr. Robert Davis",
      specialty: "Orthopedics",
      image: "/doctor-2.jpg",
      rating: 4.8,
      patients: 1100,
      education: "University of Pennsylvania",
      experience: "14+ years",
      availability: ["Mon-Thu: 8:00 AM - 4:00 PM", "Fri: 8:00 AM - 12:00 PM"],
      about:
        "Dr. Davis is an orthopedic surgeon specializing in sports medicine and joint replacement. He has helped numerous athletes recover from injuries and return to their peak performance.",
      contact: {
        email: "dr.davis@mediplus.com",
        phone: "+880 1234 56793",
      },
    },
    {
      id: 6,
      name: "Dr. Jennifer Lee",
      specialty: "Obstetrics & Gynecology",
      image: "/doctor-3.jpg",
      rating: 4.9,
      patients: 1300,
      education: "Columbia University",
      experience: "11+ years",
      availability: ["Mon, Wed, Fri: 9:00 AM - 5:00 PM", "Tue, Thu: 10:00 AM - 6:00 PM"],
      about:
        "Dr. Lee is an OB/GYN who provides comprehensive women's healthcare services. She specializes in prenatal care, childbirth, and women's reproductive health.",
      contact: {
        email: "dr.lee@mediplus.com",
        phone: "+880 1234 56794",
      },
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Doctors</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Meet our team of experienced and dedicated healthcare professionals
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Filter */}
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-blue-50 dark:bg-blue-900">
                <TabsTrigger value="all">All Specialties</TabsTrigger>
                <TabsTrigger value="cardiology">Cardiology</TabsTrigger>
                <TabsTrigger value="neurology">Neurology</TabsTrigger>
                <TabsTrigger value="pediatrics">Pediatrics</TabsTrigger>
                <TabsTrigger value="dermatology">Dermatology</TabsTrigger>
                <TabsTrigger value="orthopedics">Orthopedics</TabsTrigger>
              </TabsList>
            </div>

            {/* All Doctors */}
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </TabsContent>

            {/* Filtered by Specialty */}
            {["cardiology", "neurology", "pediatrics", "dermatology", "orthopedics"].map((specialty) => (
              <TabsContent key={specialty} value={specialty} className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {doctors
                    .filter((doctor) => doctor.specialty.toLowerCase() === specialty)
                    .map((doctor) => (
                      <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Medical Team</h2>
            <p className="text-xl mb-8">
              We're always looking for talented and passionate healthcare professionals to join our team.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              View Career Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function DoctorCard({ doctor }) {
  return (
    <Card className="hover:shadow-lg transition-all border-blue-200 dark:border-blue-900 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-blue-600">{doctor.specialty}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{doctor.name}</CardTitle>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span>
            {doctor.rating} ({doctor.patients}+ patients)
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3">{doctor.about}</p>

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
            <div className="text-sm">
              <p className="font-medium">Availability:</p>
              {doctor.availability.map((time, i) => (
                <p key={i} className="text-muted-foreground">
                  {time}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="text-sm text-muted-foreground">{doctor.contact.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="text-sm text-muted-foreground">{doctor.contact.email}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/booking">Book Appointment</Link>
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
            <Link href={`/doctors/${doctor.id}`} className="flex items-center gap-1">
              Profile <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
