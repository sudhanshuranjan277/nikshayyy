import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bell, User } from 'lucide-react';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              DeliverEase
              <span className="text-sm text-gray-500 ml-2">Service Management System</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative">
              <button
                className="flex items-center gap-2 text-sm focus:outline-none"
                onClick={() => dispatch(logout())}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.avatar || 'https://via.placeholder.com/40'}
                  alt={user?.name}
                />
                <span className="hidden md:block">{user?.name}</span>
                <User className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;