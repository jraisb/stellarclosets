import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <span className="text-white">Stellar Closets</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your space with custom storage solutions designed for Orlando homeowners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('closets')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Custom Closets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('garage')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Garage Cabinets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('office')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home Offices
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('options')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Options & Finishes
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('orlando')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Orlando, FL
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('winterpark')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Winter Park, FL
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-0.5" />
                <span className="text-gray-400 text-sm">(407) 555-0123</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-0.5" />
                <span className="text-gray-400 text-sm">hello@stellarclosets.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Orlando, Florida</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Stellar Closets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
