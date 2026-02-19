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
const allCalls = [
  {
    id: 1,
    title: 'Digital Health Records System',
    institution: 'Ministry of Health',
    status: 'Open',
    daysLeft: 12,
    budget: '15M – 25M RWF',
    deadline: '30 Nov 2026',
    description: 'Secure, scalable digitization of patient records across 50+ health facilities.',
    scope: 'Nationwide clinic integration',
  },
  {
    id: 2,
    title: 'Smart Traffic Management',
    institution: 'City of Kigali',
    status: 'Open',
    daysLeft: 5,
    budget: '50M+ RWF',
    deadline: '20 Dec 2026',
    description: 'AI-powered adaptive traffic signal control to reduce peak-hour congestion.',
    scope: 'Urban traffic optimization',
  },
  {
    id: 3,
    title: 'Coffee Supply Chain Tracker',
    institution: 'NAEB',
    status: 'Open',
    daysLeft: 20,
    budget: '18M RWF',
    deadline: '15 Jan 2027',
    description: 'End-to-end traceability system for coffee from farm to export.',
    scope: 'Agricultural supply chain',
  },
  {
    id: 4,
    title: 'E-Government Portal Enhancement',
    institution: 'MINICT',
    status: 'Open',
    daysLeft: 18,
    budget: '30M RWF',
    deadline: '10 Feb 2027',
    description: 'Upgrade of public service platform with improved authentication and integration.',
    scope: 'Public service digitization',
  },
  {
    id: 5,
    title: 'Smart Irrigation Control',
    institution: 'RAB',
    status: 'Open',
    daysLeft: 25,
    budget: '20M RWF',
    deadline: '28 Feb 2027',
    description: 'IoT-based irrigation system for rice farmers in Rwamagana district.',
    scope: 'Agricultural water management',
  },
];

const Calls = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (later replace with real fetch)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredCalls = allCalls.filter((call) => {
    const matchesSearch =
      call.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || call.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Calls for IT Projects
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Browse opportunities from institutions seeking innovative IT solutions
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by title or institution..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-neutral-300 focus-visible:ring-primary/30 focus-visible:border-primary/50"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px] border-neutral-300">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Statuses</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Draft">Draft / Upcoming</SelectItem>
              <SelectItem value="Closed">Closed</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="border-neutral-300 text-neutral-700 hover:bg-neutral-100"
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('All');
            }}
          >
            Clear
          </Button>
        </div>

        <Separator className="mb-8" />

        {/* Calls Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-neutral-200 rounded-md overflow-hidden">
                <div className="p-5 space-y-3">
                  <Skeleton className="h-6 w-4/5 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-28" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredCalls.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCalls.map((call) => (
              <Card
                key={call.id}
                className="border-neutral-200 hover:border-neutral-300 transition-colors duration-150 flex flex-col"
              >
                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-medium text-base line-clamp-2 flex-1">
                      {call.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        call.status === 'Open'
                          ? 'bg-success/10 text-success-700 border-success/20'
                          : 'bg-warning/10 text-warning-700 border-warning/20'
                      }`}
                    >
                      {call.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-neutral-600 mb-4 flex-1 line-clamp-3">
                    {call.description}
                  </p>

                  <div className="text-xs text-neutral-600 space-y-1.5 mt-auto">
                    <div className="flex justify-between">
                      <span className="font-medium">Institution:</span>
                      <span>{call.institution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Budget:</span>
                      <span>{call.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Deadline:</span>
                      <span>{call.deadline}</span>
                    </div>
                    {call.daysLeft && (
                      <div className="flex justify-between font-medium mt-2 pt-2 border-t border-neutral-200">
                        <span>Days left:</span>
                        <span
                          className={
                            call.daysLeft <= 7
                              ? 'text-danger'
                              : call.daysLeft <= 14
                              ? 'text-warning'
                              : 'text-success'
                          }
                        >
                          {call.daysLeft}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-neutral-300 rounded-md bg-neutral-50">
            <h3 className="text-lg font-medium text-neutral-800 mb-2">
              No calls found
            </h3>
            <p className="text-neutral-600 mb-4">
              Try changing your search term or status filter.
            </p>
            <Button
              variant="outline"
              className="border-neutral-300"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('All');
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

export default Calls;