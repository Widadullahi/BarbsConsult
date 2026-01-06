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
} from 'react-icons/fa'

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

  /* ======================
     PROPERTY STRUCTURE
  ====================== */

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
      {/* TOP BAR */}
      <div className="hidden md:block bg-gray-900 text-white py-2">
        <div className="container-custom px-6 flex justify-between text-sm">
          <div className="flex gap-6">
            <a href="tel:+2341234567890"><FaPhone className="inline mr-2" />+234 123 456 7890</a>
            <a href="mailto:info@barbs-consultant.com"><FaEnvelope className="inline mr-2" />info@barbs-consultant.com</a>
          </div>
          <a href="https://wa.me/2341234567890" className="bg-green-600 px-3 py-1 rounded-full">
            <FaWhatsapp className="inline mr-2" /> WhatsApp
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <nav className="container-custom px-6 py-4">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src="logo.png" width={50} alt="Logo" />
              <span className="font-bold text-xl text-blue-600">
                Barbs<span className="text-gray-900">Consult</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex gap-2">
              {propertyTypes.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      setActiveSubDropdown(null)
                    }}
                    className="px-4 py-2 flex items-center gap-1 hover:text-blue-600"
                  >
                    {item.icon}
                    {item.name}
                    <FaChevronDown />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-72 bg-white border rounded-xl shadow-xl">
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
                                className={`transition ${
                                  activeSubDropdown === sub.name ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {activeSubDropdown === sub.name && (
                              <div className="pl-6 pb-2">
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

            {/* RIGHT NAV */}
            <div className="hidden lg:flex gap-6 items-center">
              {mainNavItems.map((item) => (
                <Link key={item.name} to={item.path} className="hover:text-blue-600">
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
              >
                Book Consultation
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
