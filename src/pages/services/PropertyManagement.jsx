// pages/services/PropertyManagement.jsx
import { Link } from 'react-router-dom';
import { 
  FaTools,
  FaMoneyBillWave,
  FaFileContract,
  FaClipboardCheck,
  FaChartLine,
  FaShieldAlt,
  FaArrowLeft,
  FaPhoneAlt,
  FaCheckCircle
} from 'react-icons/fa';

const PropertyManagement = () => {
  const services = [
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: 'Rent Collection',
      description: 'Automated rent collection and financial reporting'
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: 'Maintenance',
      description: '24/7 maintenance coordination and vendor management'
    },
    {
      icon: <FaFileContract className="text-2xl" />,
      title: 'Tenant Relations',
      description: 'Professional tenant screening and relationship management'
    },
    {
      icon: <FaClipboardCheck className="text-2xl" />,
      title: 'Inspections',
      description: 'Regular property inspections and condition reports'
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: 'Financial Reporting',
      description: 'Detailed financial statements and performance analysis'
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Legal Compliance',
      description: 'Ensuring compliance with all regulations and laws'
    }
  ];

  const benefits = [
    'Maximize rental income',
    'Reduce vacancy rates',
    'Professional tenant screening',
    'Timely rent collection',
    'Cost-effective maintenance',
    'Legal protection',
    'Regular property inspections',
    'Detailed financial reporting'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Property Management"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-white hover:text-purple-200 mb-6"
            >
              <FaArrowLeft />
              Back to All Services
            </Link>
            
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm uppercase tracking-wider">Professional Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Property <span className="text-purple-300">Management</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Comprehensive property management solutions that protect your investment, maximize returns, and minimize stress. We handle all aspects of property management so you don't have to.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <FaPhoneAlt />
              Get Management Quote
            </a>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Property Management Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We provide end-to-end property management services for residential and commercial properties. Our professional approach ensures your property is well-maintained, consistently rented, and generating optimal returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-purple-50 rounded-xl mb-6">
                  <div className="text-purple-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
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
              Benefits of Professional <span className="text-purple-600">Management</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Property Owners</h3>
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Advantages</h3>
              <div className="space-y-4">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Management <span className="text-purple-600">Plans</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible management plans designed for different needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '8%',
                description: 'Essential management for hands-on owners',
                features: ['Rent Collection', 'Basic Maintenance', 'Tenant Communication']
              },
              {
                name: 'Professional',
                price: '10%',
                description: 'Comprehensive management for busy owners',
                features: ['Full Service Management', 'Regular Inspections', 'Financial Reporting', 'Vendor Management'],
                popular: true
              },
              {
                name: 'Premium',
                price: '12%',
                description: 'Premium service for luxury properties',
                features: ['All Professional Features', 'Premium Marketing', 'Concierge Services', 'Quarterly Strategy Reviews']
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl border ${plan.popular ? 'border-purple-300 shadow-xl' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 font-bold rounded-t-xl">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let Us Manage Your Property
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Focus on what matters while we handle your property management needs professionally.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              Request Management Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyManagement;