import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/auth/AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authDefaultView, setAuthDefaultView] = useState('login');
  
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Innovations', path: '/innovations' },
    { name: 'Calls for Projects', path: '/calls' },
    { name: 'Training', path: '/training' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const openAuth = (view) => {
    setAuthDefaultView(view);
    setShowAuthModal(true);
    setIsOpen(false); 
  };

  return (
    <>
      {/* UPDATED: Uses bg-primary (Deep Navy) and border-white/10 for subtle separation */}
      <nav className="bg-primary/95 border-b border-white/10 sticky top-0 z-40 shadow-xl shadow-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-secondary/10 p-2.5 rounded-xl text-secondary border border-secondary/20 group-hover:bg-secondary group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300">
                <Lightbulb size={24} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                RP <span className="text-secondary group-hover:text-white transition-colors duration-300">InnoHub</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300
                      ${isActive ? 'text-secondary' : 'text-slate-300 hover:text-white'}
                      /* Animated Gold Underline */
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:transition-transform after:duration-300
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
              <Button 
                variant="ghost" 
                onClick={() => openAuth('login')}
                className="text-slate-300 hover:text-white hover:bg-white/10 font-medium transition-all"
              >
                Login
              </Button>
              <Button 
                onClick={() => openAuth('register')}
                className="bg-secondary text-primary hover:bg-yellow-400 font-bold shadow-lg shadow-black/20 hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get Started
              </Button>
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

        {/* Mobile Navigation Menu (Dark Theme) */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-white/10 animate-slide-up shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location.pathname === item.path 
                      ? "bg-secondary/10 text-secondary border-l-4 border-secondary" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-6 flex flex-col gap-3 border-t border-white/10 mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => openAuth('login')}
                  className="w-full border-white/20 text-slate-300 hover:bg-white/10 hover:text-white bg-transparent h-12"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => openAuth('register')}
                  className="w-full bg-secondary text-primary hover:bg-yellow-400 font-bold h-12"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        defaultView={authDefaultView}
      />
    </>
  );
};

export default Navbar;