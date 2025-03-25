import React from 'react';

const TaskMonitoring: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Task Monitoring</h1>
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Active Tasks</h2>
          <div className="flex gap-2">
            <button className="btn-secondary">Filter</button>
            <button className="btn-secondary">Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table-container">
            <thead>
              <tr>
                <th className="table-header">Task</th>
                <th className="table-header">Assigned To</th>
                <th className="table-header">Status</th>
                <th className="table-header">Priority</th>
                <th className="table-header">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="table-cell">Downtown Delivery</td>
                <td className="table-cell">John Driver</td>
                <td className="table-cell">
                  <span className="status-badge status-progress">In Progress</span>
                </td>
                <td className="table-cell">High</td>
                <td className="table-cell">75%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskMonitoring;