import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Activity, Users, Package, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react';
import 'react-day-picker/dist/style.css';

const AdminDashboard: React.FC = () => {
  const [selected, setSelected] = useState<Date>(new Date());

  // Dummy data for tasks by date
  const tasksByDate = {
    [format(new Date(), 'yyyy-MM-dd')]: [
      { 
        id: 1, 
        type: 'Service', 
        title: 'Express Delivery', 
        agent: 'Sarah Wilson', 
        driver: 'Mike Johnson',
        status: 'In Progress',
        priority: 'High'
      },
      { 
        id: 2, 
        type: 'Task', 
        title: 'Package Pickup', 
        status: 'Pending', 
        location: 'Downtown',
        priority: 'Medium'
      },
    ],
    [format(new Date(Date.now() - 86400000), 'yyyy-MM-dd')]: [
      { 
        id: 3, 
        type: 'Service', 
        title: 'Furniture Delivery', 
        agent: 'Mike Thompson', 
        driver: 'Tom Davis',
        status: 'Completed',
        priority: 'High'
      },
    ],
  };

  const selectedDateTasks = tasksByDate[format(selected, 'yyyy-MM-dd')] || [];

  const stats = {
    activeAgents: 12,
    activeDrivers: 8,
    pendingServices: 24,
    completedTasks: 156,
    totalRevenue: 12580,
    serviceSuccess: 94.5
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="btn-secondary flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Generate Report
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Package className="h-4 w-4" />
            New Service
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-gradient-to-br from-indigo-50 to-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Active Personnel</h2>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-gray-600">Agents: {stats.activeAgents}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-gray-600">Drivers: {stats.activeDrivers}</span>
                    </div>
                  </div>
                </div>
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-orange-50 to-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Pending Services</h2>
                  <p className="text-3xl font-bold text-orange-600">{stats.pendingServices}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-orange-600">Requires attention</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Service Success</h2>
                  <p className="text-3xl font-bold text-green-600">{stats.serviceSuccess}%</p>
                  <div className="mt-1 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">{stats.completedTasks} completed</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Activities for {format(selected, 'MMMM d, yyyy')}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Total Revenue: </span>
                <span className="text-lg font-bold text-green-600">${stats.totalRevenue.toLocaleString()}</span>
              </div>
            </div>
            {selectedDateTasks.length > 0 ? (
              <div className="space-y-4">
                {selectedDateTasks.map(task => (
                  <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                          task.type === 'Service' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {task.type}
                        </span>
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                          task.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900">{task.title}</h3>
                      {task.agent && task.driver && (
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            Agent: {task.agent}
                          </span>
                          <span className="flex items-center gap-1">
                            <Activity className="h-4 w-4" />
                            Driver: {task.driver}
                          </span>
                        </div>
                      )}
                      {task.location && (
                        <p className="text-sm text-gray-600">Location: {task.location}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`status-badge ${
                        task.status === 'Completed' 
                          ? 'status-completed' 
                          : task.status === 'In Progress'
                          ? 'status-progress'
                          : 'status-pending'
                      }`}>
                        {task.status}
                      </span>
                      <button className="btn-secondary">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No activities scheduled for this date</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card bg-gradient-to-br from-blue-50 to-white">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Activity Calendar</h2>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => date && setSelected(date)}
              modifiers={{
                hasActivity: (date) => tasksByDate[format(date, 'yyyy-MM-dd')]?.length > 0
              }}
              modifiersStyles={{
                hasActivity: { 
                  backgroundColor: '#EEF2FF',
                  color: '#4F46E5',
                  fontWeight: '600'
                }
              }}
              className="mx-auto"
            />
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-indigo-100 rounded-full"></div>
                <span className="text-sm text-gray-600">Has scheduled activities</span>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-purple-50 to-white">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full btn-secondary flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Manage Users
                </span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full btn-secondary flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  View Services
                </span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full btn-secondary flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Track Tasks
                </span>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;