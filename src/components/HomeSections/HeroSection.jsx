import { Link } from 'react-router-dom'
import { FaArrowRight, FaBuilding, FaChartLine, FaShieldAlt, FaMoneyBillWave, FaHome, FaHistory, FaGhost, FaDoorOpen, FaWhatsapp, FaMapMarkerAlt, FaStar, FaLightbulb, FaChevronLeft, FaChevronRight, FaQuestionCircle, FaExclamationTriangle, FaMoneyBillAlt, FaClock, FaSearch, FaHandPointDown } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const HeroSection = () => {
  // Updated slides with your exact text
  const slides = [
    {
      id: 1,
      title: "Did you know",
      highlightedTitle: "many properties never deliver the returns their owners expect?",
      subtitle: "This usually happens when buyers choose the wrong location or the wrong property type.",
      tag: "INVESTOR REALITY",
      tagIcon: <FaQuestionCircle className="mr-2" />,
      tagColor: "bg-gradient-to-r from-red-50 to-red-100 text-red-800 border border-red-200",
      bgImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&auto=format&fit=crop&q=80",
      ctaText: "Stop Making Wrong Choices"
    },
    {
      id: 2,
      title: "Low rental returns aren't bad luck —",
      highlightedTitle: "they're bad buying decisions.",
      subtitle: "In real estate, where you buy and what you buy determine your results.",
      tag: "TRUTH REVEALED",
      tagIcon: <FaExclamationTriangle className="mr-2" />,
      tagColor: "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 border border-amber-200",
      bgImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Wrong Location", value: "68%" },
        { label: "Wrong Property Type", value: "72%" }
      ],
      ctaText: "Make Smart Decisions"
    },
    {
      id: 3,
      title: "Most investors don't lose money —",
      highlightedTitle: "they just invest blindly.",
      subtitle: "Buying without knowing the right locations and property types leads to low returns.",
      tag: "BLIND INVESTING",
      tagIcon: <FaSearch className="mr-2" />,
      tagColor: "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border border-blue-200",
      bgImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Invest Blindly", value: "65%" },
        { label: "Get Low Returns", value: "82%" }
      ],
      ctaText: "Invest With Eyes Open"
    },
    {
      id: 4,
      title: "Why do many properties underperform?",
      highlightedTitle: "Because investors buy what's popular, not what's profitable.",
      subtitle: "",
      tag: "POPULAR VS PROFITABLE",
      tagIcon: <FaChartLine className="mr-2" />,
      tagColor: "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 border border-purple-200",
      bgImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Buy Popular", value: "75%" },
        { label: "Get Profits", value: "25%" }
      ],
      ctaText: "Choose Profitable"
    },
    {
      id: 5,
      title: "Real estate returns are not accidental.",
      highlightedTitle: "They depend on strategy, timing, location, and property type.",
      subtitle: "",
      tag: "STRATEGY MATTERS",
      tagIcon: <FaShieldAlt className="mr-2" />,
      tagColor: "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800 border border-emerald-200",
      bgImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "With Strategy", value: "15-25%" },
        { label: "Without Strategy", value: "3-8%" }
      ],
      ctaText: "Get The Strategy"
    },
    {
      id: 6,
      title: "Buying property without market knowledge",
      highlightedTitle: "is expensive.",
      subtitle: "The wrong area or property type can reduce your returns for years.",
      tag: "EXPENSIVE IGNORANCE",
      tagIcon: <FaMoneyBillAlt className="mr-2" />,
      tagColor: "bg-gradient-to-r from-rose-50 to-rose-100 text-rose-800 border border-rose-200",
      bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Lost Returns/Year", value: "₦2-5M" },
        { label: "Years Affected", value: "5-10" }
      ],
      ctaText: "Gain Market Knowledge"
    },
    {
      id: 7,
      title: "Many investors own property",
      highlightedTitle: "but struggle with returns.",
      subtitle: "The reason? Poor location and property selection.",
      tag: "OWNERSHIP ≠ SUCCESS",
      tagIcon: <FaHome className="mr-2" />,
      tagColor: "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border border-gray-200",
      bgImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Own Property", value: "100%" },
        { label: "Good Returns", value: "32%" }
      ],
      ctaText: "Turn Ownership Into Profit"
    },
    {
      id: 8,
      title: "Not all properties are good investments.",
      highlightedTitle: "High returns come from buying the right property in the right location.",
      subtitle: "",
      tag: "QUALITY OVER QUANTITY",
      tagIcon: <FaStar className="mr-2" />,
      tagColor: "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border border-blue-200",
      bgImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Properties Available", value: "1000s" },
        { label: "High-Return Ones", value: "< 20%" }
      ],
      ctaText: "Find High-Return Properties"
    },
    {
      id: 9,
      title: "Real estate success starts before you buy.",
      highlightedTitle: "Choosing the wrong area or property can lock you into low returns.",
      subtitle: "",
      tag: "DECISIONS MATTER",
      tagIcon: <FaClock className="mr-2" />,
      tagColor: "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 border border-amber-200",
      bgImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Decision Time", value: "Days" },
        { label: "Impact Time", value: "Years" }
      ],
      ctaText: "Make Right Decisions"
    },
    {
      id: 10,
      title: "If your property isn't performing,",
      highlightedTitle: "the problem isn't real estate — it's strategy.",
      subtitle: "Returns depend on informed buying decisions.",
      tag: "PROBLEM IDENTIFIED",
      tagIcon: <FaLightbulb className="mr-2" />,
      tagColor: "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800 border border-emerald-200",
      bgImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&auto=format&fit=crop&q=80",
      stats: [
        { label: "Blame Market", value: "80%" },
        { label: "Fix Strategy", value: "94%" }
      ],
      ctaText: "Fix Your Strategy"
    }
  ]

  // Area reviews data
  const areaReviews = [
    {
      area: "Victoria Island",
      investorPain: "Wanting premium returns but buying wrong property types",
      solution: "Commercial office spaces & luxury apartments only",
      whyItWorks: "Eliminates vacancy risk with corporate tenants, ensures 8-12% consistent returns",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60",
      roi: "8-12%",
      painSolved: ["Vacancy risk", "Low-quality tenants", "Stagnant appreciation"],
      warning: "Avoid residential lands here - they underperform for 70% of investors"
    },
    {
      area: "Lekki Phase 1",
      investorPain: "Family-friendly investment with consistent rental income",
      solution: "3-4 bedroom apartments with amenities",
      whyItWorks: "95% occupancy year-round, families stay 3-5 years minimizing turnover",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
      roi: "7-10%",
      painSolved: ["Tenant turnover", "Rental gaps", "Property damage"],
      warning: "Oversized properties sit vacant for months - stick to 3-4 bedrooms"
    },
    {
      area: "Ikoyi",
      investorPain: "Capital preservation with diplomatic/executive tenants",
      solution: "Luxury villas & diplomatic apartments",
      whyItWorks: "Premium tenants pay on time, properties appreciate 15-20% annually",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
      roi: "6-9%",
      painSolved: ["Late payments", "Property misuse", "Slow appreciation"],
      warning: "Small commercial spaces fail here - diplomats need premium spaces"
    }
  ]

  return (
    <div className="relative">
      {/* ===== MAIN CAROUSEL ===== */}
      <section className="relative overflow-hidden">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={8000}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          className="fact-carousel"
          renderArrowPrev={(clickHandler, hasPrev, label) => (
            <button
              onClick={clickHandler}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Previous"
              title={label}
            >
              <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
            </button>
          )}
          renderArrowNext={(clickHandler, hasNext, label) => (
            <button
              onClick={clickHandler}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Next"
              title={label}
            >
              <FaChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
            </button>
          )}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-[650px] min-h-[600px]">
              {/* White House Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={slide.bgImage} 
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                {/* White gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/80 to-transparent md:from-white/90 md:via-white/85 md:to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent md:from-white/70 md:via-transparent md:to-transparent"></div>
              </div>

              {/* Content */}
              <div className="container-custom h-full relative z-10 px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-8 md:py-12">
                  {/* Left Side - Text Content */}
                  <div className="text-gray-800 pl-0 pr-4 md:pr-8 lg:pr-12">
                    <div className="mb-6 md:mb-8">
                      <span className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 ${slide.tagColor} rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 shadow-md`}>
                        {slide.tagIcon} {slide.tag}
                      </span>
                      
                      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                        <span className="text-gray-900">{slide.title}</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-700">
                          {slide.highlightedTitle}
                        </span>
                      </h1>
                    </div>
                    
                    {slide.subtitle && (
                      <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-xl md:max-w-2xl border-l-3 md:border-l-4 border-blue-500 pl-3 md:pl-4 py-1 md:py-2 bg-white/40 rounded-r-lg">
                        {slide.subtitle}
                      </p>
                    )}
                    
                    {/* Stats showing the reality */}
                    {slide.stats && (
                      <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                        {slide.stats.map((stat, idx) => (
                          <div key={idx} className={`bg-white/90 backdrop-blur-sm border ${idx === 0 ? 'border-red-300' : 'border-emerald-300'} rounded-lg md:rounded-xl p-3 md:p-4 min-w-[110px] md:min-w-[140px] shadow-md hover:shadow-lg transition-all duration-300`}>
                            <div className={`text-xl md:text-2xl font-bold ${idx === 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                              {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Down arrow prompt */}
                    <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl md:rounded-2xl border border-blue-200 shadow-md">
                      <div className="flex items-center">
                        <FaHandPointDown className="text-blue-600 mr-3 text-xl md:text-2xl animate-bounce" />
                        <div>
                          <h3 className="font-bold text-gray-800 mb-1">Scroll to see high-return areas and what to buy in each.</h3>
                          <p className="text-gray-600 text-sm md:text-base">
                            Discover where smart investors are buying and the exact property types that work.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <a 
                        href="https://wa.me/2347066063908"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-lg md:rounded-xl text-sm md:text-base lg:text-lg hover:from-green-700 hover:to-emerald-800 transform hover:-translate-y-0.5 transition duration-300 shadow-md md:shadow-lg shadow-emerald-500/30 flex items-center justify-center"
                      >
                        <FaWhatsapp className="mr-2 md:mr-3 text-lg md:text-xl" />
                        Get Personal Investment Advice
                        <FaArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" />
                      </a>
                      
                      <Link 
                        to="#area-solutions"
                        className="group px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg md:rounded-xl text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition duration-300 shadow-md md:shadow-lg flex items-center justify-center"
                      >
                        <FaMapMarkerAlt className="mr-2 md:mr-3" />
                        View High-Return Areas
                        <FaArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>

                    {/* Slide Counter */}
                    <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-gray-300">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
                        <p className="text-xs md:text-sm text-gray-600">
                          <FaStar className="inline mr-1 md:mr-2 text-amber-500" />
                          Real Investment Truths • Actionable Insights
                        </p>
                        <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-300">
                          <span className="text-xs md:text-sm font-medium text-gray-700">
                            Insight {slide.id} of {slides.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Visual Element */}
                  <div className="relative h-[280px] md:h-[350px] lg:h-[400px] xl:h-[500px] mt-4 md:mt-0">
                    <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border-4 md:border-8 border-white/90 transform hover:scale-[1.02] transition-transform duration-700">
                      <img 
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80"
                        alt="Investment visualization"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
                      
                      {/* Floating badge */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-md text-gray-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold shadow-lg border border-gray-300 text-xs md:text-sm">
                        <span className="flex items-center">
                          <FaLightbulb className="mr-1 md:mr-2 text-amber-600" />
                          INSIGHT #{slide.id}
                        </span>
                      </div>
                      
                      {/* Image text overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg max-w-md">
                        <p className="text-gray-700 text-sm md:text-base font-medium">
                          "Location + Property Type = Your Returns"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* ===== AREA SOLUTIONS SECTION ===== */}
      <section id="area-solutions" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-700">
                High-Return Areas & What To Buy
              </span>
            </h2>
            <p className="text-gray-600 max-w-xl md:max-w-2xl mx-auto text-sm md:text-base">
              Now you know the problem. Here are the solutions: exact locations and property types for maximum returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {areaReviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-200">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={review.image} 
                    alt={review.area}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full font-bold shadow-sm border border-gray-200 text-xs md:text-sm">
                    <span className="text-emerald-600 font-bold">{review.roi} ROI</span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{review.area}</h3>
                      <p className="text-blue-600 text-sm md:text-base font-medium mt-1">HIGH-RETURN AREA</p>
                    </div>
                    <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                      <FaStar className="text-amber-500" />
                      <span className="ml-1 md:ml-2 font-bold text-gray-700 text-sm md:text-base">Verified</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">What To Buy Here:</h4>
                    <p className="text-gray-700 text-sm md:text-base bg-blue-50 p-3 rounded-lg border border-blue-100">
                      {review.solution}
                    </p>
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Why This Works:</h4>
                    <p className="text-gray-600 text-sm md:text-base">{review.whyItWorks}</p>
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Benefits:</h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {review.painSolved.map((benefit, bIdx) => (
                        <span key={bIdx} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs md:text-sm rounded-full border border-emerald-100">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Warning:</h4>
                    <p className="text-red-600 text-sm md:text-base bg-red-50 p-2 rounded-lg border border-red-100">
                      ⚠️ {review.warning}
                    </p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 md:py-3 rounded-lg font-bold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg text-sm md:text-base group">
                    <FaMapMarkerAlt className="mr-2 md:mr-3" />
                    Get {review.area} Investment Guide
                    <FaArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-blue-200 shadow-lg max-w-3xl mx-auto mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to invest in high-return properties?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Get personalized property recommendations based on your budget and investment goals.
              </p>
              <a 
                href="https://wa.me/2347066063908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl text-base md:text-lg hover:from-green-700 hover:to-emerald-800 transform hover:-translate-y-0.5 transition duration-300 shadow-lg shadow-emerald-500/30"
              >
                <FaWhatsapp className="mr-3 text-xl" />
                Get Personalized Investment Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .fact-carousel .carousel .control-dots {
          bottom: 30px;
          padding: 0 20px;
          z-index: 30;
        }
        .fact-carousel .carousel .control-dots .dot {
          width: 8px;
          height: 8px;
          margin: 0 4px;
          background: rgba(100, 100, 100, 0.3);
          box-shadow: none;
          transition: all 0.3s ease;
        }
        .fact-carousel .carousel .control-dots .dot.selected {
          background: linear-gradient(135deg, #1d4ed8, #047857);
          width: 24px;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
        }
        .fact-carousel .carousel .slide {
          background: transparent;
        }
        
        /* Hide default arrows */
        .fact-carousel .carousel .control-arrow {
          display: none;
        }
        
        /* Smooth fade in */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fact-carousel .carousel .slide {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Bounce animation for down arrow */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  )
}

export default HeroSection