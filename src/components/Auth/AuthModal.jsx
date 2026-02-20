// src/components/auth/AuthModal.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, Building2, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CardTitle, CardDescription } from '@/components/ui/card';

export const AuthModal = ({ isOpen, onClose, defaultView = 'login' }) => {
  const [view, setView] = useState(defaultView);
  const [activeTab, setActiveTab] = useState('innovator');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setView(defaultView);
      setActiveTab('innovator');
      setError(null);
    }
  }, [isOpen, defaultView]);

  if (!isOpen) return null;

  const getRedirectPath = (role) => {
    switch (role) {
      case 'innovator':
        return '/innovator';
      case 'institution':
        return '/institution';
      case 'admin':
        return '/admin';
      default:
        return '/';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // In real application → replace this with actual API call
    // Example:
    // const formData = new FormData(e.target);
    // const email = formData.get('email');
    // const password = formData.get('password');
    // const response = await api.post('/auth/login', { email, password, role: activeTab });
    // const { user, token } = response.data;
    // saveToken(token);
    // setUser(user);
    // navigate(getRedirectPath(user.role));

    // Simulated success (remove in production)
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // For demo purposes — in reality this comes from backend
      const simulatedRole = activeTab;

      // You can also simulate different outcomes
      // if (Math.random() > 0.8) throw new Error('Invalid credentials');

      onClose();
      navigate(getRedirectPath(simulatedRole), { replace: true });
    } catch (err) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md bg-white rounded-xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center pt-10 pb-6 px-8 border-b border-slate-200">
          <CardTitle className="text-2xl font-semibold text-slate-900">
            {view === 'login' ? 'Sign In' : 'Create Account'}
          </CardTitle>
          <CardDescription className="text-slate-600 mt-2">
            {view === 'login'
              ? 'Access your role-specific dashboard'
              : 'Join as innovator, institution or administrator'}
          </CardDescription>
        </div>

        {/* Tabs & Forms */}
        <div className="p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger
                value="innovator"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-white transition-colors"
              >
                <User size={16} className="mr-2" />
                Innovator
              </TabsTrigger>
              <TabsTrigger
                value="institution"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-white transition-colors"
              >
                <Building2 size={16} className="mr-2" />
                Institution
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-white transition-colors"
              >
                <Shield size={16} className="mr-2" />
                Admin
              </TabsTrigger>
            </TabsList>

            {/* Common Form Content (shared between tabs) */}
            <TabsContent value={activeTab} className="space-y-6 mt-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {view === 'register' && (
                  <>
                    {activeTab === 'innovator' && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium">First Name</Label>
                          <Input placeholder="Jean" required />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium">Last Name</Label>
                          <Input placeholder="Paul" required />
                        </div>
                      </div>
                    )}

                    {activeTab === 'institution' && (
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium">Organization Name</Label>
                        <Input placeholder="Ministry of ICT or Polytechnic Campus" required />
                      </div>
                    )}

                    {activeTab === 'admin' && (
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium">Admin Identifier</Label>
                        <Input placeholder="admin identifier or code" required />
                      </div>
                    )}
                  </>
                )}

                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">
                    {view === 'login' ? 'Email' : 'Official / Student Email'}
                  </Label>
                  <Input
                    type="email"
                    placeholder={
                      activeTab === 'innovator'
                        ? 'student@rp.ac.rw'
                        : activeTab === 'institution'
                        ? 'office@institution.rw'
                        : 'admin@rp.ac.rw'
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Password</Label>
                  <Input type="password" required />
                </div>

                {error && (
                  <div className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-md p-3">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  {isSubmitting ? 'Please wait...' : (
                    <>
                      {view === 'login' ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Switch between login/register */}
          <div className="mt-8 text-center text-sm text-slate-600">
            {view === 'login' ? (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setView('register')}
                  className="text-blue-700 font-medium hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setView('login')}
                  className="text-blue-700 font-medium hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};