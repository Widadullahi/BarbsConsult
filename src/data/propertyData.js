// src/data/propertiesData.js
const propertiesData = [
  {
    id: 1,
    featured: true,
    title: "4-Bedroom Luxury Duplex",
    type: "Sale",
    price: "₦120,000,000",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    area: "4500 sq ft",
    description: "A stunning luxury duplex with modern architecture and premium finishes.",
    category: "villas"
  },
  {
    id: 2,
    featured: true,
    title: "3-Bedroom Apartment",
    type: "Rent",
    price: "₦4,500,000",
    location: "Lekki Phase 1, Lagos",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: "2800 sq ft",
    description: "Modern apartment with spacious rooms and excellent amenities.",
    category: "apartments"
  },
  {
    id: 3,
    featured: true,
    title: "Commercial Office Space",
    type: "Sale",
    price: "₦85,000,000",
    location: "Ikoyi, Lagos",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    bedrooms: 0,
    bathrooms: 6,
    parking: 10,
    area: "6000 sq ft",
    description: "Prime commercial space in central business district.",
    category: "commercial"
  },
  {
    id: 4,
    featured: true,
    title: "5 Acres Land",
    type: "Sale",
    price: "₦35,000,000",
    location: "Epe, Lagos",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    area: "5 Acres",
    description: "Prime land for development, cleared and ready for construction.",
    category: "lands"
  },
  // Add more properties as needed
]

export const getFeaturedProperties = () => {
  return propertiesData.filter(property => property.featured)
}

export const getPropertiesByCategory = (category) => {
  return propertiesData.filter(property => property.category === category)
}

export default propertiesData