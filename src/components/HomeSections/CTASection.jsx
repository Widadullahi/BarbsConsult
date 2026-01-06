import { Link } from 'react-router-dom'

const CTASection = ({ data }) => {
  return (
    <section className="bg-brand-black text-white py-20">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Find Your Property?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Contact us today for a free consultation.</p>
        <Link to="/contact" className="btn-primary text-lg px-10 py-4">Get Free Consultation</Link>
      </div>
    </section>
  )
}

export default CTASection
