// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { AuthModal } from '@/components/auth/AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authDefaultView, setAuthDefaultView] = useState('login');
  const [isNavLoading, setIsNavLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Innovations', path: '/innovations' },
    { name: 'Calls for IT Projects', path: '/calls' },
    { name: 'Training', path: '/training' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const openAuth = (view) => {
    setAuthDefaultView(view);
    setShowAuthModal(true);
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl px-5 md:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700">
                <Lightbulb className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-slate-900">
                RP InnoHub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {isNavLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-24 rounded" />
                ))
              ) : (
                navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-700 font-semibold'
                        : 'text-slate-700 hover:text-blue-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))
              )}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {isNavLoading ? (
                <div className="flex gap-4">
                  <Skeleton className="h-9 w-20 rounded-md" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => openAuth('login')}
                    className="text-slate-700 hover:text-blue-700 hover:bg-slate-50 px-5 text-sm font-medium"
                  >
                    Login
                  </Button>

                  <Button
                    onClick={() => openAuth('register')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 text-sm font-medium"
                  >
                    Register
                  </Button>
                </>
              )}
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 -mr-2 text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-5 py-6 space-y-2">
              {isNavLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-11 w-full rounded-md" />
                ))
              ) : (
                navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))
              )}

              <div className="pt-6 mt-4 border-t border-slate-200 flex flex-col gap-3">
                {isNavLoading ? (
                  <>
                    <Skeleton className="h-11 w-full rounded-md" />
                    <Skeleton className="h-11 w-full rounded-md" />
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => openAuth('login')}
                      className="w-full border-slate-300 hover:bg-slate-50 text-slate-700"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => openAuth('register')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Register
                    </Button>
                  </>
                )}
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