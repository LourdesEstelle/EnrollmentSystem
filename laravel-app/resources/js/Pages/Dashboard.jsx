import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGraduationCap, faFile, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Dashboard = ({ auth }) => {
  // State to track whether the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // State to track active sidebar item
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (title) => {
    setActiveItem(title);
  };

  const items = [
    { icon: faCalendarAlt, title: 'Upcoming Events', description: 'Stay updated with our upcoming events and activities. From workshops to seminars, never miss an opportunity to engage and connect with your community.' },
    { icon: faGraduationCap, title: 'Courses', description: 'Explore our available courses and enhance your skills. Whether you’re a beginner or an expert, there’s something for everyone. Unlock new knowledge and unleash your potential.' },
    { icon: faFile, title: 'Enrollment', description: 'Manage student enrollments and registrations effortlessly. Simplify the enrollment process, track student progress, and ensure a smooth journey from admission to graduation.' },
    { icon: faBuildingColumns, title: 'Program', description: 'Efficiently manage your educational programs and curriculum. From designing courses to tracking outcomes, streamline your program management tasks and elevate the learning experience for your students.' },
  ];

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mackenzie University</h2>}
    >
      <Head title="Dashboard" />

      <div className="flex">
        {/* Sidebar */}
        <div className={`w-64 bg-gray-800 min-h-screen text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="sticky top-0 p-6">
            <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
            <nav>
              <ul>
                {items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href="#"
                      className={`flex items-center text-lg p-2 rounded hover:bg-gray-700 ${activeItem === item.title ? 'bg-gray-900' : ''}`}
                      onClick={() => handleItemClick(item.title)}
                    >
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-6">
          {/* Sidebar toggle button */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow ${activeItem === item.title ? 'border-4 border-blue-500' : ''}`}
              >
                <h3 className="text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
