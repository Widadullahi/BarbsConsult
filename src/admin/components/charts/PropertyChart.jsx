import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={handleCloseSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
      />

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <Header 
          user={user}
          notifications={notifications}
          onToggleSidebar={handleToggleSidebar}
        />

        {/* Main Content Area */}
        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;