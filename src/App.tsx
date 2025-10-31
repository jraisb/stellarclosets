import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ClosetsPage } from './components/ClosetsPage';
import { GaragePage } from './components/GaragePage';
import { HomeOfficePage } from './components/HomeOfficePage';
import { OptionsPage } from './components/OptionsPage';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { LocationPage } from './components/LocationPage';
import { Footer } from './components/Footer';

export type PageType = 'home' | 'closets' | 'garage' | 'office' | 'options' | 'gallery' | 'about' | 'contact' | 'orlando' | 'winterpark' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'closets':
        return <ClosetsPage />;
      case 'garage':
        return <GaragePage />;
      case 'office':
        return <HomeOfficePage />;
      case 'options':
        return <OptionsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'orlando':
        return <LocationPage city="Orlando" />;
      case 'winterpark':
        return <LocationPage city="Winter Park" />;
      case 'privacy':
        return (
          <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
              <h1 className="mb-8">Privacy Policy</h1>
              <div className="space-y-4 text-gray-600">
                <p>Last updated: October 29, 2025</p>
                <p>At Stellar Closets, we respect your privacy and are committed to protecting your personal information.</p>
                <h2 className="mt-8 mb-4">Information We Collect</h2>
                <p>We collect information you provide directly to us through contact forms, including your name, email address, phone number, and project details.</p>
                <h2 className="mt-8 mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to respond to your inquiries, provide quotes, and improve our services.</p>
                <h2 className="mt-8 mb-4">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
