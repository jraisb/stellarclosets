import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would send data to HubSpot CRM
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6">Get Your Free Consultation</h1>
          <p className="text-xl text-gray-600">
            Ready to transform your space? Fill out the form below or give us a call. We'll schedule a time to visit your home, discuss your needs, and create a custom design.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-gray-600">(407) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-gray-600">hello@stellarclosets.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Service Area</h4>
                    <p className="text-gray-600">Orlando & Winter Park, FL</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Mon-Fri: 8am - 6pm<br />
                      Sat: 9am - 3pm<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-12 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-green-900">Thank You!</h3>
                  <p className="text-green-800">
                    We've received your inquiry and will contact you within 24 hours to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm mb-2 text-gray-700">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select a project type</option>
                      <option value="walk-in-closet">Walk-In Closet</option>
                      <option value="reach-in-closet">Reach-In Closet</option>
                      <option value="pantry">Pantry</option>
                      <option value="laundry">Laundry Room</option>
                      <option value="mudroom">Mudroom</option>
                      <option value="garage">Garage Cabinets</option>
                      <option value="home-office">Home Office</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your space, what you're looking for, timeline, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Request Free Consultation
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by Stellar Closets regarding your project inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h4 className="mb-2">How long does the process take?</h4>
              <p className="text-gray-600">
                From consultation to installation, most projects are completed within 3-4 weeks. We'll provide a detailed timeline during your consultation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="mb-2">Do you offer financing?</h4>
              <p className="text-gray-600">
                Yes, we offer flexible financing options to make your project more affordable. Ask about our current financing programs during your consultation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="mb-2">What's included in the free consultation?</h4>
              <p className="text-gray-600">
                We'll visit your home to measure the space, discuss your needs and preferences, show material samples, and provide a preliminary design concept—all at no cost or obligation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="mb-2">Do you offer a warranty?</h4>
              <p className="text-gray-600">
                Yes, we provide a lifetime warranty on all materials and a 5-year warranty on installation workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
