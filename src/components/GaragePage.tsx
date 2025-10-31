import React from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import garageImage from 'figma:asset/5faf45b146e521763a8016963b8e581002f7d8fc.png';

export function GaragePage() {
  const features = [
    'Heavy-duty construction for tools and equipment',
    'Customizable drawer and cabinet configurations',
    'Workbench and workspace integration',
    'Wall-mounted storage systems',
    'Durable powder-coated finishes',
    'Adjustable shelving options',
  ];

  const benefits = [
    {
      title: 'Maximize Space',
      description: 'Turn your garage from cluttered chaos into an organized workspace with floor-to-ceiling storage.',
    },
    {
      title: 'Durable Materials',
      description: 'Our cabinets are built to withstand the garage environment with heavy-duty materials and finishes.',
    },
    {
      title: 'Custom Layout',
      description: 'Every garage is different. We design a layout that fits your specific needs and space constraints.',
    },
    {
      title: 'Professional Look',
      description: 'Transform your garage into a space you\'re proud to show off with sleek, modern cabinetry.',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Custom Garage Cabinets</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your garage into an organized, functional workspace with custom cabinet systems. Built tough to handle everything from power tools to seasonal storage.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={garageImage}
                alt="Modern organized garage with custom cabinets and wooden countertops"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Our Garage Cabinets</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build garage storage systems that are as tough as they are beautiful.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={garageImage}
                alt="Garage cabinet storage with organized tools and workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">Built for the Garage</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our garage cabinets aren't just repurposed kitchen cabinets. They're specifically designed and built to handle the unique demands of garage storage.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Check size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Heavy-Duty Construction</h4>
                    <p className="text-sm text-gray-600">Engineered to hold heavy tools and equipment without sagging or warping.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Check size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Moisture Resistant</h4>
                    <p className="text-sm text-gray-600">Finished with durable powder coating that resists moisture and temperature changes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Check size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Flexible Storage</h4>
                    <p className="text-sm text-gray-600">Adjustable shelves and customizable configurations grow with your needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Ready to Organize Your Garage?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and 3D design for your garage transformation.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
