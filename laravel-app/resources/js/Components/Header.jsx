import React from 'react';
import { Head } from '@inertiajs/react';

// Importing the styles
import logo from '@/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-responsive.min.css';
import 'bootstrap/dist/css/font-awesome.css';
import 'bootstrap/dist/css/my_style.css';
import 'bootstrap/dist/css/print.css';
import '@/vendors/easypiechart/jquery.easy-pie-chart.css'; // Adjusted path
import '@/assets/styles.css';

import '@/assets/DT_bootstrap.css'; // Adjusted path
import '@/vendors/jGrowl/jquery.jgrowl.css'; // Adjusted path
import '@/vendors/fullcalendar/fullcalendar.css'; // Adjusted path
import '@/vendors/bootstrap-wysihtml5/src/bootstrap-wysihtml5.css'; // Adjusted path

// Importing the scripts
import '@/vendors/jquery-1.9.1.min.js'; // Adjusted path
import '@/vendors/jGrowl/jquery.jgrowl.js'; // Adjusted path
import '@/vendors/modernizr-2.6.2-respond-1.1.0.min.js'; // Adjusted path
import '@/vendors/fullcalendar/fullcalendar.min.js'; // Adjusted path
import '@/vendors/bootstrap-wysihtml5/src/bootstrap-wysihtml5.js'; // Adjusted path
import "bootstrap/js/bootstrap.js";
import '@/jquery/jquery-1.10.2.js'; // Adjusted path

// Importing custom components
import Header from './Header';
import Session from './Session';
import Navbar from './Navbar';
import SidebarStudents from './SidebarStudents';
import Footer from './Footer';
import Script from './Script';
import StudentsTable from './StudentsTable';

const Students = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Students</h2>}>
            <Head title="Students" />
            <Header />
            <Session />
            <Navbar />
            <center><img src={logo} alt="CASAP Logo" /></center>
            <div className="container-fluid">
                <div className="row-fluid">
                    <SidebarStudents />
                    <div className="span9">
                        <div className="row-fluid">
                            <div id="block_bg" className="block">
                                {/* Fetching and displaying students data */}
                                <div className="navbar navbar-inner block-header">
                                    <div className="muted pull-left"><i className="icon-reorder icon-large"></i> Students List</div>
                                    <div className="muted pull-right">
                                        Number of Students: <span className="badge badge-info">{/* Fetch and display student count here */}</span>
                                    </div>
                                </div>
                                <div className="block-content collapse in">
                                    <div className="span12" id="studentTableDiv">
                                        <h2 id="noch">Students List</h2>
                                        <StudentsTable />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Script />
        </AuthenticatedLayout>
    );
};

export default Students;
