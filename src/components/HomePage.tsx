import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageType } from '../App';
import garageImage from 'figma:asset/5faf45b146e521763a8016963b8e581002f7d8fc.png';
import officeImage from 'figma:asset/95019c649d968ec71db5f0ca8f303a6771e97166.png';
import mudroomImage from 'figma:asset/c733a3033f4b1068b411a410ce36503f02025f8d.png';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      title: 'Custom Closets',
      description: 'Transform your bedroom, walk-in, or reach-in closet with custom organization solutions tailored to your lifestyle.',
      image: 'https://images.unsplash.com/photo-1618236444721-4a8dba415c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBjbG9zZXR8ZW58MXx8fHwxNzYxODc0Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'closets' as PageType,
    },
    {
      title: 'Garage Cabinets',
      description: 'Maximize your garage space with durable, custom cabinets designed to handle everything from tools to sports equipment.',
      image: garageImage,
      page: 'garage' as PageType,
    },
    {
      title: 'Home Offices',
      description: 'Create a productive workspace with custom-built desks, shelving, and storage designed for how you work.',
      image: officeImage,
      page: 'office' as PageType,
    },
  ];

  const benefits = [
    'Custom designed for your space',
    'Premium materials and hardware',
    'Professional installation',
    'Lifetime warranty on materials',
    'Free in-home consultation',
    '3D design visualization',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Orlando, FL',
      rating: 5,
      text: 'The team at Stellar Closets completely transformed our master bedroom closet. The design is beautiful and so functional. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      location: 'Winter Park, FL',
      rating: 5,
      text: 'From consultation to installation, everything was seamless. Our garage went from chaos to completely organized. Worth every penny.',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Orlando, FL',
      rating: 5,
      text: 'They designed a home office that perfectly fits my needs. The attention to detail and quality of craftsmanship is outstanding.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">
                Custom Closets & Storage Solutions for Orlando Homes
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your space with expertly designed custom closets, garage cabinets, and home offices. Serving Orlando and Winter Park homeowners since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors"
                >
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618236444721-4a8dba415c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBjbG9zZXR8ZW58MXx8fHwxNzYxODc0Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Luxury custom closet organization system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From closets to garages to home offices, we create custom storage solutions that fit your life perfectly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => onNavigate(service.page)}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 hover:text-blue-700 inline-flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Choose Stellar Closets?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine expert design, premium materials, and meticulous craftsmanship to create storage solutions that enhance your home and simplify your life.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1514237487632-b60bc844a47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBwYW50cnl8ZW58MXx8fHwxNzYxODc0Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Organized pantry with custom shelving"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
                <ImageWithFallback
                  src={mudroomImage}
                  alt="Modern mudroom with organized storage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from happy Orlando homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free in-home consultation today. We'll measure your space, discuss your needs, and create a custom 3D design.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Free Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
