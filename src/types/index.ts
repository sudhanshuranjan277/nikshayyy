export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agent' | 'driver';
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: string;
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  status: 'available' | 'assigned' | 'completed';
  assignedAgent?: string;
  assignedDriver?: string;
  createdAt: string;
}