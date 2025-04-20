import express from 'express';
import { createAppointment, getAllAppointments, getAppointmentById, updateAppointmentStatus, deleteAppointment } from '../controllers/appointment.controller.js';

const router = express.Router();

// Create a new appointment
router.post('/', createAppointment);

// Get all appointments
router.get('/', getAllAppointments);

// Get appointment by ID
router.get('/:id', getAppointmentById);

// Update appointment status
router.patch('/:id/status', updateAppointmentStatus);

// Delete appointment
router.delete('/:id', deleteAppointment);

export default router;