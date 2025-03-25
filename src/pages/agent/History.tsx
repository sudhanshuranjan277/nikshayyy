import React from 'react';

const AgentHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Task History</h1>
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Completed Tasks</h2>
          <button className="btn-secondary">Export</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-container">
            <thead>
              <tr>
                <th className="table-header">Task</th>
                <th className="table-header">Date</th>
                <th className="table-header">Status</th>
                <th className="table-header">Driver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="table-cell">City Delivery</td>
                <td className="table-cell">2024-03-15</td>
                <td className="table-cell">
                  <span className="status-badge status-completed">Completed</span>
                </td>
                <td className="table-cell">Mike Driver</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentHistory;