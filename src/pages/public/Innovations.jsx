import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

// ── Mock data (replace with real API data later) ────────────────────────────
const allProjects = [
  {
    id: 1,
    title: 'Solarify Rwanda',
    category: 'Energy',
    status: 'Active',
    description: 'Affordable solar monitoring system using IoT sensors for rural households.',
    technologies: ['IoT', 'React', 'MQTT'],
    impact: 'Reduced energy costs by 30% for over 500 households',
  },
  {
    id: 2,
    title: 'E-Learning Hub',
    category: 'Education',
    status: 'Completed',
    description: 'Digital library and peer tutoring platform for Rwanda Polytechnic students.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    impact: 'Improved learning outcomes for 2,000+ students',
  },
  {
    id: 3,
    title: 'AgriMarket Connect',
    category: 'Agriculture',
    status: 'Prototype',
    description: 'Direct market linkage platform for smallholder farmers in rural districts.',
    technologies: ['Flutter', 'Firebase'],
    impact: 'Increased farmer income by connecting to 1,500+ buyers',
  },
  {
    id: 4,
    title: 'TeleHealth Rwanda',
    category: 'Health',
    status: 'Active',
    description: 'Telemedicine platform enabling remote consultations and health record access.',
    technologies: ['React Native', 'Node.js'],
    impact: 'Served 10,000+ consultations in underserved areas',
  },
  {
    id: 5,
    title: 'Smart Traffic Management',
    category: 'Transport',
    status: 'In Development',
    description: 'AI-based system to optimize traffic flow in urban areas.',
    technologies: ['Python', 'TensorFlow', 'IoT'],
  },
  {
    id: 6,
    title: 'Coffee Supply Chain Tracker',
    category: 'Agriculture',
    status: 'Active',
    description: 'Blockchain-based traceability from farm to export.',
    technologies: ['Solidity', 'React', 'Node.js'],
  },
];

const Innovations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (later replace with real data fetch)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || project.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Our Innovations
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Discover socio-economic IT solutions developed by Rwanda Polytechnic innovators
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-slate-300 focus-visible:ring-[#0a77bc]/30"
            />
          </div>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[180px] border-slate-300">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Agriculture">Agriculture</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Energy">Energy</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              <SelectItem value="Transport">Transport</SelectItem>
              <SelectItem value="Fintech">Fintech</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-100"
            onClick={() => {
              setSearchTerm('');
              setCategory('All');
            }}
          >
            Clear
          </Button>
        </div>

        <Separator className="mb-8" />

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-slate-200 rounded-md overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-slate-200 hover:border-slate-300 transition-colors duration-150 overflow-hidden flex flex-col"
              >
                {/* Optional image - you can remove if you prefer text-only cards */}
                <div className="h-48 bg-slate-100">
                  {/* <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  /> */}
                </div>

                <CardContent className="p-5 flex flex-col flex-1">
                  <h3 className="font-medium text-base mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {project.impact && (
                    <p className="text-xs text-slate-500 mb-4">
                      <span className="font-medium">Impact:</span> {project.impact}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="text-slate-600">
                      {project.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-slate-300 rounded-md bg-slate-50">
            <h3 className="text-lg font-medium text-slate-800 mb-2">
              No projects found
            </h3>
            <p className="text-slate-500 mb-4">
              Try changing your search term or category filter.
            </p>
            <Button
              variant="outline"
              className="border-slate-300"
              onClick={() => {
                setSearchTerm('');
                setCategory('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Innovations;