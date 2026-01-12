// src/admin/components/Sidebar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
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
  FaTimes,
  FaSignOutAlt,
  FaUserCircle,
  FaBell,
  FaSearch,
  FaBars,
  FaChartPie,
  FaFileAlt,
  FaKey,
  FaShieldAlt
} from 'react-icons/fa';

const Sidebar = ({ collapsed = false, onClose, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedMenus, setExpandedMenus] = useState({
    properties: location.pathname.includes('/admin/properties'),
    blog: location.pathname.includes('/admin/blog'),
    users: location.pathname.includes('/admin/users'),
    settings: location.pathname.includes('/admin/settings')
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-expand menus based on current route
  useEffect(() => {
    const path = location.pathname;
    setExpandedMenus(prev => ({
      ...prev,
      properties: path.includes('/admin/properties'),
      blog: path.includes('/admin/blog'),
      users: path.includes('/admin/users'),
      settings: path.includes('/admin/settings')
    }));
  }, [location.pathname]);

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
      icon: <FaChartPie className="text-lg" />,
      exact: true
    },
    {
      title: 'Properties',
      icon: <FaHome className="text-lg" />,
      color: 'from-blue-500 to-cyan-500',
      submenu: [
        { title: 'All Properties', path: '/admin/properties' },
        { title: 'Add New', path: '/admin/properties/new', highlight: true },
        { title: 'Categories', path: '/admin/properties/categories' },
        { title: 'Featured', path: '/admin/properties/featured' },
        { title: 'Pending Approval', path: '/admin/properties/pending', badge: '12' },
      ]
    },
    {
      title: 'Bookings',
      path: '/admin/bookings',
      icon: <FaCalendarAlt className="text-lg" />,
      color: 'from-emerald-500 to-green-500',
      badge: '5'
    },
    {
      title: 'Reviews',
      path: '/admin/reviews',
      icon: <FaStar className="text-lg" />,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Blog',
      icon: <FaNewspaper className="text-lg" />,
      color: 'from-violet-500 to-purple-500',
      submenu: [
        { title: 'All Posts', path: '/admin/blog' },
        { title: 'Add New', path: '/admin/blog/new', highlight: true },
        { title: 'Categories', path: '/admin/blog/categories' },
        { title: 'Comments', path: '/admin/blog/comments', badge: '8' },
        { title: 'Tags', path: '/admin/blog/tags' },
      ]
    },
    {
      title: 'Users',
      icon: <FaUsers className="text-lg" />,
      color: 'from-rose-500 to-pink-500',
      submenu: [
        { title: 'All Users', path: '/admin/users' },
        { title: 'Add New', path: '/admin/users/new', highlight: true },
        { title: 'Agents', path: '/admin/users/agents' },
        { title: 'Clients', path: '/admin/users/clients' },
        { title: 'Roles & Permissions', path: '/admin/users/roles' },
      ]
    },
    {
      title: 'Messages',
      path: '/admin/messages',
      icon: <FaEnvelope className="text-lg" />,
      color: 'from-indigo-500 to-blue-500',
      badge: '23'
    },
    {
      title: 'Transactions',
      path: '/admin/transactions',
      icon: <FaDollarSign className="text-lg" />,
      color: 'from-lime-500 to-green-400'
    },
    {
      title: 'Analytics',
      path: '/admin/analytics',
      icon: <FaChartBar className="text-lg" />,
      color: 'from-cyan-500 to-blue-400'
    },
    {
      title: 'Reports',
      path: '/admin/reports',
      icon: <FaFileAlt className="text-lg" />,
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Settings',
      icon: <FaCog className="text-lg" />,
      color: 'from-gray-600 to-gray-500',
      submenu: [
        { title: 'General', path: '/admin/settings' },
        { title: 'Website', path: '/admin/settings/website' },
        { title: 'Payment', path: '/admin/settings/payment' },
        { title: 'Email', path: '/admin/settings/email' },
        { title: 'Security', path: '/admin/settings/security', icon: <FaShieldAlt className="text-sm" /> },
      ]
    },
    {
      title: 'Support',
      path: '/admin/support',
      icon: <FaQuestionCircle className="text-lg" />,
      color: 'from-teal-500 to-emerald-400'
    },
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/admin/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <>
      {/* Mobile overlay */}
      {onClose && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={onClose}
        />
      )}

      <aside className={`bg-gradient-to-b from-gray-900 to-gray-950 text-white h-full ${collapsed ? 'w-20' : 'w-72'} transition-all duration-300 fixed lg:relative z-40 shadow-2xl border-r border-gray-800`}>
        {/* Logo Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between relative">
          <Link to="/admin" className="flex items-center space-x-3 overflow-hidden">
            {!collapsed ? (
              <>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 blur-lg opacity-50"></div>
                  <img src={logo} width="40" alt="BarbsConsult Logo" className="relative" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl font-bold text-white truncate">
                    Barbs<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Consult</span>
                  </div>
                  <div className="text-xs text-gray-400">Premium Real Estate</div>
                </div>
              </>
            ) : (
              <div className="mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 blur-lg opacity-50"></div>
                  <img src={logo} width="40" alt="BarbsConsult Logo" className="relative" />
                </div>
              </div>
            )}
          </Link>
          
          {/* Toggle button for desktop */}
          {onToggle && (
            <button
              onClick={onToggle}
              className="hidden lg:flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors"
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <FaBars className="text-sm" />
            </button>
          )}
          
          {/* Close button for mobile */}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden text-gray-400 hover:text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FaTimes />
            </button>
          )}
        </div>

        {/* Search Bar - Only when expanded */}
        {!collapsed && (
          <div className="px-4 py-3 border-b border-gray-800">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch className="text-sm" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </form>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              if (item.submenu) {
                const isExpanded = expandedMenus[item.title.toLowerCase()];
                const hasActiveChild = item.submenu.some(sub => isActive(sub.path));

                return (
                  <li key={item.title}>
                    <button
                      onClick={() => toggleMenu(item.title.toLowerCase())}
                      className={`flex items-center justify-between w-full p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 ${
                        hasActiveChild ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-inner' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-md`}>
                          {item.icon}
                        </div>
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                      </div>
                      {!collapsed && (
                        <span className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                          <FaChevronDown className="text-xs" />
                        </span>
                      )}
                    </button>
                    
                    {(!collapsed && isExpanded) && (
                      <ul className="ml-4 mt-1 space-y-1 border-l border-gray-800 pl-3">
                        {item.submenu.map((sub) => {
                          const active = isActive(sub.path);
                          return (
                            <li key={sub.title}>
                              <Link
                                to={sub.path}
                                className={`flex items-center justify-between py-2.5 px-3 text-sm rounded-lg transition-all duration-200 ${
                                  active
                                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-l-2 border-blue-500'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                                }`}
                              >
                                <div className="flex items-center space-x-2">
                                  {sub.icon && <span className="opacity-70">{sub.icon}</span>}
                                  <span className={sub.highlight ? 'font-semibold' : ''}>
                                    {sub.title}
                                  </span>
                                </div>
                                {sub.badge && (
                                  <span className="px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full animate-pulse">
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              const active = isActive(item.path, item.exact);
              return (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                      active
                        ? 'text-white bg-gradient-to-r from-gray-800 to-gray-900 shadow-inner'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color || 'from-gray-600 to-gray-500'} shadow-md group-hover:shadow-lg transition-shadow`}>
                        {item.icon}
                      </div>
                      {!collapsed && (
                        <span className="font-medium">
                          {item.title}
                          {item.badge && (
                            <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full animate-pulse">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      )}
                    </div>
                    {!collapsed && item.badge && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    {collapsed && item.badge && (
                      <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick Stats - Only show when not collapsed */}
          {!collapsed && (
            <div className="mt-8 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-gray-300">Quick Stats</h4>
                <FaChartLine className="text-gray-400 text-sm" />
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Properties</span>
                  <span className="font-semibold text-white">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Pending</span>
                  <span className="font-semibold text-amber-400">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Bookings</span>
                  <span className="font-semibold text-emerald-400">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Revenue</span>
                  <span className="font-semibold text-green-400">₦8.5M</span>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* User Profile & Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gradient-to-t from-gray-900 to-gray-900/95 backdrop-blur-sm">
          {!collapsed ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-800/30 rounded-xl transition-colors cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 blur-md opacity-30"></div>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-10 h-10 rounded-xl border-2 border-gray-700 relative"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-gray-900 rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white truncate">Admin User</div>
                  <div className="text-xs text-gray-400 truncate">administrator@barbsconsult.com</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  title="Logout"
                >
                  <FaSignOutAlt className="text-sm" />
                </button>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <FaKey className="text-xs" />
                  <span>Admin • Full Access</span>
                </div>
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                  Online
                </span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                title="Logout"
              >
                <FaSignOutAlt className="text-lg" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;