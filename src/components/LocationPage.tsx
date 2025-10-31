import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LocationPageProps {
  city: string;
}

export function LocationPage({ city }: LocationPageProps) {
  const cityInfo = {
    Orlando: {
      description: 'Serving Orlando homeowners with custom closets, garage cabinets, and home office solutions.',
      neighborhoods: [
        'Downtown Orlando',
        'College Park',
        'Baldwin Park',
        'Lake Nona',
        'Dr. Phillips',
        'Windermere',
        'Metrowest',
        'Conway',
      ],
      content: 'As Orlando\'s premier custom closet company, we understand the unique needs of Central Florida homeowners. From downtown condos to suburban estates, we create storage solutions that maximize space and enhance your home\'s value.',
    },
    'Winter Park': {
      description: 'Providing Winter Park residents with premium custom storage solutions and expert craftsmanship.',
      neighborhoods: [
        'Downtown Winter Park',
        'Hannibal Square',
        'College Quarter',
        'Mead Garden Area',
        'Virginia Heights',
      ],
      content: 'Winter Park\'s historic homes and modern residences deserve custom storage solutions that match their character. We specialize in creating beautiful, functional closets and offices that complement Winter Park\'s distinctive architecture.',
    },
  };

  const info = cityInfo[city as keyof typeof cityInfo];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <MapPin size={18} />
                <span className="text-sm">Service Area</span>
              </div>
              <h1 className="mb-6">Custom Closets in {city}, FL</h1>
              <p className="text-xl text-gray-600 mb-8">
                {info.description}
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Free Consultation
              </button>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmxhbmRvJTIwZmxvcmlkYXxlbnwxfHx8fDE3NjE4NzQ3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={`${city} Florida`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center mb-8">Custom Storage for {city} Homes</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {info.content}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h4 className="mb-2">Local Service</h4>
              <p className="text-sm text-gray-600">Fast response times for {city} homeowners</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={28} />
              </div>
              <h4 className="mb-2">Know the Area</h4>
              <p className="text-sm text-gray-600">Familiar with local home styles</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={28} />
              </div>
              <h4 className="mb-2">Quick Scheduling</h4>
              <p className="text-sm text-gray-600">Flexible appointment times</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center mb-12">Neighborhoods We Serve in {city}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {info.neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700">{neighborhood}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Don't see your neighborhood? We serve all of {city} and surrounding areas. Contact us to confirm service availability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-12">Services in {city}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-3">Custom Closets</h3>
              <p className="text-gray-600">Walk-ins, reach-ins, pantries, and mudrooms</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-3">Garage Cabinets</h3>
              <p className="text-gray-600">Transform your garage into organized workspace</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-3">Home Offices</h3>
              <p className="text-gray-600">Custom desks and storage for remote work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Schedule Your {city} Consultation</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free in-home consultation and custom 3D design for your {city} home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <a href="tel:4075550123" className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors">
              Call (407) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
