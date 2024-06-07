import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';


const PersonalInfo = ({ auth }) => {
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    dateOfBirth: '',
    nationality: '',
    civilstatus: '',
    gender: '',
    address: '',
    province: '',
    Fname: '',
    region: '',
    barangay: '',
    religion: '',
    mobileno: '',
    email: '',    
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                <label className="block text-gray-700">Nationalidaci</label>
                <input
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Civil Status </label>
              <select
                name="civilstatus"
                value={formData.civilstatus}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Civil Status -</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Separated">Separated</option>
                <option value="Widow">Widow</option>
             
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700"> Gender </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Gender -</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Halata">Halata</option>
                <option value="Prefer not to say">Prefer not to say</option>
             
              </select>
            </div>
          </div>


          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
           <div className="mb-4">
                <label className="block text-gray-700">House No, Street Address</label>
                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
                <label className="block text-gray-700">Province</label>
                <input
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Region</label>
                <input
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Barangay</label>
                <input
                    name="barangay"
                    value={formData.barangay}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
          </div>

          <br /> 

      
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
                <label className="block text-gray-700">Religion</label>
                <input
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                    name="mobileno"
                    value={formData.mobileno}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"/>
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
