import React from 'react';
import dbcon from './dbcon'; // Assuming the file is in the same directory

const Navbar = () => {
    // Mock data for demonstration
    const sessionData = {
        firstname: 'John',
        lastname: 'Doe'
    };

    return (
        <div className="navbar navbar-fixed-top navbar-inverse">
            <div className="navbar-inner">
                <div className="container-fluid">
                    <button className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span className="brand">CASAP | ENROLLMENT SYSTEM</span>
                    <div id="coll" className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li className="dropdown">
                                <a href="#" id="name123" role="button" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="icon-user icon-large"></i>{`${sessionData.firstname} ${sessionData.lastname}`} <i className="caret"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="change_password.php">Change Password</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="logout.php">
                                            <i className="icon-signout icon-large"></i>&nbsp;Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
