import React from 'react';

export function OptionsPage() {
  const materials = [
    { name: 'Melamine', description: 'Durable and affordable with a wide range of colors and woodgrain finishes.' },
    { name: 'Thermally Fused Laminate', description: 'Premium laminate with superior durability and scratch resistance.' },
    { name: 'Wood Veneer', description: 'Real wood surfaces for a luxurious, authentic look.' },
    { name: 'Solid Wood', description: 'Premium hardwood construction for ultimate beauty and durability.' },
  ];

  const finishColors = [
    'White', 'Off-White', 'Gray', 'Charcoal', 'Black',
    'Natural Oak', 'Walnut', 'Cherry', 'Espresso', 'Maple',
  ];

  const hardware = [
    { name: 'Soft-Close Hinges', description: 'Quiet, smooth operation on all doors and drawers.' },
    { name: 'Drawer Pulls', description: 'Modern, traditional, or minimal hardware styles.' },
    { name: 'Closet Rods', description: 'Chrome, brushed nickel, or oil-rubbed bronze finishes.' },
    { name: 'LED Lighting', description: 'Motion-activated or switched lighting options.' },
  ];

  const accessories = [
    'Jewelry drawers with velvet lining',
    'Pull-out hampers and laundry bins',
    'Tie and belt racks',
    'Shoe shelves and display racks',
    'Valet rods for outfit planning',
    'Pull-out ironing boards',
    'Built-in mirrors',
    'Adjustable drawer dividers',
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6">Materials, Finishes & Hardware</h1>
          <p className="text-xl text-gray-600">
            Choose from a wide selection of premium materials, beautiful finishes, and quality hardware to create a custom look that matches your home's style perfectly.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-12">Material Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="mb-3">{material.name}</h3>
                <p className="text-gray-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finish Colors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Finish Colors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From classic whites to rich woodgrains, choose a finish that complements your home's aesthetic.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {finishColors.map((color, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className={`w-full aspect-square rounded-lg mb-4 ${
                  color === 'White' ? 'bg-white border-2 border-gray-200' :
                  color === 'Off-White' ? 'bg-gray-50 border-2 border-gray-200' :
                  color === 'Gray' ? 'bg-gray-300' :
                  color === 'Charcoal' ? 'bg-gray-600' :
                  color === 'Black' ? 'bg-gray-900' :
                  color === 'Natural Oak' ? 'bg-amber-200' :
                  color === 'Walnut' ? 'bg-amber-800' :
                  color === 'Cherry' ? 'bg-red-900' :
                  color === 'Espresso' ? 'bg-stone-900' :
                  'bg-yellow-100'
                }`}></div>
                <p className="text-sm text-gray-700">{color}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-12">Hardware & Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hardware.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="mb-3">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Custom Accessories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Add specialized features to make your storage system work exactly the way you need it to.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {accessories.map((accessory, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700">{accessory}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">See All Options in Person</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to see material samples and discuss all available options for your project.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
