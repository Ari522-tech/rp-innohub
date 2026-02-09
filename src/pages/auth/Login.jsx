import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // In a real backend, you'd validate credentials here.
    if (role === 'innovator') navigate('/innovator');
    else navigate('/institution');
  };

  return (
    <div className="flex justify-center items-center py-20 px-4 bg-slate-50 min-h-[80vh]">
      
      {/* CARD STYLE: White Background, Deep Shadow, Slide Up Animation */}
      <Card className="w-full max-w-md bg-white shadow-2xl border border-slate-100 border-t-4 border-t-rp-blue animate-slide-up">
        
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-rp-blue">Welcome Back</CardTitle>
          <CardDescription className="text-slate-500">
            Sign in to access your dashboard
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="innovator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-blue-900 p-1 rounded-lg">
              <TabsTrigger 
                value="innovator" 
                className="data-[state=active]:bg-white data-[state=active]:text-rp-blue data-[state=active]:shadow-sm font-medium"
              >
                Innovator
              </TabsTrigger>
              <TabsTrigger 
                value="institution"
                className="data-[state=active]:bg-white data-[state=active]:text-rp-blue data-[state=active]:shadow-sm font-medium"
              >
                Institution
              </TabsTrigger>
            </TabsList>

            {/* Innovator Login Form */}
            <TabsContent value="innovator">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin('innovator'); }}>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Student Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="student@rp.ac.rw" 
                    required 
                    className="bg-white border-slate-300 text-slate-900 focus:border-rp-blue focus:ring-rp-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    className="bg-white border-slate-300 text-slate-900 focus:border-rp-blue focus:ring-rp-blue"
                  />
                </div>
                <Button type="submit" className="w-full bg-rp-blue text-white font-bold hover:bg-blue-900 shadow-md hover:shadow-lg transition-all py-5">
                  Login as Innovator
                </Button>
              </form>
            </TabsContent>

            {/* Institution Login Form */}
            <TabsContent value="institution">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin('institution'); }}>
                <div className="space-y-2">
                  <Label htmlFor="inst-email" className="text-slate-700">Institution/Staff Email</Label>
                  <Input 
                    id="inst-email" 
                    type="email" 
                    placeholder="admin@company.com" 
                    required 
                    className="bg-white border-slate-300 text-slate-900 focus:border-rp-blue focus:ring-rp-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inst-pass" className="text-slate-700">Password</Label>
                  <Input 
                    id="inst-pass" 
                    type="password" 
                    required 
                    className="bg-white border-slate-300 text-slate-900 focus:border-rp-blue focus:ring-rp-blue"
                  />
                </div>
                <Button type="submit" className="w-full bg-rp-blue text-white font-bold hover:bg-blue-900 shadow-md hover:shadow-lg transition-all py-5">
                  Login as Institution
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-rp-blue font-bold hover:underline hover:text-rp-gold transition-colors">
              Register now
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;