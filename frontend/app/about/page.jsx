import Image from "next/image"
import Link from "next/link"
import { Award, Heart, Users, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-100 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
              Our Mission and Values
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight mb-4 md:text-5xl">About MediPlus</h1>
            <p className="text-lg text-muted-foreground mb-8 md:text-xl">
              Providing quality healthcare services for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, MediPlus has been at the forefront of providing exceptional healthcare services to
                  our community. What started as a small clinic has now grown into a comprehensive medical center with
                  state-of-the-art facilities.
                </p>
                <p>
                  Our mission is to deliver patient-centered care with compassion, excellence, and innovation. We
                  believe in treating the whole person, not just the symptoms, and we strive to make healthcare
                  accessible to everyone.
                </p>
                <p>
                  With a team of highly qualified medical professionals and support staff, we are committed to
                  maintaining the highest standards of medical practice and patient care.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/booking">Book an Appointment</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                alt="Medical Clinic"
                width={600}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div>Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Qualified Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div>Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div>Medical Specialties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">These principles guide everything we do at MediPlus</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We treat every patient with kindness, empathy, and respect, recognizing their unique needs and concerns.
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We strive for the highest standards in medical care, continuously improving our skills and services.
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We act with honesty and transparency in all our interactions with patients and colleagues.
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Teamwork</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We collaborate effectively to provide comprehensive care that addresses all aspects of health.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Quality Healthcare?</h2>
            <p className="text-xl mb-8">
              Book an appointment today and let our expert medical team take care of your health needs.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
