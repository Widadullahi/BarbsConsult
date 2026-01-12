// src/admin/pages/Dashboard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaChartLine, 
  FaHome, 
  FaNewspaper, 
  FaUsers, 
  FaEnvelope, 
  FaCalendarAlt,
  FaDollarSign,
  FaEye,
  FaComment,
  FaArrowRight,
  FaPlus,
  FaFileAlt,
  FaChevronRight
} from 'react-icons/fa';
import StatCard from '../components/StatsCard';
import RecentActivity from '../components/RecentActivity';
import RevenueChart from '../components/charts/RevenueCharts';
import PropertyChart from '../components/charts/PropertyChart';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  const stats = [
    {
      title: 'Total Properties',
      value: '156',
      change: '+12.5%',
      icon: <FaHome className="text-xl" />,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/properties',
      trend: 'up'
    },
    {
      title: 'Active Listings',
      value: '89',
      change: '+8.2%',
      icon: <FaChartLine className="text-xl" />,
      color: 'from-emerald-500 to-emerald-600',
      link: '/admin/properties?status=active',
      trend: 'up'
    },
    {
      title: 'Blog Posts',
      value: '48',
      change: '+15.3%',
      icon: <FaNewspaper className="text-xl" />,
      color: 'from-violet-500 to-violet-600',
      link: '/admin/blog',
      trend: 'up'
    },
    {
      title: 'Total Users',
      value: '2,847',
      change: '+23.1%',
      icon: <FaUsers className="text-xl" />,
      color: 'from-amber-500 to-amber-600',
      link: '/admin/users',
      trend: 'up'
    },
    {
      title: 'Monthly Revenue',
      value: '₦8.5M',
      change: '+18.4%',
      icon: <FaDollarSign className="text-xl" />,
      color: 'from-rose-500 to-rose-600',
      link: '/admin/transactions',
      trend: 'up'
    },
    {
      title: 'Website Views',
      value: '45.2K',
      change: '+31.7%',
      icon: <FaEye className="text-xl" />,
      color: 'from-indigo-500 to-indigo-600',
      link: '/admin/analytics',
      trend: 'up'
    },
  ];

  const activities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'listed a new property',
      target: 'Luxury Villa in Ikoyi',
      time: '2 hours ago',
      icon: <FaHome />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      user: 'Sarah Smith',
      action: 'inquired about',
      target: '3-Bedroom Apartment Lekki',
      time: '4 hours ago',
      icon: <FaComment />,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      id: 3,
      user: 'Admin',
      action: 'published blog post',
      target: '2024 Market Trends',
      time: '1 day ago',
      icon: <FaNewspaper />,
      color: 'bg-violet-100 text-violet-600'
    },
    {
      id: 4,
      user: 'Michael Chen',
      action: 'scheduled viewing for',
      target: 'Commercial Space VI',
      time: '2 days ago',
      icon: <FaCalendarAlt />,
      color: 'bg-amber-100 text-amber-600'
    },
  ];

  const upcomingViewings = [
    { id: 1, property: 'Luxury Villa Ikoyi', client: 'Mr. Adebayo', date: 'Today, 2:00 PM', status: 'confirmed' },
    { id: 2, property: '3-Bedroom Lekki', client: 'Ms. Johnson', date: 'Tomorrow, 10:00 AM', status: 'pending' },
    { id: 3, property: 'Office Space VI', client: 'Tech Corp Ltd', date: 'Jan 20, 3:30 PM', status: 'confirmed' },
  ];

  const recentMessages = [
    { id: 1, name: 'David Wilson', email: 'david@email.com', message: 'Interested in Lekki property...', time: '2 hours ago', unread: true },
    { id: 2, name: 'Grace Okoro', email: 'grace@email.com', message: 'Need consultation about...', time: '5 hours ago', unread: true },
    { id: 3, name: 'James Anderson', email: 'james@email.com', message: 'Looking for commercial space...', time: '1 day ago', unread: false },
  ];

  const quickActions = [
    { icon: <FaHome />, label: 'Add New Property', color: 'bg-gradient-to-r from-blue-500 to-blue-600', link: '/admin/properties/new' },
    { icon: <FaNewspaper />, label: 'Create Blog Post', color: 'bg-gradient-to-r from-emerald-500 to-emerald-600', link: '/admin/blog/new' },
    { icon: <FaUsers />, label: 'Add New User', color: 'bg-gradient-to-r from-violet-500 to-violet-600', link: '/admin/users/new' },
    { icon: <FaFileAlt />, label: 'Generate Report', color: 'bg-gradient-to-r from-amber-500 to-amber-600', link: '/admin/reports' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          </div>
          <p className="text-gray-600 ml-5">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="appearance-none w-full sm:w-48 border border-gray-300 rounded-xl px-4 py-3 pl-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white hover:border-gray-400 transition-colors"
              >
                <option value="weekly">This Week</option>
                <option value="monthly">This Month</option>
                <option value="quarterly">This Quarter</option>
                <option value="yearly">This Year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg font-medium flex items-center justify-center gap-2">
              <FaFileAlt />
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-sm`}>
                {stat.icon}
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                {stat.change}
              </span>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <Link 
              to={stat.link}
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors group"
            >
              View details
              <FaChevronRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
              <p className="text-sm text-gray-500 mt-1">Last 6 months performance</p>
            </div>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
              ₦8.5M total
            </span>
          </div>
          <RevenueChart />
        </div>

        {/* Property Types Chart */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Property Distribution</h3>
              <p className="text-sm text-gray-500 mt-1">Categorized by property type</p>
            </div>
            <div className="text-sm text-gray-500">156 total</div>
          </div>
          <PropertyChart />
        </div>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Recent Activity & Viewings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
              </div>
              <Link 
                to="/admin/activity" 
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
              >
                View All
                <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <RecentActivity activities={activities} />
          </div>

          {/* Upcoming Viewings */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-900">Upcoming Viewings</h3>
              </div>
              <Link 
                to="/admin/appointments" 
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
              >
                View Calendar
                <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingViewings.map((viewing) => (
                <div 
                  key={viewing.id} 
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                        <FaCalendarAlt className="text-blue-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{viewing.property}</h4>
                      <div className="flex items-center space-x-3 mt-1">
                        <p className="text-sm text-gray-600">Client: {viewing.client}</p>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${viewing.status === 'confirmed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                          {viewing.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{viewing.date.split(',')[0]}</div>
                    <div className="text-sm text-gray-500">{viewing.date.split(',')[1]}</div>
                    <Link 
                      to={`/admin/appointments/${viewing.id}`} 
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mt-1 group"
                    >
                      Details
                      <FaChevronRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Messages & Quick Actions */}
        <div className="space-y-6">
          {/* Recent Messages */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 bg-gradient-to-b from-violet-500 to-violet-600 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-900">Recent Messages</h3>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {recentMessages.filter(m => m.unread).length} new
              </span>
            </div>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`p-4 rounded-xl border ${message.unread ? 'border-blue-200 bg-blue-50' : 'border-gray-200'} hover:shadow-sm transition-all`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <FaEnvelope className="text-blue-600 text-lg" />
                        </div>
                        {message.unread && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900 truncate">{message.name}</h4>
                          <p className="text-sm text-gray-500 truncate">{message.email}</p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2 line-clamp-2">{message.message}</p>
                      <Link 
                        to={`/admin/messages/${message.id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mt-3 group"
                      >
                        Reply Now
                        <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              to="/admin/messages"
              className="block w-full py-3 text-center bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-medium rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all mt-6 border border-blue-200"
            >
              View All Messages
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-2 h-6 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
              <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className={`flex items-center justify-between w-full py-4 px-4 text-white rounded-xl ${action.color} hover:shadow-lg transition-all transform hover:-translate-y-0.5`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      {action.icon}
                    </div>
                    <span className="font-medium">{action.label}</span>
                  </div>
                  <FaPlus className="text-white/80" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;