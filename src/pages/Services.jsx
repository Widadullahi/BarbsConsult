// pages/Services.jsx - Main Services Hub
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaKey, 
  FaBuilding, 
  FaChartLine, 
  FaHandshake, 
  FaUsers, 
  FaShieldAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaHeadset,
  FaCheckCircle
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 'buying-selling',
      title: 'Buying & Selling',
      description: 'Expert guidance through every step of your property transaction. We help you buy at the right price and sell for maximum value.',
      icon: <FaKey className="text-3xl" />,
      features: [
        'Property Search & Selection',
        'Market Value Assessment',
        'Negotiation Strategy',
        'Legal Documentation',
        'Closing Process Management'
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'rent-shortlet',
      title: 'Rent & Shortlet',
      description: 'Find your perfect rental or short-term accommodation with our extensive portfolio and expert matching service.',
      icon: <FaHome className="text-3xl" />,
      features: [
        'Tenant Screening & Placement',
        'Rental Value Analysis',
        'Lease Agreement Management',
        'Shortlet Marketing',
        'Guest Services'
      ],
      image: 'https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-green-600 to-green-700'
    },
    {
      id: 'property-management',
      title: 'Property Management',
      description: 'Comprehensive management solutions that protect your investment and maximize returns while minimizing stress.',
      icon: <FaBuilding className="text-3xl" />,
      features: [
        'Maintenance Coordination',
        'Rent Collection & Accounting',
        'Tenant Relations',
        'Property Inspections',
        'Financial Reporting'
      ],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 'investment',
      title: 'Investment Advisory',
      description: 'Strategic investment planning and portfolio management to grow your wealth through real estate.',
      icon: <FaChartLine className="text-3xl" />,
      features: [
        'Market Analysis & Trends',
        'ROI Projections',
        'Portfolio Diversification',
        'Risk Assessment',
        'Exit Strategy Planning'
      ],
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaHandshake className="text-2xl" />,
      title: 'Trusted Expertise',
      description: '10+ years of experience in Nigerian real estate market'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: 'Client-First Approach',
      description: 'Personalized service tailored to your specific needs'
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Full Transparency',
      description: 'Clear communication and honest advice throughout'
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: 'End-to-End Service',
      description: 'Comprehensive support from start to finish'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Real Estate Services"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Real Estate <span className="text-blue-300">Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert services tailored to meet all your real estate needs. From buying your first home to managing investment properties, we're here to guide you.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each service is designed to provide maximum value and peace of mind throughout your real estate journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold group-hover:text-blue-700 transition-colors">
                      Learn More →
                    </span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                      Popular
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">BarbsConsult</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine deep market knowledge with personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6">
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A clear, structured approach to ensure success at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We listen to understand your needs, goals, and budget',
                icon: '📞'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a tailored plan based on market analysis',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We handle all details and negotiations on your behalf',
                icon: '⚡'
              },
              {
                step: '04',
                title: 'Follow-up',
                description: 'We provide ongoing support even after completion',
                icon: '🔄'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FaHeadset className="text-5xl text-white mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts. We'll help you navigate the market and make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <FaCalendarAlt />
                Book Free Consultation
              </Link>
              <a
                href="tel:+2341234567890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all duration-300"
              >
                Call: +234 123 456 7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;