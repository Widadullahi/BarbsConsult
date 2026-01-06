import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaBed, FaBath, FaCar, FaStar, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import BarbsConsultStats from '../components/BarbsConsultStats'
// import HeroSection from '../components/HomeSections/FactCarousel'
import HeroSection from '../components/HeroSection'

const Home = () => {
  // Property data
  const properties = [
    { 
      id: 1, 
      title: "4-Bedroom Luxury Duplex", 
      price: "₦120,000,000", 
      location: "Victoria Island, Lagos", 
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60",
      bedrooms: 4,
      bathrooms: 5,
      parking: 2,
      area: "4500 sq ft",
      featured: true
    },
    { 
      id: 2, 
      title: "3-Bedroom Modern Apartment", 
      price: "₦4,500,000/mo", 
      location: "Lekki Phase 1", 
      type: "For Rent",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      area: "2800 sq ft",
      featured: true
    },
    { 
      id: 3, 
      title: "Commercial Office Space", 
      price: "₦85,000,000", 
      location: "Ikoyi, Lagos", 
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
      bedrooms: 0,
      bathrooms: 6,
      parking: 10,
      area: "6000 sq ft",
      featured: true
    },
    { 
      id: 4, 
      title: "5 Acres Prime Land", 
      price: "₦35,000,000", 
      location: "Epe, Lagos", 
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60",
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      area: "5 Acres",
      featured: true
    }
  ]

  // Services with images
  const services = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
      title: "Property Sales",
      description: "Expert assistance in buying and selling properties"
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60",
      title: "Apartment Rentals",
      description: "Yearly and short-term rental solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60",
      title: "Land Services",
      description: "Land leasing and sales with documentation"
    },
    {
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=60",
      title: "Property Management",
      description: "Complete property and tenant management"
    }
  ]

  // Testimonials
  const testimonials = [
    {
      name: "John Adekunle",
      role: "Property Investor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Barbs-Consultant found me the perfect commercial property. Highly professional!"
    },
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Found my dream home in just 2 weeks! Excellent service from start to finish."
    },
    {
      name: "Michael Chen",
      role: "Property Owner",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: "Their property management saved me so much time and stress. Highly recommend!"
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION - CAROUSEL ===== */}
      <HeroSection />
      
      {/* ===== PROPERTY TYPES SHOWCASE ===== */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Property Types</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect property that matches your needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                title: "Apartments", 
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60",
                count: "24 Properties"
              },
              { 
                title: "Lands", 
                image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60",
                count: "18 Properties"
              },
              { 
                title: "Commercial", 
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
                count: "12 Properties"
              },
              { 
                title: "Villas", 
                image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=60",
                count: "8 Properties"
              }
            ].map((type, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl h-64">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="text-gray-300">{type.count}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Properties */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Properties</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of premium properties</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {properties.map(property => (
                <div key={property.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                        {property.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <div className="text-blue-600 text-2xl font-bold mb-3">{property.price}</div>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <div className="flex justify-between text-gray-500 mb-6">
                      <span className="flex items-center"><FaBed className="mr-2" /> {property.bedrooms}</span>
                      <span className="flex items-center"><FaBath className="mr-2" /> {property.bathrooms}</span>
                      <span className="flex items-center"><FaCar className="mr-2" /> {property.parking}</span>
                    </div>
                    <Link 
                      to={`/property/${property.id}`}
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/listings" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl text-lg hover:from-blue-700 hover:to-blue-600 transition"
              >
                View All Properties
                <FaArrowRight className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION WITH IMAGES ===== */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive real estate solutions for all your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/services" className="text-blue-600 hover:text-blue-700 font-bold flex items-center">
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS WITH IMAGES ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted by hundreds of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results and satisfied customers across Nigeria
            </p>
          </div>
          
          <BarbsConsultStats />
          
          <div className="mt-12 text-center">
            <button 
              onClick={() => window.open('tel:+2347066063908', '_blank')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl text-lg hover:from-blue-700 hover:to-blue-600 transition inline-flex items-center"
            >
              <FaPhone className="mr-3" />
              Call Now: +234 7066063908
            </button>
          </div>
        </div>
      </section>
      
      {/* ===== FINAL CTA WITH IMAGE ===== */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Property?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-white text-blue-700 font-bold rounded-xl text-lg hover:bg-gray-100 transition flex items-center justify-center"
            >
              <FaPhone className="mr-3" />
              Book Free Consultation
            </Link>
            
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10 transition flex items-center justify-center"
            >
              <FaWhatsapp className="mr-3" />
              Chat on WhatsApp
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <FaPhone className="text-white text-2xl mb-4 mx-auto" />
              <h4 className="font-bold mb-2">Call Us</h4>
              <p>+234 123 456 7890</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <FaEnvelope className="text-white text-2xl mb-4 mx-auto" />
              <h4 className="font-bold mb-2">Email Us</h4>
              <p>info@barbs-consultant.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <FaWhatsapp className="text-white text-2xl mb-4 mx-auto" />
              <h4 className="font-bold mb-2">WhatsApp</h4>
              <p>Chat with our agents</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home