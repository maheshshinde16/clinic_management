import React, { useState } from 'react';
import { AppointmentForm } from './components/AppointmentForm';
import { AppointmentList } from './components/AppointmentList';
import './styles/appointment.css';

function App() {
  const [activeTab, setActiveTab] = useState('book'); // 'book' or 'view'

  return (
    <div className="app">
      <header>
        <h1>Hospital Appointment System</h1>
        <nav>
          <button
            className={`tab-btn ${activeTab === 'book' ? 'active' : ''}`}
            onClick={() => setActiveTab('book')}
          >
            Book Appointment
          </button>
          <button
            className={`tab-btn ${activeTab === 'view' ? 'active' : ''}`}
            onClick={() => setActiveTab('view')}
          >
            View Appointments
          </button>
        </nav>
      </header>

      <main>
        {activeTab === 'book' ? <AppointmentForm /> : <AppointmentList />}
      </main>
    </div>
  );
}

export default App; 