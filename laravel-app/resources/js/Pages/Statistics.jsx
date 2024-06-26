import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

const Statistics = () => {
    return (
        <div className="statistics-container p-6">
            <h1 className="text-3xl font-bold mb-6">Mackenzie Enrollment System</h1>
            
            {/* Pie Charts */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={faChartPie} className="text-5xl text-gray-500 mb-4" />
                    <h2 className="text-xl font-bold">Students</h2>
                    <p className="text-gray-600">Pie Chart</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={faChartPie} className="text-5xl text-gray-500 mb-4" />
                    <h2 className="text-xl font-bold">Enrollment</h2>
                    <p className="text-gray-600">Pie Chart</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={faChartPie} className="text-5xl text-gray-500 mb-4" />
                    <h2 className="text-xl font-bold">Classes</h2>
                    <p className="text-gray-600">Pie Chart</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={faChartPie} className="text-5xl text-gray-500 mb-4" />
                    <h2 className="text-xl font-bold">Professors</h2>
                    <p className="text-gray-600">Pie Chart</p>
                </div>
            </div>

            {/* Recent Activities and Important Deadlines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Pending</h3>
                        <div className="bg-gray-100 p-2 rounded mb-2">
                            <p><strong>Name:</strong> Johnny Bravo</p>
                            <p><strong>Course:</strong> Computer Science</p>
                            <p><strong>Status:</strong> Pending Approval</p>
                            <p><strong>Date:</strong> May 30, 2024</p>
                        </div>
                        <div className="bg-gray-100 p-2 rounded">
                            <p><strong>Name:</strong> Cardo Dalisay</p>
                            <p><strong>Course:</strong> Computer Science</p>
                            <p><strong>Status:</strong> Pending Approval</p>
                            <p><strong>Date:</strong> June 4, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Important Deadline</h2>
                    <div className="bg-gray-100 p-2 rounded">
                        <p><strong>Name:</strong> Le Mineral</p>
                        <p><strong>Course:</strong> Computer Science</p>
                        <p><strong>Fees:</strong> 24,000</p>
                        <p><strong>Deadline:</strong> January 1, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
