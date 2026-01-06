const PropertyDetails = () => {
  const property = {
    id: 1,
    title: "4-Bedroom Luxury Duplex",
    price: "₦120,000,000",
    location: "Victoria Island, Lagos",
    type: "For Sale",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60"
    ],
    description: "A stunning luxury duplex in the heart of Victoria Island. This property features modern architecture, premium finishes, and panoramic city views.",
    features: ["Swimming Pool", "24/7 Security", "Gym", "Smart Home", "Garden"],
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    area: "4500 sq ft"
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-96">
        <img 
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
          <p className="text-xl">{property.location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Price */}
            <div className="bg-blue-50 p-6 rounded-2xl mb-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">{property.price}</div>
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full">{property.type}</span>
                <span>{property.area}</span>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {property.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`Property ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Schedule a Viewing</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input 
                  type="tel" 
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                  Request Viewing
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold">Phone</div>
                  <div className="text-gray-600">+234 123 456 7890</div>
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-gray-600">agent@barbs-consultant.com</div>
                </div>
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-gray-600">Chat with agent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
