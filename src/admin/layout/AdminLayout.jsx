import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  FaHome, FaBuilding, FaUsers, FaCalendarAlt, 
  FaChartBar, FaStar, FaCog, FaSignOutAlt, 
  FaBars, FaTimes, FaBell, FaUserCircle
} from 'react-icons/fa'
import { useState } from 'react'
import { FaNewspaper } from 'react-icons/fa'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const navItems = [
    { path: '/admin', icon: <FaHome />, label: 'Dashboard' },
    { path: '/admin/properties', icon: <FaBuilding />, label: 'Properties' },
    { path: '/admin/users', icon: <FaUsers />, label: 'Users' },
    { path: '/admin/bookings', icon: <FaCalendarAlt />, label: 'Bookings' },
    { path: '/admin/reviews', icon: <FaStar />, label: 'Reviews' },
  { path: '/admin/blog', icon: <FaNewspaper />, label: 'Blog' },
    { path: '/admin/blog', icon: <FaNewspaper />, label: 'Blog' },
    { path: '/admin/analytics', icon: <FaChartBar />, label: 'Analytics' },
    { path: '/admin/settings', icon: <FaCog />, label: 'Settings' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-auto`}>
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-logoRed to-logoBlue rounded-lg flex items-center justify-center mr-3">
              <FaBuilding className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BARBSCONSULT</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-logoRed/10 text-logoRed border-l-4 border-logoRed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Admin Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <FaUserCircle className="text-gray-600 text-xl" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <button className="p-2 text-gray-500 hover:text-red-600">
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 mr-4"
              >
                {sidebarOpen ? <FaTimes /> : <FaBars />}
              </button>
              <h2 className="text-lg font-semibold text-gray-800">
                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <FaBell />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-logoRed to-logoBlue rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default AdminLayout