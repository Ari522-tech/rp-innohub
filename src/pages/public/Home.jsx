// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ArrowRight,
  Users,
  Briefcase,
  Search,
  Award,
  BookOpen,
  Mail,
  Globe,
} from 'lucide-react';
import { AuthModal } from '@/components/auth/AuthModal'; // ← Import the modal

// ── Fake data (later from backend) ──────────────────────────────────────
const featuredProjects = [
  {
    id: 1,
    title: "Solarify Rwanda",
    category: "Energy",
    status: "Active",
    shortDesc: "IoT solar monitoring for rural households",
    impact: "Reduced energy costs by 30% for 500+ homes",
  },
  {
    id: 2,
    title: "E-Learning Hub",
    category: "Education",
    status: "Completed",
    shortDesc: "Digital library & peer tutoring for RP students",
    impact: "Improved results for 2,000+ students",
  },
  {
    id: 3,
    title: "AgriMarket Connect",
    category: "Agriculture",
    status: "Prototype",
    shortDesc: "Direct market link for small farmers",
    impact: "40% income increase for farmers",
  },
];

const openCalls = [
  {
    id: 1,
    title: "Digital Health Records System",
    institution: "Ministry of Health",
    budget: "15M – 25M RWF",
    deadline: "30 Nov 2026",
  },
  {
    id: 2,
    title: "Smart Traffic Management",
    institution: "City of Kigali",
    budget: "50M+ RWF",
    deadline: "20 Dec 2026",
  },
  {
    id: 3,
    title: "Coffee Supply Chain Tracker",
    institution: "NAEB",
    budget: "18M RWF",
    deadline: "15 Jan 2027",
  },
];

// ── Home Page ────────────────────────────────────────────────────────────
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authDefaultView, setAuthDefaultView] = useState('login');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Function to open modal in register mode
  const openRegisterModal = () => {
    setAuthDefaultView('register');
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container mx-auto max-w-6xl px-4 py-16 md:py-28 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Innovate for Rwanda
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10">
            Publish your IT solutions. Apply to real projects.  
            Connect academia with institutions for real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Changed: opens modal in register mode */}
            <Button
              size="lg"
              className="bg-[#0a77bc] hover:bg-[#095e99] text-white px-8"
              onClick={openRegisterModal}
            >
              Become an Innovator
            </Button>

            <Button
              asChild
              size="lg"
              className=" bg-slate-50 hover:bg-[#095e99] text-blue-600 px-8 hover:text-white"
            >
              <Link to="/calls">See Open Calls</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ─────────────────────────────────────────────────── */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { label: "Innovators", value: "1,240", icon: Users },
              { label: "Projects", value: "460", icon: Briefcase },
              { label: "Active Calls", value: "27", icon: Search },
              { label: "Success Stories", value: "89", icon: Award },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-md p-4 bg-white"
              >
                <item.icon className="h-6 w-6 mx-auto text-[#0a77bc] mb-2" />
                <div className="text-2xl font-bold text-[#0a77bc]">
                  {item.value}
                </div>
                <div className="text-sm text-slate-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ───────────────────────────────────────────── */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Featured Innovations
            </h2>
            <Button variant="ghost" asChild className="text-[#0a77bc]">
              <Link to="/innovations" className="flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Separator className="mb-8" />

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border border-slate-200 rounded-md p-4">
                  <Skeleton className="h-40 w-full mb-3" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <CardContent className="p-5">
                    <h3 className="font-medium text-lg mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                    <p className="text-xs text-slate-500">
                      Impact: {project.impact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Open Calls ───────────────────────────────────────────────────── */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Open Calls for IT Projects
            </h2>
            <Button variant="ghost" asChild className="text-[#0a77bc]">
              <Link to="/calls" className="flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Separator className="mb-8" />

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border border-slate-200 rounded-md p-5">
                  <Skeleton className="h-6 w-4/5 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-5 w-32" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {openCalls.map((call) => (
                <Card
                  key={call.id}
                  className="border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <CardContent className="p-5">
                    <h3 className="font-medium text-lg mb-2 line-clamp-2">
                      {call.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-1">
                      {call.institution}
                    </p>
                    <div className="text-sm text-slate-600 space-y-1 mt-3">
                      <div>Budget: {call.budget}</div>
                      <div>Deadline: {call.deadline}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Simple CTA at bottom ─────────────────────────────────────────── */}
      <section className="py-12 border-t border-slate-200 bg-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Ready to start?
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Publish your project or find the right call for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#0a77bc] hover:bg-[#095e99] text-white"
            >
              <Link to="/projects/new">Publish Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/calls">Browse Calls</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Auth Modal – rendered conditionally */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultView={authDefaultView}
      />
    </div>
  );
};

export default Home;