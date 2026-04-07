"use client"

import { useState, useEffect } from "react"
import { CalendarDays, Clock, Filter, Search, Download, Printer, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/appointments")

      if (!response.ok) {
        throw new Error("Failed to fetch appointments")
      }

      const data = await response.json()
      console.log(data)
      setAppointments(data.data || [])
    } catch (error) {
      console.error("Error fetching appointments:", error)
      toast({
        title: "Error",
        description: "Failed to load appointments. Please try again.",
        variant: "destructive",
      })
      // Use mock data if API fails
      setAppointments([
        {
          _id: "680509756c21df8916a6a600",
          patientName: "mahesh shinde",
          patientEmail: "john.doe@example.com", 
          patientPhone: "1234567890",
          appointmentDate: "2024-04-25T00:00:00.000Z",
          appointmentTime: "10:00",
          doctorName: "Dr. Sarah Smith",
          department: "Cardiology",
          status: "pending",
          notes: "Regular checkup",
          createdAt: "2025-04-20T14:49:25.238Z"
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const updateAppointmentStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error("Failed to update appointment status")
      }

      // Update local state
      setAppointments(
        appointments.map((appointment) => (appointment._id === id ? { ...appointment, status } : appointment)),
      )

      toast({
        title: "Status Updated",
        description: `Appointment #${id} status changed to ${status}`,
      })
    } catch (error) {
      console.error("Error updating appointment status:", error)
      toast({
        title: "Error",
        description: "Failed to update appointment status. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handlePrint = () => {
    if (!filteredAppointments.length) {
      toast({
        title: "No Data",
        description: "There are no appointments to print.",
      })
      return
    }

    const printWindow = window.open("", "_blank", "width=1000,height=700")
    if (!printWindow) {
      toast({
        title: "Popup Blocked",
        description: "Please allow popups to print appointments.",
        variant: "destructive",
      })
      return
    }

    const rows = filteredAppointments
      .map(
        (appointment) => `
          <tr>
            <td>${appointment.patientName}</td>
            <td>${appointment.doctorName}</td>
            <td>${appointment.department}</td>
            <td>${new Date(appointment.appointmentDate).toLocaleDateString()}</td>
            <td>${appointment.appointmentTime}</td>
            <td>${appointment.status}</td>
          </tr>
        `,
      )
      .join("")

    printWindow.document.write(`
      <html>
        <head>
          <title>Appointments</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; }
            h1 { margin-bottom: 16px; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
            th { background: #eff6ff; }
          </style>
        </head>
        <body>
          <h1>Appointments</h1>
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }

  const handleExport = () => {
    if (!filteredAppointments.length) {
      toast({
        title: "No Data",
        description: "There are no appointments to export.",
      })
      return
    }

    const headers = ["ID", "Patient", "Email", "Phone", "Doctor", "Department", "Date", "Time", "Status"]
    const escapeCsv = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`

    const lines = filteredAppointments.map((appointment) =>
      [
        appointment._id,
        appointment.patientName,
        appointment.patientEmail,
        appointment.patientPhone,
        appointment.doctorName,
        appointment.department,
        new Date(appointment.appointmentDate).toLocaleDateString(),
        appointment.appointmentTime,
        appointment.status,
      ]
        .map(escapeCsv)
        .join(","),
    )

    const csv = [headers.join(","), ...lines].join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `appointments-${Date.now()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    toast({
      title: "Export Complete",
      description: "Appointments have been exported as CSV.",
    })
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500 hover:bg-green-600">Confirmed</Badge>
      case "pending":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
      case "completed":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Completed</Badge>
      case "cancelled":
        return <Badge className="bg-red-500 hover:bg-red-600">Cancelled</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment =
      departmentFilter === "all" || appointment.department.toLowerCase() === departmentFilter.toLowerCase()
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter

    return matchesSearch && matchesDepartment && matchesStatus
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-100 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
              Appointment Dashboard
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight mb-4 md:text-5xl">Your Appointments</h1>
            <p className="text-lg text-muted-foreground mb-8 md:text-xl">View and manage your existing appointments</p>
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <Card className="border-blue-200 dark:border-blue-900 shadow-xl bg-white/95 dark:bg-slate-950/95 backdrop-blur">
            <CardHeader className="bg-blue-50/80 dark:bg-blue-950/60 rounded-t-lg border-b border-blue-100 dark:border-blue-900">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Your Appointments</CardTitle>
                  <CardDescription>View and manage all your scheduled appointments</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={fetchAppointments}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={handlePrint}
                  >
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={handleExport}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="all">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                  <TabsList className="bg-blue-50/80 dark:bg-blue-950/50 p-1.5">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                  </TabsList>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search appointments..."
                        className="pl-8 w-full sm:w-[250px] border-blue-200 focus:border-blue-400 bg-white dark:bg-slate-900"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="icon" className="border-blue-200">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                    <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                      <SelectTrigger className="w-full sm:w-[180px] border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Filter by department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <TabsContent value="all" className="m-0">
                  {isLoading ? (
                    <div className="flex justify-center items-center py-12">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
                        <p className="text-muted-foreground">Loading appointments...</p>
                      </div>
                    </div>
                  ) : filteredAppointments.length > 0 ? (
                    <div className="rounded-xl border border-blue-200 dark:border-blue-900 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b bg-blue-50 dark:bg-blue-900">
                              <th className="px-4 py-3 text-left font-medium">ID</th>
                              <th className="px-4 py-3 text-left font-medium">Patient</th>
                              <th className="px-4 py-3 text-left font-medium">Contact</th>
                              <th className="px-4 py-3 text-left font-medium">Doctor</th>
                              <th className="px-4 py-3 text-left font-medium">Department</th>
                              <th className="px-4 py-3 text-left font-medium">Date & Time</th>
                              <th className="px-4 py-3 text-left font-medium">Status</th>
                              <th className="px-4 py-3 text-left font-medium">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredAppointments.map((appointment) => (
                              <tr key={appointment._id} className="border-b hover:bg-blue-50 dark:hover:bg-blue-900/50">
                                <td className="px-4 py-3 text-left">{appointment._id}</td>
                                <td className="px-4 py-3 text-left font-medium">{appointment.patientName}</td>
                                <td className="px-4 py-3 text-left">
                                  <div>
                                    <div>{appointment.patientEmail}</div>
                                    <div>{appointment.patientPhone}</div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-left">{appointment.doctorName}</td>
                                <td className="px-4 py-3 text-left">{appointment.department}</td>
                                <td className="px-4 py-3 text-left">
                                  <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    {new Date(appointment.appointmentDate).toLocaleDateString()}
                                    <Clock className="h-4 w-4 ml-2 text-blue-600 dark:text-blue-400" />
                                    {appointment.appointmentTime}
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-left">{getStatusBadge(appointment.status)}</td>
                                <td className="px-4 py-3 text-left">
                                  <div className="flex items-center gap-2">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                                    >
                                      View
                                    </Button>
                                    <Select
                                      value={appointment.status}
                                      onValueChange={(value) => updateAppointmentStatus(appointment._id, value)}
                                    >
                                      <SelectTrigger className="h-8 w-[110px] border-blue-200 focus:border-blue-400">
                                        <SelectValue placeholder="Change status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="confirmed">Confirmed</SelectItem>
                                        <SelectItem value="completed">Completed</SelectItem>
                                        <SelectItem value="cancelled">Cancelled</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 border rounded-md border-blue-200 dark:border-blue-900">
                      <p className="text-muted-foreground">No appointments found</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="upcoming" className="m-0">
                  <div className="rounded-md border border-blue-200 dark:border-blue-900">
                    <div className="p-8 text-center">
                      <p>Showing upcoming appointments</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="m-0">
                  <div className="rounded-md border border-blue-200 dark:border-blue-900">
                    <div className="p-8 text-center">
                      <p>Showing completed appointments</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="pending" className="m-0">
                  <div className="rounded-md border border-blue-200 dark:border-blue-900">
                    <div className="p-8 text-center">
                      <p>Showing pending appointments</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need to Schedule a New Appointment?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our online booking system makes it easy to schedule appointments with our specialists.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/booking">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
