import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Statistics = ({ auth }) => {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Statistics</h2>}>
      <Head title="Statistics" />
      <div className="p-6">
        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">Statistics Dashboard</h2>
        <div className="span3" id="sidebar">
          <center>
            <ul className="nav nav-list bs-docs-sidenav nav-collapse collapse">
              <li><a href="/dashboard/statistics"><i className="icon-chevron-right icon-large"></i><i className="icon-home icon-large"></i> Statistics</a></li>
              <li className="active"><a href="/dashboard/students"><i className="icon-chevron-right icon-large"></i><i className="icon-group icon-large"></i> Students</a></li>
              <li><a href="/dashboard/add_class"><i className="icon-chevron-right icon-large"></i><i className="icon-th-list icon-large"></i> Class</a></li>
              <li><a href="/dashboard/fees"><i className="icon-chevron-right icon-large"></i><i className="icon-money icon-large"></i> Fees Payment</a></li>
              <li><a href="/dashboard/payment_report"><i className="icon-chevron-right icon-large"></i><i className="icon-table icon-large"></i> Payment Report</a></li>
              <li><a href="/dashboard/users"><i className="icon-chevron-right icon-large"></i><i className="icon-group icon-large"></i> Users</a></li>
              <li><a href="/dashboard/student_report"><i className="icon-chevron-right icon-large"></i><i className="icon-file icon-large"></i> Reports</a></li>
            </ul>
          </center>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Statistics;
