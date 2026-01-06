import { Link } from 'react-router-dom'
import { 
  FaHome, FaBuilding, FaKey, FaChartLine, 
  FaHandshake, FaMapMarkerAlt, FaUsers, 
  FaShieldAlt, FaArrowRight 
} from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: "Buying & Selling",
      icon: <FaHandshake />,
      description: "Complete assistance in property transactions",
      link: "/services/buying-selling",
      color: "from-logoRed to-red-500",
      subcategories: ["Land", "House", "Long Lease", "Commercial"]
    },
    {
      title: "Rent & Shortlet",
      icon: <FaKey />,
      description: "Yearly rentals and short-term accommodations",
      link: "/services/rent-shortlet",
      color: "from-logoBlue to-blue-500",
      subcategories: ["Apartments", "Offices", "Shortlets", "Event Spaces"]
    },
    {
      title: "Property Management",
      icon: <FaBuilding />,
      description: "Complete property and tenant management",
      link: "/services/property-management",
      color: "from-logoYellow to-yellow-500",
      subcategories: ["Residential", "Commercial", "Maintenance", "Tenant Screening"]
    },
    {
      title: "Investment Advisory",
      icon: <FaChartLine />,
      description: "Strategic real estate investment guidance",
      link: "/services/investment",
      color: "from-green-500 to-green-600",
      subcategories: ["Portfolio Analysis", "Market Research", "ROI Optimization"]
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Real Estate Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for buying, selling, renting, and managing properties across Nigeria.
            Trusted by 500+ clients with 15+ years of excellence.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-500 border border-gray-100 hover:border-logoBlue/30"
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mr-6`}>
                  <div className="text-white text-2xl">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <FaArrowRight className="text-gray-400 group-hover:text-logoBlue group-hover:translate-x-2 transition-transform" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.subcategories.map((sub, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-logoBlue to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Personalized Assistance?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our experts are ready to help you find the perfect solution for your real estate needs.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-logoBlue font-bold rounded-xl hover:bg-gray-100 transition"
          >
            <FaUsers className="mr-3" />
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services