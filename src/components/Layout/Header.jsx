import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaBuilding,
  FaKey,
  FaSignInAlt,
} from 'react-icons/fa'
import logo from '../images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Property Types (Public) ────────────────────────────────────────
  const propertyTypes = [
    {
      name: 'Buy',
      icon: <FaKey className="inline mr-1" />,
      dropdown: [
        { name: 'Residential Houses', path: '/listings?type=residential-sale' },
        { name: 'Lands', path: '/listings?type=land-sale' },
        { name: 'Apartments', path: '/listings?type=apartments-sale' },
        { name: 'Duplexes', path: '/listings?type=duplexes-sale' },
        {
          name: 'Commercial',
          children: [
            { name: 'Commercial Properties', path: '/listings?type=commercial-sale' },
            { name: 'Office Buildings', path: '/listings?type=office-buildings' },
            { name: 'Retail Spaces', path: '/listings?type=retail-spaces' },
            { name: 'Warehouses', path: '/listings?type=warehouses' },
            { name: 'Industrial Properties', path: '/listings?type=industrial' },
            { name: 'Mixed-Use Developments', path: '/listings?type=mixed-use' },
          ],
        },
      ],
    },
    {
      name: 'Rent',
      icon: <FaHome className="inline mr-1" />,
      dropdown: [
        { name: 'Long Term Lease (1+ years)', path: '/listings?type=long-lease' },
        { name: 'Apartments for Rent', path: '/listings?type=apartments-rent' },
        { name: 'Houses for Rent', path: '/listings?type=houses-rent' },
        {
          name: 'Commercial',
          children: [
            { name: 'Office Spaces', path: '/listings?type=office-rent' },
            { name: 'Commercial Rentals', path: '/listings?type=commercial-rent' },
          ],
        },
      ],
    },
    {
      name: 'Shortlet',
      icon: <FaBuilding className="inline mr-1" />,
      dropdown: [
        { name: 'Daily Apartments', path: '/listings?type=daily-apartments' },
        { name: 'Weekly Rentals', path: '/listings?type=weekly-rentals' },
        { name: 'Monthly Shortlets', path: '/listings?type=monthly-shortlets' },
        { name: 'Vacation Homes', path: '/listings?type=vacation-homes' },
        { name: 'Serviced Apartments', path: '/listings?type=serviced-apartments' },
      ],
    },
  ]

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* TOP BAR - Contact + Admin Login only */}
      <div className="hidden md:block bg-gray-900 text-white py-2">
        <div className="container-custom px-6 flex justify-between text-sm">
          <div className="flex gap-6">
            <a href="tel:+2341234567890">
              <FaPhone className="inline mr-2" />+234 706 6063 908
            </a>
            <a href="mailto:info@barbs-consultant.com">
              <FaEnvelope className="inline mr-2" />babajidepelumi124@gmail.com
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="https://wa.me/2347066063908"
              className="bg-green-600 px-3 py-1 rounded-full hover:bg-green-700 transition"
            >
              <FaWhatsapp className="inline mr-2" /> WhatsApp
            </a>

            {/* Always show Admin Login */}
            <Link
              to="/admin/login"
              className="flex items-center gap-2 px-3 py-1 bg-purple-600 rounded-full hover:bg-purple-700 transition"
            >
              <FaSignInAlt />
              <span>Admin Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className={`sticky top-0 z-50 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <nav className="container-custom px-6 py-4">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} width={50} alt="Barbs Consult Logo" />
              <span className="font-bold text-xl text-blue-600">
                Barbs<span className="text-gray-900">Consult</span>
              </span>
            </Link>

            {/* DESKTOP NAV - Public items only */}
            <div className="hidden lg:flex gap-6 items-center">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === item.path ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {propertyTypes.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      setActiveSubDropdown(null)
                    }}
                    className="px-4 py-2 flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    {item.icon}
                    {item.name}
                    <FaChevronDown className="text-sm" />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-72 bg-white border rounded-xl shadow-xl z-50">
                      {item.dropdown.map((sub) =>
                        sub.children ? (
                          <div key={sub.name}>
                            <button
                              onClick={() =>
                                setActiveSubDropdown(
                                  activeSubDropdown === sub.name ? null : sub.name
                                )
                              }
                              className="w-full flex justify-between px-4 py-3 hover:bg-blue-50 font-semibold"
                            >
                              {sub.name}
                              <FaChevronDown
                                className={`transition-transform duration-200 ${
                                  activeSubDropdown === sub.name ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {activeSubDropdown === sub.name && (
                              <div className="pl-6 pb-2 bg-gray-50">
                                {sub.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    to={child.path}
                                    onClick={() => {
                                      setActiveDropdown(null)
                                      setActiveSubDropdown(null)
                                    }}
                                    className="block py-2 text-sm hover:text-blue-600"
                                  >
                                    • {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-3 hover:bg-blue-50"
                          >
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button className="lg:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container-custom px-6 py-5">
              {/* Property Types */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Properties</h3>
                <div className="space-y-2">
                  {propertyTypes.map((item) => (
                    <div key={item.name} className="border rounded-lg overflow-hidden">
                      <button
                        onClick={() => {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                          setActiveSubDropdown(null)
                        }}
                        className="w-full flex items-center justify-between p-3 bg-gray-50"
                      >
                        <span className="flex items-center gap-2">
                          {item.icon}
                          {item.name}
                        </span>
                        <FaChevronDown
                          className={`transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="px-4 pb-3 pt-1">
                          {item.dropdown.map((sub) =>
                            sub.children ? (
                              <div key={sub.name} className="mt-2">
                                <button
                                  onClick={() =>
                                    setActiveSubDropdown(
                                      activeSubDropdown === sub.name ? null : sub.name
                                    )
                                  }
                                  className="w-full flex justify-between items-center py-2 font-medium"
                                >
                                  {sub.name}
                                  <FaChevronDown
                                    className={`transition-transform ${
                                      activeSubDropdown === sub.name ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>

                                {activeSubDropdown === sub.name && (
                                  <div className="pl-4 mt-1 space-y-1">
                                    {sub.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        to={child.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-1.5 text-gray-700 hover:text-blue-600"
                                      >
                                        • {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-gray-700 hover:text-blue-600"
                              >
                                • {sub.name}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Navigation */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Menu</h3>
                <div className="space-y-2">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 ${
                        location.pathname === item.path
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Admin Login + Consultation */}
              <div className="pt-4 border-t space-y-3">
                <Link
                  to="/admin/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition"
                >
                  <FaSignInAlt />
                  Admin Login
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header