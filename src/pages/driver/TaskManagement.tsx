import React from 'react';

const TaskManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Task Management</h1>
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Current Tasks</h2>
          <button className="btn-secondary">Filter</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-container">
            <thead>
              <tr>
                <th className="table-header">Task</th>
                <th className="table-header">Location</th>
                <th className="table-header">Status</th>
                <th className="table-header">Priority</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="table-cell">Express Delivery</td>
                <td className="table-cell">123 Main St</td>
                <td className="table-cell">
                  <span className="status-badge status-progress">In Progress</span>
                </td>
                <td className="table-cell">High</td>
                <td className="table-cell">
                  <button className="btn-primary">Complete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;