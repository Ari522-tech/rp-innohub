import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 text-slate-600">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-[#e7ebf7] p-2 rounded-md text-[#0a77bc]">
                <Lightbulb className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg text-slate-900">
                RP InnoHub
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              A platform connecting Rwanda Polytechnic innovators with institutions 
              to develop socio-economic IT solutions that drive national progress.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-[#0a77bc] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/innovations" className="text-slate-600 hover:text-[#0a77bc] transition-colors">
                  Our Innovations
                </Link>
              </li>
              <li>
                <Link to="/calls" className="text-slate-600 hover:text-[#0a77bc] transition-colors">
                  Calls for IT Projects
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-slate-600 hover:text-[#0a77bc] transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#0a77bc] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#0a77bc] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#0a77bc] mt-0.5 shrink-0" />
                <span>Rwanda Polytechnic – Huye Campus, Huye, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#0a77bc] shrink-0" />
                <a 
                  href="mailto:innovation@rp.ac.rw" 
                  className="hover:text-[#0a77bc] transition-colors"
                >
                  innovation@rp.ac.rw
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#0a77bc] shrink-0" />
                <a 
                  href="tel:+250791100954" 
                  className="hover:text-[#0a77bc] transition-colors"
                >
                  +250 791 100 954
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-slate-500 hover:text-[#0a77bc] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-500 hover:text-[#0a77bc] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-500 hover:text-[#0a77bc] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
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

      {/* Very subtle bottom bar */}
      <div className="border-t border-gray-200 bg-gray-50 py-4 text-center">
        <p className="text-xs text-slate-500">
          Promoting innovation • Supporting socio-economic development through IT
        </p>
      </div>
    </footer>
  );
};

export default Footer;