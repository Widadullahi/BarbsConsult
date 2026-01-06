const Testimonials = ({ data }) => {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "John Adekunle", role: "Property Investor", comment: "Excellent service!" },
            { name: "Sarah Johnson", role: "Home Buyer", comment: "Found my dream home!" },
            { name: "Michael Chen", role: "Property Owner", comment: "Highly recommend!" }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
