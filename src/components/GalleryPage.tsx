import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import garageImage from 'figma:asset/5faf45b146e521763a8016963b8e581002f7d8fc.png';
import officeImage from 'figma:asset/95019c649d968ec71db5f0ca8f303a6771e97166.png';
import mudroomImage from 'figma:asset/c733a3033f4b1068b411a410ce36503f02025f8d.png';

export function GalleryPage() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1618236444721-4a8dba415c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBjbG9zZXR8ZW58MXx8fHwxNzYxODc0Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Master Walk-In Closet',
      location: 'Winter Park, FL',
      category: 'Closet',
    },
    {
      image: garageImage,
      title: 'Modern Garage System',
      location: 'Orlando, FL',
      category: 'Garage',
    },
    {
      image: officeImage,
      title: 'Executive Home Office',
      location: 'Orlando, FL',
      category: 'Office',
    },
    {
      image: 'https://images.unsplash.com/photo-1514237487632-b60bc844a47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBwYW50cnl8ZW58MXx8fHwxNzYxODc0Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Custom Pantry Organization',
      location: 'Winter Park, FL',
      category: 'Pantry',
    },
    {
      image: mudroomImage,
      title: 'Mudroom Storage',
      location: 'Orlando, FL',
      category: 'Mudroom',
    },
    {
      image: 'https://images.unsplash.com/photo-1618236444721-4a8dba415c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBjbG9zZXR8ZW58MXx8fHwxNzYxODc0Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Reach-In Closet Remodel',
      location: 'Orlando, FL',
      category: 'Closet',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6">Our Work</h1>
          <p className="text-xl text-gray-600">
            Explore recent projects from Orlando and Winter Park homeowners. Each space is custom-designed and built to transform how our clients organize their homes.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-4">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-2">
                  <div className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </div>
                  <h3 className="mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            Gallery expanding soon with additional project case studies and before/after transformations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Start Your Project</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to transform your space? Schedule a free consultation to discuss your project.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
