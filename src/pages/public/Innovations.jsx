import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProjectCard from '@/components/shared/ProjectCard';

// --- MOCK DATA: ALL INNOVATIONS ---
const allProjects = [
  { 
    id: 1, 
    title: 'Solarify Rwanda', 
    category: 'Energy', 
    status: 'Active', 
    description: 'Affordable solar monitoring for rural households using IoT sensors developed in Kigali.', 
    technologies: ['IoT', 'React', 'MQTT'],
    image: 'https://solektra.rw/wp-content/uploads/2023/01/solar-1024x684.png'
  },
  { 
    id: 2, 
    title: 'E-Learning Hub', 
    category: 'Education', 
    status: 'Completed', 
    description: 'A platform connecting RP students with digital libraries and peer tutoring.', 
    technologies: ['Python', 'Django', 'PostgreSQL'],
    image: 'https://tse4.mm.bing.net/th/id/OIP.jN3HpNEVzhp7-2ihardOKAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  { 
    id: 3, 
    title: 'AgriMarket Connect', 
    category: 'Agriculture', 
    status: 'Prototype', 
    description: 'Connecting small-scale farmers directly to urban markets in Musanze and Huye.', 
    technologies: ['Flutter', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 4, 
    title: 'MobiCash Flow', 
    category: 'Fintech', 
    status: 'Active', 
    description: 'Simplifying mobile money integration for small roadside businesses.', 
    technologies: ['Node.js', 'USSD API'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 5, 
    title: 'TeleHealth Rwanda', 
    category: 'Health', 
    status: 'Under Review', 
    description: 'Remote consultation app linking rural health centers to specialists in Kigali.', 
    technologies: ['React Native', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 6, 
    title: 'Smart Moto', 
    category: 'Transport', 
    status: 'Concept', 
    description: 'GPS tracking and safety monitoring for motorcycle taxis.', 
    technologies: ['Google Maps API', 'IoT'],
    image: 'https://images.unsplash.com/photo-1596484552993-87f5e317c828?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 7, 
    title: 'Kigali Transit App', 
    category: 'Transport', 
    status: 'Active', 
    description: 'Real-time bus schedules and route planning for Kigali public transport.', 
    technologies: ['Flutter', 'Google Maps'],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 8, 
    title: 'MadeInRwanda Market', 
    category: 'E-Commerce', 
    status: 'Prototype', 
    description: 'Digital marketplace exclusively for locally manufactured products.', 
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 9, 
    title: 'AquaSmart', 
    category: 'Agriculture', 
    status: 'Concept', 
    description: 'Automated irrigation system for rice paddies in Rwamagana.', 
    technologies: ['Arduino', 'C++'],
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03c7799a4?q=80&w=800&auto=format&fit=crop'
  }
];

const Innovations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // Filter Logic
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || project.category === category;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-10">
      <div className="container mx-auto px-4 space-y-12">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-rp-blue">
            Innovation <span className="text-rp-gold">Gallery</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Explore the cutting-edge solutions developed by Rwanda Polytechnic's brightest minds.
          </p>
        </div>

        {/* 2. Search & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between animate-slide-up delay-100">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input 
              placeholder="Search projects..." 
              className="pl-10 bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-rp-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-4 w-full md:w-auto">
             <Select onValueChange={setCategory} defaultValue="All">
              <SelectTrigger className="w-[180px] bg-slate-50 border-slate-200 text-slate-700 focus:ring-rp-blue">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200 text-slate-700">
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Agriculture">Agriculture</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Fintech">Fintech</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Transport">Transport</SelectItem>
                <SelectItem value="Energy">Energy</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-rp-blue hover:bg-blue-900 text-white shadow-md">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        {/* 3. Project Grid (Gallery) */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300 shadow-sm">
            <h3 className="text-xl text-slate-900 font-semibold">No projects found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search or filter criteria.</p>
            <Button 
              variant="link" 
              className="text-rp-blue mt-4 font-bold" 
              onClick={() => {setSearchTerm(""); setCategory("All");}}
            >
              Clear Filters
            </Button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Innovations;