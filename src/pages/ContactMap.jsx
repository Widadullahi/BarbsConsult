// ContactMap.jsx
import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaClock, FaUsers, FaHome, FaStar } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ContactMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Company information
  const companyInfo = {
    name: "BARBSCONSULT",
    phone: "+234 7066063908",
    email: "babajidepelumi124@gmail.com",
    instagram: "barbsconsult",
    address: "No3, Adebiyi Street, onike, Lagos",
    coordinates: [6.5145, 3.3887], // Approximate coordinates for Onike, Lagos
  };

  // Stats for count-up animation
  const stats = [
    { id: 1, value: 250, suffix: '+', label: 'Properties Sold', icon: <FaHome /> },
    { id: 2, value: 500, suffix: '+', label: 'Happy Clients', icon: <FaUsers /> },
    { id: 3, value: 98, suffix: '%', label: 'Satisfaction Rate', icon: <FaStar /> },
    { id: 4, value: 50, suffix: '+', label: 'Projects Completed', icon: <FaClock /> },
  ];

  // Intersection Observer for count-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const handleCall = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${companyInfo.email}`;
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${companyInfo.instagram}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        {/* Stats Count-Up Section */}
        <div ref={statsRef} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Years of excellence in real estate consulting and property management
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {isVisible ? (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get in Touch with BARBSCONSULT
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                    <p className="text-gray-600 text-lg">{companyInfo.phone}</p>
                    <button
                      onClick={handleCall}
                      className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Email Address</h3>
                    <p className="text-gray-600 text-lg">{companyInfo.email}</p>
                    <button
                      onClick={handleEmail}
                      className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Send Email
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaInstagram className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Instagram</h3>
                    <p className="text-gray-600 text-lg">@{companyInfo.instagram}</p>
                    <button
                      onClick={handleInstagram}
                      className="mt-3 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition duration-300"
                    >
                      Follow Us
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Office Address</h3>
                    <p className="text-gray-600 text-lg">{companyInfo.address}</p>
                    <p className="text-gray-500 mt-2">Open Hours: Mon - Fri, 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Find Our Office</h3>
              <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
                <MapContainer
                  center={companyInfo.coordinates}
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={companyInfo.coordinates} icon={customIcon}>
                    <Popup>
                      <div className="p-2">
                        <h4 className="font-bold text-lg">{companyInfo.name}</h4>
                        <p className="text-gray-600">{companyInfo.address}</p>
                        <p className="text-gray-500 mt-2">Click for directions</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold mb-2">Directions:</h4>
                <p className="text-gray-600">
                  We are located at No3, Adebiyi Street in Onike, Lagos. 
                  The office is easily accessible from the University of Lagos 
                  main gate and is situated near commercial and educational institutions.
                </p>
                <button
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${companyInfo.address}`, '_blank')}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-600 transition duration-300 w-full"
                >
                  Get Directions on Google Maps
                </button>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;