import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios'; // Assuming you're using axios for API requests

const Statistics = ({ auth }) => {
  const [countStudents, setCountStudents] = useState(0);
  const [countClasses, setCountClasses] = useState(0);
  const [countNursery, setCountNursery] = useState(0);
  const [countPrimary, setCountPrimary] = useState(0);
  const [countSecondary, setCountSecondary] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make API requests here to get data from the server
      const studentsResponse = await axios.get('/api/students');
      const classesResponse = await axios.get('/api/classes');
      const nurseryResponse = await axios.get('/api/nursery');
      const primaryResponse = await axios.get('/api/primary');
      const secondaryResponse = await axios.get('/api/secondary');

      // Update state with fetched data
      setCountStudents(studentsResponse.data.count);
      setCountClasses(classesResponse.data.count);
      setCountNursery(nurseryResponse.data.count);
      setCountPrimary(primaryResponse.data.count);
      setCountSecondary(secondaryResponse.data.count);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Statistics</h2>}>
      <Head title="Statistics" />
      <div className="p-6">
        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">Statistics Dashboard</h2>
        <div className="container-fluid">
          <div className="row">
            {/* Display statistics */}
            <div className="col-3">
              <div className="chart" data-percent={countStudents}>{countStudents}</div>
              <div className="chart-bottom-heading"><strong>STUDENTS</strong></div>
            </div>
            <div className="col-3">
              <div className="chart" data-percent={countClasses}>{countClasses}</div>
              <div className="chart-bottom-heading"><strong>CLASSES</strong></div>
            </div>
            <div className="col-3">
              <div className="chart" data-percent={countNursery}>{countNursery}</div>
              <div className="chart-bottom-heading"><strong>NURSERY STUDENTS</strong></div>
            </div>
            <div className="col-3">
              <div className="chart" data-percent={countPrimary}>{countPrimary}</div>
              <div className="chart-bottom-heading"><strong>PRIMARY STUDENTS</strong></div>
            </div>
            <div className="col-3">
              <div className="chart" data-percent={countSecondary}>{countSecondary}</div>
              <div className="chart-bottom-heading"><strong>SECONDARY STUDENTS</strong></div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Statistics;
