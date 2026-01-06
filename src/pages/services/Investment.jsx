// pages/services/Investment.jsx
import { Link } from 'react-router-dom';
import { 
  FaChartLine,
  FaSearchDollar,
  FaHandHoldingUsd,
  FaBalanceScale,
  FaBuilding,
  FaArrowLeft,
  FaPhoneAlt,
  FaCheckCircle,
  FaLightbulb
} from 'react-icons/fa';

const Investment = () => {
  const investmentTypes = [
    {
      title: 'Residential Properties',
      description: 'Single-family homes, apartments, and duplexes for steady rental income',
      roi: '6-10%',
      risk: 'Low'
    },
    {
      title: 'Commercial Real Estate',
      description: 'Office spaces, retail properties, and shopping centers',
      roi: '8-12%',
      risk: 'Medium'
    },
    {
      title: 'Land Acquisition',
      description: 'Strategic land purchases for future development',
      roi: '15-25%',
      risk: 'High'
    },
    {
      title: 'REITs & Funds',
      description: 'Real estate investment trusts and managed funds',
      roi: '7-9%',
      risk: 'Low'
    }
  ];

  const services = [
    {
      icon: <FaSearchDollar className="text-2xl" />,
      title: 'Market Analysis',
      description: 'In-depth research to identify high-potential investment opportunities'
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: 'Portfolio Strategy',
      description: 'Custom investment strategies based on your goals and risk tolerance'
    },
    {
      icon: <FaHandHoldingUsd className="text-2xl" />,
      title: 'ROI Optimization',
      description: 'Maximize returns through strategic acquisition and management'
    },
    {
      icon: <FaBalanceScale className="text-2xl" />,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-orange-800">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Investment Advisory"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-white hover:text-orange-200 mb-6"
            >
              <FaArrowLeft />
              Back to All Services
            </Link>
            
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm uppercase tracking-wider">Wealth Building</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Investment <span className="text-orange-300">Advisory</span>
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Strategic investment planning and portfolio management to grow your wealth through real estate. We help you make informed decisions and maximize returns.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <FaPhoneAlt />
              Schedule Investment Review
            </a>
          </div>
        </div>
      </div>

      {/* Investment Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment <span className="text-orange-600">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore various real estate investment options with different risk and return profiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-14 h-14 bg-orange-50 rounded-xl mb-6">
                    <FaBuilding className="text-orange-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Expected ROI</div>
                      <div className="text-lg font-bold text-green-600">{type.roi}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Risk Level</div>
                      <div className={`text-lg font-bold ${
                        type.risk === 'Low' ? 'text-green-600' : 
                        type.risk === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {type.risk}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Investment <span className="text-orange-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive advisory services to guide your investment decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-orange-50 rounded-xl mb-6">
                  <div className="text-orange-600">{service.icon}</div>
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

      {/* Investment Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Investment <span className="text-orange-600">Process</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 'Assessment',
                  description: 'Understand your financial goals, risk tolerance, and investment capacity'
                },
                {
                  step: 'Strategy',
                  description: 'Develop a customized investment strategy based on market analysis'
                },
                {
                  step: 'Acquisition',
                  description: 'Identify and secure prime investment properties at optimal prices'
                },
                {
                  step: 'Management',
                  description: 'Implement professional management to maximize returns'
                },
                {
                  step: 'Monitoring',
                  description: 'Continuous performance tracking and portfolio optimization'
                },
                {
                  step: 'Exit Strategy',
                  description: 'Plan and execute profitable exits at the right time'
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-300 transition-all duration-300 h-full">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                      {step.step}
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
      <section className="py-16 bg-gradient-to-r from-orange-900 to-orange-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FaLightbulb className="text-5xl text-white mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Building Your Real Estate Portfolio
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let us help you create a diversified real estate portfolio that generates passive income and builds long-term wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Get Investment Strategy
              </Link>
              <Link
                to="/listings?type=investment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-800 text-white font-bold rounded-xl hover:bg-orange-900 transition-all duration-300"
              >
                View Investment Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;