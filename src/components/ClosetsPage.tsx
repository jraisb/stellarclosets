import React from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ClosetsPage() {
  const closetTypes = [
    {
      title: 'Walk-In Closets',
      description: 'Maximize your master bedroom closet with custom shelving, drawers, and hanging solutions.',
      features: ['Custom island designs', 'LED lighting options', 'Jewelry drawers', 'Shoe racks & displays'],
    },
    {
      title: 'Reach-In Closets',
      description: 'Transform standard closets with efficient organization systems that double your storage.',
      features: ['Double-hang rods', 'Adjustable shelving', 'Built-in hampers', 'Space optimization'],
    },
    {
      title: 'Pantry Storage',
      description: 'Keep your kitchen organized with custom pantry solutions for every type of food storage.',
      features: ['Pull-out shelves', 'Spice racks', 'Basket systems', 'Deep storage solutions'],
    },
    {
      title: 'Laundry Rooms',
      description: 'Create a functional laundry space with cabinets, folding stations, and organization systems.',
      features: ['Hanging rods', 'Folding counters', 'Utility storage', 'Detergent organization'],
    },
    {
      title: 'Mudrooms',
      description: 'Design an organized entryway with lockers, benches, and storage for everyday items.',
      features: ['Built-in benches', 'Individual lockers', 'Coat hooks', 'Shoe storage'],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Custom Closet Systems</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform any closet into an organized, beautiful space with our custom closet systems. From walk-ins to reach-ins, pantries to laundry rooms, we design solutions that work for your lifestyle.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check size={20} className="text-blue-600 mt-1" />
                  <span className="text-gray-700">Personalized design consultation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check size={20} className="text-blue-600 mt-1" />
                  <span className="text-gray-700">3D visualization before installation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check size={20} className="text-blue-600 mt-1" />
                  <span className="text-gray-700">Premium materials with lifetime warranty</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check size={20} className="text-blue-600 mt-1" />
                  <span className="text-gray-700">Professional installation by certified teams</span>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618236444721-4a8dba415c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBjbG9zZXR8ZW58MXx8fHwxNzYxODc0Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury custom walk-in closet with organized storage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closet Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Closet Solutions We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every space is different. We design custom solutions for all types of closets and storage areas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {closetTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2">
                      <Check size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">
              See how we've transformed closets for Orlando homeowners
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618236444721-4a8dba415c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBjbG9zZXR8ZW58MXx8fHwxNzYxODc0Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Custom closet project example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1514237487632-b60bc844a47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBwYW50cnl8ZW58MXx8fHwxNzYxODc0Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Organized pantry with custom shelving"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635810755045-13bfdfda95db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtdWRyb29tfGVufDF8fHx8MTc2MTg3NDcwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern mudroom with organized storage"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Start Your Closet Transformation</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss your closet project. We'll measure your space and create a custom design.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
