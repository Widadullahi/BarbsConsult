// src/data/properties.js
const properties = [
  {
    id: 1,
    title: "4-Bedroom Luxury Duplex",
    type: "Sale",
    price: "₦120,000,000",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
    ],
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    area: "4500 sq ft",
    description: "A stunning luxury duplex in the heart of Victoria Island. This property features modern architecture, premium finishes, and panoramic city views.",
    features: ["Swimming Pool", "24/7 Security", "Gym", "Smart Home", "Garden"],
    agent: {
      name: "Barbara Consultant",
      phone: "+234 123 456 7890",
      email: "barbara@barbs-consultant.com"
    }
  },
  {
    id: 2,
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
    features: ["24/7 Power", "Security", "Pool", "Parking"]
  },
  {
    id: 3,
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
    features: ["AC", "Parking", "Security", "Elevator"]
  },
  // Add more properties as needed
]

export default properties