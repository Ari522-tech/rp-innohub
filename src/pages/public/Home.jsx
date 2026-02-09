import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; // Added for Impact Stories
import { ArrowRight, Search, Zap, Users, Trophy, Quote } from 'lucide-react';
import ProjectCard from '@/components/shared/ProjectCard';
import CallCard from '@/components/shared/CallCard';

// --- 1. FEATURED INNOVATIONS DATA ---
const featuredProjects = [
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
  }
];

// --- 2. OPEN CALLS DATA ---
const activeCalls = [
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
  }
];

// --- 3. IMPACT STORIES DATA ---
const impactStories = [
  {
    id: 1,
    title: "From Classroom to CEO",
    quote: "The mentorship I received through RP InnoHub helped me turn my final year project into a fully funded startup employing 5 people.",
    author: "Jean-Claude N.",
    role: "RP Alumni & CEO, AgriTech Solutions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Saving Lives Digitally",
    quote: "Thanks to the 'TeleHealth' solution found here, our district clinic reduced patient wait times by 40% and improved care.",
    author: "Dr. Marie Claire",
    role: "Director, Bugesera Health Center",
    image: "https://www.womenlifthealth.org/wp-content/uploads/2025/03/Dr.-Marie-Claire-Wangari-MBChB-MSc.png"
  },
  {
    id: 3,
    title: "Boosting Coffee Exports",
    quote: "We found a developer here who built our cooperative's supply chain tracker. Now we export directly to Europe with full transparency.",
    author: "Emmanuel K.",
    role: "President, Kivu Coffee Coop",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop"
  }
];

const Home = () => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-48 overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed-background"
          style={{ 
            backgroundImage: "url('https://innov8tiv.com/wp-content/uploads/2020/11/African-Development-Bank-signs-grant-agreement-to-support-the-Rwanda-Coding-Academy-585x390.jpg')" 
          }}
        />
        <div className="absolute inset-0 z-0 bg-slate-950/85" />

        <div className="container mx-auto px-4 text-center relative z-10 animate-slide-up">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight drop-shadow-lg">
            Innovating for <span className="text-blue-600">Rwanda's</span> <br />
            Digital Future
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            The central hub for Rwanda Polytechnic students to showcase solutions, find funding, and solve real community challenges.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg px-10 py-7 h-auto shadow-lg hover:-translate-y-1 transition-all rounded-xl">
                Start Innovation Journey <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/calls">
              <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/5 font-bold text-lg px-10 py-7 h-auto shadow-lg hover:-translate-y-1 transition-all rounded-xl">
                Browse Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Active Innovators', val: '1,200+', icon: Users },
            { label: 'Published Projects', val: '450+', icon: Zap },
            { label: 'Open Calls', val: '24', icon: Search },
            { label: 'Success Stories', val: '85', icon: Trophy },
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-900/95 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl hover:border-rp-gold/30 transition-all duration-300 hover:-translate-y-2 group">
              <stat.icon className="w-10 h-10 mx-auto text-rp-gold mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED INNOVATIONS */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Innovations</h2>
            <p className="text-slate-400 mt-2 text-lg">Groundbreaking solutions from RP Campuses.</p>
          </div>
          <Link to="/innovations">
            <Button variant="ghost" className="text-blue-600 hover:text-white hover:bg-gold/5">
              View Gallery &rarr;
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. OPEN CALLS (UPDATED: 3 COLUMNS) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-rp-blue">Calls for Development</h2>
              <p className="text-slate-500 mt-2 text-lg">Opportunities from Industry & Government.</p>
            </div>
            <Link to="/calls">
              <Button variant="ghost" className="text-rp-blue hover:text-rp-gold hover:bg-rp-blue/5">
                Browse All Calls &rarr;
              </Button>
            </Link>
          </div>

          {/* CHANGED HERE: md:grid-cols-3 ensures three columns on medium+ screens */}
          <div className="grid md:grid-cols-3 gap-8">
            {activeCalls.map((call, idx) => (
              <div key={call.id} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <CallCard call={call} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPACT STORIES */}
      <section className="container mx-auto px-4 pb-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Impact. Real Stories.</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See how the RP Innovation Hub is bridging the gap between academia and industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactStories.map((story, idx) => (
            <Card key={story.id} className="bg-slate-900 border-slate-800 text-slate-200 hover:border-rp-gold/30 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="h-48 overflow-hidden rounded-t-xl relative">
                <div className="absolute inset-0 bg-rp-blue/20 mix-blend-multiply z-10" />
                <img src={story.image} alt={story.author} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 left-6 text-rp-gold/20 w-12 h-12" />
                <p className="text-lg italic text-slate-300 mb-6 relative z-10 leading-relaxed">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-rp-gold rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{story.author}</h4>
                    <p className="text-rp-gold text-sm font-medium">{story.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;