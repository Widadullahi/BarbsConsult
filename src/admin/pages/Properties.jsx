// src/admin/pages/Properties.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaFilter, 
  FaDownload,
  FaCheckCircle,
  FaTimesCircle,
  FaHome,
  FaBuilding,
  FaCity,
  FaKey
} from 'react-icons/fa';

const Properties = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Luxury 5-Bedroom Villa',
      type: 'Sale',
      category: 'Residential',
      price: '₦450,000,000',
      status: 'Active',
      location: 'Ikoyi, Lagos',
      date: '2024-01-15',
      views: 1245,
      inquiries: 23,
      featured: true,
      images: 8
    },
    {
      id: 2,
      title: 'Modern Office Space',
      type: 'Rent',
      category: 'Commercial',
      price: '₦8,500,000/yr',
      status: 'Active',
      location: 'Victoria Island, Lagos',
      date: '2024-01-14',
      views: 892,
      inquiries: 15,
      featured: true,
      images: 12
    },
    {
      id: 3,
      title: '3-Bedroom Apartment',
      type: 'Rent',
      category: 'Residential',
      price: '₦3,200,000/yr',
      status: 'Pending',
      location: 'Lekki Phase 1, Lagos',
      date: '2024-01-13',
      views: 567,
      inquiries: 8,
      featured: false,
      images: 6
    },
    {
      id: 4,
      title: 'Commercial Land',
      type: 'Sale',
      category: 'Land',
      price: '₦120,000,000',
      status: 'Sold',
      location: 'Ajah, Lagos',
      date: '2024-01-12',
      views: 432,
      inquiries: 12,
      featured: false,
      images: 4
    },
    {
      id: 5,
      title: 'Serviced Apartment',
      type: 'Shortlet',
      category: 'Residential',
      price: '₦85,000/night',
      status: 'Active',
      location: 'Ikoyi, Lagos',
      date: '2024-01-11',
      views: 321,
      inquiries: 18,
      featured: true,
      images: 10
    },
    {
      id: 6,
      title: 'Warehouse Space',
      type: 'Rent',
      category: 'Commercial',
      price: '₦12,000,000/yr',
      status: 'Active',
      location: 'Amuwo Odofin, Lagos',
      date: '2024-01-10',
      views: 234,
      inquiries: 6,
      featured: false,
      images: 7
    },
  ]);

  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    category: 'all',
    featured: 'all'
  });

  const [selectedProperties, setSelectedProperties] = useState([]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter(p => p.id !== id));
      setSelectedProperties(selectedProperties.filter(propId => propId !== id));
    }
  };

  const handleBulkDelete = () => {
    if (selectedProperties.length === 0) {
      alert('Please select properties to delete');
      return;
    }
    
    if (window.confirm(`Delete ${selectedProperties.length} selected properties?`)) {
      setProperties(properties.filter(p => !selectedProperties.includes(p.id)));
      setSelectedProperties([]);
    }
  };

  const handleToggleFeatured = (id) => {
    setProperties(properties.map(p => 
      p.id === id ? { ...p, featured: !p.featured } : p
    ));
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProperties(properties.map(p => p.id));
    } else {
      setSelectedProperties([]);
    }
  };

  const handleSelectProperty = (id) => {
    if (selectedProperties.includes(id)) {
      setSelectedProperties(selectedProperties.filter(propId => propId !== id));
    } else {
      setSelectedProperties([...selectedProperties, id]);
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Sale': return <FaKey className="text-green-600" />;
      case 'Rent': return <FaHome className="text-blue-600" />;
      case 'Shortlet': return <FaBuilding className="text-purple-600" />;
      default: return <FaHome className="text-gray-600" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Residential': return <FaHome className="text-blue-500" />;
      case 'Commercial': return <FaBuilding className="text-green-500" />;
      case 'Land': return <FaCity className="text-yellow-500" />;
      default: return <FaHome className="text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Active':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>;
      case 'Pending':
        return <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
      case 'Sold':
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Sold</span>;
      default:
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  const filteredProperties = properties.filter(property => {
    if (filters.status !== 'all' && property.status !== filters.status) return false;
    if (filters.type !== 'all' && property.type !== filters.type) return false;
    if (filters.category !== 'all' && property.category !== filters.category) return false;
    if (filters.featured !== 'all') {
      if (filters.featured === 'featured' && !property.featured) return false;
      if (filters.featured === 'not-featured' && property.featured) return false;
    }
    return true;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Properties Management</h1>
          <p className="text-gray-600 mt-2">Manage all your property listings in one place</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            to="/admin/properties/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaPlus className="mr-2" />
            Add New Property
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Sold">Sold</option>
              <option value="Rented">Rented</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="all">All Types</option>
              <option value="Sale">For Sale</option>
              <option value="Rent">For Rent</option>
              <option value="Shortlet">Shortlet</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="all">All Categories</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Featured</label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={filters.featured}
              onChange={(e) => setFilters({...filters, featured: e.target.value})}
            >
              <option value="all">All</option>
              <option value="featured">Featured Only</option>
              <option value="not-featured">Not Featured</option>
            </select>
          </div>

          <button className="self-end px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <FaFilter className="mr-2" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedProperties.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaCheckCircle className="text-blue-600 mr-3" />
              <span className="text-blue-800 font-medium">
                {selectedProperties.length} properties selected
              </span>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setProperties(properties.map(p => 
                    selectedProperties.includes(p.id) ? { ...p, featured: true } : p
                  ));
                }}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition-colors text-sm"
              >
                Mark as Featured
              </button>
              <button
                onClick={() => {
                  setProperties(properties.map(p => 
                    selectedProperties.includes(p.id) ? { ...p, status: 'Active' } : p
                  ));
                }}
                className="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors text-sm"
              >
                Activate
              </button>
              <button
                onClick={handleBulkDelete}
                className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors text-sm"
              >
                Delete Selected
              </button>
              <button
                onClick={() => setSelectedProperties([])}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              {/* Property Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${property.featured ? 'bg-yellow-50 text-yellow-600' : 'bg-gray-50 text-gray-600'}`}>
                    {getTypeIcon(property.type)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{property.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      {getCategoryIcon(property.category)}
                      <span className="text-sm text-gray-600">{property.category}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedProperties.includes(property.id)}
                    onChange={() => handleSelectProperty(property.id)}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  {getStatusBadge(property.status)}
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="font-medium text-gray-900">{property.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Price</span>
                  <span className="font-bold text-blue-600">{property.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Date Added</span>
                  <span className="text-sm text-gray-900">{property.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Images</span>
                  <span className="text-sm text-gray-900">{property.images} photos</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="font-bold text-gray-900">{property.views}</div>
                  <div className="text-xs text-gray-600">Views</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900">{property.inquiries}</div>
                  <div className="text-xs text-gray-600">Inquiries</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900">
                    {property.featured ? 'Yes' : 'No'}
                  </div>
                  <div className="text-xs text-gray-600">Featured</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <Link
                  to={`/admin/properties/${property.id}`}
                  className="flex-1 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-center font-medium"
                >
                  <FaEye className="inline mr-2" />
                  View
                </Link>
                <Link
                  to={`/admin/properties/${property.id}/edit`}
                  className="flex-1 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-center font-medium"
                >
                  <FaEdit className="inline mr-2" />
                  Edit
                </Link>
                <button
                  onClick={() => handleToggleFeatured(property.id)}
                  className={`flex-1 py-2 rounded-lg transition-colors text-center font-medium ${
                    property.featured
                      ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {property.featured ? 'Unfeature' : 'Feature'}
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="flex-1 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-center font-medium"
                >
                  <FaTrash className="inline mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <FaHome className="text-3xl text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No properties found</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            No properties match your current filters. Try adjusting your filter criteria.
          </p>
          <button
            onClick={() => setFilters({ status: 'all', type: 'all', category: 'all', featured: 'all' })}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Properties;