# Stellar Closets Website - Complete Documentation

**Project Type:** React/Tailwind CSS Prototype Website  
**Client:** Stellar Closets - Custom Closet Company  
**Service Area:** Orlando & Winter Park, Florida  
**Date:** October 31, 2025  
**Version:** 1.0

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Business Requirements](#business-requirements)
3. [Technical Stack](#technical-stack)
4. [Project Structure](#project-structure)
5. [Component Documentation](#component-documentation)
6. [Deployment Requirements](#deployment-requirements)
7. [Performance Requirements](#performance-requirements)
8. [Complete Source Code](#complete-source-code)
9. [Setup Instructions](#setup-instructions)
10. [Migration to WordPress](#migration-to-wordpress)

---

## Project Overview

This is a clean, modern, mobile-first website prototype for Stellar Closets, a custom closet company serving homeowners in Orlando and Winter Park, Florida. The prototype demonstrates the design, user experience, and functionality that will be implemented in the final WordPress deployment.

### Key Features

- **10 Pages:** Home, Closets (with Laundry/Pantry/Mudroom), Garage Cabinets, Home Offices, Options & Finishes, Our Work gallery, About/Process, Contact, Privacy Policy, and Service Area pages
- **Mobile-First Design:** Responsive across all devices
- **Professional Styling:** Clean, modern design using Tailwind CSS
- **Interactive Navigation:** Smooth page transitions and mobile menu
- **Contact Form:** Ready for HubSpot CRM integration
- **Custom Photography:** Includes actual Stellar Closets project photos

---

## Business Requirements

### Target Platform
- **CMS:** WordPress using Elementor or Gutenberg (NO Divi, Wix, or Squarespace)
- **Hosting:** SiteGround, WP Engine, or Kinsta
- **Required Features:**
  - SSL certificate
  - CDN integration
  - Daily backups
  - Staging environment

### Required Pages (~10 pages)
1. **Home** - Main landing page with services overview
2. **Closets** - Custom closet solutions (walk-in, reach-in, pantry, laundry, mudroom)
3. **Garage Cabinets** - Garage organization systems
4. **Home Offices** - Custom office built-ins
5. **Options & Finishes** - Material and finish selections
6. **Our Work** - Project gallery
7. **About/Process** - Company story and process
8. **Contact** - Contact form and information
9. **Privacy Policy** - Legal compliance page
10. **Service Areas** - Orlando & Winter Park location pages

### Integrations Required
- **HubSpot CRM** - Contact form integration
- **Google Analytics 4** - Website analytics
- **Google Search Console** - SEO tracking

---

## Technical Stack

### Current Prototype
- **Framework:** React 18+
- **Styling:** Tailwind CSS v4.0
- **Icons:** Lucide React
- **Components:** Custom components + shadcn/ui library
- **Images:** Unsplash API + Custom Figma assets

### Production Requirements (WordPress)
- **CMS:** WordPress 6.x
- **Page Builder:** Elementor Pro or Gutenberg
- **Performance Plugins:** 
  - WP Rocket or W3 Total Cache
  - Smush or ShortPixel for image optimization
  - Lazy loading enabled
- **Image Format:** WebP with fallbacks
- **Form Plugin:** WPForms or Gravity Forms with HubSpot integration

---

## Performance Requirements

These are **non-negotiable** requirements for the WordPress deployment:

### PageSpeed Metrics
- **Mobile PageSpeed Score:** 90+
- **Desktop PageSpeed Score:** 95+
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms

### Optimization Requirements
- All images in WebP format with lazy-loading
- Minified CSS and JavaScript
- CDN for static assets
- Browser caching enabled
- GZIP compression
- Critical CSS inlined
- Deferred JavaScript loading

---

## Project Structure

```
stellar-closets/
├── App.tsx                          # Main application component
├── Attributions.md                  # Image attributions
├── components/
│   ├── AboutPage.tsx               # About/Process page
│   ├── ClosetsPage.tsx             # Custom closets page
│   ├── ContactPage.tsx             # Contact form page
│   ├── Footer.tsx                  # Site footer component
│   ├── GalleryPage.tsx             # Our Work gallery
│   ├── GaragePage.tsx              # Garage cabinets page
│   ├── Header.tsx                  # Site header/navigation
│   ├── HomeOfficePage.tsx          # Home offices page
│   ├── HomePage.tsx                # Main landing page
│   ├── LocationPage.tsx            # Service area pages
│   ├── OptionsPage.tsx             # Options & finishes page
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # Image component
│   └── ui/                         # shadcn/ui components
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── [40+ other UI components]
├── styles/
│   └── globals.css                 # Global styles and Tailwind config
└── guidelines/
    └── Guidelines.md               # Development guidelines
```

---

## Component Documentation

### App.tsx
Main application component that handles routing and page state management.

**Key Features:**
- Page routing via state management
- Header and Footer on all pages
- Privacy Policy inline rendering

### Header.tsx
Fixed navigation header with mobile responsive menu.

**Features:**
- Fixed position navigation
- Mobile hamburger menu
- Active page highlighting
- Smooth scroll to top on navigation
- "Get Quote" CTA button

### Footer.tsx
Site-wide footer with links and contact information.

**Includes:**
- Company information
- Service links
- Service area links
- Contact details
- Social media links
- Copyright notice

### HomePage.tsx
Main landing page with hero section, services overview, benefits, testimonials, and CTAs.

**Sections:**
1. Hero with headline and CTA buttons
2. Services overview (3 cards)
3. Benefits section with feature list
4. Customer testimonials
5. Final CTA section

**Custom Images:**
- Garage cabinets (custom photo)
- Home office (custom photo)
- Mudroom (custom photo)

### ClosetsPage.tsx
Detailed page about custom closet solutions.

**Features:**
- Hero section with key benefits
- 5 closet types (Walk-In, Reach-In, Pantry, Laundry, Mudroom)
- Feature lists for each type
- Gallery preview
- CTA section

### GaragePage.tsx
Garage cabinet and organization systems page.

**Includes:**
- Custom garage image showcase
- Feature benefits
- Gallery of garage projects
- Call-to-action

### HomeOfficePage.tsx
Custom home office solutions page.

**Features:**
- Custom office photography
- Feature highlights
- Project examples
- Contact CTA

### OptionsPage.tsx
Material and finish options showcase.

**Categories:**
- Wood finishes (12 options)
- Door styles (6 options)
- Hardware options (3 options)
- Accessories
- Interactive selection display

### GalleryPage.tsx
"Our Work" project gallery.

**Projects Displayed:**
1. Master Walk-In Closet
2. Modern Garage System (custom photo)
3. Executive Home Office (custom photo)
4. Custom Pantry Organization
5. Mudroom Storage (custom photo)
6. Reach-In Closet Remodel

**Features:**
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Hover effects
- Category badges
- Location information

### AboutPage.tsx
Company story and process explanation.

**Sections:**
1. Company story
2. 4-step process
3. Core values
4. CTA section

### ContactPage.tsx
Contact form and information page.

**Form Fields:**
- Name (required)
- Email (required)
- Phone (required)
- Project Type (dropdown, required)
- Message (optional)

**Features:**
- Form validation
- Success message display
- Contact information sidebar
- FAQ section
- Ready for HubSpot CRM integration

### LocationPage.tsx
Dynamic service area pages (Orlando & Winter Park).

**Content:**
- City-specific information
- Service area coverage
- Why choose local company
- Contact CTA

---

## Complete Source Code

### 1. App.tsx

```tsx
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
```

### 2. Header.tsx

```tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', page: 'home' as PageType },
    { name: 'Closets', page: 'closets' as PageType },
    { name: 'Garage Cabinets', page: 'garage' as PageType },
    { name: 'Home Offices', page: 'office' as PageType },
    { name: 'Options & Finishes', page: 'options' as PageType },
    { name: 'Our Work', page: 'gallery' as PageType },
    { name: 'About', page: 'about' as PageType },
    { name: 'Contact', page: 'contact' as PageType },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SC</span>
            </div>
            <span className="text-gray-900">Stellar Closets</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
```

### 3. Footer.tsx

```tsx
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
```

### 4. styles/globals.css

```css
@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/**
 * Base typography. This is not applied to elements which have an ancestor with a Tailwind text class.
 */
@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-\"])))) {
    h1 {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h3 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h4 {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    p {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }

    label {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    button {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    input {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }
  }
}

html {
  font-size: var(--font-size);
}
```

---

## Deployment Requirements

### WordPress Hosting Setup

1. **Choose Hosting Provider:**
   - SiteGround (Recommended: GrowBig or higher)
   - WP Engine (Recommended: Startup or higher)
   - Kinsta (Recommended: Starter or higher)

2. **Required Server Configuration:**
   - PHP 8.0 or higher
   - MySQL 5.7 or higher
   - HTTPS/SSL certificate (included with hosting)
   - CDN integration (Cloudflare or host-provided)
   - Minimum 2GB RAM
   - Daily automated backups
   - Staging environment

3. **WordPress Installation:**
   - Install WordPress 6.x
   - Install Elementor Pro OR use Gutenberg (full site editing)
   - Install required plugins (see below)

### Required WordPress Plugins

**Performance:**
- WP Rocket (premium) or W3 Total Cache (free)
- Smush Pro or ShortPixel for image optimization
- Autoptimize for CSS/JS minification

**SEO & Analytics:**
- Yoast SEO or Rank Math
- Google Analytics for WordPress (MonsterInsights or GA Google Analytics)
- Google Site Kit (for Search Console integration)

**Forms & CRM:**
- WPForms Pro or Gravity Forms
- HubSpot WordPress Plugin (for CRM integration)

**Security:**
- Wordfence Security or Sucuri
- UpdraftPlus for additional backups

**Image Optimization:**
- WebP Express (convert images to WebP)
- Lazy Load by WP Rocket or native lazy loading

### Page Builder Recommendations

**Option 1: Elementor Pro**
- Drag-and-drop interface
- Template library
- Form builder with HubSpot integration
- Mobile editing
- Custom CSS/JavaScript support

**Option 2: Gutenberg (Full Site Editing)**
- Native WordPress
- Block-based editing
- Full site editing capabilities
- Lighter weight than Elementor
- May require additional form plugin

---

## Performance Optimization Checklist

### Images
- [ ] Convert all images to WebP format
- [ ] Implement lazy loading for all images
- [ ] Optimize image dimensions (serve responsive images)
- [ ] Use CDN for image delivery
- [ ] Set proper image compression (80-85% quality)

### CSS/JavaScript
- [ ] Minify all CSS and JavaScript
- [ ] Combine CSS files where possible
- [ ] Defer non-critical JavaScript
- [ ] Inline critical CSS
- [ ] Remove unused CSS
- [ ] Enable GZIP compression

### Caching
- [ ] Enable browser caching (1 year for static assets)
- [ ] Implement page caching
- [ ] Enable object caching if available
- [ ] Configure CDN caching rules

### Database
- [ ] Optimize database tables
- [ ] Remove post revisions (limit to 3-5)
- [ ] Clean up transients
- [ ] Remove unused plugins/themes

### Fonts
- [ ] Use system fonts when possible
- [ ] Self-host custom fonts
- [ ] Preload critical fonts
- [ ] Use font-display: swap

### Hosting
- [ ] Enable server-level caching
- [ ] Configure CDN
- [ ] Enable HTTP/2
- [ ] Use PHP 8.0+

---

## Migration to WordPress

### Step 1: Content Migration
Extract content from React components and organize by page:

1. **Home Page:**
   - Hero headline and subheadline
   - Service cards (3)
   - Benefits list
   - Testimonials (3)
   - CTAs

2. **Service Pages:**
   - Copy all service descriptions
   - Feature lists
   - Image references
   - CTAs

3. **Gallery:**
   - Export all project images
   - Copy project titles and descriptions
   - Note categories and locations

4. **About Page:**
   - Company story text
   - Process steps (4)
   - Values (4)

5. **Contact Page:**
   - Form field labels
   - Contact information
   - FAQ content

### Step 2: Design System Transfer

**Colors:**
- Primary Blue: #2563EB (blue-600)
- Dark Blue: #1E40AF (blue-800)
- Light Blue: #EFF6FF (blue-50)
- Gray variations: #F9FAFB, #6B7280, #111827
- Success Green: #10B981
- White: #FFFFFF

**Typography:**
- Base font size: 16px
- H1: 2xl (24-30px)
- H2: xl (20-24px)
- H3: lg (18-20px)
- Body: base (16px)
- Line height: 1.5

**Spacing:**
- Section padding: 80px (py-20)
- Element margins: 24-32px
- Grid gaps: 32px (gap-8)

**Border Radius:**
- Buttons: 8px (rounded-lg)
- Cards: 12px (rounded-xl)
- Images: 16px (rounded-2xl)

### Step 3: Form Integration

**HubSpot CRM Integration:**

1. Install HubSpot WordPress plugin
2. Connect HubSpot account
3. Create form in HubSpot with fields:
   - First Name
   - Last Name (or combined Name field)
   - Email
   - Phone
   - Project Type (dropdown)
   - Message (textarea)

4. Embed form code in Contact page
5. Set up email notifications
6. Configure thank you page/message
7. Test form submissions

**Google Analytics 4 Setup:**

1. Create GA4 property
2. Install Google Site Kit plugin
3. Connect GA4 account
4. Configure tracking:
   - Page views
   - Form submissions (events)
   - Button clicks (CTAs)
   - Scroll depth
   - Outbound links

**Google Search Console:**

1. Verify site ownership
2. Submit sitemap (use Yoast SEO or Rank Math)
3. Monitor indexing status
4. Check for crawl errors
5. Review search performance

### Step 4: Image Management

**Custom Project Photos:**
Three custom images are used in the prototype:
1. Garage cabinets - wooden storage system
2. Home office - dark wood built-ins with LED lighting
3. Mudroom - modern gray cabinets with wood accents

**Image Optimization Process:**
1. Export images at 2x resolution for retina displays
2. Convert to WebP format
3. Create responsive image sizes (thumbnail, medium, large)
4. Upload to WordPress media library
5. Add descriptive alt text for SEO
6. Enable lazy loading

### Step 5: SEO Configuration

**Page-Level SEO:**

Each page should have:
- Unique title tag (50-60 characters)
- Meta description (150-160 characters)
- H1 heading (one per page)
- Structured data (Schema.org markup)
- Open Graph tags for social sharing

**Recommended Page Titles:**
- Home: "Custom Closets Orlando | Stellar Closets | Garage & Office Storage"
- Closets: "Custom Closet Systems Orlando | Walk-In & Reach-In Closets"
- Garage: "Garage Cabinets Orlando | Custom Garage Storage Systems"
- Home Office: "Custom Home Offices Orlando | Built-In Office Furniture"
- Our Work: "Custom Closet Gallery | Orlando Project Portfolio"
- Contact: "Contact Us | Free Consultation | Orlando Custom Closets"

**Local SEO:**
- Create Google Business Profile
- Add NAP (Name, Address, Phone) to footer
- Create location pages for Orlando and Winter Park
- Add structured data for LocalBusiness

---

## Setup Instructions

### Development Environment

1. **Clone or download project files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Required packages:**
   - react
   - react-dom
   - lucide-react (for icons)
   - tailwindcss v4.0

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

### File Organization

All page components are in `/components` directory:
- Core components: Header, Footer, HomePage
- Service pages: ClosetsPage, GaragePage, HomeOfficePage
- Supporting pages: AboutPage, ContactPage, GalleryPage, OptionsPage, LocationPage

Styles are in `/styles/globals.css` using Tailwind CSS v4.0.

### Custom Images

Three custom images are imported via Figma assets:
```tsx
import garageImage from 'figma:asset/5faf45b146e521763a8016963b8e581002f7d8fc.png';
import officeImage from 'figma:asset/95019c649d968ec71db5f0ca8f303a6771e97166.png';
import mudroomImage from 'figma:asset/c733a3033f4b1068b411a410ce36503f02025f8d.png';
```

These images need to be exported and included in WordPress media library.

---

## Testing Checklist

### Functionality Testing
- [ ] All navigation links work correctly
- [ ] Mobile menu opens and closes
- [ ] Contact form validates required fields
- [ ] Contact form submits successfully
- [ ] Form shows success message
- [ ] All images load properly
- [ ] Hover effects work on service cards
- [ ] Gallery images have hover effects
- [ ] CTAs navigate to correct pages
- [ ] Smooth scroll to top on navigation

### Responsive Testing
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1920px+)

### Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Testing
- [ ] Google PageSpeed Insights (Mobile 90+)
- [ ] Google PageSpeed Insights (Desktop 95+)
- [ ] GTmetrix grade A
- [ ] WebPageTest performance score
- [ ] Core Web Vitals pass

### SEO Testing
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Images have alt text
- [ ] Heading hierarchy is correct
- [ ] No broken links
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Google Search Console verified

---

## Support & Maintenance

### Regular Maintenance Tasks

**Weekly:**
- Check form submissions
- Monitor site uptime
- Review analytics data

**Monthly:**
- Update WordPress core
- Update plugins
- Update themes
- Check for broken links
- Review site speed
- Backup verification
- Security scan

**Quarterly:**
- Content audit
- SEO performance review
- Update project gallery
- Review and respond to reviews
- A/B testing of CTAs

### Monitoring

**Required Monitoring:**
- Uptime monitoring (UptimeRobot or similar)
- Google Analytics 4 tracking
- Google Search Console monitoring
- PageSpeed monitoring
- Form submission tracking (HubSpot)

---

## Contact Information

**Project Details:**
- Client: Stellar Closets
- Service Area: Orlando & Winter Park, Florida
- Phone: (407) 555-0123
- Email: hello@stellarclosets.com
- Website: [To be deployed]

**Social Media:**
- Facebook: [To be added]
- Instagram: [To be added]

---

## Version History

**Version 1.0 - October 31, 2025**
- Initial React/Tailwind prototype completed
- All 10 pages implemented
- Custom project photos integrated
- Mobile-responsive design
- Contact form with HubSpot integration placeholder
- Ready for WordPress migration

---

## Appendix: Complete Page Components

### HomePage.tsx (Excerpt - Key Sections)

**Hero Section:**
```tsx
<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="mb-6">
          Custom Closets & Storage Solutions for Orlando Homes
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your space with expertly designed custom closets, garage cabinets, 
          and home offices. Serving Orlando and Winter Park homeowners since 2015.
        </p>
        {/* CTAs */}
      </div>
      {/* Hero Image */}
    </div>
  </div>
</section>
```

**Services Section:**
Displays 3 service cards:
1. Custom Closets (with Unsplash image)
2. Garage Cabinets (with custom garage photo)
3. Home Offices (with custom office photo)

**Testimonials:**
3 customer testimonials with 5-star ratings from Orlando and Winter Park clients.

### GalleryPage.tsx

**Projects Array:**
```tsx
const projects = [
  {
    image: 'unsplash-url', // Master Walk-In Closet
    title: 'Master Walk-In Closet',
    location: 'Winter Park, FL',
    category: 'Closet',
  },
  {
    image: garageImage, // Custom photo
    title: 'Modern Garage System',
    location: 'Orlando, FL',
    category: 'Garage',
  },
  {
    image: officeImage, // Custom photo
    title: 'Executive Home Office',
    location: 'Orlando, FL',
    category: 'Office',
  },
  {
    image: 'unsplash-url', // Custom Pantry
    title: 'Custom Pantry Organization',
    location: 'Winter Park, FL',
    category: 'Pantry',
  },
  {
    image: mudroomImage, // Custom photo
    title: 'Mudroom Storage',
    location: 'Orlando, FL',
    category: 'Mudroom',
  },
  {
    image: 'unsplash-url', // Reach-In Closet
    title: 'Reach-In Closet Remodel',
    location: 'Orlando, FL',
    category: 'Closet',
  },
];
```

### ContactPage.tsx - Form Structure

**Form Fields:**
1. Name (text, required)
2. Email (email, required)
3. Phone (tel, required)
4. Project Type (select, required):
   - Walk-In Closet
   - Reach-In Closet
   - Pantry
   - Laundry Room
   - Mudroom
   - Garage Cabinets
   - Home Office
   - Other
5. Message (textarea, optional)

**Form Submission:**
Currently logs to console. In production:
- Submit to HubSpot CRM via API
- Send confirmation email
- Trigger sales notification
- Redirect to thank you page or show success message

**Contact Information Sidebar:**
- Phone: (407) 555-0123
- Email: hello@stellarclosets.com
- Service Area: Orlando & Winter Park, FL
- Hours: Mon-Fri 8am-6pm, Sat 9am-3pm, Sun Closed

**FAQ Section:**
4 frequently asked questions with answers:
1. How long does the process take?
2. Do you offer financing?
3. What's included in the free consultation?
4. Do you offer a warranty?

---

## Notes for WordPress Developer

1. **Preserve Design Fidelity:**
   - Match spacing, colors, and typography exactly
   - Maintain responsive breakpoints
   - Keep hover effects and animations

2. **Performance Priority:**
   - Mobile PageSpeed 90+ is non-negotiable
   - Test on real mobile devices
   - Monitor Core Web Vitals continuously

3. **Form Integration:**
   - HubSpot CRM integration is critical
   - Test form submissions thoroughly
   - Set up proper error handling
   - Configure spam protection

4. **Image Handling:**
   - Export custom photos at highest quality
   - Create multiple responsive sizes
   - Implement lazy loading
   - Use WebP with JPG fallback

5. **SEO Configuration:**
   - Install Yoast SEO or Rank Math immediately
   - Configure Google Analytics 4
   - Set up Google Search Console
   - Implement local business schema

6. **Testing:**
   - Test on real devices (iOS and Android)
   - Verify all forms work
   - Check all navigation links
   - Test on slow 3G connection
   - Verify mobile menu functionality

---

## Conclusion

This documentation provides a complete reference for the Stellar Closets website prototype. The React/Tailwind version demonstrates the design and functionality that should be replicated in WordPress.

All code is production-ready and follows best practices for React development. The WordPress migration should maintain design fidelity while meeting all performance requirements.

For questions or clarification, refer to the component source code included in this documentation.

---

**Document End**

*This documentation was generated on October 31, 2025 for Stellar Closets website development project.*
