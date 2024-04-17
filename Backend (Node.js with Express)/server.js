const express = require('express');  // Import the Express framework
const mongoose = require('mongoose');  // Import Mongoose for MongoDB interactions
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();  //Create an Express application
app.use(cors());
app.use(express.json());  // Parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/students', studentRoutes);  // Use student routes for requests starting with /api/students
app.use('/api/auth', authRoutes);  // Use authentication routes for requests starting with /api/auth

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {  // Start the server
  console.log(`Server is running on port ${PORT}`);
});
