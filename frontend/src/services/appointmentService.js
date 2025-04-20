const API_BASE_URL = 'http://localhost:8000/api';

export const appointmentService = {
  // Create a new appointment
  async createAppointment(appointmentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },

  // Get all appointments
  async getAllAppointments() {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  },

  // Get appointment by ID
  async getAppointmentById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching appointment:', error);
      throw error;
    }
  },

  // Update appointment status
  async updateAppointmentStatus(id, status) {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error updating appointment status:', error);
      throw error;
    }
  },

  // Delete appointment
  async deleteAppointment(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  },
}; 