// Update src/components/Property/PropertyFilter.jsx
import { useState } from 'react'
import { FaSearch, FaFilter, FaHome, FaLandmark, FaBuilding } from 'react-icons/fa'

const PropertyFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    type: 'all',
    service: 'all',
    priceRange: [0, 100000000],
    bedrooms: 'any',
    location: ''
  })

  const serviceTypes = [
    { value: 'all', label: 'All Services', icon: <FaFilter /> },
    { value: 'rent', label: 'Apartment Rentals', icon: <FaHome /> },
    { value: 'land-lease', label: 'Land Leasing', icon: <FaLandmark /> },
    { value: 'land-sale', label: 'Land Sales', icon: <FaLandmark /> },
    { value: 'sale', label: 'Property Sales', icon: <FaBuilding /> },
    { value: 'short-term', label: 'Short-term Rent', icon: <FaHome /> }
  ]

  const propertyTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'duplex', label: 'Duplex' },
    { value: 'villa', label: 'Villa' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'land', label: 'Land' }
  ]

  const locations = [
    'Victoria Island', 'Lekki', 'Ikoyi', 'Surulere', 
    'Gbagada', 'Ikeja', 'Ajah', 'Epe'
  ]

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilter(newFilters)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <div className="flex items-center mb-6">
        <FaSearch className="text-blue-600 text-xl mr-3" />
        <h3 className="text-xl font-bold">Find Your Property</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.service}
            onChange={(e) => handleFilterChange('service', e.target.value)}
          >
            {serviceTypes.map(service => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            {propertyTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
          >
            <option value="any">Any</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range: ₦{filters.priceRange[0].toLocaleString()} - ₦{filters.priceRange[1].toLocaleString()}
        </label>
        <div className="flex items-center space-x-4">
          <input 
            type="range" 
            min="0" 
            max="100000000" 
            step="1000000"
            value={filters.priceRange[0]}
            onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
            className="w-full"
          />
          <input 
            type="range" 
            min="0" 
            max="100000000" 
            step="1000000"
            value={filters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>₦0</span>
          <span>₦100M</span>
        </div>
      </div>

      {/* Quick Service Buttons */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-4">Quick Services:</h4>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => handleFilterChange('service', 'short-term')}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
          >
            Short-term Rent
          </button>
          <button 
            onClick={() => handleFilterChange('service', 'land-lease')}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
          >
            Land Leasing
          </button>
          <button 
            onClick={() => handleFilterChange('service', 'sale')}
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition"
          >
            Buy Property
          </button>
          <button 
            onClick={() => handleFilterChange('service', 'rent')}
            className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition"
          >
            Rent Apartment
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyFilter