import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Enrollment = ({ auth }) => {
  const [formData, setFormData] = useState({
    campus: '',
    term: '2024-2025 - 1st Semester',
    applicationType: '',
    department: '',
    academicProgram: '',
    lastname: '',
    firstname: '',
    middlename: '',
    contactNumber: '',
    email: '',
    birthday: '',
    age: '',
    fathersName: '',
    fathersOccupation: '',
    mothersName: '',
    mothersOccupation: ''
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
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
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
              <label className="block text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">First Choice Academic Program</label>
              <select
                name="academicProgram"
                value={formData.academicProgram}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">None</option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
                <option value="program3">Program 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Middle Name</label>
              <input
                type="text"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Birthday</label>
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Father's Name</label>
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Father's Occupation</label>
              <input
                type="text"
                name="fathersOccupation"
                value={formData.fathersOccupation}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mother's Name</label>
              <input
                type="text"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mother's Occupation</label>
              <input
                type="text"
                name="mothersOccupation"
                value={formData.mothersOccupation}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default Enrollment;
