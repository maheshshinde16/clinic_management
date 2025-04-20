import { useState, useEffect } from 'react';
import { appointmentService } from '../services/appointmentService';

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await appointmentService.getAllAppointments();
      if (response.success) {
        setAppointments(response.data);
      }
    } catch (error) {
      setError('Error fetching appointments');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await appointmentService.updateAppointmentStatus(id, newStatus);
      if (response.success) {
        fetchAppointments(); // Refresh the list
      }
    } catch (error) {
      alert('Error updating appointment status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        const response = await appointmentService.deleteAppointment(id);
        if (response.success) {
          fetchAppointments(); // Refresh the list
        }
      } catch (error) {
        alert('Error deleting appointment');
      }
    }
  };

  if (loading) return <div>Loading appointments...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.patientName}</td>
              <td>{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.department}</td>
              <td>
                <select
                  value={appointment.status}
                  onChange={(e) => handleStatusUpdate(appointment._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(appointment._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 