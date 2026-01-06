import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    { name: "John Adekunle", role: "Property Investor", image: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, text: "Barbs-Consultant helped me find the perfect commercial property. Their professionalism is unmatched!" },
    { name: "Sarah Johnson", role: "Home Buyer", image: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, text: "As a first-time buyer, their guidance was invaluable. Found my dream home in just 2 weeks!" },
    { name: "Michael Chen", role: "Property Owner", image: "https://randomuser.me/api/portraits/men/67.jpg", rating: 5, text: "Their property management service saved me so much time. Highly recommend!" }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-500">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-4 border-blue-400/20"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
