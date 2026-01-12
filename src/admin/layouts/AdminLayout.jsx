// src/admin/AdminLayout.jsx - FINAL VERSION
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const user = {
    name: 'Admin User',
    email: 'admin@barbsconsult.com',
    role: 'Administrator',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  };

  const notifications = [
    { id: 1, title: 'New Property Listing', message: '3 new properties added', time: '2 hours ago', read: false },
    { id: 2, title: 'Contact Form Submission', message: 'New message from David Wilson', time: '4 hours ago', read: false },
    { id: 3, title: 'Blog Comment', message: 'New comment on market trends', time: '1 day ago', read: true },
  ];

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToggleCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    // Example: localStorage.removeItem('token');
    // Example: window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen}
        collapsed={sidebarCollapsed}
        onClose={handleCloseSidebar}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'
      }`}>
        {/* Header */}
        <Header 
          user={user}
          notifications={notifications}
          onToggleSidebar={handleToggleSidebar}
          onToggleCollapse={handleToggleCollapse}
          onLogout={handleLogout}
          sidebarCollapsed={sidebarCollapsed}
        />

        {/* Main Content Area */}
        <main className="py-8 min-h-[calc(100vh-80px)]">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>

        {/* Optional Footer */}
        <footer className="border-t border-gray-200 bg-white py-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BarbsConsult Premium Real Estate. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Add custom animation for mobile search */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;