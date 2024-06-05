import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const Enrollment = ({ auth }) => {
  const [formData, setFormData] = useState({
    term: '2024-2025 - 1st Semester',
    applicationType: '',
    year: '',
    department: '',
    course: '',
  });

  const departmentCourses = {
    CITC: ['Computer Science', 'Information Technology'],
    CEA: ['Engineering', 'Architecture'],
    CON: ['Nursing'],
    // Add more departments and their courses as needed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'department' && { course: '' }), // Reset course if department changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/enroll', formData)
      .then(response => {
        console.log(response.data);
        alert('Enrollment data saved successfully');
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response);
          const errorMessages = error.response.data.errors 
            ? Object.values(error.response.data.errors).flat().join(', ') 
            : 'There was an error with the submission';
          alert('There was an error saving the enrollment data: ' + errorMessages);
        } else if (error.request) {
          console.error('Error request:', error.request);
          alert('No response received from the server');
        } else {
          console.error('Error message:', error.message);
          alert('Error in request setup: ' + error.message);
        }
      });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Enrollment Page</h2>}
    >
      <Head title="Enrollment" />

      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Enrollment Process</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Academic Year & Term</label>
              <input
                type="text"
                name="term"
                value={formData.term}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Application Type</label>
              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Application type -</option>
                <option value="new">New</option>
                <option value="transfer">Transfer</option>
                <option value="returning">Returning</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Grade / Level</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Year Level -</option>
                <option value="1st year - Baccalaureate">1st year - Baccalaureate</option>
                <option value="2nd year - Baccalaureate">2nd year - Baccalaureate</option>
                <option value="3rd year - Baccalaureate">3rd year - Baccalaureate</option>
                <option value="4th year - Baccalaureate">4th year - Baccalaureate</option>
                <option value="5th year - Baccalaureate">5th year - Baccalaureate</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Department -</option>
                <option value="CITC">CITC</option>
                <option value="CEA">CEA</option>
                <option value="CON">CON</option>
                {/* Add more departments as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                disabled={!formData.department} // Disable course selection if no department is selected
              >
                <option value="">- Please select Course -</option>
                {formData.department && departmentCourses[formData.department].map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Submit
            </button>
            <div>
              <button
                className="ml-4 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition duration-150 ease-in-out"
                onClick={() => {
                  window.location.href = '/Enrollment/PersonalInfo';
                }}
              >
                Enrollment Process
              </button>
              <button
                type="button"
                className="ml-4 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition duration-150 ease-in-out"
                onClick={() => {
                  window.history.back();
                }}
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default Enrollment;
