import { Link } from 'react-router-dom'
import { FaArrowRight, FaBuilding, FaChartLine, FaShieldAlt, FaMoneyBillWave, FaCity, FaHome, FaHistory, FaGhost, FaDoorOpen } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const FactCarousel = () => {
  // Updated carousel slides with shocking facts
  const slides = [
    {
      id: 1,
      title: "Shocking Fact:",
      highlightedTitle: "Real Estate = 60% of Global Wealth",
      subtitle: "Real estate accounts for over 60% of the world's total wealth, making it the largest asset class globally and the foundation of most generational fortunes.[citation:1]",
      tag: "WEALTH INSIGHT",
      tagIcon: <FaChartLine className="mr-2" />,
      tagColor: "bg-logoBlue/20 text-logoBlue border border-logoBlue/30",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Build Your Wealth",
        link: "/services/investment",
        color: "bg-logoBlue hover:bg-blue-600 text-white"
      }
    },
    {
      id: 2,
      title: "Did You Know?",
      highlightedTitle: "McDonald's is a Real Estate Giant",
      subtitle: "McDonald's was founded as a real estate company. Their business model focuses on buying land and leasing it to franchisees. Today, they're one of the world's largest real estate businesses with nearly 40,000 locations.[citation:1]",
      tag: "BUSINESS SECRET",
      tagIcon: <FaBuilding className="mr-2" />,
      tagColor: "bg-logoRed/20 text-logoRed border border-logoRed/30",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Smart Investments",
        link: "/listings",
        color: "bg-logoRed hover:bg-red-700 text-white"
      }
    },
    {
      id: 3,
      title: "Historical Fact:",
      highlightedTitle: "5,000-Year-Old Real Estate Deals",
      subtitle: "The oldest recorded real estate transaction dates back to 3,000 B.C. in Mesopotamia, where Sumerians documented land deals on clay tablets listing property details and crops.[citation:4]",
      tag: "ANCIENT HISTORY",
      tagIcon: <FaHistory className="mr-2" />,
      tagColor: "bg-amber-100 text-amber-800 border border-amber-200",
      bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "View Historic Properties",
        link: "/listings?type=luxury",
        color: "bg-amber-600 hover:bg-amber-700 text-white"
      }
    },
    {
      id: 4,
      title: "Shocking Stat:",
      highlightedTitle: "Black Doors Add $6,271 in Value",
      subtitle: "Homes with dark charcoal or black front doors sell for $6,271 more than expected on average, according to Zillow research on pricing psychology and curb appeal.[citation:1]",
      tag: "VALUE HACK",
      tagIcon: <FaDoorOpen className="mr-2" />,
      tagColor: "bg-gray-800 text-white border border-gray-700",
      bgImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Maximize Your Value",
        link: "/services/selling",
        color: "bg-gray-800 hover:bg-gray-900 text-white"
      }
    },
    {
      id: 5,
      title: "Cultural Insight:",
      highlightedTitle: "Red Doors = Mortgage Freedom",
      subtitle: "In Scotland, homeowners traditionally paint their front door red after paying off their mortgage completely—a public celebration of becoming debt-free homeowners.[citation:1]",
      tag: "GLOBAL TRADITION",
      tagIcon: <FaHome className="mr-2" />,
      tagColor: "bg-logoRed/20 text-logoRed border border-logoRed/30",
      bgImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Financial Freedom",
        link: "/services/mortgage",
        color: "bg-logoRed hover:bg-red-700 text-white"
      }
    },
    {
      id: 6,
      title: "Spooky Statistic:",
      highlightedTitle: "1 in 10 Americans Fled Ghosts",
      subtitle: "According to Zillow, 10% of Americans have been scared out of their homes by paranormal activity, with young homeowners and women most likely to report supernatural experiences.[citation:1]",
      tag: "PARANORMAL",
      tagIcon: <FaGhost className="mr-2" />,
      tagColor: "bg-purple-100 text-purple-800 border border-purple-200",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Verified Listings Only",
        link: "/listings",
        color: "bg-purple-600 hover:bg-purple-700 text-white"
      }
    },
    {
      id: 7,
      title: "Smart Tech Fact:",
      highlightedTitle: "70% Pay More for Smart Homes",
      subtitle: "Over 70% of modern buyers would pay more for homes equipped with smart devices, valuing convenience and potential savings on utilities and security.[citation:1]",
      tag: "TECH TREND",
      tagIcon: <FaShieldAlt className="mr-2" />,
      tagColor: "bg-blue-100 text-blue-800 border border-blue-200",
      bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1558002038-1055897-9d5c5b09e70a?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Smart Properties",
        link: "/listings?feature=smart",
        color: "bg-blue-600 hover:bg-blue-700 text-white"
      }
    },
    {
      id: 8,
      title: "Market Reality:",
      highlightedTitle: "Single Women Outbuy Men 2:1",
      subtitle: "Single women make up 21% of homebuyers while single men account for just 9%. Women are more likely to buy in urban areas with better employment access.[citation:1][citation:4]",
      tag: "DEMOGRAPHIC SHIFT",
      tagIcon: <FaChartLine className="mr-2" />,
      tagColor: "bg-pink-100 text-pink-800 border border-pink-200",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "First-Time Buyer Guide",
        link: "/buyers/first-time",
        color: "bg-pink-600 hover:bg-pink-700 text-white"
      }
    },
    {
      id: 9,
      title: "Ancient Wisdom:",
      highlightedTitle: "Brust Doorknobs Disinfect Themselves",
      subtitle: "Brass doorknobs naturally kill bacteria, mold, and viruses through the oligodynamic effect—completely disinfecting themselves within 8 hours of contact.[citation:1]",
      tag: "HEALTH FACT",
      tagIcon: <FaDoorOpen className="mr-2" />,
      tagColor: "bg-amber-100 text-amber-800 border border-amber-200",
      bgImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Healthy Homes",
        link: "/listings?feature=healthy",
        color: "bg-amber-600 hover:bg-amber-700 text-white"
      }
    },
    {
      id: 10,
      title: "Financial Fact:",
      highlightedTitle: "71% Delay Life to Save for Homes",
      subtitle: "71% of future homeowners postpone major life events—marriage, children, career changes—just to save for down payments, with 84% of Gen Z putting life on hold.[citation:4]",
      tag: "MODERN REALITY",
      tagIcon: <FaMoneyBillWave className="mr-2" />,
      tagColor: "bg-emerald-100 text-emerald-800 border border-emerald-200",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80",
      propertyImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&auto=format&fit=crop&q=80",
      gradient: "bg-gradient-to-r from-white/95 via-white/50 to-transparent",
      textColor: "text-gray-800",
      ctaPrimary: {
        text: "Saving Strategies",
        link: "/resources/saving",
        color: "bg-emerald-600 hover:bg-emerald-700 text-white"
      }
    }
  ]

  return (
    <section className="relative overflow-hidden bg-white">
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
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button
            onClick={clickHandler}
            className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-300 shadow-lg"
            aria-label="Previous fact"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <button
            onClick={clickHandler}
            className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-300 shadow-lg"
            aria-label="Next fact"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[550px] min-h-[500px] bg-white">
            {/* White Background with Subtle Texture */}
            <div className="absolute inset-0 z-0 bg-white">
              <div className={`absolute inset-0 ${slide.gradient}`}></div>
              {/* Optional: Very subtle pattern for visual interest */}
              <div className="absolute inset-0 opacity-[0.02] bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60')] bg-cover"></div>
            </div>

            {/* Content */}
            <div className="container-custom h-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-8 lg:py-0">
                {/* Left Side - Text Content (Left Aligned) */}
                <div className={`${slide.textColor} text-left`}>
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-4 py-2 ${slide.tagColor} rounded-full text-sm font-bold mb-6 shadow-sm`}>
                      {slide.tagIcon} {slide.tag}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      {slide.title}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-logoRed to-logoBlue">
                        {slide.highlightedTitle}
                      </span>
                    </h1>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                    {slide.subtitle}
                  </p>
                  
                  {/* Single CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to={slide.ctaPrimary.link}
                      className={`group px-6 py-3 ${slide.ctaPrimary.color} font-bold rounded-lg text-base transform hover:-translate-y-0.5 transition duration-300 shadow-md flex items-center justify-center max-w-[200px]`}
                    >
                      {slide.ctaPrimary.text}
                      <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                  {/* Fact Source Note */}
                  <div className="mt-10 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Source: Verified industry research and market data
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Property Image */}
                <div className="relative h-[300px] lg:h-[400px]">
                  <div className="relative h-full rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                    <img 
                      src={slide.propertyImage} 
                      alt="Fact illustration"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                    
                    {/* Image Credit Badge */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                      <div className="text-xs text-gray-600">Fact Visualized</div>
                    </div>
                  </div>
                  
                  {/* Slide Counter */}
                  <div className="absolute -bottom-8 left-0 text-sm text-gray-500">
                    Fact {slide.id} of {slides.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom CSS for carousel indicators */}
      <style jsx>{`
        .fact-carousel .carousel .control-dots {
          bottom: 20px;
          padding: 0 20px;
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
          background: #E61E23; /* logoRed */
          width: 24px;
          border-radius: 4px;
        }
        .fact-carousel .carousel .slide {
          background: white;
        }
      `}</style>
    </section>
  )
}

export default FactCarousel