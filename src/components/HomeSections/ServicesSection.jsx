const ServicesSection = ({ data }) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Property Sales", desc: "Buying & selling assistance" },
            { title: "Rentals", desc: "Property rental management" },
            { title: "Property Management", desc: "Full-service management" },
            { title: "Real Estate Consulting", desc: "Expert advice & guidance" }
          ].map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">í¿ </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
