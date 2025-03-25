import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const DriverProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
      <div className="card">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="h-16 w-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-medium text-gray-900">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="input-field" value={user?.name} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="input-field" value={user?.email} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;