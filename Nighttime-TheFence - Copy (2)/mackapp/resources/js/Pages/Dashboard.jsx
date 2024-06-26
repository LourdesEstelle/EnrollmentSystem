import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faRightToBracket, faBook } from '@fortawesome/free-solid-svg-icons';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import Modal from 'react-modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const courses = [
  {
    id: 1,
    title: "Information Technology",
    image: "https://i0.wp.com/www.gniotgroup.edu.in/blog/wp-content/uploads/2024/04/Information-Technology-1-1024x462-1.webp?resize=640%2C289&ssl=1",
    description: "Information Technology (IT) is a field that encompasses the use of computers, networks, software, and other technology to manage and process information.",
    details: "It focuses on the practical application of technology to support various sectors such as business, healthcare, education, government, and more."
  },
  {
    id: 2,
    title: "Engineering",
    image: "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/Untitled_design.png?v=1657832281",
    description: "Engineering is a discipline that applies scientific principles and mathematical methods to design, develop, and analyze technological solutions to practical problems.",
    details: "It encompasses a wide range of specialized fields and plays a crucial role in shaping the modern world."
  },
  {
    id: 3,
    title: "Nursing",
    image: "https://cdn.britannica.com/18/192118-050-4A517482/nurse-doctor-hospital-patient-MRI.jpg",
    description: "Nursing is a healthcare profession dedicated to caring for individuals, families, and communities to achieve and maintain optimal health and well-being.",
    details: "Nurses play a critical role in patient care, health education, and advocacy within the healthcare system."
  },
  {
    id: 4,
    title: "Architecture",
    image: "https://barker-associates.b-cdn.net/wp-content/uploads/2022/02/Architecture-and-Design-.jpg.webp",
    description: "Architecture is the art and science of designing and constructing buildings.",
    details: "Architects create plans and designs for structures that are both functional and aesthetically pleasing."
  },
  {
    id: 5,
    title: "Computer Science",
    image: "https://www.mtu.edu/cs/what/images/what-is-computer-science-banner1600.jpg",
    description: "Computer Science is the study of computers and computational systems.",
    details: "It involves the understanding of software, algorithms, programming languages, and the hardware of computers."
  },
];

const Dashboard = ({ auth }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showCourses, setShowCourses] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [editEnrollment, setEditEnrollment] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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

  const navigateTo = (url) => window.location.href = url;

  const handleEditClick = (enrollment) => setEditEnrollment(enrollment);

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditEnrollment((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/enrollment-forms/${editEnrollment.id}`, editEnrollment);
      alert('Enrollment data updated successfully');
      fetchEnrollments();
      setEditEnrollment(null);
    } catch (error) {
      console.error('Error updating enrollment data:', error);
      alert('There was an error updating the enrollment data');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/enrollment-forms/${id}`);
      alert('Enrollment data deleted successfully');
      fetchEnrollments();
    } catch (error) {
      console.error('Error deleting enrollment data:', error);
      alert('There was an error deleting the enrollment data');
    }
  };

  const handleGeneratePDF = async () => {
    try {
      const response = await axios.get('/generate-pdf', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users-lists.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleCourseClick = (course) => setSelectedCourse(course);

  const closeModal = () => setSelectedCourse(null);

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />

      <div className="flex" style={{ backgroundImage: "url('https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2024/03/11/4cdb4fbc-c448-4af5-bb6e-ffdf677548c6_e1a83bec.jpg?itok=4Pa3Dk7Q&v=1710134844')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className={`w-64 bg-green-700 min-h-screen text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="sticky top-0 p-6">
            <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
            <nav>
              <ul>

                <li className="mb-2">
                  <button
                    className={`flex items-center text-lg p-2 rounded hover:bg-green-700 w-full text-left ${activeItem === 'EnrollmentProcess' ? 'bg-green-900' : ''}`}
                    onClick={() => {
                      setActiveItem('EnrollmentProcess');
                      navigateTo('/dashboard/enrollment');
                    }}
                  >
                    <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                    Enrollment Process
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    className={`flex items-center text-lg p-2 rounded hover:bg-green-700 w-full text-left ${activeItem === 'EnrollmentReview' ? 'bg-green-900' : ''}`}
                    onClick={() => {
                      setActiveItem('EnrollmentReview');
                      navigateTo('/dashboard/enrollment/review');
                    }}
                  >
                    <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                    Enrollment Review
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    className={`flex items-center text-lg p-2 rounded hover:bg-green-700 w-full text-left ${activeItem === 'EnrollmentStatus' ? 'bg-green-900' : ''}`}
                    onClick={() => {
                      setActiveItem('EnrollmentStatus');
                      navigateTo('/status');
                    }}
                  >
                    <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                    Enrollment Status
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    className={`flex items-center text-lg p-2 rounded hover:bg-green-700 w-full text-left ${activeItem === 'Courses' ? 'bg-green-900' : ''}`}
                    onClick={() => {
                      setActiveItem('Courses');
                      setShowCourses(!showCourses);
                    }}
                  >
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    Courses
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex-1 md:ml-64 p-6" style={{ paddingLeft: '2rem' }}>
          <button
            className="block md:hidden text-gray-800 hover:text-gray-600 focus:outline-none mb-4"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {activeItem === 'EnrollmentProcess' && (
            <div>
              <h1 className="text-3xl font-semibold mb-4 text-white">Enrollment Process</h1>
              <p className="text-lg text-white">This is the enrollment process section...</p>
            </div>
          )}

          {activeItem === 'EnrollmentReview' && (
            <div>
              <h1 className="text-3xl font-semibold mb-4 text-white">Enrollment Review</h1>
              <p className="text-lg text-white">This is the enrollment review section...</p>
            </div>
          )}

          {activeItem === 'EnrollmentStatus' && (
            <div>
              <h1 className="text-3xl font-semibold mb-4 text-white">Enrollment Status</h1>
              <p className="text-lg text-white">This is the enrollment status section...</p>
            </div>
          )}

          {showCourses && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-green-700 text-white p-4 rounded-lg shadow-md cursor-pointer"
                  onClick={() => handleCourseClick(course)}
                >
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeItem === 'Statistics' && (
            <div>
              <h1 className="text-3xl font-semibold mb-4 text-white">Welcome, {auth.user.name}</h1>
              <p className="text-lg text-white">Here are your latest statistics...</p>
            </div>
          )}

          <Modal
            isOpen={!!selectedCourse}
            onRequestClose={closeModal}
            contentLabel="Course Details"
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
          >
            {selectedCourse && (
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">{selectedCourse.title}</h2>
                <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <p className="mb-4">{selectedCourse.description}</p>
                <p>{selectedCourse.details}</p>
                <button
                  className="mt-4 text-red-500 hover:underline"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
