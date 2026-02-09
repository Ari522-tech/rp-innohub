import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 space-y-20 animate-slide-up">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-rp-blue">
            About <span className="text-rp-gold">RP InnoHub</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Rwanda Polytechnic's premier digital platform fostering student innovation, 
            bridging the gap between academia and industry, and driving sustainable development.
          </p>
        </div>

        {/* 2. Mission / Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-t-4 border-t-rp-gold shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="mx-auto bg-rp-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-rp-blue mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-rp-blue">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide a robust ecosystem where student innovations can be showcased, refined, and connected with real-world investment opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-rp-blue shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="mx-auto bg-rp-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-rp-gold mb-4">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-rp-blue">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the leading hub for technical innovation in East Africa, solving community challenges through youth-led TVET solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-green-500 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-rp-blue">Our Community</h3>
              <p className="text-slate-600 leading-relaxed">
                Connecting over 5,000 talented students across all 8 colleges with 50+ industry partners and government institutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 3. College List (Updated Names) */}
        <div className="bg-rp-blue text-white rounded-3xl p-10 md:p-20 text-center space-y-10 shadow-2xl relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rp-gold via-rp-blue to-transparent"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Supporting Innovation Across All Campuses</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We operate across all Rwanda Polytechnic colleges, ensuring every student has the chance to innovate.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                'RP Kigali College', 
                'RP Tumba College', 
                'RP Musanze College', 
                'RP Huye College', 
                'RP Gishari College', 
                'RP Ngoma College', 
                'RP Karongi College', 
                'RP Kitabi College'
              ].map((college) => (
                <div 
                  key={college} 
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full font-medium border border-white/20 hover:bg-rp-gold hover:text-rp-blue hover:border-rp-gold transition-all cursor-default shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <MapPin size={16} />
                  {college}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;