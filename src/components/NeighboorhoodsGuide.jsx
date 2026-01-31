import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaHome, 
  FaChartLine, 
  FaUserFriends, 
  FaShieldAlt,
  FaArrowLeft,
  FaSearch,
  FaCheck,
  FaTimes
} from "react-icons/fa";
import { motion } from "framer-motion";

// Color constants for consistency
const COLORS = {
  primary: "#2563eb",      // Blue-600
  primaryLight: "#dbeafe", // Blue-50
  secondary: "#059669",    // Green-600
  secondaryLight: "#d1fae5", // Green-50
  accent: "#7c3aed",       // Purple-600
  accentLight: "#f3e8ff",  // Purple-50
  gray: "#6b7280",         // Gray-500
  grayLight: "#f3f4f6",    // Gray-100
  success: "#10b981",      // Green-500
  warning: "#f59e0b",      // Amber-500
  danger: "#ef4444"        // Red-500
};

const neighborhoodsData = [
  {
    id: "ikoyi-victoria-island",
    name: "Ikoyi & Victoria Island",
    type: "Premium Luxury Living",
    description: "Lagos' most prestigious neighborhoods with high-end residences, international schools, and waterfront properties.",
    rentalYield: "6-9%",
    capitalAppreciation: "12-18% annually",
    averageRent: "₦8M - ₦25M per annum",
    propertyPrices: "₦150M - ₦2B+",
    investmentPotential: "High stability, premium returns",
    infrastructure: "⭐️⭐️⭐️⭐️⭐️ (5/5)",
    safety: "⭐️⭐️⭐️⭐️ (4/5)",
    amenities: "⭐️⭐️⭐️⭐️⭐️ (5/5)",
    image: "https://media.sciencephoto.com/f0/41/68/85/f0416885-800px-wm.jpg",
    pros: [
      "Highest property values in Lagos",
      "Strong expat and diplomatic presence",
      "Excellent security and infrastructure",
      "Prestigious addresses with high resale value"
    ],
    cons: [
      "Very high entry price",
      "Traffic congestion during peak hours",
      "Limited land for new developments"
    ],
    userReviews: [
      { name: "Chidi N.", rating: 5, comment: "Lived here for 5 years. Properties hold value exceptionally well." },
      { name: "Sarah K.", rating: 4, comment: "Great for luxury living but quite expensive for young families." },
      { name: "Mr. Adebayo", rating: 5, comment: "Best investment I made. Rental demand is always high." }
    ],
    bestFor: "High-net-worth investors, corporate executives, diplomats",
    tags: ["Luxury", "High-End", "Waterfront", "Exclusive"]
  },
  {
    id: "lekki-phase1-2",
    name: "Lekki Phase 1 & 2",
    type: "Young Professionals & Families",
    description: "Modern planned communities with excellent infrastructure, shopping malls, and growing business districts.",
    rentalYield: "8-12%",
    capitalAppreciation: "15-25% annually",
    averageRent: "₦3M - ₦12M per annum",
    propertyPrices: "₦80M - ₦500M",
    investmentPotential: "High growth, strong rental demand",
    infrastructure: "⭐️⭐️⭐️⭐️ (4/5)",
    safety: "⭐️⭐️⭐️⭐️ (4/5)",
    amenities: "⭐️⭐️⭐️⭐️ (4/5)",
    image: "https://media.vrbo.com/lodging/91000000/90900000/90890400/90890330/25a9a666.jpg?impolicy=resizecrop&rw=1000&ra=fit",
    pros: [
      "Excellent planned infrastructure",
      "Growing commercial centers",
      "Strong community development",
      "Good mix of residential and commercial"
    ],
    cons: [
      "Traffic congestion on Lekki-Epe Expressway",
      "Flooding issues in some areas",
      "Rapid development leading to overcrowding"
    ],
    userReviews: [
      { name: "Temi A.", rating: 5, comment: "Perfect for young families. Schools and malls everywhere!" },
      { name: "James O.", rating: 4, comment: "Great area but traffic can be terrible. Invest in Phase 2 for better value." },
      { name: "Bola S.", rating: 4, comment: "Rental yields are excellent. Always find tenants within a week." }
    ],
    bestFor: "Young professionals, growing families, mid-level investors",
    tags: ["Modern", "Planned", "Commercial", "Family-Friendly"]
  },
  {
    id: "yaba-surulere",
    name: "Yaba & Surulere",
    type: "Mainland Tech Hub & Traditional Stronghold",
    description: "Historic mainland areas experiencing tech-driven regeneration with a mix of traditional and modern properties.",
    rentalYield: "10-15%",
    capitalAppreciation: "20-30% annually",
    averageRent: "₦1.5M - ₦6M per annum",
    propertyPrices: "₦40M - ₦200M",
    investmentPotential: "High yield, emerging tech hub",
    infrastructure: "⭐️⭐️⭐️ (3/5)",
    safety: "⭐️⭐️⭐️ (3/5)",
    amenities: "⭐️⭐️⭐️⭐️ (4/5)",
    image: "https://c8.alamy.com/comp/2HTNDXJ/the-view-from-the-co-creation-hub-in-yaba-lagos-an-area-in-nigerias-economic-capital-once-nicknamed-yabacon-valley-because-of-the-number-of-tech-start-ups-in-the-area-2HTNDXJ.jpg",
    pros: [
      "Highest rental yields in Lagos",
      "Tech hub attracting young professionals",
      "Excellent public transport access",
      "Affordable entry prices"
    ],
    cons: [
      "Older infrastructure in some parts",
      "Traffic congestion",
      "Limited new developments"
    ],
    userReviews: [
      { name: "David T.", rating: 5, comment: "Yaba is the new Silicon Valley of Africa! Great for tech investments." },
      { name: "Mrs. Johnson", rating: 4, comment: "Surulere has character and great rental income." },
      { name: "TechBro Naija", rating: 5, comment: "Invested in 3 properties here. 15% yield consistently!" }
    ],
    bestFor: "Tech professionals, yield-focused investors, first-time buyers",
    tags: ["Tech Hub", "High Yield", "Affordable", "Regenerating"]
  },
  {
    id: "epe-ibeju-lekki",
    name: "Epe & Ibeju-Lekki",
    type: "Future Growth Zone & Emerging Corridor",
    description: "Strategic growth corridors with massive infrastructure projects including Dangote Refinery and Lekki Deep Sea Port.",
    rentalYield: "Land Appreciation",
    capitalAppreciation: "30-50% annually",
    averageRent: "₦800K - ₦3M per annum",
    propertyPrices: "₦20M - ₦150M",
    investmentPotential: "Massive future growth",
    infrastructure: "⭐️⭐️ (2/5)",
    safety: "⭐️⭐️⭐️ (3/5)",
    amenities: "⭐️⭐️ (2/5)",
    image: "https://images.propertypro.ng/large/900sqm-residential-land-in-amen-estate-phase-2-with-flexible-payment-plan-yqwlL5k2iloMFbbluse8.jpg",
    pros: [
      "Massive infrastructure projects ongoing",
      "Low entry prices with high growth potential",
      "Future industrial and commercial hub",
      "Government development focus"
    ],
    cons: [
      "Current infrastructure needs improvement",
      "Longer commute to central Lagos",
      "Limited current amenities"
    ],
    userReviews: [
      { name: "Investor Pro", rating: 5, comment: "Bought land in 2019, value has tripled already!" },
      { name: "Future Focus", rating: 4, comment: "This is Lagos' future. Get in early!" },
      { name: "Mr. Visionary", rating: 5, comment: "Dangote Refinery alone will transform this area completely." }
    ],
    bestFor: "Long-term investors, land banking, forward-thinking buyers",
    tags: ["Future Growth", "Infrastructure", "Land Banking", "Emerging"]
  },
  {
    id: "magodo-ikeja-gra",
    name: "Magodo & Ikeja GRA",
    type: "Family-Friendly Estates & Government Residential Areas",
    description: "Well-planned gated estates and government residential areas known for security, greenery, and family living.",
    rentalYield: "9-12%",
    capitalAppreciation: "10-15% annually",
    averageRent: "₦2.5M - ₦8M per annum",
    propertyPrices: "₦60M - ₦300M",
    investmentPotential: "Stable growth, family rental demand",
    infrastructure: "⭐️⭐️⭐️⭐️ (4/5)",
    safety: "⭐️⭐️⭐️⭐️⭐️ (5/5)",
    amenities: "⭐️⭐️⭐️⭐️ (4/5)",
    image: "https://i.ytimg.com/vi/9AuVC8jGIR4/maxresdefault.jpg",
    pros: [
      "Excellent security in gated estates",
      "Family-friendly environment",
      "Good schools and hospitals nearby",
      "Stable property values"
    ],
    cons: [
      "Limited new supply",
      "Higher prices due to security premium",
      "Some areas are fully developed"
    ],
    userReviews: [
      { name: "Family Man", rating: 5, comment: "Magodo is perfect for raising children. Safe and clean." },
      { name: "Retired Officer", rating: 4, comment: "Ikeja GRA has maintained its value for decades." },
      { name: "Mrs. Security", rating: 5, comment: "Worth every penny for the peace of mind and security." }
    ],
    bestFor: "Families, retirees, security-conscious investors",
    tags: ["Gated", "Secure", "Family", "Established"]
  },
  {
    id: "ajah-sangotedo",
    name: "Ajah & Sangotedo",
    type: "Affordable Access & Rapid Development",
    description: "Fast-growing areas offering more affordable options while providing access to Lekki amenities and infrastructure.",
    rentalYield: "High Rental Demand",
    capitalAppreciation: "15-25% annually",
    averageRent: "₦1.2M - ₦4M per annum",
    propertyPrices: "₦30M - ₦120M",
    investmentPotential: "Affordable growth corridor",
    infrastructure: "⭐️⭐️⭐️ (3/5)",
    safety: "⭐️⭐️⭐️ (3/5)",
    amenities: "⭐️⭐️⭐️ (3/5)",
    image: "https://images.propertypro.ng/large/paradise-newly-built-all-en-suite-3-bedroom-XBmfQECIShQJrtvIg0Cg.jpg",
    pros: [
      "More affordable than central Lekki",
      "Rapid infrastructure development",
      "Growing middle-class population",
      "Access to Lekki amenities"
    ],
    cons: [
      "Traffic bottlenecks",
      "Some areas still developing",
      "Flooding in low-lying areas"
    ],
    userReviews: [
      { name: "First-time Buyer", rating: 4, comment: "Got my first property here. Great value for money!" },
      { name: "Growth Investor", rating: 5, comment: "Sangotedo is exploding with new developments." },
      { name: "Lagos Commuter", rating: 3, comment: "Good area but traffic to VI can be 2+ hours." }
    ],
    bestFor: "First-time buyers, middle-income families, growth investors",
    tags: ["Affordable", "Growing", "Accessible", "Middle-Class"]
  }
];

