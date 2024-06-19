import React, { useState } from 'react';

const courses = [
    {
        name: 'BS in Information Technology (BSIT)',
        fee: '24,000',
        department: 'BSIT',
        instructors: [
            { name: 'Kuro Sensei', profession: 'Computer Science' },
            { name: 'Le Water', profession: 'Computer Science' },
        ],
    },
    {
        name: 'BS in Computer Science (BSCS)',
        fee: '30,000',
        department: 'CS',
        instructors: [
            { name: 'Alice Johnson', profession: 'Computer Science' },
            { name: 'Bob Smith', profession: 'Software Engineering' },
        ],
    },
];

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseChange = (e) => {
        const courseName = e.target.value;
        const course = courses.find((c) => c.name === courseName);
        setSelectedCourse(course);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main Content */}
            <div className="flex-grow p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course-select">
                        Select Course
                    </label>
                    <select
                        id="course-select"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleCourseChange}
                    >
                        <option value="">-- Select a Course --</option>
                        {courses.map((course, index) => (
                            <option key={index} value={course.name}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedCourse && (
                    <div className="flex">
                        {/* Instructors */}
                        <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Instructors</h2>
                            {selectedCourse.instructors.map((instructor, index) => (
                                <div key={index} className="mb-2">
                                    <p><span className="font-semibold">Name</span>: {instructor.name}</p>
                                    <p><span className="font-semibold">Profession</span>: {instructor.profession}</p>
                                </div>
                            ))}
                        </div>

                        {/* Course Details */}
                        <div className="w-1/2 p-4 bg-white rounded-lg shadow-md ml-4">
                            <h2 className="text-xl font-bold mb-4">Course Details</h2>
                            <p><span className="font-semibold">Course Name</span>: {selectedCourse.name}</p>
                            <p><span className="font-semibold">Course Fee</span>: {selectedCourse.fee}</p>
                            <p><span className="font-semibold">Department</span>: {selectedCourse.department}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
