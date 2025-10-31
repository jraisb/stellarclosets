import React from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const process = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We visit your home to measure the space, understand your needs, and discuss design ideas.',
    },
    {
      step: '2',
      title: '3D Design',
      description: 'Our designers create a detailed 3D rendering so you can visualize your new space before we build.',
    },
    {
      step: '3',
      title: 'Custom Fabrication',
      description: 'Each piece is precision-crafted using premium materials and finishes you selected.',
    },
    {
      step: '4',
      title: 'Professional Installation',
      description: 'Our certified installation team brings your design to life with expert craftsmanship.',
    },
  ];

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'We use premium materials and expert construction techniques to build storage systems that last a lifetime.',
    },
    {
      title: 'Custom Design',
      description: 'Every project is unique. We design solutions specifically for your space, needs, and style.',
    },
    {
      title: 'Customer Service',
      description: 'From consultation to installation and beyond, we\'re committed to exceeding your expectations.',
    },
    {
      title: 'Local Expertise',
      description: 'As Orlando locals, we understand the needs of Central Florida homeowners.',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6">About Stellar Closets</h1>
          <p className="text-xl text-gray-600">
            Since 2015, we've been transforming homes across Orlando and Winter Park with custom storage solutions that combine beautiful design with intelligent organization.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmxhbmRvJTIwZmxvcmlkYXxlbnwxfHx8fDE3NjE4NzQ3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Orlando Florida cityscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Stellar Closets was founded with a simple mission: help Orlando homeowners make the most of their space with custom storage solutions that are both beautiful and functional.
                </p>
                <p>
                  What started as a small operation has grown into one of Central Florida's most trusted names in custom closets, garage cabinets, and home offices. We've completed hundreds of projects, but our commitment to quality and customer service remains the same.
                </p>
                <p>
                  Every member of our team—from designers to installers—takes pride in creating spaces that make our clients' lives easier and their homes more beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final installation, we make the process seamless and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <Check size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Let's Create Something Beautiful</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss your project and see how we can transform your space.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
