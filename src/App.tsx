import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import ServiceManagement from './pages/admin/ServiceManagement';
import TaskMonitoring from './pages/admin/TaskMonitoring';

// Agent Pages
import AgentDashboard from './pages/agent/Dashboard';
import ServiceList from './pages/agent/ServiceList';
import AgentHistory from './pages/agent/History';
import AgentProfile from './pages/agent/Profile';

// Driver Pages
import DriverDashboard from './pages/driver/Dashboard';
import TaskManagement from './pages/driver/TaskManagement';
import DriverHistory from './pages/driver/History';
import DriverProfile from './pages/driver/Profile';

// Auth Pages
import Login from './pages/auth/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route element={<Layout />}>
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute role="admin">
                <UserManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/services" element={
              <ProtectedRoute role="admin">
                <ServiceManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/tasks" element={
              <ProtectedRoute role="admin">
                <TaskMonitoring />
              </ProtectedRoute>
            } />

            {/* Agent Routes */}
            <Route path="/agent" element={
              <ProtectedRoute role="agent">
                <AgentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/agent/services" element={
              <ProtectedRoute role="agent">
                <ServiceList />
              </ProtectedRoute>
            } />
            <Route path="/agent/history" element={
              <ProtectedRoute role="agent">
                <AgentHistory />
              </ProtectedRoute>
            } />
            <Route path="/agent/profile" element={
              <ProtectedRoute role="agent">
                <AgentProfile />
              </ProtectedRoute>
            } />

            {/* Driver Routes */}
            <Route path="/driver" element={
              <ProtectedRoute role="driver">
                <DriverDashboard />
              </ProtectedRoute>
            } />
            <Route path="/driver/tasks" element={
              <ProtectedRoute role="driver">
                <TaskManagement />
              </ProtectedRoute>
            } />
            <Route path="/driver/history" element={
              <ProtectedRoute role="driver">
                <DriverHistory />
              </ProtectedRoute>
            } />
            <Route path="/driver/profile" element={
              <ProtectedRoute role="driver">
                <DriverProfile />
              </ProtectedRoute>
            } />
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;