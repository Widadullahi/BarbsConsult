import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExclamationTriangle,
  FaChartLine,
  FaShieldAlt,
  FaSearch,
  FaWhatsapp,
  FaHandPointDown,
  FaClock,
  FaTools,
  FaUserCheck,
  FaHandshake,
  FaBuilding
} from "react-icons/fa";

/* ================= THEME COLORS ================= */
const themeColors = ["#1C78C0", "#E44C30", "#F2C94C"];

/* ================= UPDATED SLIDES DATA ================= */
const slides = [
  {
    title: "Why do many properties fail to meet investors' expected returns?",
    highlightedTitle: "It's ineffective property management.",
    subtitle: "Many properties underperform because they are not properly managed. Unlock true ROI by taking control today.",
    tag: "MANAGEMENT REALITY",
    tagIcon: FaExclamationTriangle,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767647587/1_ckoo75.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767647587/1_ckoo75.mp4"
    },
    ctaText: "Fix Your Property Management",
    stat: "65% of properties underperform due to mismanagement"
  },
  {
    title: "Your property shouldn't stress you or drain your income.",
    highlightedTitle: "Returns fall short when mismanaged or poorly purchased.",
    subtitle: "Stress-free ownership starts with proper management and strategic buying.",
    tag: "STRESS-FREE OWNERSHIP",
    tagIcon: FaExclamationTriangle,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767647605/2_w8n5bz.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767647605/2_w8n5bz.mp4"
    },
    ctaText: "Get Proper Management",
    stat: "Over 40% of investors report losses in the first year"
  },
  {
    title: "The best deals go to buyers with the right guidance and market insight.",
    highlightedTitle: "Invest smartly with verified properties.",
    subtitle: "We help you buy quality homes in prime locations, at fair and competitive prices—without stress or hidden issues.",
    tag: "SMART BUYING",
    tagIcon: FaSearch,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767647593/3_yjttoa.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767647593/3_yjttoa.mp4"
    },
    ctaText: "Get Buying Guidance",
    stat: "90% of top deals go to well-informed buyers"
  },
  {
    title: "Cash flow problems don't start with rent prices.",
    highlightedTitle: "They start with poor operational control.",
    subtitle: "Optimized rent collection, expense tracking, and budgeting protect your monthly returns.",
    tag: "CASH FLOW CONTROL",
    tagIcon: FaChartLine,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767647590/4_elhd4t.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767647590/4_elhd4t.mp4"
    },
    ctaText: "Improve Cash Flow",
    stat: "Up to 25% of rental income is lost to inefficiencies"
  },
  {
    title: "Vacant properties silently destroy profits.",
    highlightedTitle: "Every empty month costs more than you think.",
    subtitle: "Smart tenant placement and fast turnarounds keep your property earning.",
    tag: "VACANCY REDUCTION",
    tagIcon: FaClock,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767711324/5_ez1ldv.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767711324/5_ez1ldv.mp4"
    },
    ctaText: "Reduce Vacancy",
    stat: "1 vacant month can wipe out 10–15% of annual profit"
  },
  {
    title: "Maintenance issues don't have to spiral into major expenses.",
    highlightedTitle: "Proactive care saves thousands long-term.",
    subtitle: "Preventive maintenance protects property value and tenant satisfaction.",
    tag: "PROPERTY CARE",
    tagIcon: FaTools,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767711344/6_kwtss1.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767711344/6_kwtss1.mp4"
    },
    ctaText: "Protect Your Asset",
    stat: "Preventive maintenance cuts repair costs by up to 30%"
  },
  {
    title: "Great tenants make or break your investment.",
    highlightedTitle: "Tenant quality matters more than rent price.",
    subtitle: "Proper screening reduces defaults, damage, and turnover.",
    tag: "QUALITY TENANTS",
    tagIcon: FaUserCheck,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767647563/7_pflqkt.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767647563/7_pflqkt.mp4"
    },
    ctaText: "Get Better Tenants",
    stat: "Good tenants stay 2x longer on average"
  },
  {
    title: "Compliance mistakes can cost more than repairs.",
    highlightedTitle: "Legal issues destroy profits fast.",
    subtitle: "Stay compliant with local laws, safety standards, and lease regulations.",
    tag: "RISK PROTECTION",
    tagIcon: FaShieldAlt,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767647551/8_w2dam3.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767647551/8_w2dam3.mp4"
    },
    ctaText: "Protect Your Investment",
    stat: "Non-compliance fines can exceed annual rental income"
  },
  {
    title: "You shouldn't be guessing what's happening with your property.",
    highlightedTitle: "Transparency builds trust and confidence.",
    subtitle: "Clear reporting, real-time updates, and full visibility at all times.",
    tag: "FULL TRANSPARENCY",
    tagIcon: FaHandshake,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767647592/9_psxntl.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767647592/9_psxntl.mp4"
    },
    ctaText: "Get Full Visibility",
    stat: "Transparent reporting improves investor confidence by 70%"
  },
  {
    title: "Property investment is a long-term game.",
    highlightedTitle: "Growth comes from strategy, not luck.",
    subtitle: "We help you scale your portfolio sustainably and profitably.",
    tag: "LONG-TERM GROWTH",
    tagIcon: FaBuilding,
    video: {
      desktop: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_1280,br_600k/v1767711329/10_fxbvc3.mp4",
      mobile: "https://res.cloudinary.com/df6vzxhv8/video/upload/f_auto,q_auto,w_640,br_250k/v1767711329/10_fxbvc3.mp4"
    },
    ctaText: "Plan for Growth",
    stat: "Strategic investors outperform the market by 2–3x"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [autoPlayFailed, setAutoPlayFailed] = useState(false);
  const videoRefs = useRef([]);

  const themeColor = themeColors[current % themeColors.length];
  const slide = slides[current];
  const TagIcon = slide.tagIcon;

  /* ================= RESPONSIVE DETECTION ================= */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ================= AUTO CHANGE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSlide(current);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  /* ================= VIDEO CONTROL ================= */
  useEffect(() => {
    // Reset auto-play failed state when slide changes
    setAutoPlayFailed(false);
    
    if (videoRefs.current[current]) {
      videoRefs.current[current].currentTime = 0;
      const playPromise = videoRefs.current[current].play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented
          console.log("Auto-play prevented:", error);
          setAutoPlayFailed(true);
        });
      }
    }
    
    // Pause previous slide video
    if (previousSlide >= 0 && videoRefs.current[previousSlide]) {
      videoRefs.current[previousSlide].pause();
    }
  }, [current, previousSlide]);

  /* ================= EVENT HANDLERS ================= */
  const handleIndicatorClick = useCallback((index) => {
    setPreviousSlide(current);
    setCurrent(index);
  }, [current]);

  const handlePlayClick = () => {
    if (videoRefs.current[current]) {
      videoRefs.current[current].play()
        .then(() => {
          setAutoPlayFailed(false);
        })
        .catch(() => {
          console.error("Failed to play video");
        });
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* SINGLE ACTIVE VIDEO */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={`video-container-${current}`}
      >
        <video
          ref={(el) => {
            videoRefs.current[current] = el;
          }}
          muted
          loop={!isMobile}
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={isMobile ? slide.video.mobile : slide.video.desktop}
          autoPlay
          onError={(e) => {
            console.error(`Failed to load video for slide ${current}:`, e);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </motion.div>

      {/* PLAY BUTTON ONLY IF AUTO-PLAY FAILED */}
      {autoPlayFailed && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="rounded-full bg-white/20 p-4 backdrop-blur-md hover:bg-white/30 transition-colors"
            aria-label="Play video"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-white" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-20 flex h-full items-center px-6 md:px-20">
        <div className="max-w-xl text-white">
          {/* TAG */}
          <div className="mb-4 inline-flex items-center rounded-full bg-black/40 px-4 py-2 text-xs font-semibold backdrop-blur">
            <TagIcon className="mr-2" style={{ color: themeColor }} />
            {slide.tag}
          </div>

          {/* HEADLINE */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={slide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl font-extrabold leading-snug"
              role="heading"
              aria-level="1"
            >
              {slide.title}
              <br />
              <span style={{ color: themeColor }}>{slide.highlightedTitle}</span>
            </motion.h1>
          </AnimatePresence>

          {/* STAT */}
          <div
            className="mt-4 text-sm md:text-base max-w-md bg-black/30 px-3 py-2 rounded"
            style={{ color: themeColor }}
          >
            {slide.stat}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/2347066063908"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold transition-colors hover:opacity-90"
            style={{ backgroundColor: themeColor }}
          >
            <FaWhatsapp className="mr-2" />
            {slide.ctaText}
          </a>

          {/* SCROLL */}
          <div className="mt-6 flex items-center text-xs">
            <FaHandPointDown
              className="mr-2 animate-bounce"
              style={{ color: themeColor }}
            />
            Scroll to learn how to maximize property returns
          </div>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{
              width: i === current ? "24px" : "8px",
              backgroundColor: i === current ? themeColor : "rgba(255,255,255,0.5)"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;