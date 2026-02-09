import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, DollarSign, Building } from 'lucide-react';

const CallCard = ({ call }) => {
  return (
    // CARD STYLE: White Background, Hover Border Gold
    <Card className="flex flex-col h-full bg-white border-slate-100 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-rp-gold/10 hover:border-rp-gold/50 transition-all duration-500 hover:-translate-y-1 group">
      
      <CardHeader className="pb-3 border-b border-slate-100">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border border-slate-100 shadow-sm">
              <AvatarImage src={call.image} alt={call.institution} className="object-cover" />
              <AvatarFallback className="bg-rp-blue text-white font-bold">RP</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-rp-blue transition-colors">
                {call.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1 text-xs text-slate-500 font-medium">
                <Building size={12} className="text-rp-gold" /> {call.institution}
              </CardDescription>
            </div>
          </div>
          
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
            {call.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-4 pt-4">
        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
          {call.description}
        </p>
        
        <div className="flex items-center gap-3 text-sm font-medium">
          <div className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
            <DollarSign size={14} className="text-rp-gold" />
            {call.budget}
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
            <Calendar size={14} className="text-rp-blue" />
            {call.deadline}
          </div>
        </div>
      </CardContent>

      {/* UPDATED FOOTER: Centered and Solid RP Blue Button */}
      <CardFooter className="pt-2 flex justify-center pb-6">
        <Button className="bg-rp-blue hover:bg-blue-900 text-white font-bold px-8 transition-all shadow-md hover:shadow-lg">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CallCard;