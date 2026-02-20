// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="container mx-auto max-w-7xl px-5 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Mission */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700">
                <Lightbulb className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-slate-900">
                RP InnoHub
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              Connecting Rwanda Polytechnic innovators with institutions to develop 
              socio-economic IT solutions that support national development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/innovations', label: 'Our Innovations' },
                { to: '/calls', label: 'Calls for IT Projects' },
                { to: '/training', label: 'Training' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <span>Rwanda Polytechnic – Huye Campus, Huye, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                <a 
                  href="mailto:innovation@rp.ac.rw" 
                  className="hover:text-blue-700 transition-colors"
                >
                  innovation@rp.ac.rw
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <a 
                  href="tel:+250791100954" 
                  className="hover:text-blue-700 transition-colors"
                >
                  +250 791 100 954
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex gap-5">
                <a 
                  href="#" 
                  className="text-slate-500 hover:text-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-500 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-500 hover:text-blue-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="text-xs text-slate-500 space-y-1">
              <p>© {currentYear} Rwanda Polytechnic Center for Technologies and Innovations</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="border-t border-slate-100 bg-slate-50/50 py-5 text-center">
        <p className="text-xs text-slate-500">
          Promoting innovation • Supporting socio-economic development through IT
        </p>
      </div>
    </footer>
  );
};

export default Footer;