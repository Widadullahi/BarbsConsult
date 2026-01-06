import { Link } from 'react-router-dom'
import PropertyCard from '../Property/PropertyCard'

const PropertyShowcase = ({ data }) => {
  const properties = [
    { id: 1, title: "4-Bedroom Luxury Duplex", type: "Sale", price: "₦120,000,000", location: "Victoria Island", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", bedrooms: 4, bathrooms: 5, parking: 2, area: "4500 sq ft" },
    { id: 2, title: "3-Bedroom Apartment", type: "Rent", price: "₦4,500,000", location: "Lekki Phase 1", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", bedrooms: 3, bathrooms: 3, parking: 2, area: "2800 sq ft" },
    { id: 3, title: "Commercial Office", type: "Sale", price: "₦85,000,000", location: "Ikoyi", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800", bedrooms: 0, bathrooms: 6, parking: 10, area: "6000 sq ft" },
    { id: 4, title: "5 Acres Land", type: "Sale", price: "₦35,000,000", location: "Epe", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", bedrooms: 0, bathrooms: 0, parking: 0, area: "5 Acres" }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map(property => <PropertyCard key={property.id} property={property} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/listings" className="btn-primary px-8 py-4">View All Properties</Link>
        </div>
      </div>
    </section>
  )
}

export default PropertyShowcase
