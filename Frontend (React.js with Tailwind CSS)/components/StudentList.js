import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; // Import axios for HTTP requests

const StudentList = () => { // StudentList component
  const [students, setStudents] = useState([]); // State variable for students list

  useEffect(() => { // Effect hook to fetch students data
    axios.get('/api/students') // Send GET request to fetch students data
      .then(response => setStudents(response.data)) // Set state with received students data
      .catch(error => console.error('Error fetching students:', error)); // Log error if fetching students data fails
  }, []); // Run effect only once on component mount

  return (
    <div> // Main container for StudentList component
      <h2>Student List</h2> // Heading for student list
      <ul> // Unordered list to display students
        {students.map(student => ( // Map over students array to render each student
          <li key={student._id}>{student.name} - {student.age}</li> ///List item for each student with name and age
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
