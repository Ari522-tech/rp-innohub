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
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-primary/10 p-1.5 rounded-md">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-lg text-slate-900 tracking-tight">
                RP Center
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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
                        ? 'text-primary font-semibold'
                        : 'text-neutral-700 hover:text-primary'
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
                    className="text-neutral-700 hover:text-primary hover:bg-neutral-50 px-5 text-sm font-medium"
                  >
                    Login
                  </Button>

                  <Button
                    onClick={() => openAuth('register')}
                    className="bg-primary hover:bg-primary-700 text-white px-6 text-sm font-medium"
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
                className="p-2 -mr-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 shadow-sm">
            <div className="px-4 py-5 space-y-1.5">
              {isNavLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-11 w-full rounded-md" />
                ))
              ) : (
                navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary/5 text-primary'
                        : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))
              )}

              <div className="pt-6 mt-3 border-t border-neutral-200 flex flex-col gap-3">
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
                      className="w-full border-neutral-300 hover:bg-neutral-50 text-neutral-700"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => openAuth('register')}
                      className="w-full bg-primary hover:bg-primary-700 text-white"
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