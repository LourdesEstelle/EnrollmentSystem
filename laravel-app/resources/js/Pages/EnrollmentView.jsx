// resources/js/Pages/EnrollmentView.jsx
import React from 'react';

const EnrollmentView = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">View Enrollment</h2>
      <div className="flex">
        <div className="w-1/2 p-2">
          <h3 className="font-bold mb-2">Enrolled</h3>
          <div className="bg-gray-100 p-2 rounded-lg mb-2">
            <p><strong>Name:</strong> Nature Spring</p>
            <p><strong>Course:</strong> Computer Science</p>
            <p><strong>Status:</strong> Enrolled</p>
            <p><strong>Date:</strong> May 30, 2024</p>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg">
            <p><strong>Name:</strong> Ganda Mo</p>
            <p><strong>Course:</strong> Computer Science</p>
            <p><strong>Status:</strong> Enrolled</p>
            <p><strong>Date:</strong> June 4, 2024</p>
          </div>
        </div>
        <div className="w-1/2 p-2">
          <h3 className="font-bold mb-2">Pending</h3>
          <div className="bg-gray-100 p-2 rounded-lg mb-2">
            <p><strong>Name:</strong> Johnny Bravo</p>
            <p><strong>Course:</strong> Computer Science</p>
            <p><strong>Status:</strong> Pending Approval</p>
            <p><strong>Date:</strong> May 30, 2024</p>
            <div className="flex space-x-2 mt-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentView;
