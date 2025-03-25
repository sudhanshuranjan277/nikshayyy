import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  History,
  UserCircle
} from 'lucide-react';
import { RootState } from '../store';

const Sidebar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const adminLinks = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/users', icon: Users, label: 'User Management' },
    { to: '/admin/services', icon: ClipboardList, label: 'Service Management' },
    { to: '/admin/tasks', icon: History, label: 'Task Monitoring' },
  ];

  const agentLinks = [
    { to: '/agent', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/agent/services', icon: ClipboardList, label: 'Service List' },
    { to: '/agent/history', icon: History, label: 'Task History' },
    { to: '/agent/profile', icon: UserCircle, label: 'Profile' },
  ];

  const driverLinks = [
    { to: '/driver', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/driver/tasks', icon: ClipboardList, label: 'Task Management' },
    { to: '/driver/history', icon: History, label: 'Task History' },
    { to: '/driver/profile', icon: UserCircle, label: 'Profile' },
  ];

  const links = user?.role === 'admin' 
    ? adminLinks 
    : user?.role === 'agent' 
    ? agentLinks 
    : driverLinks;

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-white text-xl font-semibold">
                {user?.role.toUpperCase()}
              </span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                >
                  <link.icon className="mr-3 h-6 w-6" />
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-gray-700 p-4">
            <NavLink
              to="/settings"
              className="group flex items-center text-sm font-medium rounded-md text-gray-300 hover:text-white"
            >
              <Settings className="mr-3 h-6 w-6" />
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;