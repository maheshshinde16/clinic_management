"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Connect to your backend API
      const response = await fetch("http://localhost:8000/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit contact form")
      }

      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-100 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
              We Are Here to Help
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight mb-4 md:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We're here to help. Reach out to us with any questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <MapPin className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  123 Medical Center Drive
                  <br />
                  New York, NY 10001
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <Phone className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Phone Number</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  +880 1234 56789
                  <br />
                  +880 9876 54321
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <Mail className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Email Address</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  info@mediplus.com
                  <br />
                  support@mediplus.com
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 dark:border-blue-900">
              <CardHeader className="text-center">
                <Clock className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle>Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Mon-Fri: 8:00 - 19:00
                  <br />
                  Sat-Sun: 9:00 - 17:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have a question or need to schedule an appointment? Fill out the form and we'll get back to you as
                  soon as possible.
                </p>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have a medical emergency, please call our emergency line directly at{" "}
                    <span className="font-bold text-blue-600 dark:text-blue-400">+880 1234 56789</span>.
                  </p>
                  <p className="text-muted-foreground">
                    For general inquiries, you can also email us at{" "}
                    <span className="font-bold text-blue-600 dark:text-blue-400">info@mediplus.com</span>.
                  </p>
                </div>
              </div>
              <div>
                <Card className="border-blue-200 dark:border-blue-900 shadow-xl bg-white/95 dark:bg-slate-950/95 backdrop-blur">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-blue-200 focus:border-blue-400"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-blue-200 focus:border-blue-400"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-blue-200 focus:border-blue-400"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border-blue-200 focus:border-blue-400"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Your Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="border-blue-200 focus:border-blue-400"
                            required
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-white dark:bg-gray-950">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MediPlus Location"
            className="grayscale"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
