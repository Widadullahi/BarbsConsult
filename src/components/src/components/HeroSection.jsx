import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaBuilding, FaHome, FaCity } from 'react-icons/fa'
import CountUp from '../Common/CountUp'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container-custom py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="relative z-10">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
                <FaBuilding className="mr-2" /> PREMIUM REAL ESTATE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Find Your{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                    Dream Property
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Premium real estate consultation, property sales, rentals, and management services across Nigeria. 
              Trusted by over 500+ clients with 15+ years of excellence.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <FaCheck className="text-green-500" />, text: 'Verified Property Listings' },
                { icon: <FaCheck className="text-green-500" />, text: 'Expert Legal Assistance' },
                { icon: <FaCheck className="text-green-500" />, text: '24/7 Customer Support' },
                { icon: <FaCheck className="text-green-500" />, text: 'Market Value Analysis' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link 
                to="/listings" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl text-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-1 transition duration-300 shadow-xl shadow-blue-500/30 flex items-center justify-center"
              >
                Browse Properties
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white border-2 border-blue-100 text-blue-700 font-bold rounded-xl text-lg hover:bg-blue-50 hover:border-blue-300 transform hover:-translate-y-1 transition duration-300 flex items-center justify-center shadow-lg"
              >
                Free Consultation
              </Link>
            </div>
            
            {/* Updated Stats Section with CountUp */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  <CountUp end={500} suffix="+" duration={1500} />
                </div>
                <div className="text-gray-600 text-sm mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  <CountUp end={250} suffix="+" duration={1500} delay={200} />
                </div>
                <div className="text-gray-600 text-sm mt-1">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  <CountUp end={98} suffix="%" duration={1500} delay={400} />
                </div>
                <div className="text-gray-600 text-sm mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Skyscraper Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80" 
                alt="Modern Skyscraper"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">₦120M</div>
                  <div className="text-xs text-gray-600">Avg. Property Value</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <FaCity className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Lagos • Abuja • Port Harcourt</div>
                    <div className="text-sm text-gray-600">Operating Nationwide</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-64">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <FaHome className="text-blue-500" />
                </div>
                <div>
                  <div className="font-bold">Property Types</div>
                  <div className="text-sm text-gray-600">Apartments • Lands • Commercial</div>
                </div>
              </div>
              <div className="flex space-x-2">
                {['Villa', 'Duplex', 'Office', 'Land'].map((type, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-2xl shadow-2xl text-white w-56">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-lg font-semibold">Years Experience</div>
              <div className="text-sm opacity-90 mt-2">Trusted real estate expertise since 2009</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
