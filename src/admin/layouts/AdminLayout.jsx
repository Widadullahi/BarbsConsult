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
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  };

  const notifications = [
    {
      id: 1,
      title: 'New Property Listing',
      message: '3 new properties added',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      title: 'Contact Form Submission',
      message: 'New message from David Wilson',
      time: '4 hours ago',
      read: false,
    },
    {
      id: 3,
      title: 'Blog Comment',
      message: 'New comment on market trends',
      time: '1 day ago',
      read: true,
    },
  ];

  const handleToggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handleToggleCollapse = () => setSidebarCollapsed((prev) => !prev);
  const handleCloseSidebar = () => setSidebarOpen(false);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        collapsed={sidebarCollapsed}
        onClose={handleCloseSidebar}
      />

      {/* Page wrapper */}
      <div
        className={`
          flex flex-col flex-1 transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'}
        `}
      >
        {/* Header */}
        <Header
          user={user}
          notifications={notifications}
          onToggleSidebar={handleToggleSidebar}
          onToggleCollapse={handleToggleCollapse}
          onLogout={handleLogout}
          sidebarCollapsed={sidebarCollapsed}
        />

        {/* Main */}
        <main className="flex-1 pt-6 pb-10">
          <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} BarbsConsult Premium Real Estate. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
