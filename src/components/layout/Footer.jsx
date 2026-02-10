import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Facebook, X, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white group">
              <div className="bg-white/10 p-2 rounded-lg text-rp-gold group-hover:bg-rp-gold group-hover:text-rp-blue transition-all duration-300">
                <Lightbulb size={24} />
              </div>
              <span className="font-bold text-xl">RP InnoHub</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering Rwanda Polytechnic students to showcase innovations and connect with industry partners for real-world impact.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-rp-gold transition-colors">Home</Link></li>
              <li><Link to="/innovations" className="hover:text-rp-gold transition-colors">Innovations</Link></li>
              <li><Link to="/calls" className="hover:text-rp-gold transition-colors">Calls for Projects</Link></li>
              <li><Link to="/training" className="hover:text-rp-gold transition-colors">Training</Link></li>
              <li><Link to="/about" className="hover:text-rp-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-rp-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-rp-gold shrink-0" />
                <span>Huye, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-rp-gold shrink-0" />
                <span>innovation@rp.ac.rw</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-rp-gold shrink-0" />
                <span>+250 791 100 954</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4 mb-6">
              {/* X (formerly Twitter) */}
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-rp-gold hover:text-rp-blue transition-all group">
                <X size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              {/* LinkedIn */}
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-rp-gold hover:text-rp-blue transition-all group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              {/* Facebook */}
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-rp-gold hover:text-rp-blue transition-all group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Rwanda Polytechnic. All rights reserved.
            </p>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-4 text-center text-xs text-slate-500">
        <p>Built for Innovation. Powered by Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;