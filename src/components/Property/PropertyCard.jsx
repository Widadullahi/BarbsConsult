
// src/components/Property/PropertyCard.jsx
import { Link } from 'react-router-dom'
import { FaBed, FaBath, FaCar, FaRulerCombined, FaMapMarkerAlt, FaHeart, FaEye } from 'react-icons/fa'

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card group">
      {/* Property Image */}
      <div className="relative overflow-hidden">
        <img 
          src={property.image || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"} 
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />
        
        {/* Property Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            property.type === 'Sale' ? 'bg-red-500 text-white' : 
            property.type === 'Rent' ? 'bg-blue-500 text-white' : 
            'bg-green-500 text-white'
          }`}>
            {property.type}
          </span>
        </div>
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <span className="text-xl font-bold text-brand-gold">{property.price}</span>
          {property.type === 'Rent' && (
            <span className="text-gray-600 text-sm">/month</span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white">
            <FaHeart className="text-gray-700" />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white">
            <FaEye className="text-gray-700" />
          </button>
        </div>
      </div>
      
      {/* Property Details */}
      <div className="p-6">
        <Link to={`/property/${property.id}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-brand-gold transition mb-2">
            {property.title}
          </h3>
        </Link>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <FaMapMarkerAlt className="text-brand-gold mr-2" />
          <span>{property.location}</span>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center">
            <FaBed className="text-gray-500 mr-2" />
            <span className="text-gray-700">{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center">
            <FaBath className="text-gray-500 mr-2" />
            <span className="text-gray-700">{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <FaCar className="text-gray-500 mr-2" />
            <span className="text-gray-700">{property.parking} Park</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="text-gray-500 mr-2" />
            <span className="text-gray-700">{property.area}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-2">
          {property.description}
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            to={`/property/${property.id}`}
            className="btn-primary text-center flex-1"
          >
            View Details
          </Link>
          <button className="btn-secondary flex-1">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  )
}

// Default props
PropertyCard.defaultProps = {
  property: {
    id: 1,
    title: "4-Bedroom Luxury Duplex",
    type: "Sale",
    price: "₦120,000,000",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    area: "4500 sq ft",
    description: "A stunning luxury duplex with modern architecture and premium finishes."
  }
}

export default PropertyCard