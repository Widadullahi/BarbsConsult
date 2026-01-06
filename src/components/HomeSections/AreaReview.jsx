import React, { useState } from 'react'
import { 
  FaChartLine, FaLightbulb, FaMapMarkerAlt, FaCalculator,
  FaHandshake, FaShieldAlt, FaTrendingUp, FaArrowLeft,
  FaCheck, FaBuilding, FaHome, FaLandmark, FaSearch,
  FaStar, FaShoppingCart, FaTrafficLight, FaSchool,
  FaTree, FaUserFriends, FaThumbsUp, FaExclamationTriangle,
  FaComment
} from 'react-icons/fa'

const AreaReview = () => {
  const [area, setArea] = useState('')
  const [activeArea, setActiveArea] = useState('lekki')
  const [userReview, setUserReview] = useState('')
  const [userRating, setUserRating] = useState(5)

  // Comprehensive area review data
  const areaReviews = {
    'lekki': {
      name: 'Lekki Phase 1',
      rating: 4.5,
      summary: 'Fast-growing residential and commercial hub with excellent amenities and infrastructure development.',
      reviews: 247,
      priceTrend: 'Rising ↗',
      avgRent: '₦4.5M/year',
      avgSale: '₦85M',
      details: {
        safety: { rating: 4, icon: <FaShieldAlt />, color: 'text-green-500', desc: 'Good security with occasional incidents' },
        amenities: { rating: 5, icon: <FaShoppingCart />, color: 'text-blue-500', desc: 'Excellent shopping, dining, and entertainment' },
        traffic: { rating: 3, icon: <FaTrafficLight />, color: 'text-yellow-500', desc: 'Heavy congestion during peak hours' },
        schools: { rating: 4, icon: <FaSchool />, color: 'text-purple-500', desc: 'Quality international and local schools' },
        greenery: { rating: 4, icon: <FaTree />, color: 'text-green-600', desc: 'Well-maintained parks and green spaces' },
        community: { rating: 4, icon: <FaUserFriends />, color: 'text-orange-500', desc: 'Diverse and growing community' }
      },
      highlights: [
        'Rapid property value appreciation (15-20% annually)',
        'Excellent shopping malls and restaurants',
        'Good security coverage in gated estates',
        'Traffic congestion is a major challenge',
        'High demand for rental properties',
        'New infrastructure projects ongoing'
      ],
      bestFor: ['Young Professionals', 'Families', 'Investors'],
      considerations: [
        'Consider traffic patterns when choosing location',
        'Gated communities offer better security',
        'Property prices are above Lagos average'
      ],
      recentReviews: [
        { user: 'James O.', rating: 5, comment: 'Great area for families. Schools and amenities are top-notch.' },
        { user: 'Chioma B.', rating: 4, comment: 'Love it but traffic can be frustrating during rush hours.' },
        { user: 'Investor Pro', rating: 5, comment: 'Best ROI in Lagos. Property values keep rising.' }
      ]
    },
    'victoria island': {
      name: 'Victoria Island',
      rating: 4.8,
      summary: 'Premium business district with world-class infrastructure, luxury living, and high security.',
      reviews: 189,
      priceTrend: 'Stable →',
      avgRent: '₦8.2M/year',
      avgSale: '₦180M',
      details: {
        safety: { rating: 5, icon: <FaShieldAlt />, color: 'text-green-500', desc: 'Excellent security with police presence' },
        amenities: { rating: 5, icon: <FaShoppingCart />, color: 'text-blue-500', desc: 'World-class shopping and fine dining' },
        traffic: { rating: 4, icon: <FaTrafficLight />, color: 'text-yellow-500', desc: 'Manageable but busy during weekdays' },
        schools: { rating: 4, icon: <FaSchool />, color: 'text-purple-500', desc: 'Premium international schools available' },
        greenery: { rating: 3, icon: <FaTree />, color: 'text-green-600', desc: 'Limited green spaces, mostly urban' },
        community: { rating: 5, icon: <FaUserFriends />, color: 'text-orange-500', desc: 'Elite business and diplomatic community' }
      },
      highlights: [
        'Highest property values in Lagos',
        'Excellent security and infrastructure',
        'Premium business environment',
        'Limited residential availability',
        'Strong rental demand from expats',
        'Prime location for commercial real estate'
      ],
      bestFor: ['Executives', 'Diplomats', 'High-Net-Worth Individuals', 'Businesses'],
      considerations: [
        'Very high cost of living',
        'Limited family-sized accommodations',
        'Best for those working on the island'
      ],
      recentReviews: [
        { user: 'Sarah K.', rating: 5, comment: 'The safest area in Lagos. Worth every penny.' },
        { user: 'Michael T.', rating: 5, comment: 'Perfect for business. Everything is within reach.' },
        { user: 'Expat Family', rating: 4, comment: 'Great security but limited green spaces for kids.' }
      ]
    },
    'ikoyi': {
      name: 'Ikoyi',
      rating: 4.7,
      summary: 'Upscale residential area known for exclusivity, privacy, and premium lifestyle.',
      reviews: 156,
      priceTrend: 'Rising ↗',
      avgRent: '₦7.5M/year',
      avgSale: '₦150M',
      details: {
        safety: { rating: 5, icon: <FaShieldAlt />, color: 'text-green-500', desc: 'Very secure with private security' },
        amenities: { rating: 5, icon: <FaShoppingCart />, color: 'text-blue-500', desc: 'Premium amenities and services' },
        traffic: { rating: 4, icon: <FaTrafficLight />, color: 'text-yellow-500', desc: 'Light traffic, good road network' },
        schools: { rating: 5, icon: <FaSchool />, color: 'text-purple-500', desc: 'Best international schools in Lagos' },
        greenery: { rating: 5, icon: <FaTree />, color: 'text-green-600', desc: 'Beautiful tree-lined streets and parks' },
        community: { rating: 5, icon: <FaUserFriends />, color: 'text-orange-500', desc: 'Exclusive, private community' }
      },
      highlights: [
        'Most exclusive neighborhood in Lagos',
        'Excellent international schools',
        'High security and privacy',
        'Limited commercial activities',
        'Strong property value retention',
        'Quiet, serene environment'
      ],
      bestFor: ['CEOs', 'Diplomats', 'Celebrities', 'Families seeking privacy'],
      considerations: [
        'Extremely expensive',
        'Limited entertainment options within',
        'Best for those who value privacy over convenience'
      ],
      recentReviews: [
        { user: 'The Johnson Family', rating: 5, comment: 'Perfect for raising children. Safe and serene.' },
        { user: 'Investor X', rating: 5, comment: 'Properties here never lose value. Gold standard.' },
        { user: 'Privacy Seeker', rating: 5, comment: 'Finally found peace and quiet in Lagos.' }
      ]
    },
    'ajah': {
      name: 'Ajah',
      rating: 4.0,
      summary: 'Developing area with affordable options, growing infrastructure, and investment potential.',
      reviews: 312,
      priceTrend: 'Rising Fast ↗↗',
      avgRent: '₦1.8M/year',
      avgSale: '₦35M',
      details: {
        safety: { rating: 3, icon: <FaShieldAlt />, color: 'text-yellow-500', desc: 'Variable security, better in estates' },
        amenities: { rating: 4, icon: <FaShoppingCart />, color: 'text-blue-500', desc: 'Growing commercial activities' },
        traffic: { rating: 3, icon: <FaTrafficLight />, color: 'text-yellow-500', desc: 'Improving but still challenging' },
        schools: { rating: 3, icon: <FaSchool />, color: 'text-purple-500', desc: 'Adequate schools, more needed' },
        greenery: { rating: 4, icon: <FaTree />, color: 'text-green-600', desc: 'Good natural environment' },
        community: { rating: 4, icon: <FaUserFriends />, color: 'text-orange-500', desc: 'Mixed, growing community' }
      },
      highlights: [
        'More affordable property prices',
        'Rapid infrastructure development',
        'Growing commercial activities',
        'Variable security depending on area',
        'High investment potential',
        'New road projects improving access'
      ],
      bestFor: ['First-time Buyers', 'Investors', 'Young Families', 'Developers'],
      considerations: [
        'Research specific areas within Ajah',
        'Infrastructure still developing',
        'Great for long-term investment'
      ],
      recentReviews: [
        { user: 'First-time Buyer', rating: 4, comment: 'Got my first home here. Great value for money.' },
        { user: 'Smart Investor', rating: 5, comment: 'Bought land here 5 years ago, value tripled!' },
        { user: 'Growing Family', rating: 4, comment: 'Space we needed at a price we could afford.' }
      ]
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const searchArea = area.toLowerCase().trim()
    
    if (areaReviews[searchArea]) {
      setActiveArea(searchArea)
    } else {
      alert(`No reviews yet for "${area}". Try: Lekki, Victoria Island, Ikoyi, or Ajah`)
    }
    setArea('')
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (userReview.trim()) {
      alert(`Thank you for your review of ${areaReviews[activeArea].name}! Our team will verify and publish it soon.`)
      setUserReview('')
      setUserRating(5)
    }
  }

  const currentArea = areaReviews[activeArea]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-logoBlue to-logoRed">
              Area Insights
            </span>{' '}
            & Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get honest, data-driven reviews about safety, amenities, traffic, schools, and property values.
            Make informed decisions with insights from residents and our experts.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-logoBlue" />
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter area name (e.g., 'Lekki', 'Victoria Island', 'Ikoyi', 'Ajah')"
                  className="w-full pl-12 pr-4 py-4 border-2 border-logoBlue/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-logoYellow focus:border-transparent text-lg"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-logoBlue to-blue-500 text-white font-bold rounded-xl hover:opacity-90 transition flex items-center justify-center shadow-lg"
              >
                <FaSearch className="mr-3" />
                Search Area
              </button>
            </form>
            
            {/* Quick Area Buttons */}
            <div className="mt-6">
              <p className="text-gray-600 mb-3 text-center">Popular areas:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {Object.keys(areaReviews).map(areaName => (
                  <button
                    key={areaName}
                    onClick={() => setActiveArea(areaName)}
                    className={`px-5 py-3 rounded-xl transition-all flex items-center ${
                      activeArea === areaName 
                        ? 'bg-gradient-to-r from-logoBlue to-blue-500 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    {areaReviews[areaName].name}
                    {activeArea === areaName && (
                      <FaCheck className="ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Review Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mb-12">
          {/* Area Header */}
          <div className="bg-gradient-to-r from-logoBlue/10 to-blue-50 p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-logoBlue text-xl mr-3" />
                  <h3 className="text-3xl font-bold text-gray-900">{currentArea.name}</h3>
                  <span className="ml-4 px-3 py-1 bg-logoBlue/10 text-logoBlue rounded-full text-sm font-bold">
                    {currentArea.priceTrend}
                  </span>
                </div>
                <p className="text-gray-600 text-lg">{currentArea.summary}</p>
              </div>
              
              <div className="flex items-center">
                <div className="text-center mr-8">
                  <div className="text-2xl font-bold text-gray-900">{currentArea.rating}/5</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-xl ${i < Math.floor(currentArea.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">({currentArea.reviews} reviews)</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-logoRed">{currentArea.avgRent}</div>
                  <div className="text-sm text-gray-500">Avg. Annual Rent</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Detail Ratings Grid */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-8 text-gray-900">Area Ratings</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {Object.entries(currentArea.details).map(([key, detail]) => (
                  <div key={key} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className={`text-3xl mb-3 ${detail.color}`}>
                      {detail.icon}
                    </div>
                    <div className="font-bold text-gray-900 capitalize mb-2">{key}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < detail.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{detail.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights & Best For */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Area Highlights</h4>
                <div className="space-y-4">
                  {currentArea.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <FaThumbsUp className="text-green-600" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Best For</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentArea.bestFor.map((type, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-gradient-to-r from-logoBlue to-blue-500 text-white rounded-full font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                
                <div>
                  <h5 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                    <FaExclamationTriangle className="text-logoYellow mr-2" />
                    Considerations
                  </h5>
                  <div className="space-y-3">
                    {currentArea.considerations.map((consideration, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaCheck className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{consideration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 text-gray-900">Recent Community Reviews</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentArea.recentReviews.map((review, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-logoBlue to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {review.user.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold">{review.user}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Your Review */}
            <div className="bg-gradient-to-r from-logoBlue/5 to-blue-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-gray-900">Share Your Experience</h4>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-3">Your Rating:</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className="text-3xl focus:outline-none"
                      >
                        <FaStar 
                          className={star <= userRating ? 'text-yellow-400' : 'text-gray-300'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <textarea
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    placeholder={`Share your experience living in ${currentArea.name}...`}
                    className="w-full h-40 p-4 border-2 border-logoBlue/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-logoYellow focus:border-transparent"
                    rows="4"
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    <FaComment className="inline mr-2" />
                    Your review helps others make better decisions
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-logoBlue to-blue-500 text-white font-bold rounded-xl hover:opacity-90 transition flex items-center"
                  >
                    <FaCheck className="mr-2" />
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="text-center text-gray-600">
          <p className="mb-2">Reviews are based on community feedback and our expert analysis.</p>
          <p>Data is regularly updated. Want to suggest an area? <button className="text-logoBlue font-bold hover:underline">Contact us</button></p>
        </div>
      </div>
    </section>
  )
}

export default AreaReview