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
  FaArrowRight
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
      icon: <FaHome className="text-2xl" />,
      color: 'bg-blue-500',
      link: '/admin/properties'
    },
    {
      title: 'Active Listings',
      value: '89',
      change: '+8.2%',
      icon: <FaChartLine className="text-2xl" />,
      color: 'bg-green-500',
      link: '/admin/properties?status=active'
    },
    {
      title: 'Blog Posts',
      value: '48',
      change: '+15.3%',
      icon: <FaNewspaper className="text-2xl" />,
      color: 'bg-purple-500',
      link: '/admin/blog'
    },
    {
      title: 'Total Users',
      value: '2,847',
      change: '+23.1%',
      icon: <FaUsers className="text-2xl" />,
      color: 'bg-orange-500',
      link: '/admin/users'
    },
    {
      title: 'Monthly Revenue',
      value: '₦8.5M',
      change: '+18.4%',
      icon: <FaDollarSign className="text-2xl" />,
      color: 'bg-emerald-500',
      link: '/admin/transactions'
    },
    {
      title: 'Website Views',
      value: '45.2K',
      change: '+31.7%',
      icon: <FaEye className="text-2xl" />,
      color: 'bg-indigo-500',
      link: '/admin/analytics'
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
      color: 'text-blue-500'
    },
    {
      id: 2,
      user: 'Sarah Smith',
      action: 'inquired about',
      target: '3-Bedroom Apartment Lekki',
      time: '4 hours ago',
      icon: <FaComment />,
      color: 'text-green-500'
    },
    {
      id: 3,
      user: 'Admin',
      action: 'published blog post',
      target: '2024 Market Trends',
      time: '1 day ago',
      icon: <FaNewspaper />,
      color: 'text-purple-500'
    },
    {
      id: 4,
      user: 'Michael Chen',
      action: 'scheduled viewing for',
      target: 'Commercial Space VI',
      time: '2 days ago',
      icon: <FaCalendarAlt />,
      color: 'text-orange-500'
    },
  ];

  const upcomingViewings = [
    { id: 1, property: 'Luxury Villa Ikoyi', client: 'Mr. Adebayo', date: 'Today, 2:00 PM' },
    { id: 2, property: '3-Bedroom Lekki', client: 'Ms. Johnson', date: 'Tomorrow, 10:00 AM' },
    { id: 3, property: 'Office Space VI', client: 'Tech Corp Ltd', date: 'Jan 20, 3:30 PM' },
  ];

  const recentMessages = [
    { id: 1, name: 'David Wilson', email: 'david@email.com', message: 'Interested in Lekki property...', time: '2 hours ago' },
    { id: 2, name: 'Grace Okoro', email: 'grace@email.com', message: 'Need consultation about...', time: '5 hours ago' },
    { id: 3, name: 'James Anderson', email: 'james@email.com', message: 'Looking for commercial space...', time: '1 day ago' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex space-x-2">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="weekly">This Week</option>
              <option value="monthly">This Month</option>
              <option value="quarterly">This Quarter</option>
              <option value="yearly">This Year</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
            <div className="text-sm text-gray-500">Last 6 months</div>
          </div>
          <RevenueChart />
        </div>

        {/* Property Types Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Property Distribution</h3>
            <div className="text-sm text-gray-500">By type</div>
          </div>
          <PropertyChart />
        </div>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
              <Link to="/admin/activity" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                View All
              </Link>
            </div>
            <RecentActivity activities={activities} />
          </div>

          {/* Upcoming Viewings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Upcoming Viewings</h3>
              <Link to="/admin/appointments" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                View Calendar
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingViewings.map((viewing) => (
                <div key={viewing.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{viewing.property}</h4>
                    <p className="text-sm text-gray-600">Client: {viewing.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{viewing.date}</div>
                    <Link to={`/admin/appointments/${viewing.id}`} className="text-sm text-blue-600 hover:text-blue-700">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Recent Messages</h3>
              <Link to="/admin/messages" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaEnvelope className="text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{message.name}</h4>
                          <p className="text-sm text-gray-500">{message.email}</p>
                        </div>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2 line-clamp-2">{message.message}</p>
                      <Link 
                        to={`/admin/messages/${message.id}`}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mt-2"
                      >
                        Reply
                        <FaArrowRight className="ml-1 text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link 
                to="/admin/messages"
                className="block w-full py-3 text-center border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                View All Messages
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                to="/admin/properties/new"
                className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaHome className="mr-2" />
                Add New Property
              </Link>
              <Link 
                to="/admin/blog/new"
                className="flex items-center justify-center w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaNewspaper className="mr-2" />
                Create Blog Post
              </Link>
              <Link 
                to="/admin/users/new"
                className="flex items-center justify-center w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <FaUsers className="mr-2" />
                Add New User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;