// src/admin/components/Sidebar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome,
  FaNewspaper,
  FaUsers,
  FaChartLine,
  FaCog,
  FaCalendarAlt,
  FaStar,
  FaEnvelope,
  FaDollarSign,
  FaBuilding,
  FaChevronDown,
  FaChevronRight,
  FaClipboardList,
  FaChartBar,
  FaQuestionCircle,
  FaTimes
} from 'react-icons/fa';

const Sidebar = ({ collapsed = false, onClose }) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({
    properties: true,
    blog: true,
    users: false,
    settings: false
  });

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <FaChartLine />,
      exact: true
    },
    {
      title: 'Properties',
      icon: <FaHome />,
      submenu: [
        { title: 'All Properties', path: '/admin/properties' },
        { title: 'Add New', path: '/admin/properties/new' },
        { title: 'Categories', path: '/admin/properties/categories' },
        { title: 'Featured', path: '/admin/properties/featured' },
        { title: 'Pending Approval', path: '/admin/properties/pending' },
      ]
    },
    {
      title: 'Bookings',
      path: '/admin/bookings',
      icon: <FaCalendarAlt />
    },
    {
      title: 'Reviews',
      path: '/admin/reviews',
      icon: <FaStar />
    },
    {
      title: 'Blog',
      icon: <FaNewspaper />,
      submenu: [
        { title: 'All Posts', path: '/admin/blog' },
        { title: 'Add New', path: '/admin/blog/new' },
        { title: 'Categories', path: '/admin/blog/categories' },
        { title: 'Comments', path: '/admin/blog/comments' },
        { title: 'Tags', path: '/admin/blog/tags' },
      ]
    },
    {
      title: 'Users',
      icon: <FaUsers />,
      submenu: [
        { title: 'All Users', path: '/admin/users' },
        { title: 'Add New', path: '/admin/users/new' },
        { title: 'Agents', path: '/admin/users/agents' },
        { title: 'Clients', path: '/admin/users/clients' },
        { title: 'Roles & Permissions', path: '/admin/users/roles' },
      ]
    },
    {
      title: 'Messages',
      path: '/admin/messages',
      icon: <FaEnvelope />,
      badge: '23'
    },
    {
      title: 'Transactions',
      path: '/admin/transactions',
      icon: <FaDollarSign />
    },
    {
      title: 'Analytics',
      path: '/admin/analytics',
      icon: <FaChartBar />
    },
    {
      title: 'Settings',
      icon: <FaCog />,
      submenu: [
        { title: 'General', path: '/admin/settings' },
        { title: 'Website', path: '/admin/settings/website' },
        { title: 'Payment', path: '/admin/settings/payment' },
        { title: 'Email', path: '/admin/settings/email' },
        { title: 'Security', path: '/admin/settings/security' },
      ]
    },
    {
      title: 'Support',
      path: '/admin/support',
      icon: <FaQuestionCircle />
    },
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`bg-gray-900 text-white h-full ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 fixed lg:relative z-40`}>
      <div className="p-6 border-b border-gray-800 flex items-center justify-between">
        <Link to="/admin" className="flex items-center space-x-3">
          {!collapsed ? (
            <>
              <div className="relative">
                <img src="/logo.png" width="40" alt="BarbsConsult Logo" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  Barbs<span className="text-blue-400">Consult</span>
                </div>
                <div className="text-xs text-gray-400">Admin Panel</div>
              </div>
            </>
          ) : (
            <div className="mx-auto">
              <img src="/logo.png" width="40" alt="BarbsConsult Logo" />
            </div>
          )}
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <nav className="p-4 overflow-y-auto h-[calc(100vh-120px)]">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            if (item.submenu) {
              const isExpanded = expandedMenus[item.title.toLowerCase()];
              const hasActiveChild = item.submenu.some(sub => isActive(sub.path));

              return (
                <li key={item.title}>
                  <button
                    onClick={() => toggleMenu(item.title.toLowerCase())}
                    className={`flex items-center justify-between w-full p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors ${
                      hasActiveChild ? 'bg-gray-800 text-white' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{item.icon}</span>
                      {!collapsed && <span>{item.title}</span>}
                    </div>
                    {!collapsed && (
                      <span>
                        {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                      </span>
                    )}
                  </button>
                  
                  {(!collapsed && isExpanded) && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <li key={sub.title}>
                          <Link
                            to={sub.path}
                            className={`block p-2 text-sm rounded transition-colors ${
                              isActive(sub.path)
                                ? 'text-white bg-blue-600'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                            }`}
                          >
                            {sub.title}
                            {sub.badge && (
                              <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className={`flex items-center justify-between p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors ${
                    isActive(item.path, item.exact) ? 'bg-gray-800 text-white' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    {!collapsed && <span>{item.title}</span>}
                  </div>
                  {item.badge && !collapsed && (
                    <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Quick Stats - Only show when not collapsed */}
        {!collapsed && (
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Quick Stats</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Properties</span>
                <span className="font-semibold">156</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Pending</span>
                <span className="font-semibold text-yellow-400">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Bookings</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Revenue</span>
                <span className="font-semibold text-green-400">₦8.5M</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* User Info - Only show when not collapsed */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-gray-700"
            />
            <div className="flex-1">
              <div className="font-medium text-white">Admin User</div>
              <div className="text-xs text-gray-400">Administrator</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;