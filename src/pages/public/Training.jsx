import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Training = () => {
  const trainings = [
    {
      id: 1,
      title: "IoT Systems Development Bootcamp",
      type: "Bootcamp",
      date: "Dec 10 - Dec 15",
      location: "RP Kigali College",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Entrepreneurship 101: From Idea to Market",
      type: "Workshop",
      date: "Nov 25",
      location: "Online (Teams)",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Advanced Python for Data Science",
      type: "Certification",
      date: "Jan 10 - Feb 10",
      location: "RP Huye College",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "PCB Design & Fabrication",
      type: "Workshop",
      date: "Nov 30",
      location: "RP Tumba College",
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-10">
      <div className="container mx-auto px-4 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-rp-blue">
            Training & <span className="text-rp-gold">Upskilling</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Enhance your skills with workshops, bootcamps, and certifications offered by RP and partners.
          </p>
        </div>

        {/* Training Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainings.map((item, idx) => (
            <Card key={item.id} className="bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300 overflow-hidden group border-none animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="h-40 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <Badge className="absolute top-3 right-3 bg-white/90 text-rp-blue hover:bg-white">{item.type}</Badge>
              </div>
              
              <CardContent className="p-5 space-y-3">
                <h3 className="font-bold text-slate-900 line-clamp-2 h-12">{item.title}</h3>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-rp-gold" /> {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-rp-blue" /> {item.location}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button className="w-full bg-slate-900 text-white hover:bg-rp-blue transition-colors">Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Training;