import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFile, faBuildingColumns, faDollarSign, faChevronDown, faChevronRight, faSitemap, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Courses from './Courses';  // Import the Courses component
import Enrollment from './Enrollment';  // Import the Enrollment component

const Dashboard = ({ auth }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownState, setDropdownState] = useState({});
  const [enrollments, setEnrollments] = useState([]);
  const [editEnrollment, setEditEnrollment] = useState(null);

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

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const toggleDropdown = (dropdownTitle) => {
    setDropdownState(prevState => ({
      ...prevState,
      [dropdownTitle]: !prevState[dropdownTitle]
    }));
  };

  const navigateToEnrollment = () => {
    setActiveItem('Enrollment');
  };

  const navigateToStatistics = () => {
    window.location.href = '/dashboard/statistics';
  };

  const navigateToCourses = () => {
    setActiveItem('Courses');
  };

  const handleEditClick = (enrollment) => {
    setEditEnrollment(enrollment);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditEnrollment({
      ...editEnrollment,
      [name]: value,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/enrollments/${editEnrollment.id}`, editEnrollment);
      const updatedEnrollment = response.data;
      setEnrollments((prevEnrollments) =>
        prevEnrollments.map((enrollment) =>
          enrollment.id === updatedEnrollment.id ? updatedEnrollment : enrollment
        )
      );
      setEditEnrollment(null);
    } catch (error) {
      console.error('Error updating enrollment:', error);
    }
  };

  const items = [
    { icon: faGraduationCap, title: 'Courses', description: 'Manage your courses.', link: '#', onClick: navigateToCourses },
    { icon: faSitemap, title: 'Enrollment', description: 'Manage your enrollment.', link: '#', onClick: navigateToEnrollment },
    { icon: faChartLine, title: 'Statistics', description: 'View your statistics.', link: '#', onClick: navigateToStatistics },
    {
      icon: faBuildingColumns,
      title: 'Account',
      isDropdown: true,
      isOpen: dropdownState['Account'] || false,
      subItems: [
        { title: 'Profile', link: '/user/profile' },
        { title: 'Logout', link: '/logout', onClick: () => { setDropdownState({ ...dropdownState, Account: false }); } },
      ]
    },
    { icon: faFile, title: 'Class', description: 'Manage your class schedules and assignments.', link: '/dashboard/class' },
    { icon: faDollarSign, title: 'Fees', description: 'Handle student fees and payments.', link: '/dashboard/fees' },
  ];

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <button
                className="lg:hidden block mb-4 text-blue-500"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              </button>
              <div className="lg:flex">
                <div
                  className={`w-full lg:w-1/4 lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}
                >
                  <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
                    <ul className="space-y-2">
                      {items.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.link}
                            onClick={item.onClick}
                            className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg"
                          >
                            <FontAwesomeIcon icon={item.icon} />
                            <span>{item.title}</span>
                            {item.isDropdown && (
                              <FontAwesomeIcon
                                icon={item.isOpen ? faChevronDown : faChevronRight}
                                className="ml-auto"
                                onClick={() => toggleDropdown(item.title)}
                              />
                            )}
                          </Link>
                          {item.isDropdown && item.isOpen && (
                            <ul className="space-y-1 ml-4 mt-2">
                              {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subItem.link}
                                    className="block hover:bg-gray-700 p-2 rounded-lg"
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:flex-grow p-4 lg:ml-4">
                  {activeItem === 'Courses' ? (
                    <Courses />
                  ) : activeItem === 'Enrollment' ? (
                    <Enrollment auth={auth} />
                  ) : (
                    <div>
                      {/* Add your default dashboard content here */}
                      <p>Welcome to the dashboard!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