const NeighborhoodsGuide = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoodsData[0]);
  const [filter, setFilter] = useState("all");

  const filteredNeighborhoods = neighborhoodsData.filter(area => {
    if (filter === "all") return true;
    if (filter === "luxury") return area.tags.includes("Luxury");
    if (filter === "high-yield") return area.tags.includes("High Yield");
    if (filter === "growth") return area.tags.includes("Future Growth");
    if (filter === "affordable") return area.tags.includes("Affordable");
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600">
                <FaArrowLeft className="mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
                Lagos Neighborhoods Guide
              </h1>
              <p className="text-gray-600 mt-2 max-w-3xl">
                Comprehensive investment analysis, user reviews, and expert insights for every major Lagos area
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Neighborhood List & Filters */}
          <div className="lg:col-span-1">
            {/* Search & Filter */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-6">
              <div className="flex items-center mb-4 p-3 bg-gray-100 rounded-lg">
                <FaSearch className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search neighborhoods..."
                  className="w-full bg-transparent outline-none"
                  onChange={(e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    const found = neighborhoodsData.find(area => 
                      area.name.toLowerCase().includes(searchTerm) ||
                      area.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                    );
                    if (found) setSelectedNeighborhood(found);
                  }}
                />
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Filter by Investment Type</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "all", label: "All Areas", icon: "🏠" },
                    { id: "luxury", label: "Luxury", icon: "⭐" },
                    { id: "high-yield", label: "High Yield", icon: "💰" },
                    { id: "growth", label: "Future Growth", icon: "📈" },
                    { id: "affordable", label: "Affordable", icon: "🎯" }
                  ].map((filterOption) => (
                    <button
                      key={filterOption.id}
                      onClick={() => setFilter(filterOption.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        filter === filterOption.id
                          ? `bg-[${COLORS.primary}] text-white`
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      style={{
                        backgroundColor: filter === filterOption.id ? COLORS.primary : undefined,
                        color: filter === filterOption.id ? 'white' : undefined
                      }}
                    >
                      {filterOption.icon} {filterOption.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Neighborhood List */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-3">All Neighborhoods</h3>
                {filteredNeighborhoods.map((area) => (
                  <motion.div
                    key={area.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => setSelectedNeighborhood(area)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        selectedNeighborhood.id === area.id
                          ? "bg-blue-50 border-2 border-blue-500"
                          : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-900">{area.name}</h4>
                          <p className="text-sm text-gray-600">{area.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-600 font-bold">{area.rentalYield}</p>
                          <p className="text-sm text-gray-500">Rental Yield</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <FaMapMarkerAlt className="text-red-500 mr-2" />
                        <span className="text-sm text-gray-600">{area.tags.slice(0, 2).join(" • ")}</span>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Neighborhood Detail */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedNeighborhood.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Hero Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedNeighborhood.image}
                  alt={selectedNeighborhood.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold">{selectedNeighborhood.name}</h2>
                  <p className="text-lg opacity-90">{selectedNeighborhood.type}</p>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {selectedNeighborhood.rentalYield} Rental Yield
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedNeighborhood.description}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-2">
                      <FaChartLine className="text-blue-600 mr-2" />
                      <h4 className="font-bold text-gray-700">Capital Appreciation</h4>
                    </div>
                    <p className="text-xl font-bold text-blue-600">{selectedNeighborhood.capitalAppreciation}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-2">
                      <FaHome className="text-green-600 mr-2" />
                      <h4 className="font-bold text-gray-700">Average Rent</h4>
                    </div>
                    <p className="text-xl font-bold text-green-600">{selectedNeighborhood.averageRent}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-2">
                      <FaShieldAlt className="text-purple-600 mr-2" />
                      <h4 className="font-bold text-gray-700">Safety</h4>
                    </div>
                    <p className="text-xl font-bold text-purple-600">{selectedNeighborhood.safety}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-2">
                      <FaUserFriends className="text-amber-600 mr-2" />
                      <h4 className="font-bold text-gray-700">Infrastructure</h4>
                    </div>
                    <p className="text-xl font-bold text-amber-600">{selectedNeighborhood.infrastructure}</p>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center">
                      <FaCheck className="mr-2" /> Advantages
                    </h3>
                    <ul className="space-y-3">
                      {selectedNeighborhood.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                            <div className="w-2 h-2 bg-green-600 rounded-full" />
                          </div>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center">
                      <FaTimes className="mr-2" /> Considerations
                    </h3>
                    <ul className="space-y-3">
                      {selectedNeighborhood.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                            <div className="w-2 h-2 bg-red-600 rounded-full" />
                          </div>
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* User Reviews */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">What Residents & Investors Say</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedNeighborhood.userReviews.map((review, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <span className="font-bold text-blue-600">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800">{review.name}</h4>
                            <div className="flex text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <FaStar 
                                  key={i} 
                                  className={i < review.rating ? "fill-current" : "fill-gray-300"} 
                                  size={14}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 italic text-sm">"{review.comment}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Best For */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedNeighborhood.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Best For:</h4>
                    <p className="text-gray-700">{selectedNeighborhood.bestFor}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Invest in {selectedNeighborhood.name}?</h3>
                <p className="mb-6 max-w-2xl mx-auto opacity-90">
                  Get personalized property recommendations, market insights, and investment analysis for this area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    to="/properties"
                    className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition"
                  >
                    View Available Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NeighborhoodsGuide;