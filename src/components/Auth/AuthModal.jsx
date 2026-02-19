import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CardTitle, CardDescription } from '@/components/ui/card';

export const AuthModal = ({ isOpen, onClose, defaultView = 'login' }) => {
  const [view, setView] = useState(defaultView);
  const [activeTab, setActiveTab] = useState('innovator');

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setView(defaultView);
      setActiveTab('innovator');
    }
  }, [isOpen, defaultView]);

  if (!isOpen) return null;

  const handleSubmit = (e, role) => {
    e.preventDefault();
    onClose();
    // In real app: call authentication API here
    if (role === 'innovator') {
      navigate('/innovator/dashboard');
    } else {
      navigate('/institution/dashboard');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-xl border border-neutral-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center pt-10 pb-6 px-8 border-b border-neutral-200">
          <CardTitle className="text-2xl font-semibold text-slate-900">
            {view === 'login' ? 'Sign In' : 'Create Account'}
          </CardTitle>
          <CardDescription className="text-neutral-600 mt-2">
            {view === 'login'
              ? 'Access your dashboard and opportunities'
              : 'Join the platform to publish or discover innovations'}
          </CardDescription>
        </div>

        {/* Tabs & Forms */}
        <div className="p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-neutral-100 p-1 rounded-lg border border-neutral-200">
              <TabsTrigger
                value="innovator"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-medium text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-all duration-200"
              >
                <User size={16} className="mr-2" />
                Innovator
              </TabsTrigger>
              <TabsTrigger
                value="institution"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-medium text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-all duration-200"
              >
                <Building2 size={16} className="mr-2" />
                Institution
              </TabsTrigger>
            </TabsList>

            {/* Innovator Form */}
            <TabsContent value="innovator" className="space-y-6">
              <form
                onSubmit={(e) => handleSubmit(e, 'innovator')}
                className="space-y-6"
              >
                {view === 'register' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-neutral-700 font-medium">First Name</Label>
                      <Input placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-neutral-700 font-medium">Last Name</Label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-neutral-700 font-medium">
                    {view === 'login' ? 'Student Email' : 'Email'}
                  </Label>
                  <Input
                    type="email"
                    placeholder="student@rp.ac.rw"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-neutral-700 font-medium">Password</Label>
                  <Input type="password" required />
                </div>

                {/* Animated button */}
                <Button
                  type="submit"
                  className="group w-full bg-[#0a77bc] hover:bg-[#095e99] text-white py-6 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                  {view === 'login' ? 'Sign In as Innovator' : 'Create Innovator Account'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </form>
            </TabsContent>

            {/* Institution Form */}
            <TabsContent value="institution" className="space-y-6">
              <form
                onSubmit={(e) => handleSubmit(e, 'institution')}
                className="space-y-6"
              >
                {view === 'register' && (
                  <div className="space-y-2">
                    <Label className="text-neutral-700 font-medium">Organization Name</Label>
                    <Input placeholder="e.g. Ministry of ICT" required />
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-neutral-700 font-medium">
                    {view === 'login' ? 'Work Email' : 'Official Email'}
                  </Label>
                  <Input type="email" placeholder="partner@company.rw" required />
                </div>

                <div className="space-y-2">
                  <Label className="text-neutral-700 font-medium">Password</Label>
                  <Input type="password" required />
                </div>

                {/* Animated button */}
                <Button
                  type="submit"
                  className="group w-full bg-[#0a77bc] hover:bg-[#095e99] text-white py-6 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                  {view === 'login' ? 'Sign In as Institution' : 'Register Organization'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Switch between login/register */}
          <div className="mt-8 text-center text-sm text-neutral-600">
            {view === 'login' ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => setView('register')}
                  className="text-primary font-medium hover:underline transition-colors"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className="text-primary font-medium hover:underline transition-colors"
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