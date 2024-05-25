import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Monitor, User, Users, BookOpen, Menu, MoreVertical } from "lucide-react";

const Icon = ({ icon, size, className }) => {
  const IconComponent = icon;
  return <IconComponent size={size} className={className} />;
};

const Dashboard = ({ auth }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const activeClass = 'rounded-lg bg-gray-300 text-black px-8 py-2';

  const sideBarArray = [
    { name: 'Dashboard', path: '/dashboard', icon: Monitor },
    { name: 'Admin', path: '/admin', icon: User },
    { name: 'Students', path: '/students', icon: Users },
    { name: 'Content', path: '/content', icon: BookOpen },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`h-full bg-white border-r shadow-sm ${expanded ? 'w-64' : 'w-16'}`}>
        <div className="p-4 pb-2 flex justify-between items-center">
          <button
            onClick={toggleExpansion}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <Menu /> : <Menu />}
          </button>
        </div>

        <ul className={`flex flex-col items-center ${expanded ? 'space-y-5' : 'hidden'}`}>
          {sideBarArray.map((item, index) => (
            <li key={index} className="mb-5">
              <NavLink
                exact
                to={item.path}
                className={`text-black flex items-center ${location.pathname === item.path ? activeClass : ''}`}
              >
                {expanded && <Icon icon={item.icon} size={20} className="mr-2" />}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="border-t flex p-3">
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <MoreVertical size={20} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Dashboard;