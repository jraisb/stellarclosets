import React from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import officeImage from 'figma:asset/95019c649d968ec71db5f0ca8f303a6771e97166.png';

export function HomeOfficePage() {
  const features = [
    'Custom desk configurations',
    'Built-in shelving and cabinets',
    'Cable management solutions',
    'Ergonomic workspace design',
    'Integrated lighting options',
    'File storage and organization',
  ];

  const workspaceTypes = [
    {
      title: 'Executive Office',
      description: 'Full-wall built-ins with large desk surface, extensive storage, and professional appearance.',
    },
    {
      title: 'Creative Studio',
      description: 'Open shelving for display, large work surfaces, and storage for supplies and equipment.',
    },
    {
      title: 'Dual Workspace',
      description: 'Side-by-side or L-shaped configurations for couples working from home.',
    },
    {
      title: 'Compact Office',
      description: 'Space-efficient designs that maximize storage in smaller rooms or corners.',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Custom Home Offices</h1>
              <p className="text-xl text-gray-600 mb-8">
                Create the perfect workspace with custom-built home offices designed for productivity and style. From compact corner offices to executive suites, we build solutions that work for you.
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
                src={officeImage}
                alt="Modern custom home office with built-in desk and shelving"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Office Solutions We Create</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every professional has different needs. We design home offices that match your work style.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {workspaceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Designed for How You Work</h2>
              <p className="text-xl text-gray-600 mb-8">
                We start by understanding your workflow, storage needs, and equipment. Then we create a custom design that makes your work easier and your space more beautiful.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2">1. Consultation</h4>
                  <p className="text-gray-600">We discuss your work style, storage needs, and design preferences.</p>
                </div>
                <div>
                  <h4 className="mb-2">2. Design & Visualization</h4>
                  <p className="text-gray-600">See your new office in 3D before we build anything.</p>
                </div>
                <div>
                  <h4 className="mb-2">3. Custom Build</h4>
                  <p className="text-gray-600">Precision-crafted cabinetry built specifically for your space.</p>
                </div>
                <div>
                  <h4 className="mb-2">4. Professional Installation</h4>
                  <p className="text-gray-600">Expert installation with minimal disruption to your home.</p>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={officeImage}
                alt="Custom home office workspace design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-12">Thoughtful Details</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-blue-600" />
              </div>
              <h3 className="mb-3">Cable Management</h3>
              <p className="text-gray-600">Built-in wire management keeps cords hidden and organized.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-blue-600" />
              </div>
              <h3 className="mb-3">Custom Lighting</h3>
              <p className="text-gray-600">Integrated LED lighting for task and ambient illumination.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-blue-600" />
              </div>
              <h3 className="mb-3">Ergonomic Design</h3>
              <p className="text-gray-600">Work surfaces at the right height for comfort and productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Build Your Perfect Workspace</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to discuss your home office project and see design options.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
