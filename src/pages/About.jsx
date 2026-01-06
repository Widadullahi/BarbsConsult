const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-96">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">15+ years of real estate excellence</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Barbs-Consultant was founded in 2009 with a vision to transform the real estate industry in Nigeria.
            </p>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience, we have helped hundreds of clients find their dream properties, manage their investments, and navigate the complex real estate market.
            </p>
            <p className="text-gray-600">
              Our team of certified professionals brings expertise, integrity, and personalized service to every transaction.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60"
              alt="Our Team"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
