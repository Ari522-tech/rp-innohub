import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldAlert, Lock } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // In real app, verify admin credentials here
    navigate('/admin');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 px-4">
      <Card className="w-full max-w-sm bg-slate-800 border-slate-700 shadow-2xl text-slate-100">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-red-900/30 p-3 rounded-full w-fit border border-red-500/30">
            <Lock size={32} className="text-red-500" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold tracking-tight text-white">Restricted Access</CardTitle>
            <CardDescription className="text-slate-400">
              Authorized Personnel Only
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <form className="space-y-4" onSubmit={handleAdminLogin}>
            <div className="p-3 bg-red-950/40 border border-red-900/50 rounded-md flex items-start gap-3 text-red-200 text-sm">
              <ShieldAlert size={18} className="shrink-0 mt-0.5" />
              <span>This system activity is monitored. Unauthorized access attempts will be logged.</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-id" className="text-slate-300">Admin ID</Label>
              <Input 
                id="admin-id" 
                type="text" 
                placeholder="admin.sys" 
                className="bg-slate-900 border-slate-700 text-white focus:ring-red-500 focus:border-red-500" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="secure-key" className="text-slate-300">Security Key</Label>
              <Input 
                id="secure-key" 
                type="password" 
                className="bg-slate-900 border-slate-700 text-white focus:ring-red-500 focus:border-red-500" 
                required 
              />
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-5 shadow-lg shadow-red-900/20 mt-2">
              Authenticate
            </Button>
            
            <div className="text-center pt-2">
                <button 
                  type="button" 
                  onClick={() => navigate('/')} 
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  &larr; Return to Public Site
                </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;