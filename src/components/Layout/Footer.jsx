// src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand / About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Barbs<span className="text-blue-500">Consult</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              A professional real estate investment & property management company
              delivering trusted property solutions across Nigeria.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition">Blog</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>Buy Properties</li>
              <li>Rent Properties</li>
              <li>Shortlet Apartments</li>
              <li>Commercial Properties</li>
              <li>Property Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>Lagos, Nigeria</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <a
                  href="tel:+2341234567890"
                  className="hover:text-blue-500 transition"
                >
                  +234 706 6063 908
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <a
                  href="mailto:babajidepelumi124@gmail.com"
                  className="hover:text-blue-500 transition"
                >
                  babajidepelumi124@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} BarbsConsult. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Trusted • Professional • Results-Driven
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
