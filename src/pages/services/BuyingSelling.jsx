// pages/services/BuyingSelling.jsx
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaMoneyBillWave, 
  FaHandshake, 
  FaFileContract, 
  FaHome,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaPhoneAlt
} from 'react-icons/fa';

const BuyingSelling = () => {
  const features = [
    {
      icon: <FaSearch className="text-2xl" />,
      title: 'Property Search',
      description: 'Access our extensive database of verified properties matching your criteria'
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: 'Valuation & Pricing',
      description: 'Accurate market value assessment for optimal pricing strategy'
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: 'Expert Negotiation',
      description: 'Skilled negotiators securing the best possible terms for you'
    },
    {
      icon: <FaFileContract className="text-2xl" />,
      title: 'Legal Processing',
      description: 'Comprehensive legal support including documentation and title verification'
    }
  ];

  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'We understand your requirements, budget, and timeline'
    },
    {
      title: 'Property Search',
      description: 'Curated selection of properties matching your criteria'
    },
    {
      title: 'Viewings & Evaluation',
      description: 'Organized viewings with expert evaluation of each property'
    },
    {
      title: 'Offer & Negotiation',
      description: 'Strategic offer presentation and skilled negotiation'
    },
    {
      title: 'Due Diligence',
      description: 'Comprehensive property inspection and legal verification'
    },
    {
      title: 'Closing & Handover',
      description: 'Final documentation, payment processing, and property handover'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Buying & Selling"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-white hover:text-blue-200 mb-6"
            >
              <FaArrowLeft />
              Back to All Services
            </Link>
            
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm uppercase tracking-wider">Property Transactions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Buying & <span className="text-blue-300">Selling</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert guidance through every step of your property transaction. Whether you're buying your dream home or selling for maximum value, we handle all the details.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <FaPhoneAlt />
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Transaction Management
            </h2>
            <p className="text-lg text-gray-600">
              We simplify the complex process of buying or selling property. Our team of experts handles every aspect, from initial search to final closing, ensuring a smooth, stress-free experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Buyers</h3>
              <div className="space-y-6">
                {[
                  'Access to exclusive off-market properties',
                  'Negotiation for the best possible price',
                  'Property inspection and due diligence',
                  'Legal and documentation assistance',
                  'Mortgage and financing guidance',
                  'Smooth transition and handover'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Sellers</h3>
              <div className="space-y-6">
                {[
                  'Accurate market valuation',
                  'Professional photography and marketing',
                  'Targeted buyer outreach',
                  'Skilled negotiation representation',
                  'Legal documentation management',
                  'Efficient closing process'
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

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to protect your interests and maximize value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-6">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 6-Step <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring successful property transactions
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 h-full">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Property Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a personalized consultation and discover how we can help you achieve your property goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <FaCalendarAlt />
                Book Consultation
              </Link>
              <Link
                to="/listings"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all duration-300"
              >
                <FaHome />
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyingSelling;