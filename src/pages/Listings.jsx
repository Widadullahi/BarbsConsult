const Listings = () => {
  const properties = [
    { 
      id: 1, 
      title: "4-Bedroom Luxury Duplex", 
      price: "₦120,000,000", 
      location: "Victoria Island, Lagos", 
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60",
      type: "Sale"
    },
    { 
      id: 2, 
      title: "3-Bedroom Apartment", 
      price: "₦4,500,000/month", 
      location: "Lekki Phase 1", 
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
      type: "Rent"
    },
    { 
      id: 3, 
      title: "Commercial Office Space", 
      price: "₦85,000,000", 
      location: "Ikoyi, Lagos", 
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
      type: "Sale"
    },
    { 
      id: 4, 
      title: "5 Acres Land", 
      price: "₦35,000,000", 
      location: "Epe, Lagos", 
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60",
      type: "Sale"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-96">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80"
          alt="Property Listings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Property Listings</h1>
            <p className="text-xl">Find your dream property</p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="container-custom py-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-6">Filter Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="p-3 border border-gray-300 rounded-lg">
              <option>All Types</option>
              <option>For Sale</option>
              <option>For Rent</option>
              <option>Land</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg">
              <option>All Locations</option>
              <option>Victoria Island</option>
              <option>Lekki</option>
              <option>Ikoyi</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg">
              <option>Price Range</option>
              <option>₦0 - ₦50M</option>
              <option>₦50M - ₦100M</option>
              <option>₦100M+</option>
            </select>
            <button className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700">
              Search Properties
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map(property => (
            <div key={property.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <div className="text-blue-600 text-2xl font-bold mb-3">{property.price}</div>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {property.type}
                  </span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listings
