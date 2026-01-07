// src/admin/pages/Analytics.jsx
import { useState } from 'react';
import { 
  FaChartLine, 
  FaEye, 
  FaUsers, 
  FaHome, 
  FaDollarSign,
  FaCalendarAlt,
  FaDownload,
  FaFilter
} from 'react-icons/fa';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  // Revenue data
  const revenueData = [
    { month: 'Jul', revenue: 4.2, expenses: 2.1, profit: 2.1 },
    { month: 'Aug', revenue: 5.1, expenses: 2.5, profit: 2.6 },
    { month: 'Sep', revenue: 6.3, expenses: 3.2, profit: 3.1 },
    { month: 'Oct', revenue: 7.8, expenses: 3.8, profit: 4.0 },
    { month: 'Nov', revenue: 8.5, expenses: 4.2, profit: 4.3 },
    { month: 'Dec', revenue: 10.2, expenses: 5.1, profit: 5.1 },
  ];

  // Property type distribution
  const propertyData = [
    { name: 'Residential', value: 45, color: '#3b82f6' },
    { name: 'Commercial', value: 25, color: '#10b981' },
    { name: 'Land', value: 20, color: '#f59e0b' },
    { name: 'Shortlet', value: 10, color: '#8b5cf6' },
  ];

  // Website traffic
  const trafficData = [
    { source: 'Direct', visitors: 4500 },
    { source: 'Google', visitors: 3200 },
    { source: 'Social Media', visitors: 1800 },
    { source: 'Referrals', visitors: 1200 },
    { source: 'Email', visitors: 900 },
  ];

  // Performance metrics
  const metrics = [
    {
      title: 'Total Revenue',
      value: '₦15.8M',
      change: '+12.5%',
      icon: <FaDollarSign className="text-2xl" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Website Visitors',
      value: '45.2K',
      change: '+23.1%',
      icon: <FaEye className="text-2xl" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'New Users',
      value: '2,847',
      change: '+15.2%',
      icon: <FaUsers className="text-2xl" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Properties Listed',
      value: '156',
      change: '+8.3%',
      icon: <FaHome className="text-2xl" />,
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const recentActivities = [
    { time: 'Today, 10:30 AM', action: 'Property listed in Ikoyi', user: 'John Doe' },
    { time: 'Today, 09:15 AM', action: 'Blog post published', user: 'Admin' },
    { time: 'Yesterday, 03:45 PM', action: 'New user registered', user: 'Sarah Smith' },
    { time: 'Yesterday, 11:20 AM', action: 'Payment received', user: 'Michael Chen' },
    { time: 'Jan 13, 2024', action: 'Property sold in Lekki', user: 'David Wilson' },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
          <p className="font-medium text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.name.includes('revenue') ? '₦' : ''}{entry.value.toLocaleString()}
              {entry.name.includes('revenue') ? 'M' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Comprehensive insights and performance metrics</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="weekly">Last 7 Days</option>
            <option value="monthly">Last 30 Days</option>
            <option value="quarterly">Last Quarter</option>
            <option value="yearly">Last Year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <FaDownload className="mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color} text-white`}>
                {metric.icon}
              </div>
              <span className={`px-2 py-1 text-sm rounded-full ${
                metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
            <p className="text-gray-600">{metric.title}</p>
          </div>
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
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280' }}
                  tickFormatter={(value) => `₦${value}M`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  name="Profit"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Property Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Property Distribution</h3>
            <div className="text-sm text-gray-500">By type</div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={propertyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {propertyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">Traffic Sources</h3>
          <div className="text-sm text-gray-500">Last 30 days</div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="source" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip 
                formatter={(value) => [value.toLocaleString(), 'Visitors']}
                labelStyle={{ color: '#374151' }}
              />
              <Bar 
                dataKey="visitors" 
                name="Visitors"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
          <div className="text-sm text-gray-500">Last 7 days</div>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaCalendarAlt className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;