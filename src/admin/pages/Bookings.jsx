// src/admin/pages/Bookings.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaHome, 
  FaPhone, 
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaSearch,
  FaFilter,
  FaPrint,
  FaDownload,
  FaEye,
  FaEdit,
  FaTrash,
  FaWhatsapp
} from 'react-icons/fa';

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      reference: 'BK-2024-001',
      property: 'Luxury Villa Ikoyi',
      client: 'David Wilson',
      email: 'david@example.com',
      phone: '+234 801 234 5678',
      date: '2024-01-20',
      time: '14:00',
      type: 'Property Viewing',
      status: 'Confirmed',
      duration: '1 hour',
      notes: 'Interested in 5-bedroom villas',
      created: '2024-01-15 10:30',
      agent: 'John Doe'
    },
    {
      id: 2,
      reference: 'BK-2024-002',
      property: '3-Bedroom Lekki',
      client: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+234 802 345 6789',
      date: '2024-01-21',
      time: '10:00',
      type: 'Consultation',
      status: 'Pending',
      duration: '2 hours',
      notes: 'First-time home buyer',
      created: '2024-01-16 14:20',
      agent: 'Admin'
    },
    {
      id: 3,
      reference: 'BK-2024-003',
      property: 'Office Space VI',
      client: 'Michael Chen',
      email: 'michael@example.com',
      phone: '+234 803 456 7890',
      date: '2024-01-22',
      time: '15:30',
      type: 'Property Viewing',
      status: 'Confirmed',
      duration: '1.5 hours',
      notes: 'Corporate client',
      created: '2024-01-17 09:15',
      agent: 'Jane Smith'
    },
    {
      id: 4,
      reference: 'BK-2024-004',
      property: 'Serviced Apartment',
      client: 'Grace Okoro',
      email: 'grace@example.com',
      phone: '+234 804 567 8901',
      date: '2024-01-19',
      time: '11:00',
      type: 'Virtual Tour',
      status: 'Completed',
      duration: '45 mins',
      notes: 'Remote viewing requested',
      created: '2024-01-15 16:45',
      agent: 'Admin'
    },
    {
      id: 5,
      reference: 'BK-2024-005',
      property: 'Land Ajah',
      client: 'James Anderson',
      email: 'james@example.com',
      phone: '+234 805 678 9012',
      date: '2024-01-23',
      time: '09:00',
      type: 'Site Inspection',
      status: 'Cancelled',
      duration: '3 hours',
      notes: 'Client rescheduled',
      created: '2024-01-18 11:30',
      agent: 'John Doe'
    },
    {
      id: 6,
      reference: 'BK-2024-006',
      property: 'Commercial Space',
      client: 'Amina Balogun',
      email: 'amina@example.com',
      phone: '+234 806 789 0123',
      date: '2024-01-24',
      time: '13:00',
      type: 'Investment Consultation',
      status: 'Confirmed',
      duration: '2 hours',
      notes: 'Looking for commercial properties',
      created: '2024-01-19 08:20',
      agent: 'Admin'
    },
  ]);

  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    dateRange: 'all',
    search: ''
  });

  const [selectedBookings, setSelectedBookings] = useState([]);

  const statuses = ['Confirmed', 'Pending', 'Completed', 'Cancelled', 'No-show'];
  const bookingTypes = ['Property Viewing', 'Consultation', 'Virtual Tour', 'Site Inspection', 'Investment Consultation'];

  const handleStatusChange = (id, status) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(bookings.filter(b => b.id !== id));
      setSelectedBookings(selectedBookings.filter(bookingId => bookingId !== id));
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedBookings(bookings.map(b => b.id));
    } else {
      setSelectedBookings([]);
    }
  };

  const handleSelectBooking = (id) => {
    if (selectedBookings.includes(id)) {
      setSelectedBookings(selectedBookings.filter(bookingId => bookingId !== id));
    } else {
      setSelectedBookings([...selectedBookings, id]);
    }
  };

  const handleBulkAction = (action) => {
    if (selectedBookings.length === 0) {
      alert('Please select bookings first');
      return;
    }

    switch(action) {
      case 'confirm':
        setBookings(bookings.map(b => 
          selectedBookings.includes(b.id) ? { ...b, status: 'Confirmed' } : b
        ));
        break;
      case 'complete':
        setBookings(bookings.map(b => 
          selectedBookings.includes(b.id) ? { ...b, status: 'Completed' } : b
        ));
        break;
      case 'cancel':
        setBookings(bookings.map(b => 
          selectedBookings.includes(b.id) ? { ...b, status: 'Cancelled' } : b
        ));
        break;
      case 'delete':
        if (window.confirm(`Delete ${selectedBookings.length} selected bookings?`)) {
          setBookings(bookings.filter(b => !selectedBookings.includes(b.id)));
          setSelectedBookings([]);
        }
        break;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (filters.status !== 'all' && booking.status !== filters.status) return false;
    if (filters.type !== 'all' && booking.type !== filters.type) return false;
    if (filters.dateRange !== 'all') {
      const bookingDate = new Date(booking.date);
      const today = new Date();
      
      if (filters.dateRange === 'today' && bookingDate.toDateString() !== today.toDateString()) {
        return false;
      }
      if (filters.dateRange === 'upcoming' && bookingDate < today) {
        return false;
      }
      if (filters.dateRange === 'past' && bookingDate >= today) {
        return false;
      }
    }
    if (filters.search && !booking.client.toLowerCase().includes(filters.search.toLowerCase()) && 
        !booking.property.toLowerCase().includes(filters.search.toLowerCase()) &&
        !booking.reference.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Confirmed':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Confirmed</span>;
      case 'Pending':
        return <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
      case 'Completed':
        return <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Completed</span>;
      case 'Cancelled':
        return <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Cancelled</span>;
      case 'No-show':
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">No-show</span>;
      default:
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Confirmed':
        return <FaCheckCircle className="text-green-500" />;
      case 'Pending':
        return <FaClock className="text-yellow-500" />;
      case 'Completed':
        return <FaCheckCircle className="text-blue-500" />;
      case 'Cancelled':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const upcomingBookings = bookings.filter(b => new Date(b.date) >= new Date() && b.status === 'Confirmed');
  const todayBookings = bookings.filter(b => {
    const bookingDate = new Date(b.date);
    const today = new Date();
    return bookingDate.toDateString() === today.toDateString() && b.status === 'Confirmed';
  });

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Bookings Management</h1>
          <p className="text-gray-600 mt-2">Manage property viewings, consultations, and appointments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            to="/admin/bookings/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaCalendarAlt className="mr-2" />
            New Booking
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <FaCalendarAlt className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">{upcomingBookings.length}</p>
            </div>
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <FaCheckCircle className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today</p>
              <p className="text-2xl font-bold text-gray-900">{todayBookings.length}</p>
            </div>
            <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
              <FaClock className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {bookings.filter(b => b.status === 'Pending').length}
              </p>
            </div>
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <FaClock className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search bookings..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="all">All Types</option>
              {bookingTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaFilter className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-700">Date Range:</span>
            </div>
            <select
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>

          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FaFilter className="mr-2" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedBookings.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaCheckCircle className="text-blue-600 mr-3" />
              <span className="text-blue-800 font-medium">
                {selectedBookings.length} bookings selected
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                onChange={(e) => handleBulkAction(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Bulk Actions</option>
                <option value="confirm">Confirm</option>
                <option value="complete">Mark as Completed</option>
                <option value="cancel">Cancel</option>
                <option value="delete">Delete</option>
              </select>
              <button
                onClick={() => setSelectedBookings([])}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bookings Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <span className="text-gray-600">
              Showing {filteredBookings.length} bookings
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors text-sm">
              <FaPrint className="inline mr-1" />
              Print
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors text-sm">
              <FaDownload className="inline mr-1" />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedBookings.length === bookings.length && bookings.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedBookings.includes(booking.id)}
                      onChange={() => handleSelectBooking(booking.id)}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {booking.reference}
                      </div>
                      <div className="text-sm text-gray-900 font-medium mt-1">{booking.property}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="inline-block px-2 py-1 bg-gray-100 rounded">{booking.type}</span>
                        <span className="ml-2">
                          <FaClock className="inline mr-1" />
                          {booking.duration}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Agent: {booking.agent}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center">
                        <FaUser className="text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{booking.client}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <FaEnvelope className="text-gray-400 mr-2 text-xs" />
                        <span className="text-xs text-gray-500">{booking.email}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <FaPhone className="text-gray-400 mr-2 text-xs" />
                        <span className="text-xs text-gray-500">{booking.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{booking.date}</div>
                      <div className="text-sm text-gray-500">{booking.time}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        Created: {booking.created}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(booking.status)}
                      <div className="ml-2">
                        <div className="mb-1">{getStatusBadge(booking.status)}</div>
                        <select
                          value={booking.status}
                          onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                          className="text-xs border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        >
                          {statuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <Link
                        to={`/admin/bookings/${booking.id}`}
                        className="p-2 text-blue-600 hover:text-blue-900 bg-blue-50 rounded"
                        title="View Details"
                      >
                        <FaEye />
                      </Link>
                      <Link
                        to={`/admin/bookings/${booking.id}/edit`}
                        className="p-2 text-green-600 hover:text-green-900 bg-green-50 rounded"
                        title="Edit"
                      >
                        <FaEdit />
                      </Link>
                      <a
                        href={`https://wa.me/${booking.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-green-600 hover:text-green-900 bg-green-50 rounded"
                        title="WhatsApp"
                      >
                        <FaWhatsapp />
                      </a>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="p-2 text-red-600 hover:text-red-900 bg-red-50 rounded"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    {booking.notes && (
                      <div className="mt-2 text-xs text-gray-500 max-w-xs truncate" title={booking.notes}>
                        📝 {booking.notes}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredBookings.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FaCalendarAlt className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No bookings found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {filters.search 
                ? `No bookings found for "${filters.search}"`
                : 'No bookings match your current filters.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {filters.search && (
                <button
                  onClick={() => setFilters({...filters, search: ''})}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              )}
              <button
                onClick={() => setFilters({ status: 'all', type: 'all', dateRange: 'all', search: '' })}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
              <Link
                to="/admin/bookings/new"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Create First Booking
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Calendar View Quick Access */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Calendar View</h3>
          <Link
            to="/admin/bookings/calendar"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View Full Calendar →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <div className="text-sm font-medium text-gray-900">{day}</div>
              <div className="text-xs text-gray-500 mb-2">{20 + index} Jan</div>
              {index < 3 && (
                <div className="text-xs">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  {index + 1} booking
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;