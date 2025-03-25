import React from 'react';

const ServiceList: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Service List</h1>
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Available Services</h2>
          <button className="btn-secondary">Filter</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-container">
            <thead>
              <tr>
                <th className="table-header">Service Name</th>
                <th className="table-header">Description</th>
                <th className="table-header">Status</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="table-cell">Package Delivery</td>
                <td className="table-cell">Urgent delivery needed</td>
                <td className="table-cell">
                  <span className="status-badge status-pending">Available</span>
                </td>
                <td className="table-cell">
                  <button className="btn-primary">Accept</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;