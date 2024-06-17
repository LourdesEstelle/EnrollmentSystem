import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get('/enrollments')
        .then(response => {
            console.log(response.data);  // Inspect the data structure to ensure subjects are included
            setEnrollments(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError('There was an error fetching the enrollments.');
            setLoading(false);
            console.error(error);
        });
}, []);

    if (loading) {
        return <div className="text-center text-lg mt-6">Loading enrollments...</div>;
    }

    if (error) {
        return <div className="text-center text-lg text-red-500 mt-6">{error}</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h1 className="text-2xl font-bold text-center mb-6">Enrollments Review</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-100">
                            <th className="py-2 px-4 border-b">First Name</th>
                            <th className="py-2 px-4 border-b">Last Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Department</th>
                            <th className="py-2 px-4 border-b">Course</th>
                            <th className="py-2 px-4 border-b">Term</th>
                            <th className="py-2 px-4 border-b">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => (
                            <React.Fragment key={enrollment.id}>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{enrollment.first_name}</td>
                                    <td className="py-2 px-4 border-b">{enrollment.last_name}</td>
                                    <td className="py-2 px-4 border-b">{enrollment.email}</td>
                                    <td className="py-2 px-4 border-b">{enrollment.department}</td>
                                    <td className="py-2 px-4 border-b">{enrollment.course}</td>
                                    <td className="py-2 px-4 border-b">{enrollment.term}</td>
                                    <td className="py-2 px-4 border-b">{enrollment.year}</td>
                                </tr>
                                {enrollment.subjects && (
                                    <tr className="bg-gray-50">
                                        <td colSpan="7" className="py-2 px-4 border-b">
                                            <ul>
                                                {enrollment.subjects.map(subject => (
                                                    <li key={subject.id}>{subject.subject_name}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Review;
