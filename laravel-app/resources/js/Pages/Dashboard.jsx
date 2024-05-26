import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGraduationCap, faFile, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/inertia-react'; // Use Inertia's Link for client-side routing
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

  // Define sidebar items
  const items = [
    { icon: faGraduationCap, title: 'Courses', description: 'Explore our available courses and enhance your skills.', link: '/dashboard/courses' },
    { icon: faFile, title: 'Enrollment', description: 'Manage student enrollments and registrations effortlessly.', link: '/dashboard/enrollment' },
    { icon: faBuildingColumns, title: 'Program', description: 'Efficiently manage your educational programs and curriculum.', link: '/dashboard/program' },
  ];

  // Sample data for college courses
  const courses = [
    { title: 'Computer Science', description: 'Learn programming, algorithms, and computer systems.' },
    { title: 'Mechanical Engineering', description: 'Explore the principles of mechanics, materials, and design.' },
    { title: 'Psychology', description: 'Study the human mind and behavior through research and analysis.' },
    { title: 'Business Administration', description: 'Develop skills in management, marketing, and finance.' },
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
                    <Link
                      href={item.link}
                      className={`flex items-center text-lg p-2 rounded hover:bg-gray-700 ${activeItem === item.title ? 'bg-gray-900' : ''}`}
                      onClick={() => setActiveItem(item.title)}
                    >
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                      {item.title}
                    </Link>
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

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-2">College Courses</h3>
            <ul className="divide-y divide-gray-200">
              {courses.map((course, index) => (
                <li key={index} className="py-2">
                  <div>
                    <p className="text-lg font-medium text-gray-800">{course.title}</p>
                    <p className="text-sm text-gray-500">{course.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
