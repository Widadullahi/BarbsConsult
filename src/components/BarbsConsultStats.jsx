import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { 
  FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt, 
  FaUsers, FaHome, FaStar, FaWhatsapp, FaClock, FaBuilding,
  FaArrowRight, FaGlobe, FaCheck
} from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const BarbsConsultStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Company Configuration
  const COMPANY = {
    name: "BARBSCONSULT",
    phone: "+234 7066063908",
    email: "babajidepelumi124@gmail.com",
    instagram: "barbsconsult",
    address: "No3, Adebiyi Street, onike, Lagos",
    coordinates: [6.5145, 3.3887],
    whatsapp: "2347066063908",
    hours: "Mon - Fri: 9AM - 6PM, Sat: 10AM - 4PM",
  };

  // Stats for count-up animation
  const STATS = [
    { id: 1, value: 287, suffix: '+', label: 'Properties Sold', icon: <FaHome />, color: 'from-blue-500 to-blue-600' },
    { id: 2, value: 523, suffix: '+', label: 'Happy Clients', icon: <FaUsers />, color: 'from-green-500 to-green-600' },
    { id: 3, value: 98.5, suffix: '%', label: 'Satisfaction Rate', icon: <FaStar />, color: 'from-yellow-500 to-yellow-600' },
    { id: 4, value: 156, suffix: '+', label: 'Active Listings', icon: <FaBuilding />, color: 'from-purple-500 to-purple-600' },
  ];

  // Auto-detect visibility for count-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Action handlers
  const handleCall = () => window.open(`tel:${COMPANY.phone}`, '_blank');
  const handleEmail = () => window.open(`mailto:${COMPANY.email}`, '_blank');
  const handleWhatsApp = () => window.open(`https://wa.me/${COMPANY.whatsapp}`, '_blank');
  const handleInstagram = () => window.open(`https://instagram.com/${COMPANY.instagram}`, '_blank');
  const handleDirections = () => window.open(`https://maps.google.com/?q=${COMPANY.address}`, '_blank');

  // Custom marker icon
  const customIcon = L.divIcon({
    html: `<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
             <i class="fas fa-map-marker-alt text-lg"></i>
           </div>`,
    className: 'custom-marker',
    iconSize: [48, 48],
    iconAnchor: [24, 48]
  });

  return (
    <div>
      {/* Stats Count-Up Section */}
      <div ref={statsRef} className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto`}>
                <span className="text-white text-lg">{stat.icon}</span>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                  {isVisible ? (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                      separator=","
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaBuilding className="mr-3 text-blue-600" />
              Contact BARBSCONSULT
            </h3>
            
            <div className="space-y-4">
              {/* Phone */}
              <button 
                onClick={handleCall}
                className="w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex items-center group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                  <FaPhone className="text-blue-600" />
                </div>
                <div className="ml-4 text-left flex-1">
                  <div className="font-medium text-gray-800">Call Us</div>
                  <div className="text-blue-600 font-semibold">{COMPANY.phone}</div>
                </div>
                <FaArrowRight className="text-gray-400 group-hover:text-blue-600 ml-2" />
              </button>

              {/* WhatsApp */}
              <button 
                onClick={handleWhatsApp}
                className="w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex items-center group"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition">
                  <FaWhatsapp className="text-green-600" />
                </div>
                <div className="ml-4 text-left flex-1">
                  <div className="font-medium text-gray-800">WhatsApp</div>
                  <div className="text-green-600 font-semibold">Chat Now</div>
                </div>
                <FaArrowRight className="text-gray-400 group-hover:text-green-600 ml-2" />
              </button>

              {/* Email */}
              <button 
                onClick={handleEmail}
                className="w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex items-center group"
              >
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition">
                  <FaEnvelope className="text-red-600" />
                </div>
                <div className="ml-4 text-left flex-1">
                  <div className="font-medium text-gray-800">Email</div>
                  <div className="text-red-600 font-semibold truncate">{COMPANY.email}</div>
                </div>
                <FaArrowRight className="text-gray-400 group-hover:text-red-600 ml-2" />
              </button>

              {/* Instagram */}
              <button 
                onClick={handleInstagram}
                className="w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex items-center group"
              >
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition">
                  <FaInstagram className="text-pink-600" />
                </div>
                <div className="ml-4 text-left flex-1">
                  <div className="font-medium text-gray-800">Instagram</div>
                  <div className="text-pink-600 font-semibold">@{COMPANY.instagram}</div>
                </div>
                <FaArrowRight className="text-gray-400 group-hover:text-pink-600 ml-2" />
              </button>

              {/* Address */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <div className="font-medium text-gray-800">Office Address</div>
                    <div className="text-gray-600 mt-1">{COMPANY.address}</div>
                    <div className="text-gray-500 text-sm mt-2 flex items-center">
                      <FaClock className="mr-2" />
                      {COMPANY.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-4">Quick Inquiry</h4>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea 
                placeholder="Your Message" 
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <button 
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaGlobe className="mr-3 text-blue-600" />
            Visit Our Office
          </h3>
          
          <div className="h-[400px] rounded-xl overflow-hidden mb-6 border-2 border-gray-200">
            <MapContainer
              center={COMPANY.coordinates}
              zoom={16}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={COMPANY.coordinates} icon={customIcon}>
                <Popup>
                  <div className="p-2">
                    <h4 className="font-bold text-lg">{COMPANY.name}</h4>
                    <p className="text-gray-600 text-sm">{COMPANY.address}</p>
                    <button 
                      onClick={handleDirections}
                      className="mt-2 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    >
                      Get Directions
                    </button>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <button
            onClick={handleDirections}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-600 transition flex items-center justify-center"
          >
            <FaMapMarkerAlt className="mr-3" />
            Get Directions on Google Maps
          </button>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h5 className="font-bold mb-2">How to get here:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-start">
                <FaCheck className="text-green-500 mr-2 mt-1" />
                From UNILAG main gate, turn onto Adebiyi Street
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mr-2 mt-1" />
                We're on the left side, 3rd building after the pharmacy
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mr-2 mt-1" />
                Parking available in front of the building
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarbsConsultStats;