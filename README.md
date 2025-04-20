# Hospital Appointment System - Backend

This is the backend server for the Hospital Appointment System, built with Node.js, Express, and MongoDB.

## Features

- RESTful API for appointment management
- MongoDB database integration
- CORS enabled for frontend communication
- Error handling and validation
- Environment variable configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:3000
```

4. Start the development server
```bash
npm run dev
```

## API Endpoints

### Appointments

- `POST /api/appointments` - Create a new appointment
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get a single appointment
- `PATCH /api/appointments/:id/status` - Update appointment status
- `DELETE /api/appointments/:id` - Delete an appointment

### Request/Response Examples

#### Create Appointment
```json
// Request
{
    "patientName": "John Doe",
    "patientEmail": "john.doe@example.com",
    "patientPhone": "1234567890",
    "appointmentDate": "2024-04-25",
    "appointmentTime": "10:00",
    "doctorName": "Dr. Sarah Smith",
    "department": "Cardiology",
    "notes": "Regular checkup"
}

// Response
{
    "success": true,
    "message": "Appointment created successfully",
    "data": {
        "_id": "...",
        "patientName": "John Doe",
        ...
    }
}
```

#### Update Appointment Status
```json
// Request
{
    "status": "confirmed"
}

// Response
{
    "success": true,
    "message": "Appointment status updated successfully",
    "data": {
        "_id": "...",
        "status": "confirmed",
        ...
    }
}
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middlewares/     # Custom middlewares
│   ├── utils/           # Utility functions
│   ├── db/              # Database connection
│   ├── app.js           # Express app configuration
│   └── index.js         # Server entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## Error Handling

The API uses a consistent error response format:
```json
{
    "success": false,
    "message": "Error message",
    "error": "Detailed error message"
}
```

## Development

1. Start the development server:
```bash
npm run dev
```

2. The server will run on `http://localhost:8000`

## Testing

To test the API endpoints, you can use the provided Postman collection in the `docs` folder.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.


# Hospital Appointment System - Frontend

This is the frontend application for the Hospital Appointment System, built with React.js.

## Features

- Modern and responsive UI
- Appointment booking form with validation
- Appointment management interface
- Real-time status updates
- Department and doctor selection
- Time slot management

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see backend README)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
REACT_APP_API_URL=http://localhost:8000/api
```

4. Start the development server
```bash
npm start
```

## Project Structure

```
frontend/
├── src/
│   ├── components/      # React components
│   │   ├── AppointmentForm.js
│   │   └── AppointmentList.js
│   ├── services/        # API services
│   │   └── appointmentService.js
│   ├── data/           # Dummy data and constants
│   │   └── dummyAppointments.js
│   ├── styles/         # CSS styles
│   │   ├── app.css
│   │   └── appointment.css
│   ├── App.js          # Main application component
│   └── index.js        # Application entry point
├── public/             # Static files
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Components

### AppointmentForm
- Handles appointment booking
- Form validation
- Dynamic doctor selection based on department
- Time slot management

### AppointmentList
- Displays all appointments
- Status management
- Delete functionality
- Sorting and filtering

## API Integration

The frontend communicates with the backend through the following endpoints:

```javascript
// Create appointment
POST /api/appointments

// Get all appointments
GET /api/appointments

// Get single appointment
GET /api/appointments/:id

// Update appointment status
PATCH /api/appointments/:id/status

// Delete appointment
DELETE /api/appointments/:id
```

## Styling

The application uses CSS modules for styling. Main styles are located in:
- `styles/app.css` - Global styles
- `styles/appointment.css` - Appointment-specific styles

## Development

1. Start the development server:
```bash
npm start
```

2. The application will run on `http://localhost:3000`

## Testing

To test the application:
1. Ensure the backend server is running
2. Open the application in your browser
3. Try creating, viewing, updating, and deleting appointments

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.