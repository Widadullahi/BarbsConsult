import { Link } from 'react-router-dom'
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Property Journey?
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Contact us today for a free consultation and personalized service from our expert team.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to="/contact" 
            className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300 shadow-2xl flex items-center justify-center"
          >
            <FaPhone className="mr-3" />
            Book Free Consultation
          </Link>
          
          <Link 
            to="/contact" 
            className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10 transform hover:-translate-y-1 transition duration-300 flex items-center justify-center"
          >
            <FaWhatsapp className="mr-3" />
            Chat on WhatsApp
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <FaPhone className="text-white text-2xl mb-4 mx-auto" />
            <h4 className="font-bold text-white mb-2">Call Us</h4>
            <p className="text-white/90">+234 123 456 7890</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <FaEnvelope className="text-white text-2xl mb-4 mx-auto" />
            <h4 className="font-bold text-white mb-2">Email Us</h4>
            <p className="text-white/90">info@barbs-consultant.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <FaWhatsapp className="text-white text-2xl mb-4 mx-auto" />
            <h4 className="font-bold text-white mb-2">WhatsApp</h4>
            <p className="text-white/90">Chat with our agents</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
