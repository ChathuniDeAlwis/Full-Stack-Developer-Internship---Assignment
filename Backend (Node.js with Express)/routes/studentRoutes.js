const express = require('express');
const router = express.Router();  // Create router instance
const Student = require('../models/Student');

// CRUD operations for students
router.post('/', async (req, res) => {  // POST route to create a new student
  try {
    const student = new Student(req.body);  // Create a new student instance from request body
    await student.save();  // Save the new student to the database
    res.status(201).json(student);  // Send response with status 201 (created) and the created student
  } catch (error) {
    res.status(400).json({ message: error.message });  // Send error response with status 400 and error message
  }
});

router.get('/', async (req, res) => {  // GET route to retrieve all students
  try {
    const students = await Student.find();  // Find all students in the database
    res.json(students);  // Send response with the list of students
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {  // PUT route to update a student by ID
  try {
    const { id } = req.params;  // Extract student ID from request parameters
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });  // Find and update the student
    res.json(updatedStudent);  // Send response with the updated student
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {  // DELETE route to delete a student by ID
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);  // Find and delete the student
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
