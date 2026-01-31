import { FaLinkedin, FaTwitter, FaInstagram, FaCheckCircle } from 'react-icons/fa';
import ceo from './images/ceo.jpeg'
const About = () => {
  const teamMembers = [
    {
      name: "Babajide Pelumi",
      role: "Founder & CEO",
      bio: "15+ years in real estate development and investment. MBA from Lagos Business School.",
      image: ceo,
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Human Being",
      role: "Head of Sales",
      bio: "Expert in property valuation and client relations. 10+ years experience.",
      image: "#",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Human Being",
      role: "Property Manager",
      bio: "Specializes in commercial real estate and portfolio management.",
      image: "#",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Human Being",
      role: "Legal Consultant",
      bio: "Real estate law specialist. 8+ years in property legal services.",
      image: "#",
      social: {
        linkedin: "#"
      }
    }
  ];

 

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
    <div
      className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1735551772787-9ad24a3133e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGUlMjBhYm91dHxlbnwwfHwwfHx8MA%3D%3D')" }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Partner in Every Real Estate Journey</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
         At Barbs Consult, we provide expert real estate guidance, helping clients buy, sell, rent, and invest.
        </p>
      </div>
    </div>


      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story & Vision</h2>
          <p className="text-gray-600 text-lg mb-6">
            
<span className="font-bold text-gray-900">Our company was founded with one clear vision:</span> To make property ownership and investment simple, secure, and rewarding for everyone.
What started as a small idea has grown into a trusted real estate and property management brand, driven by integrity, transparency, and a commitment to excellent service. 
</p>
          <p className="text-gray-600">
           We believe that every client deserves not just a property, but peace of mind.
Today, we help individuals and investors find quality homes, manage valuable assets, and build long-term wealth through smart real estate solutions.
Our journey continues with one goal ; to create lasting value for our clients and the communities we serve.
          </p>
        </div>

        {/* Meet Our CEO */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src={ceo}
                  alt="Babajide Pelumi - CEO"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Founder & CEO
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Babajide Pelumi</h3>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in real estate development and investment, 
                John founded Barbs Consult to address the gap in professional real estate 
                services in Nigeria. His vision has guided our growth from a startup to a 
                market leader.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  <FaCheckCircle /> MBA - Lagos Business School
                </span>
                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  <FaCheckCircle /> 15+ Years Experience
                </span>
                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  <FaCheckCircle /> Certified Real Estate Consultant
                </span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity First</h3>
              <p className="text-gray-600">
                We build trust through transparent transactions and honest advice.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Leveraging deep market knowledge for optimal investment decisions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Partnership</h3>
              <p className="text-gray-600">
                We work alongside you, ensuring your real estate goals become reality.
              </p>
            </div>
          </div>
        </div>

        {/* Meet The Team */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in real estate, 
            finance, and property law.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-50"
                  />
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-center font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                        <FaLinkedin size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
                        <FaTwitter size={18} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-gray-400 hover:text-pink-600">
                        <FaInstagram size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;