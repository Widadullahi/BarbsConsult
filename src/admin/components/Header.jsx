import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBell,
  FaSearch,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaHome,
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaUserCircle,
} from 'react-icons/fa';

const Header = ({
  user,
  notifications,
  onLogout,
  onToggleSidebar,
  onToggleCollapse,
  sidebarCollapsed = false,
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const userMenuRef = useRef(null);
  const notificationsRef = useRef(null);

  const unreadCount = notifications?.filter((n) => !n.read).length || 0;

  /* ----------------------------------------
     Close dropdowns on outside click
  ---------------------------------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log('Searching:', searchQuery);
    setSearchQuery('');
    setMobileSearchOpen(false);
  };

  const closeAllMenus = () => {
    setShowUserMenu(false);
    setShowNotifications(false);
    setMobileSearchOpen(false);
  };

  const handleLogout = () => {
    closeAllMenus();
    onLogout?.();
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <button
            onClick={() => {
              closeAllMenus();
              onToggleSidebar();
            }}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <FaBars />
          </button>

          {/* Desktop collapse */}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:bg-gray-100"
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>

          <h1 className="hidden md:block text-lg font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>

        {/* Search (desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <form onSubmit={handleSearch} className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-9 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <FaTimes />
              </button>
            )}
          </form>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile search */}
          <button
            onClick={() => {
              closeAllMenus();
              setMobileSearchOpen((v) => !v);
            }}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <FaSearch />
          </button>

          {/* Messages */}
          <Link
            to="/admin/messages"
            onClick={closeAllMenus}
            className="hidden sm:flex p-2 rounded-lg text-gray-500 hover:bg-gray-100 relative"
          >
            <FaEnvelope />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Link>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => {
                setShowNotifications((v) => !v);
                setShowUserMenu(false);
              }}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 relative"
            >
              <FaBell />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                <div className="p-4 border-b font-semibold">
                  Notifications
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications?.length ? (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`p-4 border-b hover:bg-gray-50 ${
                          !n.read ? 'bg-blue-50/50' : ''
                        }`}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{n.title}</span>
                          <span className="text-xs text-gray-500">{n.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{n.message}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      No notifications
                    </div>
                  )}
                </div>
                <Link
                  to="/admin/notifications"
                  onClick={closeAllMenus}
                  className="block text-center py-3 text-sm text-blue-600 hover:bg-gray-50"
                >
                  View all
                </Link>
              </div>
            )}
          </div>

          {/* User menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => {
                setShowUserMenu((v) => !v);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100"
            >
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-full"
              />
              <FaChevronDown
                className={`text-xs transition-transform ${
                  showUserMenu ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                <div className="p-4 border-b">
                  <div className="font-medium">{user?.name}</div>
                  <div className="text-xs text-gray-500">{user?.email}</div>
                </div>

                <div className="p-2">
                  <Link
                    to="/admin/profile"
                    onClick={closeAllMenus}
                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
                  >
                    <FaUserCircle className="mr-2" />
                    Profile
                  </Link>
                  <Link
                    to="/admin/settings"
                    onClick={closeAllMenus}
                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
                  >
                    <FaCog className="mr-2" />
                    Settings
                  </Link>
                  <Link
                    to="/"
                    onClick={closeAllMenus}
                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
                  >
                    <FaHome className="mr-2" />
                    View Site
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-4">
          <form onSubmit={handleSearch} className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-9 pr-10 py-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => setMobileSearchOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <FaTimes />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
