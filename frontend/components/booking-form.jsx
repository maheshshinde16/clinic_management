"use client"

import { useState } from "react"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export default function BookingForm() {
  const [date, setDate] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    time: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!date) {
      toast({
        title: "Please select a date",
        description: "Appointment date is required",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Connect to your backend API
      const response = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName: formData.name,
          patientEmail: formData.email,
          patientPhone: formData.phone,
          appointmentDate: date ? format(date, "yyyy-MM-dd") : undefined,
          appointmentTime: formData.time,
          doctorName: formData.doctor,
          department: formData.department,
          notes: formData.message
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to book appointment: ${response.status}`)
      }

      toast({
        title: "Appointment Booked",
        description: "We've received your booking request and will confirm shortly.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        time: "",
        message: "",
      })
      setDate(undefined)
    } catch (error) {
      console.error("Error booking appointment:", error)
      toast({
        title: "Error",
        description:
          error?.message === "Failed to fetch"
            ? "Unable to reach backend API. Make sure backend is running and CORS is configured."
            : "There was a problem booking your appointment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="border-blue-200 focus:border-blue-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="border-blue-200 focus:border-blue-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="border-blue-200 focus:border-blue-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select value={formData.department} onValueChange={(value) => handleSelectChange("department", value)}>
            <SelectTrigger id="department" className="border-blue-200 focus:border-blue-400">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="dermatology">Dermatology</SelectItem>
              <SelectItem value="general">General Medicine</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="doctor">Doctor</Label>
          <Select value={formData.doctor} onValueChange={(value) => handleSelectChange("doctor", value)}>
            <SelectTrigger id="doctor" className="border-blue-200 focus:border-blue-400">
              <SelectValue placeholder="Select doctor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr-smith">Dr. John Smith</SelectItem>
              <SelectItem value="dr-johnson">Dr. Sarah Johnson</SelectItem>
              <SelectItem value="dr-brown">Dr. Michael Brown</SelectItem>
              <SelectItem value="dr-wilson">Dr. Emily Wilson</SelectItem>
              <SelectItem value="dr-davis">Dr. Robert Davis</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Appointment Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal border-blue-200 focus:border-blue-400",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  // Disable past dates and weekends
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)
                  const day = date.getDay()
                  return date < today || day === 0
                }}
                className="border-blue-200"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Appointment Time</Label>
          <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
            <SelectTrigger id="time" className="border-blue-200 focus:border-blue-400">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">09:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="12:00">12:00 PM</SelectItem>
              <SelectItem value="14:00">02:00 PM</SelectItem>
              <SelectItem value="15:00">03:00 PM</SelectItem>
              <SelectItem value="16:00">04:00 PM</SelectItem>
              <SelectItem value="17:00">05:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please share any specific concerns or requirements"
          value={formData.message}
          onChange={handleChange}
          className="border-blue-200 focus:border-blue-400"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </span>
        ) : (
          "Book Appointment"
        )}
      </Button>
    </form>
  )
}
