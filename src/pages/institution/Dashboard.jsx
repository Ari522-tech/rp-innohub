import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstitutionDashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* 1. Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Institution Portal</h1>
          <p className="text-slate-500">Manage your calls for projects and review student applications.</p>
        </div>
        <Link to="/institution/post-call">
          <Button className="bg-rp-blue hover:bg-blue-900 text-white shadow-lg shadow-rp-blue/20">
            <Plus className="mr-2 h-4 w-4" /> Post New Call
          </Button>
        </Link>
      </div>

      {/* 2. Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-lg border-l-4 border-l-rp-blue hover:-translate-y-1 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 uppercase">Active Calls</CardTitle>
            <FileText className="h-4 w-4 text-rp-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">3</div>
            <p className="text-xs text-slate-500 mt-1">2 expiring soon</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-l-4 border-l-rp-gold hover:-translate-y-1 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 uppercase">Total Applicants</CardTitle>
            <Users className="h-4 w-4 text-rp-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">45</div>
            <p className="text-xs text-slate-500 mt-1">+12 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-l-4 border-l-green-500 hover:-translate-y-1 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 uppercase">Projects Funded</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">8</div>
            <p className="text-xs text-slate-500 mt-1">Total Impact: 120M RWF</p>
          </CardContent>
        </Card>
      </div>

      {/* 3. Recent Applicants Table */}
      <Card className="bg-white shadow-md border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg text-slate-800">Recent Applications</CardTitle>
          <Link to="/institution/applicants">
            <Button variant="ghost" size="sm" className="text-rp-blue hover:text-rp-gold">View All</Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-rp-blue/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-rp-blue/10 flex items-center justify-center text-rp-blue font-bold">
                    JP
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Jean Paul (Student)</h4>
                    <p className="text-sm text-slate-500">Applied for: <span className="text-rp-blue font-medium">Digital Health Records</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Pending Review</span>
                  <Button size="sm" variant="outline" className="hidden md:flex">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionDashboard;