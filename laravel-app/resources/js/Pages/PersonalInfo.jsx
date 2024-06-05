import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const PersonalInfo = ({ auth }) => {
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/personal-info', formData)
      .then(response => {
        console.log(response.data);
        alert('Personal information saved successfully');
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response);
          const errorMessages = error.response.data.errors 
            ? Object.values(error.response.data.errors).flat().join(', ') 
            : 'There was an error with the submission';
          alert('There was an error saving the personal information: ' + errorMessages);
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
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Personal Information</h2>}
    >
      <Head title="Personal Info" />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Please provide your personal information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                    name="Fname"
                    value={formData.Fname}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                    name="Lname"
                    value={formData.Lname}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Date of Birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Select Gender -</option>
                <option value="new">Male</option>
                <option value="transfer">Female</option>
                <option value="returning">Prefer not to say</option>
              </select>
            </div>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
          <button
            type="button" 
            className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default PersonalInfo;
