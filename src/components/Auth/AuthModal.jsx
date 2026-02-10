import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CardTitle, CardDescription } from '@/components/ui/card';

export const AuthModal = ({ isOpen, onClose, defaultView = 'login' }) => {
  const [view, setView] = useState(defaultView); // 'login' or 'register'
  
  // FIX 1: Add state for the active tab
  const [activeTab, setActiveTab] = useState('innovator'); 
  
  const navigate = useNavigate();

  // Reset view and tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setView(defaultView);
      setActiveTab('innovator'); // Reset tab to default
    }
  }, [isOpen, defaultView]);

  if (!isOpen) return null;

  const handleLogin = (role) => {
    onClose();
    if (role === 'innovator') navigate('/innovator');
    else navigate('/institution');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-lg bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-slide-up mx-4 max-h-[90vh] overflow-y-auto border border-slate-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center pt-8 pb-4 px-8 bg-slate-50 border-b border-slate-100">
          <CardTitle className="text-2xl font-bold text-rp-blue">
            {view === 'login' ? 'Welcome Back' : 'Join RP InnoHub'}
          </CardTitle>
          <CardDescription className="text-slate-500 mt-2">
            {view === 'login' 
              ? 'Login to access your dashboard.' 
              : 'Create an account to start innovating.'}
          </CardDescription>
        </div>

        {/* Body */}
        <div className="p-8">
          
          {/* FIX 2: Connect Tabs to State */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            
            {/* TABS LIST */}
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <TabsTrigger 
                value="innovator" 
                className="data-[state=active]:bg-white data-[state=active]:text-rp-blue data-[state=active]:shadow-sm font-medium transition-all text-slate-500 hover:text-rp-blue hover:bg-slate-200"
              >
                <User size={16} className="mr-2" /> Innovator
              </TabsTrigger>
              <TabsTrigger 
                value="institution" 
                className="data-[state=active]:bg-white data-[state=active]:text-rp-blue data-[state=active]:shadow-sm font-medium transition-all text-slate-500 hover:text-rp-blue hover:bg-slate-200"
              >
                <Building2 size={16} className="mr-2" /> Institution
              </TabsTrigger>
            </TabsList>

            {/* INNOVATOR FORM */}
            <TabsContent value="innovator" className="space-y-4 animate-in slide-in-from-right-2 duration-300">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin('innovator'); }} className="space-y-4">
                {view === 'register' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label className="text-slate-700 font-bold">First Name</Label>
                      <Input placeholder="John" required className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-slate-700 font-bold">Last Name</Label>
                      <Input placeholder="Doe" required className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                    </div>
                  </div>
                )}
                <div className="space-y-1">
                  <Label className="text-slate-700 font-bold">Student Email</Label>
                  <Input type="email" placeholder="student@rp.ac.rw" required className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                </div>
                <div className="space-y-1">
                  <Label className="text-slate-700 font-bold">Password</Label>
                  <Input type="password" required className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                </div>
                
                <Button className="w-full bg-rp-blue hover:bg-blue-900 text-white text-lg py-6 mt-2 font-bold shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5">
                  {view === 'login' ? 'Login as Innovator' : 'Create Innovator Account'} <ArrowRight size={18} className="ml-2" />
                </Button>
              </form>
            </TabsContent>

            {/* INSTITUTION FORM */}
            <TabsContent value="institution" className="space-y-4 animate-in slide-in-from-right-2 duration-300">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin('institution'); }} className="space-y-4">
                {view === 'register' && (
                  <div className="space-y-1">
                    <Label className="text-slate-700 font-bold">Organization Name</Label>
                    <Input placeholder="e.g. Ministry of ICT" required className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                  </div>
                )}
                <div className="space-y-1">
                  <Label className="text-slate-700 font-bold">{view === 'login' ? 'Work Email' : 'Official Email'}</Label>
                  <Input type="email" placeholder="partner@company.com" required className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                </div>
                <div className="space-y-1">
                  <Label className="text-slate-700 font-bold">Password</Label>
                  <Input type="password" required className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                </div>
                
                <Button className="w-full bg-rp-blue hover:bg-blue-900 text-white text-lg py-6 mt-2 font-bold shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5">
                  {view === 'login' ? 'Login as Partner' : 'Register Organization'} <ArrowRight size={18} className="ml-2" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
            {view === 'login' ? (
              <>Don't have an account? <button onClick={() => setView('register')} className="text-rp-blue font-bold hover:underline hover:text-blue-800 transition-colors">Register now</button></>
            ) : (
              <>Already have an account? <button onClick={() => setView('login')} className="text-rp-blue font-bold hover:underline hover:text-blue-800 transition-colors">Sign in</button></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};