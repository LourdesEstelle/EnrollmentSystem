import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFile, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const Dashboard = ({ auth }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [enrollments, setEnrollments] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchEnrollments = async () => {
    try {
      const response = await axios.get('/api/enrollments');
      setEnrollments(response.data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    }
  };

  // Fetch enrollments on component mount
  useEffect(() => {
    fetchEnrollments();
  }, []);

  const items = [
    { icon: faGraduationCap, title: 'Courses', description: 'Explore our available courses and enhance your skills.', link: '/dashboard/courses' },
    { icon: faFile, title: 'Enrollment', description: 'Manage student enrollments and registrations effortlessly.', link: '/dashboard/enrollment' },
    { icon: faBuildingColumns, title: 'Program', description: 'Efficiently manage your educational programs and curriculum.', link: '/dashboard/program' },
  ];

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mackenzie University</h2>}
    >
      <Head title="Dashboard" />

      <div className="flex">
        <div className={`w-64 bg-gray-800 min-h-screen text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="sticky top-0 p-6">
            <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
            <nav>
              <ul>
                {items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      href={item.link}
                      className={`flex items-center text-lg p-2 rounded hover:bg-gray-700 ${activeItem === item.title ? 'bg-gray-900' : ''}`}
                      onClick={() => setActiveItem(item.title)}
                    >
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                      {item.title}
                    </Link>
                    {item.title === 'Program' && (
                      <button
                        className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200"
                        onClick={() => {
                          window.location.href = '/dashboard/enrollment';
                        }}
                      >
                        Enrollment Process
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex-1 md:ml-64 p-6">
          <button
            className="block md:hidden text-gray-800 hover:text-gray-600 focus:outline-none mb-4"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          </button>

          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
            <div className="text-sm text-gray-600">Current Session: 2018-2019</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Enrollment Forms</h3>
            <ul className="divide-y divide-gray-200">
              {enrollments.length === 0 ? (
                <p>No enrollments available. Click "Fetch Enrollments" to load data.</p>
              ) : (
                enrollments.map((enrollment, index) => (
                  <li key={index} className="py-2">
                    <div>
                      <p className="text-lg font-medium text-gray-800">Term: {enrollment.term}</p>
                      <p className="text-sm text-gray-500">Application Type: {enrollment.applicationType}</p>
                      <p className="text-sm text-gray-500">Academic Program: {enrollment.course}</p>
                      <p className="text-sm text-gray-500">Academic Program: {enrollment.department}</p>
                      <p className="text-sm text-gray-500">Academic Program: {enrollment.year}</p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
