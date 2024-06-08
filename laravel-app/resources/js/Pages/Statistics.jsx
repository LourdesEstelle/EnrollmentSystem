import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Statistics = () => {
    return (
        <div className="statistics-container p-6">
            <h1 className="text-3xl font-bold mb-6">Enrollment Statistics</h1>
            <p className="mb-6">Welcome to the Enrollment Statistics page. Here you can explore various statistics related to student enrollments and registrations.</p>
            
            {/* Statistic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUserGraduate} className="text-3xl text-yellow-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">1500</h2>
                            <p className="text-gray-600">Total Enrollments</p>
                        </div>
                    </div>
                    <p className="text-green-500 mt-4">↑ 10% this month</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUserPlus} className="text-3xl text-pink-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">300</h2>
                            <p className="text-gray-600">New Enrollments</p>
                        </div>
                    </div>
                    <p className="text-green-500 mt-4">↑ 5% this month</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUserCheck} className="text-3xl text-blue-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">1200</h2>
                            <p className="text-gray-600">Confirmed Enrollments</p>
                        </div>
                    </div>
                    <p className="text-green-500 mt-4">↑ 8% this month</p>
                </div>
            </div>

            {/* View Complete Report Button */}
            <div className="text-center mb-6">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                    View Complete Report
                </button>
            </div>

            {/* Dynamic Tables */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-4">Enrollment Details</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Student Name</th>
                                <th className="px-4 py-2 border">Course</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Date Enrolled</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">1</td>
                                <td className="px-4 py-2 border">John Doe</td>
                                <td className="px-4 py-2 border">Computer Science</td>
                                <td className="px-4 py-2 border">Confirmed</td>
                                <td className="px-4 py-2 border">2024-01-01</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">2</td>
                                <td className="px-4 py-2 border">Jane Smith</td>
                                <td className="px-4 py-2 border">Business Administration</td>
                                <td className="px-4 py-2 border">Pending</td>
                                <td className="px-4 py-2 border">2024-01-02</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">3</td>
                                <td className="px-4 py-2 border">Michael Brown</td>
                                <td className="px-4 py-2 border">Mechanical Engineering</td>
                                <td className="px-4 py-2 border">Confirmed</td>
                                <td className="px-4 py-2 border">2024-01-03</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded shadow hover:bg-gray-400 transition duration-300">Previous</button>
                        <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded shadow hover:bg-gray-400 transition duration-300 ml-2">Next</button>
                    </div>
                    <span className="text-gray-600">Items per page</span>
                </div>
            </div>

            {/* Timeline Example */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-4">Recent Enrollment Events</h2>
                <ul className="timeline">
                    <li className="timeline-item">
                        <div className="timeline-time">10:00 AM</div>
                        <div className="timeline-content bg-gray-100 p-2 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">John Doe enrolled in Computer Science</h3>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-time">11:00 AM</div>
                        <div className="timeline-content bg-gray-100 p-2 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">Jane Smith's enrollment is pending</h3>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-time">12:00 PM</div>
                        <div className="timeline-content bg-gray-100 p-2 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">Michael Brown confirmed enrollment in Mechanical Engineering</h3>
                        </div>
                    </li>
                </ul>
                <div className="text-center mt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                        View All Events
                    </button>
                </div>
            </div>

            {/* Tasks List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Enrollment Tasks List</h2>
                <ul className="task-list">
                    <li className="task-item flex items-center justify-between mb-2">
                        <span className="task-text">Verify pending enrollments</span>
                        <span className="task-status text-yellow-500">IN PROGRESS</span>
                    </li>
                    <li className="task-item flex items-center justify-between mb-2">
                        <span className="task-text">Send confirmation emails</span>
                        <span className="task-status text-green-500">COMPLETED</span>
                    </li>
                    <li className="task-item flex items-center justify-between mb-2">
                        <span className="task-text">Update enrollment records</span>
                        <span className="task-status text-red-500">PENDING</span>
                    </li>
                </ul>
                <div className="text-right mt-4">
    <a href={route('dashboard')} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 inline-block">
        Back
    </a>
</div>
            </div>
        </div>
    );
};

export default Statistics;
