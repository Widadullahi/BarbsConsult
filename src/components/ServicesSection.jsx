import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const services = [
    { icon: "Ìø†", title: "Property Sales", desc: "Expert buying & selling assistance", color: "from-blue-500 to-cyan-400" },
    { icon: "Ì≤∞", title: "Property Rentals", desc: "Find tenants or rental properties", color: "from-purple-500 to-pink-500" },
    { icon: "‚öôÔ∏è", title: "Property Management", desc: "Full-service property management", color: "from-green-500 to-emerald-400" },
    { icon: "Ì≥ä", title: "Real Estate Consulting", desc: "Professional investment advice", color: "from-orange-500 to-red-500" }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Real Estate Services</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet all your property needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition duration-500 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.desc}</p>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
