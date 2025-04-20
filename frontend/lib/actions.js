"use server"

import { revalidatePath } from "next/cache"

// Function to create a new appointment
export async function createAppointment(formData) {
  try {
    const appointmentData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      department: formData.get("department"),
      doctor: formData.get("doctor"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    }

    // Connect to your backend API
    const response = await fetch("http://localhost:8000/api/v1/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to create appointment")
    }

    const data = await response.json()

    // Revalidate the appointments page
    revalidatePath("/appointments")

    return { success: true, appointment: data.appointment }
  } catch (error) {
    console.error("Error creating appointment:", error)
    return { error: "Failed to create appointment" }
  }
}

// Function to get all appointments
export async function getAppointments() {
  try {
    // Connect to your backend API
    const response = await fetch("http://localhost:8000/api/v1/appointments", {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch appointments")
    }

    const data = await response.json()

    return { appointments: data.appointments }
  } catch (error) {
    console.error("Error fetching appointments:", error)
    return { error: "Failed to fetch appointments" }
  }
}

// Function to update appointment status
export async function updateAppointmentStatus(id, status) {
  try {
    // Connect to your backend API
    const response = await fetch(`http://localhost:8000/api/v1/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to update appointment status")
    }

    // Revalidate the appointments page
    revalidatePath("/appointments")

    return { success: true }
  } catch (error) {
    console.error("Error updating appointment:", error)
    return { error: "Failed to update appointment" }
  }
}

// Function to send contact form
export async function sendContactForm(formData) {
  try {
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    // Connect to your backend API
    const response = await fetch("http://localhost:8000/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to send contact form")
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return { error: "Failed to send contact form" }
  }
}
