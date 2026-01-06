// src/components/HomeSections/StatsSection.jsx
import EnhancedCountUp from '../Common/EnhancedCountUp'
import { FaUsers, FaHome, FaHeart, FaAward } from 'react-icons/fa'

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-3xl" />,
      end: 500,
      suffix: "+",
      label: "Happy Clients",
      color: "from-blue-500 to-cyan-400",
      delay: 0
    },
    {
      id: 2,
      icon: <FaHome className="text-3xl" />,
      end: 250,
      suffix: "+",
      label: "Properties Sold",
      color: "from-purple-500 to-pink-400",
      delay: 300
    },
    {
      id: 3,
      icon: <FaHeart className="text-3xl" />,
      end: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-green-500 to-emerald-400",
      delay: 600
    },
    {
      id: 4,
      icon: <FaAward className="text-3xl" />,
      end: 15,
      suffix: "+",
      label: "Years Experience",
      color: "from-orange-500 to-yellow-400",
      delay: 900
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by clients for over 15 years with proven results
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <EnhancedCountUp 
                  end={stat.end} 
                  suffix={stat.suffix}
                  duration={2000}
                  delay={stat.delay}
                  className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                />
              </div>
              
              <div className="text-gray-700 font-medium">{stat.label}</div>
              
              {/* Animated Progress Bar (for percentage only) */}
              {stat.suffix === "%" && (
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-2000 ease-out"
                      style={{ width: '0%' }}
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            el.style.width = `${stat.end}%`
                          }, stat.delay)
                        }
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Customer Satisfaction Rate</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Animated Counter Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <EnhancedCountUp end={120} suffix="M+" duration={2500} />
              </div>
              <div className="text-blue-100">Total Property Value Managed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <EnhancedCountUp end={24} suffix="/7" duration={2500} delay={300} />
              </div>
              <div className="text-blue-100">Customer Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <EnhancedCountUp end={48} suffix="h" duration={2500} delay={600} />
              </div>
              <div className="text-blue-100">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection