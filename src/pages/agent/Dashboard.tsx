import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AgentDashboard: React.FC = () => {
  const [selected, setSelected] = useState<Date>(new Date());

  // Dummy data for services by date
  const servicesByDate = {
    [format(new Date(), 'yyyy-MM-dd')]: [
      { id: 1, title: 'Express Delivery', status: 'In Progress', driver: 'Mike Johnson', customer: 'Alice Brown' },
      { id: 2, title: 'Package Pickup', status: 'Pending', location: 'North End', customer: 'Bob Wilson' },
    ],
    [format(new Date(Date.now() - 86400000), 'yyyy-MM-dd')]: [
      { id: 3, title: 'Furniture Delivery', status: 'Completed', driver: 'Tom Davis', customer: 'Carol Smith' },
    ],
  };

  const selectedDateServices = servicesByDate[format(selected, 'yyyy-MM-dd')] || [];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Agent Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h2 className="text-lg font-medium text-gray-900">Available Services</h2>
              <p className="text-3xl font-bold text-indigo-600">5</p>
            </div>
            <div className="card">
              <h2 className="text-lg font-medium text-gray-900">Active Services</h2>
              <p className="text-3xl font-bold text-indigo-600">3</p>
            </div>
            <div className="card">
              <h2 className="text-lg font-medium text-gray-900">Completed Services</h2>
              <p className="text-3xl font-bold text-indigo-600">28</p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Services for {format(selected, 'MMMM d, yyyy')}</h2>
            {selectedDateServices.length > 0 ? (
              <div className="space-y-4">
                {selectedDateServices.map(service => (
                  <div key={service.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Customer: {service.customer}
                        </p>
                        {service.driver && (
                          <p className="text-sm text-gray-500">
                            Driver: {service.driver}
                          </p>
                        )}
                        {service.location && (
                          <p className="text-sm text-gray-500">
                            Location: {service.location}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`status-badge ${
                          service.status === 'Completed' 
                            ? 'status-completed' 
                            : service.status === 'In Progress'
                            ? 'status-progress'
                            : 'status-pending'
                        }`}>
                          {service.status}
                        </span>
                        <button className="btn-secondary mt-2 block ml-auto">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No services scheduled for this date</p>
            )}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Service Calendar</h2>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => date && setSelected(date)}
            modifiers={{
              hasServices: (date) => servicesByDate[format(date, 'yyyy-MM-dd')]?.length > 0
            }}
            modifiersStyles={{
              hasServices: { backgroundColor: '#EEF2FF', color: '#4F46E5' }
            }}
            className="mx-auto"
          />
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-indigo-100 rounded-full"></div>
              <span className="text-sm text-gray-600">Has scheduled services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;