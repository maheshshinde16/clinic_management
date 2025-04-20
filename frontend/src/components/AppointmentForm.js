import { useState, useEffect } from 'react';
import { appointmentService } from '../services/appointmentService';
import { departments, doctors, timeSlots } from '../data/dummyAppointments';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    appointmentDate: '',
    appointmentTime: '',
    doctorName: '',
    department: '',
    notes: ''
  });

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  // Filter doctors based on selected department
  useEffect(() => {
    if (formData.department) {
      const filtered = doctors.filter(doctor => doctor.department === formData.department);
      setFilteredDoctors(filtered);
      // Reset doctor selection when department changes
      setFormData(prev => ({ ...prev, doctorName: '' }));
    } else {
      setFilteredDoctors([]);
    }
  }, [formData.department]);

  // Filter time slots based on selected date
  useEffect(() => {
    if (formData.appointmentDate) {
      // In a real app, you would check available slots from the backend
      setAvailableTimeSlots(timeSlots);
    } else {
      setAvailableTimeSlots([]);
    }
  }, [formData.appointmentDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await appointmentService.createAppointment(formData);
      if (response.success) {
        alert('Appointment booked successfully!');
        // Reset form
        setFormData({
          patientName: '',
          patientEmail: '',
          patientPhone: '',
          appointmentDate: '',
          appointmentTime: '',
          doctorName: '',
          department: '',
          notes: ''
        });
      }
    } catch (error) {
      alert('Error booking appointment. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>Book an Appointment</h2>
      
      <div className="form-group">
        <label>Patient Name</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="patientEmail"
          value={formData.patientEmail}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          name="patientPhone"
          value={formData.patientPhone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Doctor</label>
        <select
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          required
          disabled={!formData.department}
        >
          <option value="">Select Doctor</option>
          {filteredDoctors.map(doctor => (
            <option key={doctor.name} value={doctor.name}>{doctor.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Appointment Date</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="form-group">
        <label>Appointment Time</label>
        <select
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
          disabled={!formData.appointmentDate}
        >
          <option value="">Select Time</option>
          {availableTimeSlots.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="4"
          placeholder="Any additional information or symptoms"
        />
      </div>

      <button type="submit" className="submit-btn">Book Appointment</button>
    </form>
  );
}; 