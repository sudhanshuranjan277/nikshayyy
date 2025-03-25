import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const DriverDashboard: React.FC = () => {
  const [selected, setSelected] = useState<Date>(new Date());

  // Dummy data for tasks and payments
  const tasksByDate = {
    [format(new Date(), 'yyyy-MM-dd')]: [
      { 
        id: 1, 
        title: 'Express Delivery', 
        amount: 50,
        paymentDetails: {
          from: 'Agent Sarah Wilson',
          type: 'Service Payment',
          status: 'Received'
        }
      },
      { 
        id: 2, 
        title: 'Package Pickup', 
        amount: 30,
        paymentDetails: {
          from: 'Customer John Brown',
          type: 'Direct Payment',
          status: 'Pending'
        }
      },
    ],
    [format(new Date(Date.now() - 86400000), 'yyyy-MM-dd')]: [
      { 
        id: 3, 
        title: 'Furniture Delivery', 
        amount: 100,
        paymentDetails: {
          from: 'Agent Mike Thompson',
          type: 'Service Payment',
          status: 'Received'
        }
      },
    ],
  };

  const selectedDateTasks = tasksByDate[format(selected, 'yyyy-MM-dd')] || [];
  const totalEarnings = selectedDateTasks.reduce((sum, task) => sum + task.amount, 0);
  const pendingPayments = selectedDateTasks.filter(task => task.paymentDetails.status === 'Pending')
    .reduce((sum, task) => sum + task.amount, 0);
  const receivedPayments = selectedDateTasks.filter(task => task.paymentDetails.status === 'Received')
    .reduce((sum, task) => sum + task.amount, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Driver Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h2 className="text-lg font-medium text-gray-900">Today's Tasks</h2>
              <p className="text-3xl font-bold text-indigo-600">4</p>
            </div>
            <div className="card">
              <h2 className="text-lg font-medium text-gray-900">Pending Payments</h2>
              <p className="text-3xl font-bold text-orange-600">${pendingPayments}</p>
            </div>
            <div className="card">
              <h2 className="text-lg font-medium text-gray-900">Received Today</h2>
              <p className="text-3xl font-bold text-green-600">${receivedPayments}</p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Tasks and Payments for {format(selected, 'MMMM d, yyyy')}</h2>
            {selectedDateTasks.length > 0 ? (
              <div className="space-y-4">
                {selectedDateTasks.map(task => (
                  <div key={task.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium text-gray-900">{task.title}</h3>
                        <p className="text-sm text-gray-500">
                          Payment from: {task.paymentDetails.from}
                        </p>
                        <p className="text-sm text-gray-500">
                          Type: {task.paymentDetails.type}
                        </p>
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                          task.paymentDetails.status === 'Received' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {task.paymentDetails.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">${task.amount}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">Total Earnings</span>
                    <span className="text-2xl font-bold text-green-600">${totalEarnings}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No tasks or payments for this date</p>
            )}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Calendar</h2>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => date && setSelected(date)}
            modifiers={{
              hasPayments: (date) => tasksByDate[format(date, 'yyyy-MM-dd')]?.length > 0
            }}
            modifiersStyles={{
              hasPayments: { backgroundColor: '#EEF2FF', color: '#4F46E5' }
            }}
            className="mx-auto"
          />
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-indigo-100 rounded-full"></div>
              <span className="text-sm text-gray-600">Has payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;