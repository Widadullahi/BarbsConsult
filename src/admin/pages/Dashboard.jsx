import { FaBuilding, FaUsers, FaCalendarAlt, FaMoneyBillWave, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  // Stats data
  const stats = [
    { 
      title: 'Total Properties', 
      value: '156', 
      icon: <FaBuilding className="text-logoBlue" />, 
      change: '+12%', 
      trend: 'up',
      color: 'bg-blue-50',
      link: '/admin/properties'
    },
    { 
      title: 'Active Clients', 
      value: '523', 
      icon: <FaUsers className="text-logoRed" />, 
      change: '+8%', 
      trend: 'up',
      color: 'bg-red-50',
      link: '/admin/users'
    },
    { 
      title: 'Active Bookings', 
      value: '89', 
      icon: <FaCalendarAlt className="text-logoYellow" />, 
      change: '-3%', 
      trend: 'down',
      color: 'bg-yellow-50',
      link: '/admin/bookings'
    },
    { 
      title: 'Monthly Revenue', 
      value: '₦42.5M', 
      icon: <FaMoneyBillWave className="text-green-500" />, 
      change: '+18%', 
      trend: 'up',
      color: 'bg-green-50',
      link: '/admin/analytics'
    }
  ]

  // Recent activities
  const activities = [
    { id: 1, user: 'John Adekunle', action: 'Booked property', time: '2 hours ago', type: 'booking' },
    { id: 2, user: 'Sarah Johnson', action: 'Submitted review', time: '4 hours ago', type: 'review' },
    { id: 3, user: 'Michael Chen', action: 'Inquired about property', time: '6 hours ago', type: 'inquiry' },
    { id: 4, user: 'David Smith', action: 'Property viewing scheduled', time: '1 day ago', type: 'viewing' },
    { id: 5, user: 'Grace Williams', action: 'Signed rental agreement', time: '2 days ago', type: 'agreement' },
  ]

  // Properties needing attention
  const pendingProperties = [
    { id: 1, title: '4-Bedroom Duplex', location: 'Victoria Island', status: 'Pending Approval', days: 2 },
    { id: 2, title: 'Commercial Office', location: 'Ikoyi', status: 'Needs Documentation', days: 3 },
    { id: 3, title: '3-Bedroom Apartment', location: 'Lekki', status: 'Price Review', days: 1 },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-logoRed to-logoBlue rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="opacity-90">Here's what's happening with your real estate business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Link 
            key={index}
            to={stat.link}
            className={`${stat.color} p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <FaArrowUp className="text-green-500 mr-1" />
                  ) : (
                    <FaArrowDown className="text-red-500 mr-1" />
                  )}
                  <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <div className="text-2xl">
                  {stat.icon}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
            <Link to="/admin/analytics" className="text-logoBlue hover:text-blue-600 text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  {activity.type === 'booking' && <FaCalendarAlt className="text-logoBlue" />}
                  {activity.type === 'review' && <FaStar className="text-logoYellow" />}
                  {activity.type === 'inquiry' && <FaUsers className="text-logoRed" />}
                  {activity.type === 'viewing' && <FaBuilding className="text-green-500" />}
                  {activity.type === 'agreement' && <FaMoneyBillWave className="text-purple-500" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Properties Needing Attention */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Properties Needing Attention</h2>
          
          <div className="space-y-4">
            {pendingProperties.map((property) => (
              <div key={property.id} className="p-4 border border-gray-100 rounded-xl hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{property.title}</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    {property.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Pending for {property.days} day{property.days > 1 ? 's' : ''}</span>
                  <Link 
                    to={`/admin/properties/${property.id}`}
                    className="text-sm text-logoBlue hover:text-blue-600 font-medium"
                  >
                    Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link 
              to="/admin/properties?filter=pending"
              className="block w-full py-3 bg-gray-50 text-center text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              View All Pending Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            to="/admin/properties/new"
            className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-logoBlue hover:bg-blue-50 transition-colors group"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                <FaBuilding className="text-logoBlue text-xl" />
              </div>
              <p className="font-medium text-gray-900">Add New Property</p>
              <p className="text-sm text-gray-600 mt-1">List a new property for sale/rent</p>
            </div>
          </Link>

          <Link 
            to="/admin/reviews/moderate"
            className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-logoYellow hover:bg-yellow-50 transition-colors group"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-colors">
                <FaStar className="text-logoYellow text-xl" />
              </div>
              <p className="font-medium text-gray-900">Moderate Reviews</p>
              <p className="text-sm text-gray-600 mt-1">Approve or reject area reviews</p>
            </div>
          </Link>

          <Link 
            to="/admin/analytics/reports"
            className="p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-logoRed hover:bg-red-50 transition-colors group"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-200 transition-colors">
                <FaChartBar className="text-logoRed text-xl" />
              </div>
              <p className="font-medium text-gray-900">Generate Report</p>
              <p className="text-sm text-gray-600 mt-1">Create monthly performance report</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard