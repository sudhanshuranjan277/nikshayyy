import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const DriverHistory: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Dummy data for completed tasks and payments
  const completedTasks = [
    {
      id: 1,
      date: '2024-03-15',
      task: 'Package Delivery',
      location: '456 Oak St',
      payment: {
        amount: 50,
        from: 'John Agent',
        status: 'Received'
      }
    },
    {
      id: 2,
      date: '2024-03-15',
      task: 'Furniture Delivery',
      location: '789 Pine St',
      payment: {
        amount: 100,
        from: 'Sarah Customer',
        status: 'Pending'
      }
    }
  ];

  const monthDays = eachDayOfInterval({
    start: startOfMonth(selectedMonth),
    end: endOfMonth(selectedMonth)
  });

  const tasksByDate = monthDays.map(day => {
    const dayTasks = completedTasks.filter(task => task.date === format(day, 'yyyy-MM-dd'));
    const totalEarnings = dayTasks.reduce((sum, task) => sum + task.payment.amount, 0);
    return {
      date: day,
      tasks: dayTasks,
      totalEarnings
    };
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Task History</h1>
      
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            {format(selectedMonth, 'MMMM yyyy')} Summary
          </h2>
          <div className="flex gap-2">
            <select
              className="input-field"
              value={selectedMonth.getMonth()}
              onChange={(e) => {
                const newDate = new Date(selectedMonth);
                newDate.setMonth(parseInt(e.target.value));
                setSelectedMonth(newDate);
              }}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {format(new Date(2024, i), 'MMMM')}
                </option>
              ))}
            </select>
            <button className="btn-secondary">Export</button>
          </div>
        </div>

        <div className="space-y-6">
          {tasksByDate.map(({ date, tasks, totalEarnings }) => (
            tasks.length > 0 && (
              <div key={format(date, 'yyyy-MM-dd')} className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {format(date, 'MMMM d, yyyy')}
                  </h3>
                  <span className="text-green-600 font-semibold">
                    Total: ${totalEarnings}
                  </span>
                </div>
                <div className="space-y-4">
                  {tasks.map(task => (
                    <div key={task.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{task.task}</h4>
                          <p className="text-gray-500">{task.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ${task.payment.amount}
                          </p>
                          <p className="text-sm text-gray-500">
                            From: {task.payment.from}
                          </p>
                          <span className={`status-badge ${
                            task.payment.status === 'Received' 
                              ? 'status-completed' 
                              : 'status-pending'
                          }`}>
                            {task.payment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverHistory;