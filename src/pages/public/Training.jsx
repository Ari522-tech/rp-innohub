import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, BookOpen } from 'lucide-react';

// ── Mock training data (replace with real data from backend later) ───────
const trainingData = [
  {
    id: 1,
    title: "IoT Systems Development Bootcamp",
    type: "Bootcamp",
    date: "10–15 Dec 2026",
    location: "RP Kigali College",
    description: "Hands-on training in building IoT solutions for real-world applications.",
    status: "Open",
  },
  {
    id: 2,
    title: "Entrepreneurship 101: From Idea to Market",
    type: "Workshop",
    date: "25 Nov 2026",
    location: "Online (Microsoft Teams)",
    description: "Learn the essentials of turning ideas into viable businesses.",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Advanced Python for Data Science",
    type: "Certification Course",
    date: "10 Jan – 10 Feb 2027",
    location: "RP Huye College",
    description: "Deep dive into Python tools and techniques for data analysis.",
    status: "Open",
  },
  {
    id: 4,
    title: "PCB Design & Fabrication Workshop",
    type: "Workshop",
    date: "30 Nov 2026",
    location: "RP Tumba College",
    description: "Practical introduction to printed circuit board design.",
    status: "Open",
  },
  {
    id: 5,
    title: "AI for Socio-Economic Impact",
    type: "Short Course",
    date: "15–20 Jan 2027",
    location: "Hybrid (Kigali + Online)",
    description: "Applying artificial intelligence to development challenges.",
    status: "Registration Open",
  },
];

const Training = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (replace with real fetch later)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Training & Upskilling
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Build your skills through workshops, bootcamps, and certification programs
          </p>
        </div>

        <Separator className="mb-10" />

        {/* Training Cards */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-neutral-200 rounded-md overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-6 w-4/5 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4 mb-3" />
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-28" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingData.map((training) => (
              <Card
                key={training.id}
                className="border-neutral-200 hover:border-neutral-300 transition-colors duration-150 flex flex-col"
              >
                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-medium text-base line-clamp-2 flex-1">
                      {training.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20 whitespace-nowrap"
                    >
                      {training.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-neutral-600 mb-5 flex-1 line-clamp-3">
                    {training.description}
                  </p>

                  <div className="text-xs text-neutral-600 space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{training.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{training.location}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-5 w-full border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                  >
                    Register / Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Optional CTA section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium text-slate-900 mb-4">
            Want to offer training?
          </h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Institutions and partners can publish training opportunities on the platform.
          </p>
          <Button className="bg-primary hover:bg-primary-700 text-white">
            Publish Training Opportunity
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Training;