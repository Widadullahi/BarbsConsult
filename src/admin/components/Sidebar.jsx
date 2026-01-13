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
  FaChartBar,
  FaQuestionCircle,
  FaTimes,
  FaSignOutAlt,
  FaSearch,
  FaChevronDown,
  FaChartPie,
  FaFileAlt,
  FaKey,
  FaShieldAlt,
} from 'react-icons/fa';

const Sidebar = ({ isOpen = false, onClose, collapsed = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [expandedMenus, setExpandedMenus] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  /* ----------------------------------------
     Auto-expand based on route
  ---------------------------------------- */
  useEffect(() => {
    const path = location.pathname;
    setExpandedMenus({
      properties: path.includes('/admin/properties'),
      blog: path.includes('/admin/blog'),
      users: path.includes('/admin/users'),
      settings: path.includes('/admin/settings'),
    });
  }, [location.pathname]);

  /* ----------------------------------------
     Collapse → close all submenus
  ---------------------------------------- */
  useEffect(() => {
    if (collapsed) setExpandedMenus({});
  }, [collapsed]);

  /* ----------------------------------------
     Prevent background scroll on mobile
  ---------------------------------------- */
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isOpen]);

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const isActive = (path, exact = false) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/admin/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
    onClose?.();
  };

  const handleLinkClick = () => {
    onClose?.();
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  /* ----------------------------------------
     Menu Config
  ---------------------------------------- */
  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <FaChartPie />,
      exact: true,
    },
    {
      title: 'Properties',
      icon: <FaHome />,
      color: 'from-blue-500 to-cyan-500',
      submenu: [
        { title: 'All Properties', path: '/admin/properties' },
        { title: 'Add New', path: '/admin/properties/new', highlight: true },
        { title: 'Categories', path: '/admin/properties/categories' },
        { title: 'Featured', path: '/admin/properties/featured' },
        { title: 'Pending Approval', path: '/admin/properties/pending', badge: '12' },
      ],
    },
    {
      title: 'Bookings',
      path: '/admin/bookings',
      icon: <FaCalendarAlt />,
      badge: '5',
    },
    {
      title: 'Reviews',
      path: '/admin/reviews',
      icon: <FaStar />,
    },
    {
      title: 'Blog',
      icon: <FaNewspaper />,
      submenu: [
        { title: 'All Posts', path: '/admin/blog' },
        { title: 'Add New', path: '/admin/blog/new', highlight: true },
        { title: 'Categories', path: '/admin/blog/categories' },
        { title: 'Comments', path: '/admin/blog/comments', badge: '8' },
        { title: 'Tags', path: '/admin/blog/tags' },
      ],
    },
    {
      title: 'Users',
      icon: <FaUsers />,
      submenu: [
        { title: 'All Users', path: '/admin/users' },
        { title: 'Add New', path: '/admin/users/new', highlight: true },
        { title: 'Agents', path: '/admin/users/agents' },
        { title: 'Clients', path: '/admin/users/clients' },
        { title: 'Roles & Permissions', path: '/admin/users/roles' },
      ],
    },
    {
      title: 'Messages',
      path: '/admin/messages',
      icon: <FaEnvelope />,
      badge: '23',
    },
    {
      title: 'Transactions',
      path: '/admin/transactions',
      icon: <FaDollarSign />,
    },
    {
      title: 'Analytics',
      path: '/admin/analytics',
      icon: <FaChartBar />,
    },
    {
      title: 'Reports',
      path: '/admin/reports',
      icon: <FaFileAlt />,
    },
    {
      title: 'Settings',
      icon: <FaCog />,
      submenu: [
        { title: 'General', path: '/admin/settings' },
        { title: 'Website', path: '/admin/settings/website' },
        { title: 'Payment', path: '/admin/settings/payment' },
        { title: 'Email', path: '/admin/settings/email' },
        {
          title: 'Security',
          path: '/admin/settings/security',
          icon: <FaShieldAlt className="text-xs" />,
        },
      ],
    },
    {
      title: 'Support',
      path: '/admin/support',
      icon: <FaQuestionCircle />,
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40
          bg-gradient-to-b from-gray-900 to-gray-950 text-white
          transition-all duration-300
          ${collapsed ? 'w-20' : 'w-72'}
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <Link to="/admin" onClick={handleLinkClick} className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-9" />
            {!collapsed && (
              <div>
                <div className="font-bold text-lg">BarbsConsult</div>
                <div className="text-xs text-gray-400">Premium Real Estate</div>
              </div>
            )}
          </Link>

          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-white">
            <FaTimes />
          </button>
        </div>

        {/* Search */}
        {!collapsed && (
          <form onSubmit={handleSearch} className="p-4 border-b border-gray-800">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 bg-gray-800 rounded-lg text-sm"
              />
            </div>
          </form>
        )}

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {menuItems.map((item) =>
            item.submenu ? (
              <div key={item.title}>
                <button
                  onClick={() => toggleMenu(item.title.toLowerCase())}
                  className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-800/50"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {!collapsed && <span>{item.title}</span>}
                  </div>
                  {!collapsed && <FaChevronDown />}
                </button>

                {!collapsed && expandedMenus[item.title.toLowerCase()] && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.title}
                        to={sub.path}
                        onClick={handleLinkClick}
                        className={`block px-3 py-2 rounded-lg text-sm ${
                          isActive(sub.path)
                            ? 'bg-blue-500/20 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.title}
                to={item.path}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  isActive(item.path, item.exact)
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800/50'
                }`}
                title={collapsed ? item.title : undefined}
              >
                {item.icon}
                {!collapsed && <span>{item.title}</span>}
              </Link>
            )
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-gray-400 hover:text-white"
          >
            <FaSignOutAlt />
            {!collapsed && <span>Logout</span>}
          </button>

          {!collapsed && (
            <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
              <FaKey /> Admin • Full Access
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
