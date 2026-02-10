import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* 1. Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-slate-400">Platform overview and pending actions.</p>
      </div>

      {/* 2. Key Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-400 uppercase">Total Users</CardTitle>
            <Users className="h-4 w-4 text-rp-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,240</div>
            <p className="text-xs text-slate-500 mt-1">+12 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-400 uppercase">Pending Projects</CardTitle>
            <AlertCircle className="h-4 w-4 text-rp-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-xs text-rp-gold mt-1">Action required</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-400 uppercase">Active Calls</CardTitle>
            <FileText className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
            <p className="text-xs text-slate-500 mt-1">3 closing soon</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-400 uppercase">Total Impact</CardTitle>
            <CheckCircle className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">450+</div>
            <p className="text-xs text-slate-500 mt-1">Innovations Published</p>
          </CardContent>
        </Card>
      </div>

      {/* 3. Recent Activity / Pending Approvals Preview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader>
            <CardTitle>Recent Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-rp-blue/20 rounded-md flex items-center justify-center text-rp-blue font-bold">
                      P{i}
                    </div>
                    <div>
                      <p className="font-bold text-sm">Smart Irrigation v{i}</p>
                      <p className="text-xs text-slate-400">By Jean Paul • 2 hours ago</p>
                    </div>
                  </div>
                  <button className="text-xs bg-rp-blue px-3 py-1 rounded hover:bg-blue-600">Review</button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg text-yellow-200 text-sm">
                ⚠️ High traffic detected on the "Calls" page. Server load at 45%.
              </div>
              <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg text-green-200 text-sm">
                ✅ Daily backup completed successfully at 03:00 AM.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;