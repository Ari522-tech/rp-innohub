import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Eye } from 'lucide-react';

const ProjectManagement = () => {
  // Mock Data for Pending Items
  const pendingProjects = [
    { id: 101, title: 'Drone Delivery Prototype', author: 'Alice M.', type: 'Innovation', date: '2024-11-10' },
    { id: 102, title: 'Bio-Gas Plant Model', author: 'Eric K.', type: 'Innovation', date: '2024-11-11' },
  ];

  const pendingCalls = [
    { id: 201, title: 'Call for Green Energy Solutions', author: 'MinInfra', type: 'Call', date: '2024-11-09' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Management Console</h1>
          <p className="text-slate-400">Moderate projects and institutional calls.</p>
        </div>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="bg-slate-800 text-slate-400 border border-slate-700">
          <TabsTrigger value="projects">Pending Projects <Badge className="ml-2 bg-rp-gold text-rp-blue">2</Badge></TabsTrigger>
          <TabsTrigger value="calls">Pending Calls <Badge className="ml-2 bg-rp-blue text-white">1</Badge></TabsTrigger>
        </TabsList>

        {/* PROJECTS TAB */}
        <TabsContent value="projects" className="space-y-4 mt-4">
          {pendingProjects.map((item) => (
            <Card key={item.id} className="bg-slate-800 border-slate-700 text-slate-200">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-lg">IP</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-slate-400">Submitted by {item.author} • {item.date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700"><Eye size={16} /></Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700"><Check size={16} /> Approve</Button>
                  <Button size="sm" variant="destructive"><X size={16} /> Reject</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* CALLS TAB */}
        <TabsContent value="calls" className="space-y-4 mt-4">
           {pendingCalls.map((item) => (
            <Card key={item.id} className="bg-slate-800 border-slate-700 text-slate-200">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-lg">CL</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-slate-400">Posted by {item.author} • {item.date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700"><Eye size={16} /></Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700"><Check size={16} /> Approve</Button>
                  <Button size="sm" variant="destructive"><X size={16} /> Reject</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectManagement;