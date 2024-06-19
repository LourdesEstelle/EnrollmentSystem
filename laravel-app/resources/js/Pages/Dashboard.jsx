import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFile, faBuildingColumns, faDollarSign, faChevronDown, faChevronRight, faSitemap, faChartLine, faUserGraduate, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Courses from './Courses';
import Enrollment from './Enrollment';
import Statistics from './Statistics';
import EnrollmentView from './EnrollmentView'; // Correctly import EnrollmentView

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
    setActiveItem('Statistics');
  };

  const navigateToCourses = () => {
    setActiveItem('Courses');
  };

  const navigateToViewEnrollment = () => {
    setActiveItem('View Enrollment');
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
    { icon: faChartLine, title: 'Statistics', description: 'View your statistics.', link: '#', onClick: navigateToStatistics },
    { icon: faSitemap, title: 'Enrollment', description: 'Manage your enrollment.', link: '#', onClick: navigateToEnrollment, subItems: [
      { title: 'View Enrollment', onClick: navigateToViewEnrollment },
      { title: 'Add Enrollment', onClick: () => console.log('Add Enrollment') }
    ]},
    { icon: faGraduationCap, title: 'Courses', description: 'Manage your courses.', link: '#', onClick: navigateToCourses },
    { icon: faUserGraduate, title: 'Students', description: 'Manage your students.', link: '/dashboard/students' },
    { icon: faCreditCard, title: 'Payment', description: 'Handle student fees and payments.', link: '/dashboard/fees' }
  ];

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />

      <div className="h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <div className="bg-[#354A21] text-white p-4 shadow-md">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={isSidebarOpen ? faChevronDown : faChevronRight} />
            </button>
          </div>
        </div>

        <div className="flex flex-grow overflow-hidden">
          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 w-64 bg-[#354A21] text-white p-4 shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
          >
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="hover:bg-[#2D3B1B] p-2 rounded-lg transition-colors duration-300">
                  <div className="flex items-center justify-between cursor-pointer" onClick={item.onClick}>
                    <div className="flex items-center space-x-2">
                      <FontAwesomeIcon icon={item.icon} />
                      <span>{item.title}</span>
                    </div>
                    {item.subItems && (
                      <FontAwesomeIcon
                        icon={dropdownState[item.title] ? faChevronDown : faChevronRight}
                        className="ml-auto cursor-pointer"
                        onClick={() => toggleDropdown(item.title)}
                      />
                    )}
                  </div>
                  {item.subItems && dropdownState[item.title] && (
                    <ul className="space-y-1 ml-6 mt-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="hover:bg-[#2D3B1B] p-2 rounded-lg transition-colors duration-300 cursor-pointer">
                          <span onClick={subItem.onClick}>{subItem.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Main Content */}
          <div className="flex-grow p-4 lg:ml-64 overflow-y-auto bg-white shadow-inner rounded-lg">
            {activeItem === 'Courses' ? (
              <Courses />
            ) : activeItem === 'Enrollment' ? (
              <Enrollment auth={auth} />
            ) : activeItem === 'Statistics' ? (
              <Statistics />
            ) : activeItem === 'View Enrollment' ? (
              <EnrollmentView /> // Render EnrollmentView component
            ) : (
              <div>
                {/* Add your default dashboard content here */}
                <p>Welcome to the dashboard!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
