// pages/services/RentShortlet.jsx
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt,
  FaKey,
  FaHome,
  FaUsers,
  FaShieldAlt,
  FaStar,
  FaArrowLeft,
  FaPhoneAlt,
  FaCheckCircle
} from 'react-icons/fa';

const RentShortlet = () => {
  const services = [
    {
      title: 'Long-Term Rentals',
      description: 'Comprehensive rental solutions for tenants and landlords',
      features: ['Tenant Screening', 'Lease Management', 'Property Maintenance', 'Rent Collection'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Short-Term Rentals',
      description: 'Premium shortlet properties for travelers and business guests',
      features: ['Guest Management', 'Cleaning Services', 'Booking Management', 'Premium Pricing'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Corporate Housing',
      description: 'Furnished accommodations for corporate clients and relocations',
      features: ['Fully Furnished', 'Utilities Included', 'Flexible Terms', 'Corporate Rates'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Verified Properties',
      description: 'All properties undergo thorough verification and quality checks'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for tenants and property owners'
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: 'Premium Service',
      description: 'High-quality service standards for exceptional experiences'
    },
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: 'Flexible Terms',
      description: 'Customizable lease terms to suit your specific needs'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-green-800">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src="https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Rent & Shortlet"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-white hover:text-green-200 mb-6"
            >
              <FaArrowLeft />
              Back to All Services
            </Link>
            
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm uppercase tracking-wider">Rental Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rent & <span className="text-green-300">Shortlet</span>
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Find your perfect rental home or premium short-term accommodation. We offer comprehensive rental solutions for tenants, landlords, and travelers.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <FaPhoneAlt />
              Find Your Rental
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rental <span className="text-green-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive rental services tailored to different needs and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-3 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/listings?type=${service.title.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center justify-center w-full mt-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    View Properties
                    <FaKey className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-green-600">Rental Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-green-50 rounded-xl mb-6">
                  <div className="text-green-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Tenants & Landlords */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaHome className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">For Tenants</h2>
              </div>
              <div className="space-y-4">
                {[
                  'Wide selection of verified properties',
                  'Transparent pricing with no hidden fees',
                  'Personalized property matching',
                  'Lease negotiation assistance',
                  'Move-in coordination',
                  'Maintenance request management'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaUsers className="text-green-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">For Landlords</h2>
              </div>
              <div className="space-y-4">
                {[
                  'Professional tenant screening',
                  'Competitive market pricing',
                  'Timely rent collection',
                  'Property maintenance coordination',
                  'Legal compliance management',
                  'Regular inspection reports'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find Your Perfect Rental
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Browse our curated selection of rental properties or list your property with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/listings?type=rent"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <FaHome />
                Browse Rentals
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-800 text-white font-bold rounded-xl hover:bg-green-900 transition-all duration-300"
              >
                <FaCalendarAlt />
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentShortlet;