// src/admin/pages/Users.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaUser, 
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaFilter
} from 'react-icons/fa';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+234 801 234 5678',
      role: 'Admin',
      status: 'Active',
      joinDate: '2023-12-01',
      lastLogin: '2024-01-15',
      properties: 12,
      inquiries: 45
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+234 802 345 6789',
      role: 'Agent',
      status: 'Active',
      joinDate: '2023-11-15',
      lastLogin: '2024-01-14',
      properties: 8,
      inquiries: 32
    },
    {
      id: 3,
      name: 'David Chen',
      email: 'david@example.com',
      phone: '+234 803 456 7890',
      role: 'Client',
      status: 'Active',
      joinDate: '2023-10-20',
      lastLogin: '2024-01-13',
      properties: 3,
      inquiries: 18
    },
    {
      id: 4,
      name: 'Amina Balogun',
      email: 'amina@example.com',
      phone: '+234 804 567 8901',
      role: 'Client',
      status: 'Inactive',
      joinDate: '2023-09-05',
      lastLogin: '2023-12-20',
      properties: 2,
      inquiries: 12
    },
    {
      id: 5,
      name: 'Michael Okoro',
      email: 'michael@example.com',
      phone: '+234 805 678 9012',
      role: 'Agent',
      status: 'Pending',
      joinDate: '2024-01-10',
      lastLogin: null,
      properties: 0,
      inquiries: 5
    },
    {
      id: 6,
      name: 'Grace Williams',
      email: 'grace@example.com',
      phone: '+234 806 789 0123',
      role: 'Client',
      status: 'Active',
      joinDate: '2023-11-30',
      lastLogin: '2024-01-12',
      properties: 5,
      inquiries: 25
    },
  ]);

  const [filters, setFilters] = useState({
    role: 'all',
    status: 'all',
    search: ''
  });

  const [selectedUsers, setSelectedUsers] = useState([]);

  const roles = ['Admin', 'Agent', 'Client'];
  const statuses = ['Active', 'Inactive', 'Pending', 'Suspended'];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    }
  };

  const handleStatusChange = (id, status) => {
    setUsers(users.map(u => 
      u.id === id ? { ...u, status } : u
    ));
  };

  const handleRoleChange = (id, role) => {
    setUsers(users.map(u => 
      u.id === id ? { ...u, role } : u
    ));
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map(u => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const handleBulkAction = (action) => {
    if (selectedUsers.length === 0) {
      alert('Please select users first');
      return;
    }

    switch(action) {
      case 'activate':
        setUsers(users.map(u => 
          selectedUsers.includes(u.id) ? { ...u, status: 'Active' } : u
        ));
        break;
      case 'deactivate':
        setUsers(users.map(u => 
          selectedUsers.includes(u.id) ? { ...u, status: 'Inactive' } : u
        ));
        break;
      case 'make-agent':
        setUsers(users.map(u => 
          selectedUsers.includes(u.id) ? { ...u, role: 'Agent' } : u
        ));
        break;
      case 'make-client':
        setUsers(users.map(u => 
          selectedUsers.includes(u.id) ? { ...u, role: 'Client' } : u
        ));
        break;
      case 'delete':
        if (window.confirm(`Delete ${selectedUsers.length} selected users?`)) {
          setUsers(users.filter(u => !selectedUsers.includes(u.id)));
          setSelectedUsers([]);
        }
        break;
    }
  };

  const filteredUsers = users.filter(user => {
    if (filters.role !== 'all' && user.role !== filters.role) return false;
    if (filters.status !== 'all' && user.status !== filters.status) return false;
    if (filters.search && !user.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const getRoleBadge = (role) => {
    switch(role) {
      case 'Admin':
        return <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Admin</span>;
      case 'Agent':
        return <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Agent</span>;
      case 'Client':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Client</span>;
      default:
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{role}</span>;
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Active':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>;
      case 'Inactive':
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Inactive</span>;
      case 'Pending':
        return <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
      case 'Suspended':
        return <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Suspended</span>;
      default:
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-2">Manage all users, agents, and administrators</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            to="/admin/users/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaPlus className="mr-2" />
            Add New User
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Role Filter */}
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.role}
              onChange={(e) => setFilters({...filters, role: e.target.value})}
            >
              <option value="all">All Roles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
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
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaCheckCircle className="text-blue-600 mr-3" />
              <span className="text-blue-800 font-medium">
                {selectedUsers.length} users selected
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                onChange={(e) => handleBulkAction(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Bulk Actions</option>
                <option value="activate">Activate</option>
                <option value="deactivate">Deactivate</option>
                <option value="make-agent">Make Agent</option>
                <option value="make-client">Make Client</option>
                <option value="delete">Delete</option>
              </select>
              <button
                onClick={() => setSelectedUsers([])}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            {/* User Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUser className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{user.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    {getRoleBadge(user.role)}
                    {getStatusBadge(user.status)}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-3" />
                <span className="text-sm text-gray-900">{user.email}</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-400 mr-3" />
                <span className="text-sm text-gray-900">{user.phone}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-400 mr-3" />
                <span className="text-sm text-gray-900">
                  Joined: {user.joinDate}
                </span>
              </div>
              {user.lastLogin && (
                <div className="flex items-center">
                  <FaShieldAlt className="text-gray-400 mr-3" />
                  <span className="text-sm text-gray-900">
                    Last login: {user.lastLogin}
                  </span>
                </div>
              )}
            </div>

            {/* User Stats */}
            <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="font-bold text-gray-900">{user.properties}</div>
                <div className="text-xs text-gray-600">Properties</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900">{user.inquiries}</div>
                <div className="text-xs text-gray-600">Inquiries</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900">
                  {user.status === 'Active' ? 'Yes' : 'No'}
                </div>
                <div className="text-xs text-gray-600">Active</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <Link
                to={`/admin/users/${user.id}`}
                className="flex-1 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-center font-medium"
              >
                <FaEye className="inline mr-2" />
                View
              </Link>
              <Link
                to={`/admin/users/${user.id}/edit`}
                className="flex-1 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-center font-medium"
              >
                <FaEdit className="inline mr-2" />
                Edit
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="flex-1 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-center font-medium"
              >
                <FaTrash className="inline mr-2" />
                Delete
              </button>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 flex space-x-2">
              <select
                value={user.status}
                onChange={(e) => handleStatusChange(user.id, e.target.value)}
                className="flex-1 text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <select
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                className="flex-1 text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <FaUser className="text-3xl text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No users found</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {filters.search 
              ? `No users found for "${filters.search}". Try a different search term.`
              : 'No users match your current filters. Try adjusting your filter criteria.'
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
              onClick={() => setFilters({ role: 'all', status: 'all', search: '' })}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear All Filters
            </button>
            <Link
              to="/admin/users/new"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add First User
            </Link>
          </div>
        </div>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{users.length}</p>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <FaUser className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter(u => u.status === 'Active').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <FaCheckCircle className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Agents</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter(u => u.role === 'Agent').length}
              </p>
            </div>
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <FaShieldAlt className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Clients</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter(u => u.role === 'Client').length}
              </p>
            </div>
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <FaUser className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;