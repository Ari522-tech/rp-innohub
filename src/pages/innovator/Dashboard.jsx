import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, FileText, Activity } from 'lucide-react';
import ProjectCard from '@/components/shared/ProjectCard';

// Mock Data
const myProjects = [
  { id: 1, title: 'AgriTech Drone', category: 'Agriculture', status: 'Published', description: 'Drone mapping for rural farms.', technologies: ['IoT', 'React'] },
  { id: 2, title: 'FinSmart App', category: 'Fintech', status: 'Draft', description: 'Micro-loans for small businesses.', technologies: ['Node', 'Flutter'] },
];

const InnovatorDashboard = () => {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Innovator Dashboard</h1>
          <p className="text-slate-500">Manage your projects and track applications.</p>
        </div>
        <Button className="gap-2">
          <PlusCircle size={18} /> Add New Project
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <FileText className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
            <Activity className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="calls">Recent Calls</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
            {/* 'Create New' Placeholder Card */}
            <button className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 h-full min-h-[400px] hover:border-blue-400 hover:bg-blue-50 transition-all group">
               <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                 <PlusCircle className="text-blue-600 w-8 h-8" />
               </div>
               <h3 className="font-semibold text-lg text-slate-700">Create New Project</h3>
               <p className="text-slate-500 text-sm text-center mt-2">Share your innovation with the world</p>
            </button>
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardContent className="p-10 text-center text-slate-500">
              No active applications found. Check out the "Calls" tab!
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InnovatorDashboard;