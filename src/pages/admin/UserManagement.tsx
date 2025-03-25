import React, { useState } from 'react';

const UserManagement: React.FC = () => {
  // Dummy data for users
  const [users] = useState([
    { id: 1, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'agent', status: 'active', assignedTasks: 5 },
    { id: 2, name: 'Mike Thompson', email: 'mike@example.com', role: 'agent', status: 'active', assignedTasks: 3 },
    { id: 3, name: 'John Driver', email: 'john@example.com', role: 'driver', status: 'active', completedTasks: 25 },
    { id: 4, name: 'Emma Driver', email: 'emma@example.com', role: 'driver', status: 'active', completedTasks: 18 },
    { id: 5, name: 'Tom Driver', email: 'tom@example.com', role: 'driver', status: 'inactive', completedTasks: 12 },
  ]);

  const agentCount = users.filter(user => user.role === 'agent').length;
  const driverCount = users.filter(user => user.role === 'driver').length;
  const activeUsers = users.filter(user => user.status === 'active').length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Total Agents</h2>
          <p className="text-3xl font-bold text-indigo-600">{agentCount}</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Total Drivers</h2>
          <p className="text-3xl font-bold text-indigo-600">{driverCount}</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Active Users</h2>
          <p className="text-3xl font-bold text-indigo-600">{activeUsers}</p>
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Users List</h2>
          <button className="btn-primary">Add User</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-container">
            <thead>
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Email</th>
                <th className="table-header">Role</th>
                <th className="table-header">Status</th>
                <th className="table-header">Performance</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id}>
                  <td className="table-cell font-medium text-gray-900">{user.name}</td>
                  <td className="table-cell">{user.email}</td>
                  <td className="table-cell">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      user.role === 'agent' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="table-cell">
                    <span className={`status-badge ${
                      user.status === 'active' ? 'status-completed' : 'status-pending'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="table-cell">
                    {user.role === 'agent' 
                      ? `${user.assignedTasks} Active Tasks`
                      : `${user.completedTasks} Completed Tasks`
                    }
                  </td>
                  <td className="table-cell">
                    <div className="flex gap-2">
                      <button className="btn-secondary">Edit</button>
                      <button className="btn-secondary text-red-600">
                        {user.status === 'active' ? 'Deactivate' : 'Activate'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;