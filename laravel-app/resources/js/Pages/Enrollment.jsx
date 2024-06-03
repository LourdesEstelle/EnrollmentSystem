import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const Enrollment = ({ auth }) => {
  const [formData, setFormData] = useState({
    term: '2024-2025 - 1st Semester',
    applicationType: '',
    academicProgram: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Enrollment Process</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
              <label className="block text-gray-700">Academic Year & Term</label>
              <input
                type="text"
                name="term"
                value={formData.term}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Application Type</label>
              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Application type -</option>
                <option value="new">New</option>
                <option value="transfer">Transfer</option>
                <option value="returning">Returning</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">First Choice Academic Program</label>
              <select
                name="academicProgram"
                value={formData.academicProgram}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md">
             <option value="">None</option>
              <option value="program1">Program 1</option>
              <option value="program2">Program 2</option>
              <option value="program3">Program 3</option>
            </select>
          </div>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </div>
  </AuthenticatedLayout>
);
};

export default Enrollment;

               
