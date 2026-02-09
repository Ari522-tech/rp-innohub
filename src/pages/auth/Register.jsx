import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Register = () => {
  return (
    <div className="flex justify-center items-center py-20 px-4 bg-slate-50 min-h-[80vh]">
      
      {/* CARD STYLE: White Background, Deep Shadow, Slide Up Animation */}
      <Card className="w-full max-w-md bg-white shadow-2xl border border-slate-100 border-t-4 border-t-rp-gold animate-slide-up">
        
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-rp-blue">Create an Account</CardTitle>
          <CardDescription className="text-slate-500">
            Join the RP Innovation Ecosystem
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="innovator" className="w-full">
            {/* Role Selection Tabs */}
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

            {/* --- INNOVATOR REGISTRATION FORM --- */}
            <TabsContent value="innovator">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fname" className="text-slate-700">First Name</Label>
                    <Input id="fname" placeholder="John" required className="bg-white border-slate-300 focus:border-rp-blue" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lname" className="text-slate-700">Last Name</Label>
                    <Input id="lname" placeholder="Doe" required className="bg-white border-slate-300 focus:border-rp-blue" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Student Email</Label>
                  <Input id="email" type="email" placeholder="student@rp.ac.rw" required className="bg-white border-slate-300 focus:border-rp-blue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700">Create Password</Label>
                  <Input id="password" type="password" required className="bg-white border-slate-300 focus:border-rp-blue" />
                </div>

                <Button className="w-full bg-rp-blue text-white font-bold hover:bg-blue-900 shadow-md hover:shadow-lg transition-all py-5 mt-2">
                  Register as Innovator
                </Button>
              </form>
            </TabsContent>

            {/* --- INSTITUTION REGISTRATION FORM --- */}
            <TabsContent value="institution">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700">Institution / Company Name</Label>
                  <Input id="company" placeholder="e.g. Ministry of ICT" required className="bg-white border-slate-300 focus:border-rp-blue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rep-name" className="text-slate-700">Representative Name</Label>
                  <Input id="rep-name" placeholder="Full Name" required className="bg-white border-slate-300 focus:border-rp-blue" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="work-email" className="text-slate-700">Work Email</Label>
                  <Input id="work-email" type="email" placeholder="admin@company.com" required className="bg-white border-slate-300 focus:border-rp-blue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inst-password" className="text-slate-700">Create Password</Label>
                  <Input id="inst-password" type="password" required className="bg-white border-slate-300 focus:border-rp-blue" />
                </div>

                <Button className="w-full bg-rp-blue text-white font-bold hover:bg-blue-900 shadow-md hover:shadow-lg transition-all py-5 mt-2">
                  Register as Partner
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="text-rp-blue font-bold hover:underline hover:text-rp-gold transition-colors">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;