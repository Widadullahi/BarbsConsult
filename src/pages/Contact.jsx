import React, { useState } from 'react';

const Contact = () => {
  // Your email address (the recipient)
  const recipientEmail = 'babajidepelumi124@gmail.com';
  const defaultSubject = 'Real Estate Inquiry';

  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Create and open the mailto link
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build the email body
    const body = `
First Name: ${formData.firstName}<br><br>
Last Name: ${formData.lastName}<br><br>
Email: ${formData.email}<br><br>
Phone: ${formData.phone}<br><br>
Service: ${formData.service}<br><br>

Message:
${formData.message}
    `.trim(); // .trim() removes extra whitespace
    
    // Encode the body for URL
    const encodedBody = encodeURIComponent(body);
    const encodedSubject = encodeURIComponent(
      formData.service ? `${defaultSubject} - ${formData.service}` : defaultSubject
    );
    
    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Open the user's email client
    window.open(mailtoLink, '_blank');
    
    // Optional: Reset form after submission
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   service: '',
    //   message: ''
    // });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Unchanged */}
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

      {/* Content Section - Updated Form */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              >
                <option value="">Select Service</option>
                <option value="Property Sales">Property Sales</option>
                <option value="Rentals">Rentals</option>
                <option value="Land Services">Land Services</option>
                <option value="Property Management">Property Management</option>
              </select>
              <textarea 
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Open Email to Send Message
              </button>
            </form>
            
           
          </div>

          {/* Contact Info - Unchanged */}
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
                <p className="text-gray-600">babajidepelumi124@gmail.com</p>
                <p className="text-gray-600">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;