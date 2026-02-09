import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CallCard from '@/components/shared/CallCard';

// --- MOCK DATA: OPEN CALLS ---
const allCalls = [
  {
    id: 1,
    title: 'Digital Health Records System',
    institution: 'Ministry of Health',
    status: 'Open',
    daysLeft: 12,
    description: 'We are looking for a secure, scalable solution to digitize patient records across 50 clinics.',
    budget: '15M - 25M RWF',
    deadline: 'Nov 30, 2024',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Smart Traffic Management',
    institution: 'City of Kigali',
    status: 'Open',
    daysLeft: 5,
    description: 'Develop an AI-powered traffic light control system to reduce congestion during peak hours.',
    budget: '50M+ RWF',
    deadline: 'Nov 20, 2024',
    image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Coffee Supply Chain Tracker',
    institution: 'NAEB',
    status: 'Open',
    daysLeft: 20,
    description: 'Blockchain-based system to trace coffee beans from washing stations to export.',
    budget: '18M RWF',
    deadline: 'Dec 15, 2024',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Tourism VR Experience',
    institution: 'RDB',
    status: 'Draft',
    daysLeft: 8,
    description: 'Virtual Reality tour experience for Akagera National Park.',
    budget: '30M RWF',
    deadline: 'Dec 01, 2024',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e2831f873?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Waste Management App',
    institution: 'EnviroServe',
    status: 'Open',
    daysLeft: 15,
    description: 'A platform to schedule and track electronic waste collection from households.',
    budget: '10M RWF',
    deadline: 'Dec 10, 2024',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Smart Irrigation System',
    institution: 'RAB',
    status: 'Open',
    daysLeft: 25,
    description: 'IoT-based irrigation control system for rice farmers in Rwamagana.',
    budget: '20M RWF',
    deadline: 'Dec 20, 2024',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03c7799a4?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Fintech API Gateway',
    institution: 'BK TechHouse',
    status: 'Open',
    daysLeft: 10,
    description: 'Secure API gateway for integrating third-party payment providers.',
    budget: '40M RWF',
    deadline: 'Nov 28, 2024',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=200&auto=format&fit=crop'
  }
];

const Calls = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter Logic
  const filteredCalls = allCalls.filter(call => {
    const matchesSearch = call.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          call.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || call.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-10">
      <div className="container mx-auto px-4 space-y-12">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-rp-blue">
            Find <span className="text-rp-gold">Opportunities</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Browse open calls from government institutions and industry partners looking for your solutions.
          </p>
        </div>

        {/* 2. Search & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between animate-slide-up delay-100">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input 
              placeholder="Search by title or institution..." 
              className="pl-10 bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-rp-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-4 w-full md:w-auto">
             <Select onValueChange={setStatusFilter} defaultValue="All">
              <SelectTrigger className="w-[180px] bg-slate-50 border-slate-200 text-slate-700 focus:ring-rp-blue">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200 text-slate-700">
                <SelectItem value="All">All Statuses</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Draft">Draft / Upcoming</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-rp-blue hover:bg-blue-900 text-white">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        {/* 3. Calls Grid */}
        {filteredCalls.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCalls.map((call, idx) => (
              <div key={call.id} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <CallCard call={call} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
            <h3 className="text-xl text-slate-900 font-semibold">No calls found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search criteria.</p>
            <Button 
              variant="link" 
              className="text-rp-blue mt-4 font-bold" 
              onClick={() => {setSearchTerm(""); setStatusFilter("All");}}
            >
              Clear Filters
            </Button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Calls;