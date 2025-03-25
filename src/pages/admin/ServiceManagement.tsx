import React from 'react';

const ServiceManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Service Management</h1>
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Services List</h2>
          <button className="btn-primary">Create Service</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-container">
            <thead>
              <tr>
                <th className="table-header">Service Name</th>
                <th className="table-header">Description</th>
                <th className="table-header">Status</th>
                <th className="table-header">Assigned To</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="table-cell">Delivery Service</td>
                <td className="table-cell">Express delivery to downtown area</td>
                <td className="table-cell">
                  <span className="status-badge status-pending">Pending</span>
                </td>
                <td className="table-cell">-</td>
                <td className="table-cell">
                  <button className="btn-secondary">Assign</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceManagement;