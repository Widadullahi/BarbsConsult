export const homepageData = {
  hero: {
    title: "Find Your Dream Property",
    subtitle: "Premium real estate consultation, property sales, rentals, and management services.",
    ctaButtons: [
      { text: "Browse Properties", link: "/listings", variant: "primary" },
      { text: "Free Consultation", link: "/contact", variant: "secondary" }
    ]
  },
  propertyTypes: {
    title: "Explore Property Types",
    subtitle: "Find properties that match your needs",
    types: [
      { id: "apartments", title: "Apartments", image: "", count: 24, link: "/listings" },
      { id: "lands", title: "Lands", image: "", count: 18, link: "/listings" },
      { id: "commercial", title: "Commercial", image: "", count: 12, link: "/listings" },
      { id: "villas", title: "Villas", image: "", count: 8, link: "/listings" }
    ]
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive real estate solutions"
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Trusted by hundreds"
  },
  cta: {
    title: "Ready to Start?",
    subtitle: "Contact us today",
    buttonText: "Get Free Consultation",
    buttonLink: "/contact"
  }
}

export default homepageData
