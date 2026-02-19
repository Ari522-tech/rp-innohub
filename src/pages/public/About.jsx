import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb, Target, Users, Building2, Globe, HeartHandshake } from 'lucide-react';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with real data fetch later if needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Hero / Introduction – more padding, still centered */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 text-center border-b border-neutral-200">
          {isLoading ? (
            <div className="space-y-6 max-w-3xl mx-auto">
              <Skeleton className="h-10 w-3/4 mx-auto" />
              <Skeleton className="h-6 w-full mx-auto" />
              <Skeleton className="h-6 w-5/6 mx-auto" />
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-5">
                About RP Center for Technologies and Innovations
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A digital platform connecting Rwanda Polytechnic innovators with institutions 
                to develop socio-economic IT solutions that address real national challenges.
              </p>
            </>
          )}
        </section>

        {/* Mission & Vision – left-aligned on larger screens */}
        <section className="py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {isLoading ? (
              <>
                <Skeleton className="h-64 w-full rounded-md" />
                <Skeleton className="h-64 w-full rounded-md" />
              </>
            ) : (
              <>
                <Card className="border-neutral-200">
                  <CardContent className="p-7 md:p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                      <Target className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      Our Mission
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      To create an accessible ecosystem where student-led IT innovations are 
                      published, refined, discovered, and transformed into real-world solutions 
                      through collaboration with institutions and industry.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-neutral-200">
                  <CardContent className="p-7 md:p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                      <Lightbulb className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      To become Rwanda’s central hub for technical vocational innovation, 
                      empowering young talents to solve socio-economic challenges and 
                      contribute to sustainable national development.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="py-16 md:py-20 border-t border-neutral-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            What We Focus On
          </h2>

          <div className="grid md:grid-cols-3 gap-7 lg:gap-9">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-56 w-full rounded-md" />
              ))
            ) : (
              [
                {
                  icon: HeartHandshake,
                  title: "Student-centered Innovation",
                  text: "Empowering Rwanda Polytechnic students to create and publish practical IT solutions.",
                },
                {
                  icon: Building2,
                  title: "Institutional Collaboration",
                  text: "Enabling government bodies, ministries, and private organizations to publish real project needs.",
                },
                {
                  icon: Globe,
                  title: "Socio-Economic Impact",
                  text: "Prioritizing solutions that address national development priorities in education, health, agriculture, energy and more.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-md p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Platform Users */}
        <section className="py-16 md:py-20 border-t border-neutral-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            Who Uses the Platform
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-64 w-full rounded-md" />
              ))
            ) : (
              [
                {
                  title: "Innovators",
                  description: "Rwanda Polytechnic students and recent graduates who publish IT solutions and apply to calls.",
                  icon: Lightbulb,
                },
                {
                  title: "Institutions",
                  description: "Government bodies, ministries, NGOs and companies that post project needs and review proposals.",
                  icon: Building2,
                },
                {
                  title: "Public Visitors",
                  description: "Anyone interested in browsing innovations, impact stories and contacting creators.",
                  icon: Globe,
                },
                {
                  title: "Administrators",
                  description: "Platform managers who moderate content, manage users and ensure quality standards.",
                  icon: Users,
                },
              ].map((user, index) => (
                <Card key={index} className="border-neutral-200 h-full">
                  <CardContent className="p-6 flex flex-col items-start text-left h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                      <user.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium text-slate-900 mb-3">{user.title}</h3>
                    <p className="text-sm text-slate-600">{user.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        {/* Supporting Campuses */}
        <section className="py-16 md:py-20 border-t border-neutral-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Supporting All Rwanda Polytechnic Colleges
          </h2>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-40 rounded-full" />
              ))
            ) : (
              [
                'RP Kigali College',
                'RP Tumba College',
                'RP Musanze College',
                'RP Huye College',
                'RP Gishari College',
                'RP Ngoma College',
                'RP Karongi College',
                'RP Kitabi College',
              ].map((college) => (
                <Badge
                  key={college}
                  variant="outline"
                  className="text-sm py-1.5 px-5 border-neutral-300 bg-white"
                >
                  {college}
                </Badge>
              ))
            )}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 border-t border-neutral-200">
          {isLoading ? (
            <div className="space-y-6 max-w-xl mx-auto">
              <Skeleton className="h-8 w-2/3 mx-auto" />
              <Skeleton className="h-5 w-full mx-auto" />
              <div className="flex justify-center gap-4">
                <Skeleton className="h-11 w-40" />
                <Skeleton className="h-11 w-48" />
              </div>
            </div>
          ) : (
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-medium text-slate-900 mb-4">
                Join the Innovation Movement
              </h3>
              <p className="text-slate-600 mb-8">
                Whether you're a student with an idea, an institution with a challenge, 
                or someone interested in Rwanda's future — this platform is for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-700 text-white min-w-[180px]">
                  Register as Innovator
                </Button>
                <Button variant="outline" className="border-neutral-300 min-w-[180px]">
                  Browse Opportunities
                </Button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;