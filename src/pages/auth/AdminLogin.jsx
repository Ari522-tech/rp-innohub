// src/pages/auth/AdminLogin.jsx
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
    // TODO: real admin auth logic (API call + token)
    // For now: simulate success
    navigate('/admin', { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-sm border border-slate-200 bg-white shadow-sm">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-slate-100 p-3 rounded-full w-fit border border-slate-200">
            <Lock size={32} className="text-slate-700" />
          </div>
          <div>
            <CardTitle className="text-2xl font-semibold tracking-tight text-slate-900">
              Admin Access
            </CardTitle>
            <CardDescription className="text-slate-600 mt-2">
              Restricted to authorized personnel only
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form className="space-y-5" onSubmit={handleAdminLogin}>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm flex items-start gap-3">
              <ShieldAlert size={18} className="shrink-0 mt-0.5" />
              <span>All access attempts are logged and monitored.</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-id" className="text-slate-700 font-medium">
                Admin ID
              </Label>
              <Input
                id="admin-id"
                type="text"
                placeholder="admin.sys"
                className="border-slate-300 focus-visible:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="secure-key" className="text-slate-700 font-medium">
                Security Key
              </Label>
              <Input
                id="secure-key"
                type="password"
                className="border-slate-300 focus-visible:ring-blue-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium mt-2"
            >
              Authenticate
            </Button>

            <div className="text-center pt-3">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                ← Back to public site
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;