import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
  // Mock Data
  const projects = [
    { id: 1, title: 'Smart Irrigation', category: 'Agriculture', status: 'Active', date: 'Oct 24, 2024', views: 120 },
    { id: 2, title: 'Traffic AI', category: 'Transport', status: 'Draft', date: 'Nov 01, 2024', views: 0 },
    { id: 3, title: 'E-Learning Hub', category: 'Education', status: 'Under Review', date: 'Sep 15, 2024', views: 340 },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-slate-900">My Projects</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
             <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
             <Input placeholder="Search projects..." className="pl-9 bg-white" />
          </div>
          <Link to="/innovator/add-project">
            <Button className="bg-rp-blue text-white hover:bg-blue-900">
              <Plus className="h-4 w-4 md:mr-2" /> <span className="hidden md:inline">New Project</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Image & Info */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="h-16 w-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                   {/* Placeholder Image */}
                   <img src={`https://source.unsplash.com/random/100x100?tech&sig=${project.id}`} className="h-full w-full object-cover rounded-lg" alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-500">{project.category} • Posted {project.date}</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <Badge variant={project.status === 'Active' ? 'default' : 'outline'} className={
                    project.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 
                    project.status === 'Draft' ? 'bg-slate-100 text-slate-600' : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                }>
                  {project.status}
                </Badge>
                
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Eye className="h-4 w-4" /> {project.views}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-rp-blue">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;