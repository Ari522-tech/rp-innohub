import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    // CARD STYLE: White Background, Strong Shadow, Lift Animation
    <Card className="flex flex-col h-full bg-white border-slate-100 overflow-hidden group shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-rp-blue/20 transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Container */}
      <div className="h-48 w-full relative overflow-hidden">
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        <Badge className="absolute top-3 right-3 z-20 bg-white/90 text-rp-blue hover:bg-white shadow-sm backdrop-blur-md">
          {project.status}
        </Badge>
      </div>

      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-rp-blue transition-colors">
            {project.title}
          </CardTitle>
          
          {/* UPDATED: Category Text is now blue-600 as requested */}
          <CardDescription className="text-sm text-blue-600 font-bold uppercase tracking-wide">
            {project.category}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md font-medium border border-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t border-slate-100 bg-slate-50/50">
        <Button className="w-full bg-rp-blue hover:bg-blue-900 text-white transition-all duration-300 group-hover:gap-3">
          View Project 
          <ArrowRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;