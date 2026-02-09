import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Innovations', path: '/innovations' },
    { name: 'Calls for Projects', path: '/calls' },
    { name: 'Training', path: '/training' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-rp-blue border-b border-slate-800 sticky top-0 z-50 shadow-xl shadow-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gold/10 p-2.5 rounded-xl text-rp-gold backdrop-blur-md group-hover:bg-rp-gold group-hover:text-rp-blue transition-all duration-300">
              <Lightbulb size={24} />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              RP <span className="text-rp-gold">InnoHub</span>
            </span>
          </Link>

          {/* Desktop Navigation with Animated Line */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300
                    ${isActive ? 'text-rp-gold' : 'text-slate-300 hover:text-white'}
                    
                    /* THE ANIMATED LINE */
                    after:content-[''] 
                    after:absolute 
                    after:left-0 
                    after:bottom-0 
                    after:w-full 
                    after:h-[2px] 
                    after:bg-rp-gold 
                    after:transition-transform 
                    after:duration-300
                    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10 font-medium">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-rp-gold text-rp-blue hover:bg-yellow-400 font-bold shadow-md hover:shadow-rp-gold/20 hover:-translate-y-0.5 transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-slide-up shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
               const isActive = location.pathname === item.path;
               return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive 
                      ? "bg-rp-blue/50 text-rp-gold border-l-4 border-rp-gold" 
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            
            <div className="pt-6 flex flex-col gap-3 border-t border-slate-800 mt-4">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent h-12">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-rp-gold text-rp-blue hover:bg-yellow-400 font-bold h-12">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;