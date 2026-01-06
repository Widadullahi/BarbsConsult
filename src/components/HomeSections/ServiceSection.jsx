// Update src/components/HomeSections/ServicesSection.jsx
import { Link } from 'react-router-dom'
import { FaHome, FaLandmark, FaBuilding, FaClipboardCheck, FaChartLine, FaHandshake } from 'react-icons/fa'

const ServicesSection = () => {
  const services = [
    { 
      icon: <FaHome className="text-2xl" />, 
      title: "Apartment Rentals", 
      desc: "Yearly & short-term rentals for residential apartments",
      subServices: ["Yearly Leases", "Short-term Rents", "Fully Furnished"],
      color: "from-blue-500 to-cyan-400"
    },
    { 
      icon: <FaLandmark className="text-2xl" />, 
      title: "Land Services", 
      desc: "Land leasing and sales with proper documentation",
      subServices: ["Land Leasing", "Land Sales", "Title Processing"],
      color: "from-green-500 to-emerald-400"
    },
    { 
      icon: <FaBuilding className="text-2xl" />, 
      title: "Property Sales", 
      desc: "Sell apartments, lands, and commercial properties",
      subServices: ["Apartment Sales", "Land Sales", "Commercial Sales"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <FaClipboardCheck className="text-2xl" />, 
      title: "Property Management", 
      desc: "Complete property and tenant management services",
      subServices: ["Tenant Management", "Maintenance", "Rent Collection"],
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: <FaChartLine className="text-2xl" />, 
      title: "Real Estate Consulting", 
      desc: "Investment advice and market analysis",
      subServices: ["Investment Advice", "Property Valuation", "Market Trends"],
      color: "from-indigo-500 to-blue-400"
    },
    { 
      icon: <FaHandshake className="text-2xl" />, 
      title: "Legal Documentation", 
      desc: "Assistance with all property legal processes",
      subServices: ["C of O Processing", "Surveys", "Legal Advice"],
      color: "from-teal-500 to-green-400"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Comprehensive Real Estate Solutions</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            From property rentals to land sales - we handle all your real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-500 mb-3">Includes:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.map((sub, subIdx) => (
                      <span key={subIdx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Properties Managed" },
              { value: "200+", label: "Land Transactions" },
              { value: "300+", label: "Rental Agreements" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-700 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection