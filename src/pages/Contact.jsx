const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-96">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our expert team</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <select className="w-full p-4 border border-gray-300 rounded-lg">
                <option>Select Service</option>
                <option>Property Sales</option>
                <option>Rentals</option>
                <option>Land Services</option>
                <option>Property Management</option>
              </select>
              <textarea 
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4">Visit Our Office</h3>
                <p className="text-gray-600">123 Real Estate Avenue</p>
                <p className="text-gray-600">Victoria Island, Lagos, Nigeria</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4">Call Us</h3>
                <p className="text-gray-600">+234 123 456 7890</p>
                <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4">Email Us</h3>
                <p className="text-gray-600">info@barbs-consultant.com</p>
                <p className="text-gray-600">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
